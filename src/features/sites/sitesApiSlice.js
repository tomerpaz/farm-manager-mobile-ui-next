import {
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
import { Site_TAG, Sites_TAG } from "../auth/authApiSlice";


export const sitesAdapter = createEntityAdapter()

const initialState = sitesAdapter.getInitialState()


export const sitesApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: [Sites_TAG, Site_TAG] }).injectEndpoints({

    endpoints: builder => ({
        getSites: builder.query({

            query: (args) => `/api/farm/sites`,
            providesTags: [Sites_TAG]
        }),
        getSite: builder.query({
            query: (siteId) => `/api/farm/site/${siteId}`,
            providesTags: [Site_TAG]
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
    useCreateSiteMutation,
    useUpdateSiteMutation,
    useDeleteSiteMutation
} = sitesApiSlice


// returns the query result object
export const selectSitesResult = sitesApiSlice.endpoints.getSites.select()

// // Creates memoized selector
// const selectFieldsData = createSelector(
//     selectFieldssResult,
//     fieldsResult => fieldsResult.data // normalized state object with ids & entities
// )

// //getSelectors creates these selectors and we rename them with aliases using destructuring
// export const {
//     selectAll: selectAllFields,
//     selectById: selectFieldById,
//     selectIds: selectFieldIds,
//     //   selectByYear: selectFieldByYear,
//     // Pass in a selector that returns the fields slice of state
// } = fieldsAdapter.getSelectors(state => selectFieldsData(state) ?? initialState)

export const getSitesState = (state) => state;
