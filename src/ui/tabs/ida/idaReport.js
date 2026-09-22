import dayjs from "dayjs";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { renderToStaticMarkup } from "react-dom/server";

import { getMonthName } from "../../FarmUtil";
import GlobalGapSvg from "../../../icons/gg/GlobalGapSvg";

// jsPDF has no Unicode BiDi support — it draws characters strictly in the
// order given, so Hebrew (stored logically, meant to read right-to-left)
// comes out visually backwards, and a run of Hebrew embedded next to Latin
// text or digits (a field name like "100 כרמל") throws off the surrounding
// runs too. This is the standard workaround: split into runs of RTL vs
// everything-else, reverse each RTL run's own characters (so it reads
// correctly), then reverse the run order (since the line is RTL-dominant
// once it contains Hebrew) so the whole thing lays out right-to-left. Pure
// LTR/neutral strings (the vast majority of cells) are untouched.
const RTL_CHAR = /[֐-׿]/;
function toPdfBidiText(value) {
    const text = String(value ?? "");
    if (!RTL_CHAR.test(text)) return text;

    const runs = [];
    let current = "";
    let currentIsRtl = null;
    for (const ch of text) {
        const isRtl = RTL_CHAR.test(ch);
        if (currentIsRtl === null || isRtl === currentIsRtl) {
            current += ch;
        } else {
            runs.push({ text: current, isRtl: currentIsRtl });
            current = ch;
        }
        currentIsRtl = isRtl;
    }
    if (current) runs.push({ text: current, isRtl: currentIsRtl });

    return runs
        .map((run) => (run.isRtl ? [...run.text].reverse().join("") : run.text))
        .reverse()
        .join("");
}

const formatDate = (v) => (v && dayjs(v).isValid() ? dayjs(v).format("YYYY-MM-DD HH:mm") : "");
const formatDay = (v) => (v && dayjs(v).isValid() ? dayjs(v).format("YYYY-MM-DD") : "");
const siteLabel = (site) => (site ? site.name || `Site #${site.id}` : "All Sites");
const resourceLabel = (resource) => (resource ? resource.name || `#${resource.id}` : "");
const listLabel = (list) => (list || []).map((v) => v?.name || `#${v?.id}`).join(", ");

// `unit` is carried on every GGElement regardless of metric — appended to
// every section below so a value set through some other path (a different
// client, older data, ...) still shows up here even though this UI itself
// doesn't collect it.
const UNIT_COLUMN = [
    { header: "Unit", value: (el) => el.unit ?? "" },
];

