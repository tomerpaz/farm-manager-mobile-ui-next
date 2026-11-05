import { setReportGenerating, setSnackbar } from "../app/appSlice";

// Keeps the report file itself out of the Redux store, which only gets its
// object URL and name. Errors stay text, so the 401 token refresh still works.
export const reportFileResponse = async (response) => {
    if (!response.ok) return response.text();
    const blob = await response.blob();
    return {
        url: URL.createObjectURL(blob),
        fileName: decodeURIComponent(response.headers.get("x-suggested-filename") || "report"),
    };
};

// Long enough for the download to pick the file up.
const release = (url) => setTimeout(() => URL.revokeObjectURL(url), 60000);

export const downloadReportFile = ({ url, fileName }) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    release(url);
};

// Shared by every report endpoint: a user generates one report at a time, and
// the flag outlives the page that asked for it. Failures reach the caller.
export const trackReportGenerating = async (arg, { dispatch, queryFulfilled }) => {
    dispatch(setReportGenerating(true));
    try {
        await queryFulfilled;
    } catch {
        // handled by the caller
    } finally {
        dispatch(setReportGenerating(false));
    }
};

// 429: this user's report is already running, in another tab or on another device.
export const reportFailed = (err, dispatch, text) => {
    if (err?.status === 429) {
        dispatch(setSnackbar({ msg: text?.reportInProgress || "A report is already being generated", severity: "warning" }));
    } else {
        console.error("Failed to export report:", err);
    }
};
