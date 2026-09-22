import { apiSlice } from "../../app/api/apiSlice";
import { Pests_TAG } from "../../app/api/apiSlice"; // Reusing your existing central tag constant
import { CropGenera_TAG, ProductCategories_TAG } from "../auth/authApiSlice";

export const IdaSystem_TAG = 'IdaSystem';
export const GGYearData_TAG = 'GGYearData';
export const Executors_TAG = 'Executors';

export const idaApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [
            CropGenera_TAG,
            ProductCategories_TAG,
            IdaSystem_TAG,
            GGYearData_TAG,
            Executors_TAG
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
        })
    });

export const {
    useGetCropGeneraQuery,
    useGetProductCategoriesQuery,
    useGetIdaSystemDataQuery,
    useGetGGYearDataQuery,
    useGetPestsQuery,
    useGetExecutorsQuery,
    useUpdateIdaMonthRecordMutation,
    useCreateIdaMonthRecordMutation
} = idaApiSlice;