// Column sets cover every GGElement field each metric can carry (see
// ggRecordMapper.js / the Java GGElement class) — not just the ones this
// form's UI currently collects — so nothing present in the server data is
// silently left out of the report. This is the single place that knows how
// to turn one GGElement into a printable row, shared by both the PDF and
// XLSX export.
const METRIC_SECTIONS = [
    {
        key: "waterUse",
        title: "Water Use",
        columns: [
            { header: "Date", value: (el) => formatDate(el.date) },
            { header: "Site", value: (el) => siteLabel(el.site) },
            { header: "Amount (m³)", value: (el) => el.amount ?? "" },
            { header: "Irrigation (m³)", value: (el) => el.amountWaterUseIrrigation ?? "" },
            { header: "Product Handling (m³)", value: (el) => el.amountWaterUseProductHandling ?? "" },
            { header: "Flow Rate", value: (el) => el.flowRate ?? "" },
            ...UNIT_COLUMN,
        ],
    },
    {
        key: "waterAbstracted",
        title: "Water Abstracted",
        columns: [
            { header: "Date", value: (el) => formatDate(el.date) },
            { header: "Site", value: (el) => siteLabel(el.site) },
            { header: "Water Source", value: (el) => el.waterSourceId ?? "" },
            { header: "Amount (m³)", value: (el) => el.amount ?? "" },
            ...UNIT_COLUMN,
        ],
    },
    {
        key: "activeIngredients",
        title: "Active Ingredients",
        columns: [
            { header: "Date", value: (el) => formatDate(el.date) },
            { header: "Fields", value: (el) => listLabel(el.fields) },
            { header: "Pesticide", value: (el) => resourceLabel(el.resource) },
            { header: "Product Name", value: (el) => el.productName ?? "" },
            { header: "Concentration", value: (el) => el.concentration ?? "" },
            { header: "Pests", value: (el) => listLabel(el.pests) },
            { header: "Amount (kg)", value: (el) => el.amount ?? "" },
            ...UNIT_COLUMN,
        ],
    },
    {
        key: "fertilizers",
        title: "Fertilizers",
        columns: [
            { header: "Date", value: (el) => formatDate(el.date) },
            { header: "Fields", value: (el) => listLabel(el.fields) },
            { header: "Fertilizer", value: (el) => resourceLabel(el.resource) },
            { header: "Product Name", value: (el) => el.productName ?? "" },
            { header: "Concentration", value: (el) => el.concentration ?? "" },
            { header: "N", value: (el) => el.n ?? "" },
            { header: "P", value: (el) => el.p ?? "" },
            { header: "K", value: (el) => el.k ?? "" },
            { header: "Amount (kg)", value: (el) => el.amount ?? "" },
            ...UNIT_COLUMN,
        ],
    },
    {
        key: "energyUsed",
        title: "Energy Used",
        columns: [
            { header: "Date", value: (el) => formatDate(el.date) },
            { header: "Site", value: (el) => siteLabel(el.site) },
            { header: "Energy Source", value: (el) => el.energySourceId ?? "" },
            { header: "Amount (kWh)", value: (el) => el.amount ?? "" },
            { header: "Renewable (kWh)", value: (el) => el.renewableAmount ?? "" },
            ...UNIT_COLUMN,
        ],
    },
    {
        key: "energyExportedOrGenerated",
        title: "Energy Exported / Generated",
        columns: [
            { header: "Date Exported", value: (el) => formatDate(el.date) },
            { header: "Site", value: (el) => siteLabel(el.site) },
            { header: "Exported to Grid (kWh)", value: (el) => el.amountExportedToGrid ?? "" },
            { header: "Generated (kWh)", value: (el) => el.amountGenerated ?? "" },
            { header: "Date Generated", value: (el) => formatDay(el.dateEnergyGenerated) },
            ...UNIT_COLUMN,
        ],
    },
    {
        key: "precipitations",
        title: "Precipitation",
        columns: [
            { header: "Date", value: (el) => formatDate(el.date) },
            { header: "Site", value: (el) => siteLabel(el.site) },
            { header: "Amount (mm)", value: (el) => el.amount ?? "" },
            ...UNIT_COLUMN,
        ],
    },
];

const monthLabel = (m, lang) => getMonthName(m, lang);

// Flattens ggYearData into { summaryRows, sections: [{title, columns, rows}] }
// — one row per GGElement across every month, each stamped with the month it
// came from, plus a month-by-month status summary matching the dashboard's
// own status/xOk flags.
function buildReportData(ggYearData, lang) {
    const months = ggYearData?.months || {};
    const allMonths = Array.from({ length: 12 }, (_, i) => i + 1);

    // Entry counts per metric per month, so the summary reflects all seven
    // metrics directly rather than only the four xOk flags (which don't map
    // 1:1 onto the seven — e.g. "waterOk" doesn't say whether that's water
    // use, water abstracted, or precipitation behind it).
    const countFor = (m, key) => (months[m]?.records || []).reduce((sum, r) => sum + (r[key]?.length || 0), 0);

    const summaryRows = allMonths.map((m) => {
        const month = months[m];
        const records = month?.records || [];
        return {
            month: monthLabel(m, lang),
            status: records.length === 0 ? "No record" : month?.status || "Unknown",
            pesticides: month?.activeIngredientOk ? "OK" : "Pending",
            fertilizer: month?.fertilizerOk ? "OK" : "Pending",
            water: month?.waterOk ? "OK" : "Pending",
            energy: month?.energyOk ? "OK" : "Pending",
            counts: METRIC_SECTIONS.map((section) => countFor(m, section.key)),
        };
    });

    const sections = METRIC_SECTIONS.map((section) => {
        const rows = [];
        allMonths.forEach((m) => {
            const records = months[m]?.records || [];
            records.forEach((record) => {
                (record[section.key] || []).forEach((el) => {
                    rows.push([monthLabel(m, lang), ...section.columns.map((c) => String(c.value(el) ?? ""))]);
                });
            });
        });
        return {
            title: section.title,
            columns: ["Month", ...section.columns.map((c) => c.header)],
            rows,
        };
    });

    return { summaryRows, sections };
}

