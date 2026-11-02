import dayjs from "dayjs";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
    LOGO_ASPECT,
    MARGIN,
    PDF_GREEN,
    PDF_STRIPE,
    recolorLogoDataUrl,
    toPdfBidiText,
    useHebrewCapableFont,
} from "../tabs/ida/idaReport";

const formatDate = (v) => (v && dayjs(v).isValid() ? dayjs(v).format("YYYY-MM-DD") : "");

// Safe for file names on every OS; Hebrew letters are kept.
const fileSafe = (name) => String(name || "site").replace(/[\\/:*?"<>|]+/g, "_").trim();

// One row per field, in the order the list shows them. `lookups` resolves the
// GLOBALG.A.P. ids to names the same way the list cards do.
function buildFieldTable(fields, text, { cropGenera, productCategories }) {
    const typeLabels = { openField: text?.openField || "Open Field", covered: text?.covered || "Covered" };
    const soilLabels = { soil: text?.soil || "Soil", substrate: text?.substrate || "Substrate" };
    const columns = [
        text?.name || "Name",
        text?.alias || "Alias",
        text?.size || "Size",
        text?.start || "Start",
        text?.end || "End",
        text?.cropGenus || "Crop Genus",
        text?.productCategory || "Product Category",
        text?.type || "Type",
        text?.soilType || "Soil Type",
    ];
    const rows = fields.map((f) => [
        f.name ?? "",
        f.alias ?? "",
        f.area ?? "",
        formatDate(f.startDate),
        formatDate(f.endDate),
        // IDA fields store the crop genus as their variety — fall back to its name.
        cropGenera.find((g) => g.id === f.ggCropGenusId)?.name ?? f.varietyName ?? "",
        // IDA fields store the product category as their crop — fall back to its name.
        productCategories.find((c) => c.id === f.ggProductCategoryId)?.name ?? f.cropName ?? "",
        typeLabels[f.type] ?? f.type ?? "",
        soilLabels[f.soilType] ?? f.soilType ?? "",
    ]);
    return { columns, rows };
}

export function exportFieldsToXlsx(fields, siteName, text, lookups) {
    const { columns, rows } = buildFieldTable(fields, text, lookups);
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.aoa_to_sheet([columns, ...rows]);
    XLSX.utils.book_append_sheet(workbook, sheet, (text?.fields || "Fields").slice(0, 31));
    XLSX.writeFile(workbook, `${fileSafe(siteName)}-fields.xlsx`);
}

// targetWindow is a blank tab the caller opened synchronously on the click,
// so the browser doesn't block it as a popup after the async font/logo loads.
export async function exportFieldsToPdf(fields, siteName, text, lookups, targetWindow) {
    const { columns, rows } = buildFieldTable(fields, text, lookups);
    const doc = new jsPDF({ orientation: "landscape" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const hasHebrewFont = await useHebrewCapableFont(doc);
    const bodyFont = hasHebrewFont ? { font: "Heebo" } : {};

    doc.setFontSize(18);
    doc.setTextColor(33, 33, 33);
    doc.text(toPdfBidiText(siteName || ""), MARGIN, 16);
    doc.setFontSize(11);
    doc.setTextColor(120, 120, 120);
    doc.text(toPdfBidiText(`${text?.fields || "Fields"} · ${fields.length} · ${dayjs().format("YYYY-MM-DD")}`), MARGIN, 23);

    const logoDataUrl = await recolorLogoDataUrl("/FarmManager_LogoWhite.png", PDF_GREEN).catch(() => null);
    if (logoDataUrl) {
        const logoH = 10;
        const logoW = logoH * LOGO_ASPECT;
        doc.addImage(logoDataUrl, "PNG", pageWidth - MARGIN - logoW, 8, logoW, logoH);
    }

    autoTable(doc, {
        startY: 28,
        margin: { left: MARGIN, right: MARGIN },
        head: [columns.map(toPdfBidiText)],
        body: rows.map((row) => row.map(toPdfBidiText)),
        theme: "striped",
        styles: { fontSize: 8, cellPadding: 2.5, ...bodyFont },
        headStyles: { fillColor: PDF_GREEN, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8.5, ...bodyFont },
        alternateRowStyles: { fillColor: PDF_STRIPE },
    });

    const blobUrl = doc.output("bloburl");
    if (targetWindow && !targetWindow.closed) {
        targetWindow.location.href = blobUrl;
    } else {
        window.open(blobUrl, "_blank");
    }
}
