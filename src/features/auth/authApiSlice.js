import { createEntityAdapter } from "@reduxjs/toolkit";
import {
    Activities_TAG, FieldScouts_TAG, Field_TAG, Inventory_TAG, FieldPoints_TAG, Season_TAG, apiSlice,
    PestsStages_TAG, PlantParts_TAG, InfectionLevels_TAG, Points_TAG, Pests_TAG, Layers_TAG,
    Sites_TAG, SiteFields_TAG, CropGenera_TAG, ProductCategories_TAG, Resource_TAG,
} from "../../app/api/apiSlice";


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
export const Site_TAG = 'Site_TAG';
// The signed-in user's own editable details (GET/PUT /user/profile).
export const Profile_TAG = 'Profile';
// const _TAG = '';
// const _TAG = '';

export const authApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: [Profile_TAG] }).injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/api/auth/login',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: [Field_TAG, Activities_TAG, User_TAG, FieldActivities_TAG,
                Dashboard_TAG, ActivityDefs_TAG, Crops_TAG, SelectedActivity_TAG, Warehouses_TAG,
                Resources_TAG, Containers_TAG, CropPesticides_TAG, Qualities_TAG, Sizes_TAG, Inventory_TAG, Season_TAG,
                FieldPoints_TAG, FieldScouts_TAG, PestsStages_TAG, InfectionLevels_TAG, PlantParts_TAG, Points_TAG,
                Pests_TAG,Layers_TAG, Sites_TAG, Site_TAG, SiteFields_TAG, CropGenera_TAG,ProductCategories_TAG, Resource_TAG
            ]
        }),
        // getUser: builder.mutation({
        //     query: () => ({
        //         url: '/api/farm/user',

        //     }),
        //     providesTags: (result, error, arg) => [
        //         User_TAG
        //     ]
        // }),
        getUserData: builder.query({
            query: () => ({
                url: '/api/farm/user',

            }),
            providesTags: [User_TAG]
        }),
        // { username (read-only), firstName, lastName, phone, email }
        getProfile: builder.query({
            query: () => '/api/farm/user/profile',
            providesTags: [Profile_TAG]
        }),
        // A rejected save is a 400 whose body is a Result with errors keyed by field,
        // e.g. { firstName: "required" }. User_TAG: the display name comes from the profile.
        updateProfile: builder.mutation({
            query: ({ firstName, lastName, phone, email }) => ({
                url: '/api/farm/user/profile',
                method: 'PUT',
                body: { firstName, lastName, phone, email }
            }),
            invalidatesTags: [Profile_TAG, User_TAG]
        }),
        // Same 400 + Result errors shape: currentPassword / newPassword.
        changePassword: builder.mutation({
            query: ({ currentPassword, newPassword }) => ({
                url: '/api/farm/user/password',
                method: 'PUT',
                body: { currentPassword, newPassword }
            })
        }),
        // Forgot password: public endpoints (no login). The server answers forgot the same way
        // whether or not the account exists, so the page can't reveal which usernames are real.
        forgotPassword: builder.mutation({
            query: ({ login }) => ({
                url: '/api/auth/password/forgot',
                method: 'POST',
                body: { login }
            })
        }),
        // { valid: false } or { valid: true, username }. POST so the token stays out of URLs and logs.
        checkResetToken: builder.query({
            query: (token) => ({
                url: '/api/auth/password/check',
                method: 'POST',
                body: { token }
            }),
            keepUnusedDataFor: 0
        }),
        // 400 + Result errors: { token: invalidToken | expiredToken } or { newPassword: invalidNewPassword }.
        resetPassword: builder.mutation({
            query: ({ token, newPassword }) => ({
                url: '/api/auth/password/reset',
                method: 'POST',
                body: { token, newPassword }
            })
        }),
    })
})

export const {
    useLoginMutation,
    // useGetUserMutation,
    useGetUserDataQuery,
    useGetProfileQuery,
    useUpdateProfileMutation,
    useChangePasswordMutation,
    useForgotPasswordMutation,
    useCheckResetTokenQuery,
    useResetPasswordMutation
} = authApiSlice