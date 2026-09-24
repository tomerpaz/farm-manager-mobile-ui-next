import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logOut, setCredentials } from '../../features/app/appSlice'

export const Field_TAG = 'Field';
export const Activities_TAG = 'Activities';
export const FieldActivities_TAG = 'FieldActivities';
export const User_TAG = 'User';
export const Dashboard_TAG = 'Dashboard';
export const ActivityDefs_TAG = 'ActivityDefs';
export const Crops_TAG = 'Crops';
export const SelectedActivity_TAG = 'SelectedActivity';
export const Warehouses_TAG = 'Warehouses';
export const Resources_TAG = 'Resources';
export const Containers_TAG = 'Containers';
export const CropPesticides_TAG = 'CropPesticides_TAG';
export const Qualities_TAG = 'Qualities';
export const Sizes_TAG = 'Sizes';
export const Inventory_TAG = 'Inventory_TAG';
export const Season_TAG = 'FieldSeason';
export const FieldPoints_TAG = 'FieldPoints';
export const Points_TAG = 'Points';
export const FieldScouts_TAG = 'FieldScouts';
export const Pests_TAG = 'Pests';
export const PestsStages_TAG = 'PestsStages';
export const InfectionLevels_TAG = 'InfectionLevels';
export const PlantParts_TAG = 'PlantParts';
export const Layers_TAG = 'Layers';
export const Sites_TAG = 'Sites_TAG';
export const SiteFields_TAG = 'SiteFields_TAG';
export const CropGenera_TAG = 'CropGenera_TAG';
export const ProductCategories_TAG = 'ProductCategories_TAG';
export const Resource_TAG = 'Resource_TAG';


// export const FARM_MANAGER = 'http://localhost:8080'

export const FARM_MANAGER = 'https://api.manager.farm'


const baseQuery = fetchBaseQuery({
    baseUrl: FARM_MANAGER,
    // credentials: 'include',
    prepareHeaders: (headers, { getState, }) => {

        const token = 'refresh' === getState().app.token ? getState().app.refreshToken : getState().app.token;
        if (token) {
            headers.set("X-Authorization", `Bearer ${token}`)
        }
        headers.set("Content-Type", 'application/json')
        headers.set('X-Requested-With', 'XMLHttpRequest')
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 401) {

        const refreshToken = api.getState().app.refreshToken;

        if (refreshToken) {
            api.dispatch(setCredentials({ token: 'refresh', refreshToken }))

            const refreshResult = await baseQuery('/api/auth/token', api, extraOptions)

            if (refreshResult?.data) {
                const refreshToken = api.getState().app.refreshToken;
                const token = refreshResult.data.token;
                // // store the new token 
                api.dispatch(setCredentials({ token, refreshToken }))
                // // retry the original query with new access token 
                result = await baseQuery(args, api, extraOptions)
            } else {
                api.dispatch(logOut())
                // Drop the previous user's cached queries (user data, fields, ...)
                api.dispatch(apiSlice.util.resetApiState())
            }
        }
    }

    return result
}

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: baseQueryWithReauth,
    tagTypes: [Field_TAG, Activities_TAG, User_TAG, FieldActivities_TAG, Sites_TAG,
        Dashboard_TAG, ActivityDefs_TAG, Crops_TAG, SelectedActivity_TAG, Warehouses_TAG, Containers_TAG,
        Resources_TAG, CropPesticides_TAG, Qualities_TAG, Sizes_TAG, Inventory_TAG, Season_TAG, FieldPoints_TAG, Points_TAG, FieldScouts_TAG,
        Pests_TAG, PestsStages_TAG, InfectionLevels_TAG, PlantParts_TAG,Layers_TAG, Sites_TAG, SiteFields_TAG, 
        CropGenera_TAG,ProductCategories_TAG, Resource_TAG


    ],

    endpoints: builder => ({})
})

