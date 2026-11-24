import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice, Field_TAG, SiteFields_TAG } from "../../app/api/apiSlice";
import { User_TAG } from "../auth/authApiSlice";



export const fieldsAdapter = createEntityAdapter()
const initialState = fieldsAdapter.getInitialState()

export function safeParseJson(json) {

    if (json) {
        try {
            return JSON.parse(json);
        }
        catch (err) {

        }
    }
    return null;
}


// The field created last, so the site's field list can show it first once —
// the list reads it on mount and clears it right after.
let justAddedFieldId = null;
export const getJustAddedFieldId = () => justAddedFieldId;
export const clearJustAddedFieldId = () => { justAddedFieldId = null; };

// The field saved last from its form, so the list can select it once (highlighted in
// place, scrolled into view) — read on mount and cleared right after, like the above.
let justEditedFieldId = null;
export const getJustEditedFieldId = () => justEditedFieldId;
export const clearJustEditedFieldId = () => { justEditedFieldId = null; };

export const fieldsApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: [User_TAG, SiteFields_TAG, Field_TAG] }).injectEndpoints({

    endpoints: builder => ({
        getFieldsByYear: builder.query({
            query: (year) => `/api/farm/fields/${year}`,
            transformResponse: responseData => {
                const fields = responseData.map(field => {
                    if (field?.polygon) field.geoPoints = safeParseJson(field.polygon);
                    return field;
                });
                return fieldsAdapter.setAll(initialState, fields)
            },
            // Field_TAG too, so creating/updating/deleting a field (polygon,
            // color, ...) refreshes the map instead of showing the cached list.
            providesTags: (result, error, arg) => [
                Field_TAG,
                { type: User_TAG, id: "LIST" },
                ...result.ids.map(id => ({ type: User_TAG, id }))
            ]
        }),
        getFieldsBySite: builder.query({
            query: (siteId) => `/api/farm/site/${siteId}/fields`,
            providesTags: [SiteFields_TAG]
        }),
        // Several sites' fields in one list, in the order of the site ids given.
        getFieldsBySites: builder.query({
            async queryFn(siteIds, _api, _extra, baseQuery) {
                const results = await Promise.all(siteIds.map((siteId) => baseQuery(`/api/farm/site/${siteId}/fields`)));
                const failed = results.find((r) => r.error);
                if (failed) return { error: failed.error };
                return { data: results.flatMap((r) => r.data ?? []) };
            },
            providesTags: [SiteFields_TAG]
        }),
        getField: builder.query({
            query: (fieldId) => `/api/farm/field/${fieldId}`,
            providesTags: [Field_TAG]
        }),
        createField: builder.mutation({
            query: args => ({
                url: '/api/farm/field',
                method: 'POST',
                body: { ...args },

            }),
            invalidatesTags: [Field_TAG, SiteFields_TAG],
            async onQueryStarted(args, { queryFulfilled }) {
                try {
                    justAddedFieldId = (await queryFulfilled).data?.id ?? null;
                } catch {
                    // Failed create — nothing to highlight.
                }
            },

        }),
        updateField: builder.mutation({
            query: args => ({
                url: '/api/farm/field',
                method: 'PUT',
                body: { ...args },

            }),
            invalidatesTags: [Field_TAG, SiteFields_TAG],
            async onQueryStarted(args, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    justEditedFieldId = args?.id ?? null;
                } catch {
                    // Failed save — nothing to select.
                }
            },
        }),
        deleteField: builder.mutation({
            query: (fieldId) => ({
                url: `/api/farm/field/${fieldId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [Field_TAG, SiteFields_TAG]
        }),

    })
})

export const {
    useGetFieldsByYearQuery,
    useGetFieldsBySiteQuery,
    useGetFieldsBySitesQuery,
    useGetFieldQuery,
    useCreateFieldMutation,
    useUpdateFieldMutation,
    useDeleteFieldMutation
} = fieldsApiSlice


// returns the query result object
export const selectFieldssResult = fieldsApiSlice.endpoints.getFieldsByYear.select()

// Creates memoized selector
const selectFieldsData = createSelector(
    selectFieldssResult,
    fieldsResult => fieldsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllFields,
    selectById: selectFieldById,
    selectIds: selectFieldIds,
    //   selectByYear: selectFieldByYear,
    // Pass in a selector that returns the fields slice of state
} = fieldsAdapter.getSelectors(state => selectFieldsData(state) ?? initialState)

export const getFieldsState = (state) => state.fields;

export function useFields(year) {
    const { data } = useGetFieldsByYearQuery(year)
    if (data) {
        const fields = data.ids.map(id => data.entities[id]);
        return fields;
    }
    return []
}

export function useFieldsById(year, id) {
    const { data } = useGetFieldsByYearQuery(year)
    if (data && data.entities) {
        return data.entities[id]
    } else return null;
}

