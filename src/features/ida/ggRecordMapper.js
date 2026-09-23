import dayjs from "dayjs";

// Converts between the IDAForm's per-row UI shape and the Java server's
// GGRecord/GGElement model:
//
//   GGRecord { id, sites, date (YearMonth), lastSave, status, draft,
//              manager (Resource), waterUse, waterAbstracted, activeIngredients,
//              fertilizers, energyUsed, energyExportedOrGenerated,
//              precipitations, general: List<GGElement> }
//
//   GGElement { id, date (LocalDateTime), amount, type, unit, productName,
//               concentration, n, p, k, pests: List<Pest>,
//               amountWaterUseIrrigation, amountWaterUseProductHandling,
//               amountExportedToGrid, amountGenerated,
//               dateEnergyGenerated (LocalDate), renewableAmount,
//               energySourceId, waterSourceId, flowRate, resource (Resource),
//               site (Site), fields: List<Field> }
//
// IDAForm's METRICS schema already names its scalar fields exactly like
// GGElement's (date, amount, amountWaterUseIrrigation, energySourceId, ...),
// so those round-trip as-is. Five fields don't: the UI edits them as plain
// ids (a <select>/Autocomplete only needs an id to match against), while the
// server wants an object reference —
//   site_id (0 = "All Sites")           <-> site: {id} | null
//   fertilizer_id / pesticideId /
//     resource_id (general)             <-> resource: {id} | null
//   fieldIds (id[])                     <-> fields: [{id}, ...]
//   pests (id[])                        <-> pests: [{id}, ...]
// `type` and `unit` are left unset on the way out — there's no confirmed
// mapping for GGElementTypes/unit codes to build from, and guessing risks
// silently mislabeling saved data rather than failing loudly.
const METRIC_ELEMENT_SPEC = {
    waterUse: { refFields: { site_id: "site" } },
    waterAbstracted: { refFields: { site_id: "site" } },
    energyUsed: { refFields: { site_id: "site" } },
    energyExportedOrGenerated: { refFields: { site_id: "site" }, localDateFields: ["dateEnergyGenerated"] },
    precipitation: { refFields: { site_id: "site" }, wireKey: "precipitations" },
    fertilizers: { refFields: { fertilizer_id: "resource" }, listRefFields: { fieldIds: "fields" } },
    activeIngredients: { refFields: { pesticideId: "resource" }, listRefFields: { fieldIds: "fields", pests: "pests" } },
    general: { refFields: { resource_id: "resource" }, listRefFields: { fieldIds: "fields" } },
};

const toGGDate = (iso) => (iso && dayjs(iso).isValid() ? dayjs(iso).format("YYYY-MM-DD") : null);
const toGGDateTime = (iso) => (iso && dayjs(iso).isValid() ? dayjs(iso).format("YYYY-MM-DDTHH:mm:ss") : null);
// GGRecord.date is a java.time.YearMonth, not a LocalDate — Jackson's
// default YearMonth format is "yyyy-MM", so a full "yyyy-MM-dd" string (what
// toGGDate produces) fails to deserialize server-side.
const toGGYearMonth = (iso) => (iso && dayjs(iso).isValid() ? dayjs(iso).format("YYYY-MM") : null);

const invert = (obj) => Object.fromEntries(Object.entries(obj || {}).map(([k, v]) => [v, k]));

const buildElement = (row, spec) => {
    const out = {};
    Object.entries(row).forEach(([key, value]) => {
        // useFieldArray's own row-tracking key (a generated uuid) — never real data.
        if (key === "id") return;
        if (spec.refFields?.[key]) {
            out[spec.refFields[key]] = value ? { id: value } : null;
        } else if (spec.listRefFields?.[key]) {
            out[spec.listRefFields[key]] = (value || []).map((id) => ({ id }));
        } else if (key === "date") {
            out.date = toGGDateTime(value);
        } else if (spec.localDateFields?.includes(key)) {
            out[key] = toGGDate(value);
        } else {
            out[key] = value === "" ? null : value;
        }
    });
    return out;
};

const elementFromServer = (el, spec) => {
    const refBack = invert(spec.refFields);
    const listRefBack = invert(spec.listRefFields);
    const row = {};
    Object.entries(el || {}).forEach(([key, value]) => {
        if (key === "id") return;
        if (refBack[key]) {
            // Every ref field (site, resource) is either 0 ("All Sites" /
            // "None") or a real id when saved — a null reference only ever
            // comes from an explicit 0 selection, since these fields are
            // required and can't be submitted genuinely unset.
            row[refBack[key]] = value?.id ?? 0;
        } else if (listRefBack[key]) {
            row[listRefBack[key]] = (value || []).map((v) => v.id);
        } else {
            row[key] = value ?? "";
        }
    });
    return row;
};

// Builds the flat GGRecord JSON to PUT/POST. `id` is only included when
// updating an existing record — its presence is what the caller uses to
// decide PUT vs POST in the first place.
export function toRecordPayload(formData, { id, firstDayOfMonth } = {}) {
    const payload = {
        ...(id ? { id } : {}),
        date: toGGYearMonth(firstDayOfMonth),
        draft: !!formData.draft,
        manager: formData.manager?.id ? { id: formData.manager.id } : null,
    };
    Object.entries(METRIC_ELEMENT_SPEC).forEach(([metricId, spec]) => {
        const wireKey = spec.wireKey || metricId;
        payload[wireKey] = (formData[metricId] || []).map((row) => buildElement(row, spec));
    });
    return payload;
}

// Reverse of toRecordPayload — used to hydrate the form when a GGRecord
// already exists for the month being edited.
export function fromRecord(record) {
    if (!record) return null;
    const formData = {
        manager: record.manager || null,
        draft: !!record.draft,
    };
    Object.entries(METRIC_ELEMENT_SPEC).forEach(([metricId, spec]) => {
        const wireKey = spec.wireKey || metricId;
        formData[metricId] = (record[wireKey] || []).map((el) => elementFromServer(el, spec));
    });
    return formData;
}

// GGYearData.months is keyed 1-12 (same convention IdaDash.js already reads
// it with); the UI's :month route param is 0-indexed, so +1 here. A month
// can in principle hold multiple records — the form only ever edits one, so
// the first is treated as "the" record for that month.
export function getExistingRecord(ggYearData, recordMonth) {
    return ggYearData?.months?.[recordMonth + 1]?.records?.[0] || null;
}
