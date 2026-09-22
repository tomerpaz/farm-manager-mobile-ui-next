import {
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
import { Resource_TAG, Resources_TAG } from "../auth/authApiSlice";


export const resourcesAdapter = createEntityAdapter()

const initialState = resourcesAdapter.getInitialState()

export const CUSTOMER = 'customer';

//export const sitesApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: [Sites_TAG, Site_TAG] }).injectEndpoints({

export const resourcesApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: [Resource_TAG, Resources_TAG] }).injectEndpoints({

    endpoints: builder => ({
        getResources: builder.query({
            query: (args) => `/api/farm/${args.type}/resources`,
            providesTags: [Resources_TAG]
        }),

        getResource: builder.query({
            query: (resourceId) => `/api/farm/resource/${resourceId}`,
            providesTags: [Resource_TAG]
        }),
        createResource: builder.mutation({
            query: args => ({
                url: '/api/farm/resource',
                method: 'POST',
                body: { ...args },

            }),
            invalidatesTags: [Resource_TAG, Resources_TAG]

        }),
        updateResource: builder.mutation({
            query: args => ({
                url: '/api/farm/resource',
                method: 'PUT',
                body: { ...args },

            }),
            invalidatesTags: [Resource_TAG, Resources_TAG]
        }),
        deleteResource: builder.mutation({
            query: (resourceId) => ({
                url: `/api/farm/resource/${resourceId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [Resource_TAG, Resources_TAG]
        }),
    })
})

export const {
    useGetResourcesQuery,
    useGetResourceQuery,
    useCreateResourceMutation,
    useDeleteResourceMutation,
    useGetResouceQuery,
    useUpdateResourceMutation
} = resourcesApiSlice


// returns the query result object
//export const selectResourcesResult = resourcesApiSlice.endpoints.getResources.select()


export const getResourcesState = (state) => state;
