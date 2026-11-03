import {
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice, Sites_TAG, SiteFields_TAG } from "../../app/api/apiSlice";
import { Site_TAG } from "../auth/authApiSlice";


export const sitesAdapter = createEntityAdapter()

export const sitesApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: [Sites_TAG, Site_TAG, SiteFields_TAG] }).injectEndpoints({

    endpoints: builder => ({
        getSites: builder.query({

            query: (args) => `/api/farm/sites`,
            providesTags: [Sites_TAG]
        }),
        getSite: builder.query({
            query: (siteId) => `/api/farm/site/${siteId}`,
            providesTags: [Site_TAG]
        }),
        // Smallest site area left by other fields at any point from date until
        // end (open-ended when end is omitted); pass fieldId to exclude that field.
        getSiteFreeArea: builder.query({
            query: ({ siteId, date, end, fieldId }) => ({
                url: `/api/farm/site/${siteId}/free-area/${date}`,
                params: {
                    ...(fieldId ? { field: fieldId } : {}),
                    ...(end ? { end } : {}),
                },
            }),
            // Depends on the site's fields — refetched when one is saved or deleted.
            providesTags: [SiteFields_TAG],
        }),
        createSite: builder.mutation({
            query: args => ({
                url: '/api/farm/site',
                method: 'POST',
                body: { ...args },

            }),
            invalidatesTags: [Sites_TAG, Site_TAG]

        }),
        updateSite: builder.mutation({
            query: args => ({
                url: '/api/farm/site',
                method: 'PUT',
                body: { ...args },

            }),
            invalidatesTags: [Sites_TAG, Site_TAG]
        }),
        deleteSite: builder.mutation({
            query: (siteId) => ({
                url: `/api/farm/site/${siteId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [Sites_TAG, Site_TAG]
        }),
    })
})

export const {
    useGetSitesQuery,
    useGetSiteQuery,
    useGetSiteFreeAreaQuery,
    useLazyGetSiteFreeAreaQuery,
    useCreateSiteMutation,
    useUpdateSiteMutation,
    useDeleteSiteMutation
} = sitesApiSlice


// returns the query result object
export const selectSitesResult = sitesApiSlice.endpoints.getSites.select()

export const getSitesState = (state) => state;
