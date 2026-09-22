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
            providesTags: (result, error, arg) => [
                { type: User_TAG, id: "LIST" },
                ...result.ids.map(id => ({ type: User_TAG, id }))
            ]
        }),
        getFieldsBySite: builder.query({
            query: (siteId) => `/api/farm/site/${siteId}/fields`,
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
            invalidatesTags: [Field_TAG, SiteFields_TAG]

        }),
        updateField: builder.mutation({
            query: args => ({
                url: '/api/farm/field',
                method: 'PUT',
                body: { ...args },

            }),
            invalidatesTags: [Field_TAG, SiteFields_TAG]
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

