import { apiSlice, Pests_TAG, CropGenera_TAG, ProductCategories_TAG, SiteFields_TAG, Sites_TAG } from "../../app/api/apiSlice";

export const IdaSystem_TAG = 'IdaSystem';
export const GGData_TAG = 'GGData';
export const Executors_TAG = 'Executors';
export const Settings_TAG = 'Settings';

// Business-level settings (server ConfigParam rows, one per type) — e.g.
// AUTO_PRECIPITATION. The value is always a string ("true"/"false" for flags).
export const AUTO_PRECIPITATION = 'AUTO_PRECIPITATION';
// Per user. PUT "true"/"false" opts in/out; GET (and the opt-in PUT) return
// the ConfigParam with `value` = the user's inbox address — empty body when
// opted out.
export const INBOX_EMAIL = 'INBOX_EMAIL';

export const idaApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [
            CropGenera_TAG,
            ProductCategories_TAG,
            IdaSystem_TAG,
            GGData_TAG,
            Executors_TAG,
            Settings_TAG
        ]
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getCropGenera: builder.query({
                query: () => `/api/farm/gg/ida/crop/genera`,
                providesTags: [CropGenera_TAG]
            }),
            getProductCategories: builder.query({
                query: () => `/api/farm/gg/ida/product/categories`,
                providesTags: [ProductCategories_TAG]
            }),

            getIdaSystemData: builder.query({
                query: () => '/api/farm/gg/ida/system/data',
                // Holds the sites and fields lists, so saving either refetches it.
                providesTags: [IdaSystem_TAG, SiteFields_TAG, Sites_TAG],
            }),

            // Months are keyed yyyyMM (see monthKey in ggRecordMapper). The server
            // leaves out elements outside from/to and sites, and saving a month
            // deletes elements left out of it, so never edit from a narrower load.
            getGGData: builder.query({
                query: ({ from, to, sites }) => ({
                    url: '/api/farm/gg/ida/data',
                    params: { from, to, ...(sites?.length ? { site: sites } : {}) },
                }),
                providesTags: [GGData_TAG],
            }),
            getExecutors: builder.query({
                query: () => '/api/farm/gg/ida/executors',
                providesTags: [Executors_TAG],
            }),

            createIdaMonthRecord: builder.mutation({
                query: args => ({
                    url: `/api/farm/gg/ida`,
                    method: 'POST',
                    body: { ...args },

                }),
                invalidatesTags: [GGData_TAG,]

            }),

            updateIdaMonthRecord: builder.mutation({
                query: (data) => ({
                    url: `/api/farm/gg/ida`,
                    method: 'PUT',
                    body: data,
                }),
                invalidatesTags: [GGData_TAG,]

            }),

            // ConfigParam { type, value, ... } — or null when never saved.
            getSettings: builder.query({
                query: (type) => `/api/farm/settings/${type}`,
                providesTags: (result, error, type) => [{ type: Settings_TAG, id: type }],
            }),

            // Upserts the business's one setting of this type; only type and value are read.
            setSettings: builder.mutation({
                query: ({ type, value }) => ({
                    url: `/api/farm/settings`,
                    method: 'PUT',
                    body: { type, value },
                }),
                invalidatesTags: (result, error, { type }) => [{ type: Settings_TAG, id: type }],
            }),
        })
    });

export const {
    useGetCropGeneraQuery,
    useGetProductCategoriesQuery,
    useGetIdaSystemDataQuery,
    useGetGGDataQuery,
    useGetExecutorsQuery,
    useUpdateIdaMonthRecordMutation,
    useCreateIdaMonthRecordMutation,
    useGetSettingsQuery,
    useSetSettingsMutation
} = idaApiSlice;
