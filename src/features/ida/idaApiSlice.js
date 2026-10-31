import { apiSlice, Pests_TAG, CropGenera_TAG, ProductCategories_TAG } from "../../app/api/apiSlice";

export const IdaSystem_TAG = 'IdaSystem';
export const GGYearData_TAG = 'GGYearData';
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
            GGYearData_TAG,
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
                providesTags: [IdaSystem_TAG],
            }),

            getGGYearData: builder.query({
                query: (year) => `/api/farm/gg/ida/${year}/data`,
                providesTags: [GGYearData_TAG],
                // providesTags: (result, error, year) => [
                //   { type: GGYearData_TAG, id: year },
                //   { type: GGYearData_TAG, id: 'LIST' }
                // ],
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
                invalidatesTags: [GGYearData_TAG,]

            }),

            updateIdaMonthRecord: builder.mutation({
                query: (data) => ({
                    url: `/api/farm/gg/ida`,
                    method: 'PUT',
                    body: data,
                }),
                invalidatesTags: [GGYearData_TAG,]

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
    useGetGGYearDataQuery,
    useGetExecutorsQuery,
    useUpdateIdaMonthRecordMutation,
    useCreateIdaMonthRecordMutation,
    useGetSettingsQuery,
    useSetSettingsMutation
} = idaApiSlice;