// One "<Metric> #" count column per METRIC_SECTIONS entry, so the summary
// shows entry counts for all seven metrics, not just the four xOk flags.
const countHeaders = () => METRIC_SECTIONS.map((s) => `${s.title} #`);

export function exportYearToXlsx(ggYearData, year, lang) {
    const { summaryRows, sections } = buildReportData(ggYearData, lang);
    const workbook = XLSX.utils.book_new();

    const summarySheet = XLSX.utils.json_to_sheet(
        summaryRows.map((r) => ({
            Month: r.month,
            Status: r.status,
            Pesticides: r.pesticides,
            Fertilizer: r.fertilizer,
            Water: r.water,
            Energy: r.energy,
            ...Object.fromEntries(countHeaders().map((h, i) => [h, r.counts[i]])),
        }))
    );
    XLSX.utils.book_append_sheet(workbook, summarySheet, "Summary");

    sections.forEach((section) => {
        // Sheet names are capped at 31 chars and can't contain : \ / ? * [ ]
        // — "Energy Exported / Generated" has one of those.
        const sheetName = section.title.replace(/[:\\/?*[\]]/g, "-").slice(0, 31);
        const sheet = XLSX.utils.aoa_to_sheet([section.columns, ...section.rows]);
        XLSX.utils.book_append_sheet(workbook, sheet, sheetName);
    });

    XLSX.writeFile(workbook, `ida-report-${year}.xlsx`);
}

// A bit darker than a pastel tint (better contrast for white header text)
// but still lighter than the app's usual #2e7d32 — across a report this
// long, a very dark header on every table gets heavy fast.
const PDF_GREEN = [67, 160, 71];
const PDF_STRIPE = [240, 247, 240];
const MARGIN = 14;
// FarmManager_LogoWhite.png's natural aspect ratio (2126x341).
const LOGO_ASPECT = 2126 / 341;

function loadImageElement(path) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = path;
    });
}

// The source file is white-on-transparent (cut for the app's dark AppBar),
// which would be invisible on the report's white page — this recolors every
// non-transparent pixel to the given RGB (keeping each pixel's original
// alpha, so anti-aliased edges stay smooth) and hands back a data URL, since
// jsPDF's addImage needs image data rather than a plain file path anyway.
async function recolorLogoDataUrl(path, [r, g, b]) {
    const img = await loadImageElement(path);
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] > 0) {
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
        }
    }
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL("image/png");
}

