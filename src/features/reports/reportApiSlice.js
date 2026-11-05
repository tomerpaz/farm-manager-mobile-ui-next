import { apiSlice } from "../../app/api/apiSlice";
import { reportFileResponse, trackReportGenerating } from "./reportFile";

const reportApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // type is the server's report name; params are that report's own.
        generateReport: builder.mutation({
            query: ({ type, format, params }) => ({
                url: `/api/farm/report/${type}/${format}`,
                method: "POST",
                body: params,
                responseHandler: reportFileResponse,
            }),
            onQueryStarted: trackReportGenerating,
        }),
    }),
});

export const { useGenerateReportMutation } = reportApiSlice;