// Rasterizes a React-rendered SVG icon into a PNG data URL — jsPDF's
// addImage needs actual image data, not a React component. Rendered at 4x
// the target size so it stays crisp once placed on the page.
async function svgComponentToPngDataUrl(Component, props, targetWidthPx, targetHeightPx) {
    let markup = renderToStaticMarkup(<Component {...props} />);
    if (!markup.includes("xmlns=")) {
        markup = markup.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    const dataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
    const img = await loadImageElement(dataUri);
    const scale = 4;
    const canvas = document.createElement("canvas");
    canvas.width = targetWidthPx * scale;
    canvas.height = targetHeightPx * scale;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png");
}

// jsPDF's built-in fonts (Helvetica/Times/Courier) only cover WinAnsi/Latin
// — any Hebrew text in site/field/resource names would render as blank
// glyphs. Heebo is a bilingual Hebrew+Latin Google Font, so embedding it and
// using it as the document's one font covers both without having to detect
// per-cell which script a value is in. Registered under both "normal" and
// "bold" since jsPDF has no notion of this font's variable-weight axis and
// would otherwise silently fall back to Helvetica for any bold cell.
async function loadFontBase64(path) {
    const response = await fetch(path);
    const buffer = await response.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

async function useHebrewCapableFont(doc) {
    const fontBase64 = await loadFontBase64("/fonts/Heebo.ttf").catch(() => null);
    if (!fontBase64) return false;
    doc.addFileToVFS("Heebo.ttf", fontBase64);
    doc.addFont("Heebo.ttf", "Heebo", "normal");
    doc.addFont("Heebo.ttf", "Heebo", "bold");
    doc.setFont("Heebo");
    return true;
}

export async function exportYearToPdf(ggYearData, year, lang) {
    const { summaryRows, sections } = buildReportData(ggYearData, lang);
    const doc = new jsPDF({ orientation: "landscape" });
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    const hasHebrewFont = await useHebrewCapableFont(doc);
    const bodyFont = hasHebrewFont ? { font: "Heebo" } : {};

    // GLOBALG.A.P. mark goes right before the title, at its own natural
    // (near-square) aspect ratio (402.37 x 347.56 in the source SVG) —
    // vertically centered against the title+year block as a whole (roughly
    // top-of-title-cap-height to year-baseline), not pinned to either line.
    const titleBaselineY = 16;
    const yearBaselineY = 23;
    const titleCapTopY = titleBaselineY - 4.5; // approx cap-height rise for an 18pt title
    const textBlockCenterY = (titleCapTopY + yearBaselineY) / 2;

    const ggIconH = 11;
    const ggIconW = ggIconH * (402.37 / 347.56);
    const ggIconY = textBlockCenterY - ggIconH / 2;
    const ggDataUrl = await svgComponentToPngDataUrl(GlobalGapSvg, {}, ggIconW * 4, ggIconH * 4).catch(() => null);
    let titleX = MARGIN;
    if (ggDataUrl) {
        doc.addImage(ggDataUrl, "PNG", MARGIN, ggIconY, ggIconW, ggIconH);
        titleX = MARGIN + ggIconW + 4;
    }

    doc.setFontSize(18);
    doc.setTextColor(33, 33, 33);
    doc.text("IDA Tracking Report", titleX, titleBaselineY);
    doc.setFontSize(11);
    doc.setTextColor(120, 120, 120);
    doc.text(String(year), titleX, yearBaselineY);

    // Recolored green-on-white so it reads directly on the page — placed on
    // the opposite side from the title, top-right.
    const logoDataUrl = await recolorLogoDataUrl("/FarmManager_LogoWhite.png", PDF_GREEN).catch(() => null);
    if (logoDataUrl) {
        const logoH = 10;
        const logoW = logoH * LOGO_ASPECT;
        const logoX = pageWidth - MARGIN - logoW;
        const logoY = 8;
        doc.addImage(logoDataUrl, "PNG", logoX, logoY, logoW, logoH);
    }

    autoTable(doc, {
        startY: 28,
        margin: { left: MARGIN, right: MARGIN },
        head: [["Month", "Status", "Pesticides", "Fertilizer", "Water", "Energy", ...countHeaders()]],
        body: summaryRows.map((r) =>
            [r.month, r.status, r.pesticides, r.fertilizer, r.water, r.energy, ...r.counts].map(toPdfBidiText)
        ),
        theme: "striped",
        styles: { fontSize: 8, cellPadding: 3, ...bodyFont },
        headStyles: { fillColor: PDF_GREEN, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 7.5, ...bodyFont },
        alternateRowStyles: { fillColor: PDF_STRIPE },
    });

    // Sections flow onto the same page as long as there's room for a title
    // plus at least one row — only page-break when a section genuinely
    // wouldn't fit, instead of always starting fresh (which left most pages
    // mostly blank for the smaller metrics).
    let cursorY = doc.lastAutoTable.finalY + 12;

    sections.forEach((section) => {
        if (section.rows.length === 0) return;

        if (cursorY > pageHeight - 40) {
            doc.addPage();
            cursorY = 20;
        }

        doc.setFontSize(12);
        doc.setTextColor(33, 33, 33);
        doc.text(toPdfBidiText(section.title), MARGIN, cursorY);

        autoTable(doc, {
            startY: cursorY + 4,
            margin: { left: MARGIN, right: MARGIN },
            head: [section.columns],
            body: section.rows.map((row) => row.map(toPdfBidiText)),
            theme: "striped",
            styles: { fontSize: 8, cellPadding: 2.5, cellWidth: "wrap", ...bodyFont },
            headStyles: { fillColor: PDF_GREEN, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8.5, ...bodyFont },
            alternateRowStyles: { fillColor: PDF_STRIPE },
        });

        cursorY = doc.lastAutoTable.finalY + 12;
    });

    doc.save(`ida-report-${year}.pdf`);
}
