(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/app/appSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ACTIVITY_STATUS",
    ()=>DEFAULT_ACTIVITY_STATUS,
    "DEFAULT_PLAN_STATUS",
    ()=>DEFAULT_PLAN_STATUS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "logOut",
    ()=>logOut,
    "selectAccuracy",
    ()=>selectAccuracy,
    "selectActiveGPS",
    ()=>selectActiveGPS,
    "selectActivityFreeTextFilter",
    ()=>selectActivityFreeTextFilter,
    "selectActivityType",
    ()=>selectActivityType,
    "selectAppBarDialogOpen",
    ()=>selectAppBarDialogOpen,
    "selectCurrentToken",
    ()=>selectCurrentToken,
    "selectCurrentYear",
    ()=>selectCurrentYear,
    "selectDefaultScouter",
    ()=>selectDefaultScouter,
    "selectEditLayer",
    ()=>selectEditLayer,
    "selectEndDateFilter",
    ()=>selectEndDateFilter,
    "selectFieldDashboardYear",
    ()=>selectFieldDashboardYear,
    "selectFieldFreeTextFilter",
    ()=>selectFieldFreeTextFilter,
    "selectFieldsViewStatus",
    ()=>selectFieldsViewStatus,
    "selectInventoryDateFilter",
    ()=>selectInventoryDateFilter,
    "selectInventoryFreeTextFilter",
    ()=>selectInventoryFreeTextFilter,
    "selectInventoryWarehouseFilter",
    ()=>selectInventoryWarehouseFilter,
    "selectLang",
    ()=>selectLang,
    "selectLatitude",
    ()=>selectLatitude,
    "selectLongitude",
    ()=>selectLongitude,
    "selectMapCenter",
    ()=>selectMapCenter,
    "selectMapZoom",
    ()=>selectMapZoom,
    "selectNewActivityGeo",
    ()=>selectNewActivityGeo,
    "selectOpenLayers",
    ()=>selectOpenLayers,
    "selectOpenSettings",
    ()=>selectOpenSettings,
    "selectSelectedActivityFilterOptions",
    ()=>selectSelectedActivityFilterOptions,
    "selectSelectedActivityPlanFilterOptions",
    ()=>selectSelectedActivityPlanFilterOptions,
    "selectSelectedFieldFilterOptions",
    ()=>selectSelectedFieldFilterOptions,
    "selectShowFieldAlias",
    ()=>selectShowFieldAlias,
    "selectShowFieldName",
    ()=>selectShowFieldName,
    "selectShowInventory",
    ()=>selectShowInventory,
    "selectShowLayers",
    ()=>selectShowLayers,
    "selectShowOfficialFieldId",
    ()=>selectShowOfficialFieldId,
    "selectShowPlans",
    ()=>selectShowPlans,
    "selectSnackbarMsg",
    ()=>selectSnackbarMsg,
    "selectSnackbarSeverity",
    ()=>selectSnackbarSeverity,
    "selectStartDateFilter",
    ()=>selectStartDateFilter,
    "selectVisibilLayes",
    ()=>selectVisibilLayes,
    "setAccuracy",
    ()=>setAccuracy,
    "setActiveGPS",
    ()=>setActiveGPS,
    "setActivityBaseFieldFilter",
    ()=>setActivityBaseFieldFilter,
    "setActivityFreeTextFilter",
    ()=>setActivityFreeTextFilter,
    "setActivityParentFieldFilter",
    ()=>setActivityParentFieldFilter,
    "setActivitySiteFilter",
    ()=>setActivitySiteFilter,
    "setActivityType",
    ()=>setActivityType,
    "setAppBarDialogOpen",
    ()=>setAppBarDialogOpen,
    "setCredentials",
    ()=>setCredentials,
    "setCurrentYear",
    ()=>setCurrentYear,
    "setDefaultScouter",
    ()=>setDefaultScouter,
    "setEditLayer",
    ()=>setEditLayer,
    "setEndDateFilter",
    ()=>setEndDateFilter,
    "setFieldDashboardYear",
    ()=>setFieldDashboardYear,
    "setFieldFreeTextFilter",
    ()=>setFieldFreeTextFilter,
    "setFieldsViewStatus",
    ()=>setFieldsViewStatus,
    "setInventoryDateFilter",
    ()=>setInventoryDateFilter,
    "setInventoryFreeTextFilter",
    ()=>setInventoryFreeTextFilter,
    "setInventoryWarehouseFilter",
    ()=>setInventoryWarehouseFilter,
    "setLang",
    ()=>setLang,
    "setLatitude",
    ()=>setLatitude,
    "setLongitude",
    ()=>setLongitude,
    "setMapCenter",
    ()=>setMapCenter,
    "setMapZoom",
    ()=>setMapZoom,
    "setNewActivityGeo",
    ()=>setNewActivityGeo,
    "setOpenLayers",
    ()=>setOpenLayers,
    "setOpenSettings",
    ()=>setOpenSettings,
    "setSelectedActivityFilterOptions",
    ()=>setSelectedActivityFilterOptions,
    "setSelectedActivityPlanFilterOptions",
    ()=>setSelectedActivityPlanFilterOptions,
    "setSelectedFieldFilterOptions",
    ()=>setSelectedFieldFilterOptions,
    "setShowFieldAlias",
    ()=>setShowFieldAlias,
    "setShowFieldName",
    ()=>setShowFieldName,
    "setShowInventory",
    ()=>setShowInventory,
    "setShowLayers",
    ()=>setShowLayers,
    "setShowOfficialFieldId",
    ()=>setShowOfficialFieldId,
    "setShowPlans",
    ()=>setShowPlans,
    "setSnackbar",
    ()=>setSnackbar,
    "setStartDateFilter",
    ()=>setStartDateFilter,
    "setVisibleLayers",
    ()=>setVisibleLayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
;
;
;
;
var DEFAULT_PLAN_STATUS = '';
var DEFAULT_ACTIVITY_STATUS = '';
var lang = localStorage.getItem('lang');
var showInventory = 'true' === localStorage.getItem('showInventory');
var showPlans = 'true' === localStorage.getItem('showPlans');
var newActivityGeo = 'true' === localStorage.getItem('newActivityGeo');
var activeGPS = 'true' === localStorage.getItem('activeGPS');
var showFieldName = 'true' === localStorage.getItem('showFieldName');
var showFieldAlias = 'true' === localStorage.getItem('showFieldAlias');
var showOfficialFieldId = 'true' === localStorage.getItem('showOfficialFieldId');
var scouterId = localStorage.getItem('scouterId');
var scouterName = localStorage.getItem('scouterName');
var appSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState: {
        lang: {
            lang: lang ? lang : 'en',
            dir: lang === 'he' ? 'rtl' : 'ltr'
        },
        token: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken'),
        fieldFreeTextFilter: '',
        selectedFieldFilterOptions: [],
        selectedActivityFilterOptions: [],
        selectedActivityPlanFilterOptions: [],
        activityFreeTextFilter: '',
        fieldFilter: '',
        currentYear: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newDate"])().getFullYear(),
        fieldDashboardYear: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newDate"])().getFullYear(),
        appBarDialogOpen: false,
        startDateFilter: null,
        endDateFilter: null,
        fieldsViewStatus: 'all',
        activityType: '',
        snackbarMsg: '',
        snackbarSeverity: 'succsess',
        openSettings: false,
        userConf: [],
        inventoryFreeTextFilter: '',
        inventoryDateFilter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLocalDate"])(new Date(), true),
        inventoryWarehouseFilter: 0,
        showInventory: showInventory,
        showPlans: showPlans,
        openLayers: false,
        showLayers: [],
        editLayer: null,
        mapCenter: null,
        mapZoom: null,
        showFieldName: showFieldName,
        showFieldAlias: showFieldAlias,
        showOfficialFieldId: showOfficialFieldId,
        newActivityGeo: newActivityGeo,
        accuracy: null,
        longitude: null,
        latitude: null,
        activeGPS: activeGPS,
        visibleLayers: [],
        defaultScouter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStringEmpty"])(scouterId) ? null : {
            id: scouterId,
            name: scouterName
        }
    },
    reducers: {
        setCredentials: function(state, action) {
            var _action_payload = action.payload, token = _action_payload.token, refreshToken = _action_payload.refreshToken;
            if (token) {
                localStorage.setItem('token', token);
            } else {
                localStorage.removeItem('token');
            }
            localStorage.setItem('refreshToken', refreshToken);
            state.token = token;
            state.refreshToken = refreshToken;
        },
        setLang: function(state, action) {
            localStorage.setItem('lang', action.payload.lang);
            state.lang = action.payload;
        },
        setOpenSettings: function(state, action) {
            state.openSettings = action.payload;
        },
        setOpenLayers: function(state, action) {
            state.openLayers = action.payload;
            state.editLayer = null;
        },
        logOut: function(state, action) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('scouterId');
            localStorage.removeItem('scouterName');
            state.token = null;
            state.refreshToken = null;
        },
        setCurrentYear: function(state, action) {
            state.currentYear = action.payload;
            state.fieldDashboardYear = action.payload;
        },
        setAppBarDialogOpen: function(state, action) {
            state.appBarDialogOpen = action.payload;
        },
        setFieldFreeTextFilter: function(state, action) {
            state.fieldFreeTextFilter = action.payload;
        },
        setSelectedFieldFilterOptions: function(state, action) {
            state.selectedFieldFilterOptions = action.payload;
        },
        setSelectedActivityFilterOptions: function(state, action) {
            state.selectedActivityFilterOptions = action.payload;
        },
        setSelectedActivityPlanFilterOptions: function(state, action) {
            state.selectedActivityPlanFilterOptions = action.payload;
        },
        setActivityFreeTextFilter: function(state, action) {
            state.activityFreeTextFilter = action.payload;
        },
        setStartDateFilter: function(state, action) {
            state.startDateFilter = action.payload;
        },
        setEndDateFilter: function(state, action) {
            state.endDateFilter = action.payload;
        },
        setFieldDashboardYear: function(state, action) {
            state.fieldDashboardYear = action.payload;
        },
        setFieldsViewStatus: function(state, action) {
            state.fieldsViewStatus = action.payload;
        },
        setActivityType: function(state, action) {
            state.activityType = action.payload;
        },
        setSnackbar: function(state, action) {
            state.snackbarMsg = action.payload.msg;
            state.snackbarSeverity = action.payload.severity ? action.payload.severity : 'success';
        },
        setInventoryFreeTextFilter: function(state, action) {
            state.inventoryFreeTextFilter = action.payload;
        },
        setInventoryDateFilter: function(state, action) {
            state.inventoryDateFilter = action.payload;
        },
        setInventoryWarehouseFilter: function(state, action) {
            state.inventoryWarehouseFilter = action.payload ? action.payload : 0;
        },
        setShowInventory: function(state, action) {
            localStorage.setItem('showInventory', action.payload);
            state.showInventory = action.payload;
        },
        setShowPlans: function(state, action) {
            localStorage.setItem('showPlans', action.payload);
            state.showPlans = action.payload;
        },
        setShowLayers: function(state, action) {
            state.showLayers = action.payload;
        },
        setEditLayer: function(state, action) {
            state.editLayer = action.payload;
        },
        setMapCenter: function(state, action) {
            state.mapCenter = action.payload;
        },
        setMapZoom: function(state, action) {
            state.mapZoom = action.payload;
        },
        setShowFieldAlias: function(state, action) {
            state.showFieldAlias = action.payload;
            localStorage.setItem('showFieldAlias', action.payload);
        },
        setShowOfficialFieldId: function(state, action) {
            state.showOfficialFieldId = action.payload;
            localStorage.setItem('showOfficialFieldId', action.payload);
        },
        setShowFieldName: function(state, action) {
            state.showFieldName = action.payload;
            localStorage.setItem('showFieldName', action.payload);
        },
        setNewActivityGeo: function(state, action) {
            localStorage.setItem('newActivityGeo', action.payload);
            state.newActivityGeo = action.payload;
        },
        setActiveGPS: function(state, action) {
            localStorage.setItem('activeGPS', action.payload);
            state.activeGPS = action.payload;
        },
        setAccuracy: function(state, action) {
            state.accuracy = action.payload;
        },
        setLatitude: function(state, action) {
            state.latitude = action.payload;
        },
        setLongitude: function(state, action) {
            state.longitude = action.payload;
        },
        setDefaultScouter: function(state, action) {
            state.defaultScouter = action.payload;
            if (action.payload) {
                var _action_payload, _action_payload1;
                localStorage.setItem('scouterId', (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.id);
                localStorage.setItem('scouterName', (_action_payload1 = action.payload) === null || _action_payload1 === void 0 ? void 0 : _action_payload1.name);
            }
        },
        setVisibleLayers: function(state, action) {
            var isSelected = state.visibleLayers.find(function(e) {
                return e === action.payload;
            }) ? true : false;
            if (isSelected) {
                state.visibleLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(state.visibleLayers).filter(function(e) {
                    return e !== action.payload;
                });
            } else {
                state.visibleLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(state.visibleLayers).concat([
                    action.payload
                ]);
            }
        }
    }
});
var _appSlice_actions = appSlice.actions;
var setCredentials = _appSlice_actions.setCredentials, logOut = _appSlice_actions.logOut, setLang = _appSlice_actions.setLang, setCurrentYear = _appSlice_actions.setCurrentYear, setAppBarDialogOpen = _appSlice_actions.setAppBarDialogOpen, setFieldFreeTextFilter = _appSlice_actions.setFieldFreeTextFilter, setActivityFreeTextFilter = _appSlice_actions.setActivityFreeTextFilter, setStartDateFilter = _appSlice_actions.setStartDateFilter, setEndDateFilter = _appSlice_actions.setEndDateFilter, setFieldDashboardYear = _appSlice_actions.setFieldDashboardYear, setFieldsViewStatus = _appSlice_actions.setFieldsViewStatus, setActivityType = _appSlice_actions.setActivityType, setSnackbar = _appSlice_actions.setSnackbar, setOpenSettings = _appSlice_actions.setOpenSettings, setInventoryFreeTextFilter = _appSlice_actions.setInventoryFreeTextFilter, setInventoryDateFilter = _appSlice_actions.setInventoryDateFilter, setInventoryWarehouseFilter = _appSlice_actions.setInventoryWarehouseFilter, setShowInventory = _appSlice_actions.setShowInventory, setShowPlans = _appSlice_actions.setShowPlans, setOpenLayers = _appSlice_actions.setOpenLayers, setShowLayers = _appSlice_actions.setShowLayers, setEditLayer = _appSlice_actions.setEditLayer, setMapCenter = _appSlice_actions.setMapCenter, setMapZoom = _appSlice_actions.setMapZoom, setShowFieldAlias = _appSlice_actions.setShowFieldAlias, setShowFieldName = _appSlice_actions.setShowFieldName, setNewActivityGeo = _appSlice_actions.setNewActivityGeo, setAccuracy = _appSlice_actions.setAccuracy, setActiveGPS = _appSlice_actions.setActiveGPS, setLongitude = _appSlice_actions.setLongitude, setLatitude = _appSlice_actions.setLatitude, setActivityParentFieldFilter = _appSlice_actions.setActivityParentFieldFilter, setActivityBaseFieldFilter = _appSlice_actions.setActivityBaseFieldFilter, setActivitySiteFilter = _appSlice_actions.setActivitySiteFilter, setShowOfficialFieldId = _appSlice_actions.setShowOfficialFieldId, setVisibleLayers = _appSlice_actions.setVisibleLayers, setDefaultScouter = _appSlice_actions.setDefaultScouter, setSelectedFieldFilterOptions = _appSlice_actions.setSelectedFieldFilterOptions, setSelectedActivityFilterOptions = _appSlice_actions.setSelectedActivityFilterOptions, setSelectedActivityPlanFilterOptions = _appSlice_actions.setSelectedActivityPlanFilterOptions;
const __TURBOPACK__default__export__ = appSlice.reducer;
var selectCurrentToken = function(state) {
    return state.app.token;
};
var selectLang = function(state) {
    return state.app.lang;
};
var selectCurrentYear = function(state) {
    return state.app.currentYear;
};
var selectAppBarDialogOpen = function(state) {
    return state.app.appBarDialogOpen;
};
var selectFieldFreeTextFilter = function(state) {
    return state.app.fieldFreeTextFilter;
};
var selectActivityFreeTextFilter = function(state) {
    return state.app.activityFreeTextFilter;
};
var selectStartDateFilter = function(state) {
    return state.app.startDateFilter;
};
var selectEndDateFilter = function(state) {
    return state.app.endDateFilter;
};
var selectFieldDashboardYear = function(state) {
    return state.app.fieldDashboardYear;
};
var selectFieldsViewStatus = function(state) {
    return state.app.fieldsViewStatus;
};
var selectActivityType = function(state) {
    return state.app.activityType;
};
var selectSnackbarMsg = function(state) {
    return state.app.snackbarMsg;
};
var selectSnackbarSeverity = function(state) {
    return state.app.snackbarSeverity;
};
var selectOpenSettings = function(state) {
    return state.app.openSettings;
};
var selectInventoryFreeTextFilter = function(state) {
    return state.app.inventoryFreeTextFilter;
};
var selectInventoryDateFilter = function(state) {
    return state.app.inventoryDateFilter;
};
var selectInventoryWarehouseFilter = function(state) {
    return state.app.inventoryWarehouseFilter;
};
var selectShowInventory = function(state) {
    return state.app.showInventory;
};
var selectShowPlans = function(state) {
    return state.app.showPlans;
};
var selectOpenLayers = function(state) {
    return state.app.openLayers;
};
var selectShowLayers = function(state) {
    return state.app.showLayers;
};
var selectEditLayer = function(state) {
    return state.app.editLayer;
};
var selectMapCenter = function(state) {
    return state.app.mapCenter;
};
var selectMapZoom = function(state) {
    return state.app.mapZoom;
};
var selectShowFieldName = function(state) {
    return state.app.showFieldName;
};
var selectShowFieldAlias = function(state) {
    return state.app.showFieldAlias;
};
var selectNewActivityGeo = function(state) {
    return state.app.newActivityGeo;
};
var selectAccuracy = function(state) {
    return state.app.accuracy;
};
var selectActiveGPS = function(state) {
    return state.app.activeGPS;
};
var selectLongitude = function(state) {
    return state.app.longitude;
};
var selectLatitude = function(state) {
    return state.app.latitude;
};
var selectShowOfficialFieldId = function(state) {
    return state.app.showOfficialFieldId;
};
var selectVisibilLayes = function(state) {
    return state.app.visibleLayers;
};
var selectDefaultScouter = function(state) {
    return state.app.defaultScouter;
};
var selectSelectedFieldFilterOptions = function(state) {
    return state.app.selectedFieldFilterOptions;
};
var selectSelectedActivityFilterOptions = function(state) {
    return state.app.selectedActivityFilterOptions;
};
var selectSelectedActivityPlanFilterOptions = function(state) {
    return state.app.selectedActivityPlanFilterOptions;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityDefs_TAG",
    ()=>ActivityDefs_TAG,
    "Containers_TAG",
    ()=>Containers_TAG,
    "CropPesticides_TAG",
    ()=>CropPesticides_TAG,
    "Crops_TAG",
    ()=>Crops_TAG,
    "Dashboard_TAG",
    ()=>Dashboard_TAG,
    "FieldActivities_TAG",
    ()=>FieldActivities_TAG,
    "Qualities_TAG",
    ()=>Qualities_TAG,
    "Resources_TAG",
    ()=>Resources_TAG,
    "SelectedActivity_TAG",
    ()=>SelectedActivity_TAG,
    "Sizes_TAG",
    ()=>Sizes_TAG,
    "User_TAG",
    ()=>User_TAG,
    "Warehouses_TAG",
    ()=>Warehouses_TAG,
    "authApiSlice",
    ()=>authApiSlice,
    "useGetUserDataQuery",
    ()=>useGetUserDataQuery,
    "useLoginMutation",
    ()=>useLoginMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
;
;
;
;
var FieldActivities_TAG = 'FieldActivities';
var User_TAG = 'User';
var Dashboard_TAG = 'Dashboard';
var ActivityDefs_TAG = 'ActivityDefs';
var Crops_TAG = 'Crops';
var SelectedActivity_TAG = 'SelectedActivity';
var Warehouses_TAG = 'Warehouses';
var Resources_TAG = 'Resources';
var Containers_TAG = 'Containers';
var CropPesticides_TAG = 'CropPesticides_TAG';
var Qualities_TAG = 'Qualities';
var Sizes_TAG = 'Sizes';
var authApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            login: builder.mutation({
                query: function(credentials) {
                    return {
                        url: '/api/auth/login',
                        method: 'POST',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, credentials)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Activities_TAG"],
                    User_TAG,
                    FieldActivities_TAG,
                    Dashboard_TAG,
                    ActivityDefs_TAG,
                    Crops_TAG,
                    SelectedActivity_TAG,
                    Warehouses_TAG,
                    Resources_TAG,
                    Containers_TAG,
                    CropPesticides_TAG,
                    Qualities_TAG,
                    Sizes_TAG,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inventory_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Season_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPoints_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldScouts_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PestsStages_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfectionLevels_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlantParts_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pests_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layers_TAG"]
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
                query: function() {
                    return {
                        url: '/api/farm/user'
                    };
                },
                providesTags: [
                    User_TAG
                ]
            })
        };
    }
});
var useLoginMutation = authApiSlice.useLoginMutation, // useGetUserMutation,
useGetUserDataQuery = authApiSlice.useGetUserDataQuery;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/auth/Login.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccountCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PasswordOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PasswordOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LoginOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LoginOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$LogoLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/LogoLeaf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$UserRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/router/UserRoutes.js [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
var Login = function(props) {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), errorMsg = _useState[0], setErrorMsg = _useState[1];
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    var navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    var _useLoginMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoginMutation"])(), 1), login = _useLoginMutation[0];
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(), handleSubmit = _useForm.handleSubmit, control = _useForm.control;
    // const user = useWatch({ name: 'username', control });
    // const pwd = useWatch({ name: 'password', control });
    var onSubmit = function(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var loginData, err, _err_data, _err_data1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setErrorMsg(null);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            login(e).unwrap()
                        ];
                    case 2:
                        loginData = _state.sent();
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCredentials"])(loginData));
                        navigate(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ROUTE"]);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        err = _state.sent();
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLang"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$UserRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserLang"])(text.lang)));
                        if (err === null || err === void 0 ? void 0 : (_err_data = err.data) === null || _err_data === void 0 ? void 0 : _err_data.message) {
                            ;
                            setErrorMsg(err === null || err === void 0 ? void 0 : (_err_data1 = err.data) === null || _err_data1 === void 0 ? void 0 : _err_data1.message);
                        }
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "form",
        sx: {
            '& .MuiTextField-root': {
                m: 1,
                width: '25ch'
            },
            '& .MuiButton-root': {
                m: 1,
                width: '26ch'
            }
        },
        noValidate: true,
        autoComplete: "off",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            marginTop: 15,
            flex: 1,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$LogoLeaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    color: "primary",
                    fontSize: 'large'
                }, void 0, false, {
                    fileName: "[project]/src/features/auth/Login.js",
                    lineNumber: 93,
                    columnNumber: 17
                }, _this),
                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    color: "error",
                    children: text[errorMsg] ? text[errorMsg] : errorMsg
                }, void 0, false, {
                    fileName: "[project]/src/features/auth/Login.js",
                    lineNumber: 94,
                    columnNumber: 30
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                    name: "username",
                    control: control,
                    defaultValue: "",
                    render: function(param) {
                        var _param_field = param.field, onChange = _param_field.onChange, value = _param_field.value, error = param.fieldState.error;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                            // label="User Name"
                            error: !!error,
                            //      helperText={error ? error.message : null}
                            value: value,
                            onChange: onChange,
                            slotProps: {
                                input: {
                                    startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                        position: "start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/features/auth/Login.js",
                                            lineNumber: 111,
                                            columnNumber: 45
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/auth/Login.js",
                                        lineNumber: 110,
                                        columnNumber: 41
                                    }, void 0)
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/features/auth/Login.js",
                            lineNumber: 101,
                            columnNumber: 25
                        }, void 0);
                    },
                    rules: {
                        required: 'Username required'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/auth/Login.js",
                    lineNumber: 95,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                    name: "password",
                    control: control,
                    defaultValue: "",
                    render: function(param) {
                        var _param_field = param.field, onChange = _param_field.onChange, value = _param_field.value, error = param.fieldState.error;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                            // label="Password"
                            value: value,
                            onChange: onChange,
                            error: !!error,
                            //  helperText={error ? error.message : null}
                            type: "password",
                            autoComplete: "current-password",
                            InputProps: {
                                startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                    position: "start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PasswordOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/features/auth/Login.js",
                                        lineNumber: 138,
                                        columnNumber: 41
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/auth/Login.js",
                                    lineNumber: 137,
                                    columnNumber: 37
                                }, void 0)
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/features/auth/Login.js",
                            lineNumber: 127,
                            columnNumber: 25
                        }, void 0);
                    },
                    rules: {
                        required: 'Password required'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/auth/Login.js",
                    lineNumber: 121,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "submit",
                    size: "large",
                    fullWidth: true,
                    disableElevation: true,
                    variant: "contained",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LoginOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/features/auth/Login.js",
                        lineNumber: 151,
                        columnNumber: 99
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/features/auth/Login.js",
                    lineNumber: 151,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/auth/Login.js",
            lineNumber: 87,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/features/auth/Login.js",
        lineNumber: 68,
        columnNumber: 9
    }, _this);
};
_s(Login, "v7dzYwJcaqPAorpBdqOt124pP/k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoginMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = Login;
const __TURBOPACK__default__export__ = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/points/pointsApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>adapter,
    "pointsApiSlice",
    ()=>pointsApiSlice,
    "useCreateFieldPointMutation",
    ()=>useCreateFieldPointMutation,
    "useDeleteFieldPointMutation",
    ()=>useDeleteFieldPointMutation,
    "useGetFieldPointsQuery",
    ()=>useGetFieldPointsQuery,
    "useGetLayersQuery",
    ()=>useGetLayersQuery,
    "useGetPointQuery",
    ()=>useGetPointQuery,
    "useGetPointsQuery",
    ()=>useGetPointsQuery,
    "useUpdateFieldPointMutation",
    ()=>useUpdateFieldPointMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
;
;
;
;
var adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = adapter.getInitialState();
var pointsApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getFieldPoints: builder.query({
                query: function(args) {
                    return "/api/farm/points/field/".concat(args.fieldId);
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPoints_TAG"]
                ]
            }),
            getPoints: builder.query({
                query: function(args) {
                    return "/api/farm/points?".concat(buildPointSearch(args));
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points_TAG"]
                ]
            }),
            getLayers: builder.query({
                query: function(args) {
                    return "/api/farm/layers";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layers_TAG"]
                ]
            }),
            getPoint: builder.query({
                query: function(args) {
                    return "/api/farm/points/".concat(args.id);
                }
            }),
            createFieldPoint: builder.mutation({
                query: function(args) {
                    return {
                        url: '/api/farm/points',
                        method: 'POST',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, args)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPoints_TAG"]
                ]
            }),
            updateFieldPoint: builder.mutation({
                query: function(args) {
                    return {
                        url: '/api/farm/points',
                        method: 'PUT',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, args)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPoints_TAG"]
                ]
            }),
            deleteFieldPoint: builder.mutation({
                query: function(args) {
                    return {
                        url: "/api/farm/points/".concat(args.id),
                        method: 'DELETE'
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPoints_TAG"]
                ]
            })
        };
    }
});
var buildPointSearch = function(param) {
    var types = param.types;
    var urlParams = null;
    types.forEach(function(r, index, arr) {
        if (!urlParams) {
            if (r) {
                urlParams = 'type=' + r;
            }
        } else {
            if (r) {
                urlParams += '&type=' + r;
            }
        }
    });
    // if (reference) {
    //     urlParams += '&ref=' + reference;
    // }
    return urlParams;
};
var useGetFieldPointsQuery = pointsApiSlice.useGetFieldPointsQuery, useGetPointsQuery = pointsApiSlice.useGetPointsQuery, useGetPointQuery = pointsApiSlice.useGetPointQuery, useCreateFieldPointMutation = pointsApiSlice.useCreateFieldPointMutation, useUpdateFieldPointMutation = pointsApiSlice.useUpdateFieldPointMutation, useDeleteFieldPointMutation = pointsApiSlice.useDeleteFieldPointMutation, useGetLayersQuery = pointsApiSlice.useGetLayersQuery;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/pests/pestsApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>adapter,
    "pestsApiSlice",
    ()=>pestsApiSlice,
    "useGetInfectionLevelsQuery",
    ()=>useGetInfectionLevelsQuery,
    "useGetPestStagesQuery",
    ()=>useGetPestStagesQuery,
    "useGetPestsQuery",
    ()=>useGetPestsQuery,
    "useGetPlantLocationsQuery",
    ()=>useGetPlantLocationsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
;
;
;
var adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var pestsApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getPests: builder.query({
                query: function(args) {
                    return "/api/farm/pests";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pests_TAG"]
                ]
            }),
            getPestStages: builder.query({
                query: function(args) {
                    return "/api/farm/peststages";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PestsStages_TAG"]
                ]
            }),
            getInfectionLevels: builder.query({
                query: function(args) {
                    return "/api/farm/infectionlevels";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfectionLevels_TAG"]
                ]
            }),
            getPlantLocations: builder.query({
                query: function(args) {
                    return "/api/farm/plantlocations";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlantParts_TAG"]
                ]
            })
        };
    }
});
var useGetPestsQuery = pestsApiSlice.useGetPestsQuery, useGetPestStagesQuery = pestsApiSlice.useGetPestStagesQuery, useGetInfectionLevelsQuery = pestsApiSlice.useGetInfectionLevelsQuery, useGetPlantLocationsQuery = pestsApiSlice.useGetPlantLocationsQuery;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/fields/fieldsApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fieldsAdapter",
    ()=>fieldsAdapter,
    "fieldsApiSlice",
    ()=>fieldsApiSlice,
    "getFieldsState",
    ()=>getFieldsState,
    "safeParseJson",
    ()=>safeParseJson,
    "selectAllFields",
    ()=>selectAllFields,
    "selectFieldById",
    ()=>selectFieldById,
    "selectFieldIds",
    ()=>selectFieldIds,
    "selectFieldssResult",
    ()=>selectFieldssResult,
    "useFields",
    ()=>useFields,
    "useFieldsById",
    ()=>useFieldsById,
    "useGetFieldsByYearQuery",
    ()=>useGetFieldsByYearQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
var fieldsAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = fieldsAdapter.getInitialState();
function safeParseJson(json) {
    if (json) {
        try {
            return JSON.parse(json);
        } catch (err) {}
    }
    return null;
}
var fieldsApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getFieldsByYear: builder.query({
                query: function(year) {
                    return "/api/farm/fields/".concat(year);
                },
                transformResponse: function(responseData) {
                    var fields = responseData.map(function(field) {
                        if (field === null || field === void 0 ? void 0 : field.polygon) field.geoPoints = safeParseJson(field.polygon);
                        return field;
                    });
                    return fieldsAdapter.setAll(initialState, fields);
                },
                providesTags: function(result, error, arg) {
                    return [
                        {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["User_TAG"],
                            id: "LIST"
                        }
                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(result.ids.map(function(id) {
                        return {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["User_TAG"],
                            id: id
                        };
                    })));
                }
            })
        };
    }
});
var useGetFieldsByYearQuery = fieldsApiSlice.useGetFieldsByYearQuery;
var selectFieldssResult = fieldsApiSlice.endpoints.getFieldsByYear.select();
// Creates memoized selector
var selectFieldsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(selectFieldssResult, function(fieldsResult) {
    return fieldsResult.data // normalized state object with ids & entities
    ;
});
var _fieldsAdapter_getSelectors = fieldsAdapter.getSelectors(function(state) {
    var _selectFieldsData;
    return (_selectFieldsData = selectFieldsData(state)) !== null && _selectFieldsData !== void 0 ? _selectFieldsData : initialState;
});
var selectAllFields = _fieldsAdapter_getSelectors.selectAll, selectFieldById = _fieldsAdapter_getSelectors.selectById, selectFieldIds = _fieldsAdapter_getSelectors.selectIds;
var getFieldsState = function(state) {
    return state.fields;
};
function useFields(year) {
    _s();
    var data = useGetFieldsByYearQuery(year).data;
    if (data) {
        var fields = data.ids.map(function(id) {
            return data.entities[id];
        });
        return fields;
    }
    return [];
}
_s(useFields, "3kU1ZQSu/9IP/SEc1JNitQE26Gc=", false, function() {
    return [
        useGetFieldsByYearQuery
    ];
});
function useFieldsById(year, id) {
    _s1();
    var data = useGetFieldsByYearQuery(year).data;
    if (data && data.entities) {
        return data.entities[id];
    } else return null;
}
_s1(useFieldsById, "3kU1ZQSu/9IP/SEc1JNitQE26Gc=", false, function() {
    return [
        useGetFieldsByYearQuery
    ];
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/activityDefs/activityDefsApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activityDefsAdapter",
    ()=>activityDefsAdapter,
    "activityDefsApiSlice",
    ()=>activityDefsApiSlice,
    "getActivityDefsState",
    ()=>getActivityDefsState,
    "selectActivityDefsResult",
    ()=>selectActivityDefsResult,
    "useGetActivityDefsQuery",
    ()=>useGetActivityDefsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
;
;
var activityDefsAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = activityDefsAdapter.getInitialState();
var activityDefsApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getActivityDefs: builder.query({
                query: function(args) {
                    return "/api/farm/activitydefs";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivityDefs_TAG"]
                ]
            })
        };
    }
});
var useGetActivityDefsQuery = activityDefsApiSlice.useGetActivityDefsQuery;
var selectActivityDefsResult = activityDefsApiSlice.endpoints.getActivityDefs.select();
var getActivityDefsState = function(state) {
    return state;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/activities/activitiesApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activitiesAdapter",
    ()=>activitiesAdapter,
    "activityApiSlice",
    ()=>activityApiSlice,
    "getActivitiesState",
    ()=>getActivitiesState,
    "selectActivitiesResult",
    ()=>selectActivitiesResult,
    "useCreateActivityMutation",
    ()=>useCreateActivityMutation,
    "useDeleteActivityMutation",
    ()=>useDeleteActivityMutation,
    "useGetActivitiesFieldQuery",
    ()=>useGetActivitiesFieldQuery,
    "useGetActivitiesFlatQuery",
    ()=>useGetActivitiesFlatQuery,
    "useGetActivityByIdQuery",
    ()=>useGetActivityByIdQuery,
    "useUpdateActivityMutation",
    ()=>useUpdateActivityMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
;
;
;
;
var activitiesAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])({
    selectId: function(e) {
        return e.uuid;
    },
    sortComparer: function(e) {
        return e.execution;
    }
});
var initialState = activitiesAdapter.getInitialState();
var activityApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getActivitiesFlat: builder.query({
                query: function(args) {
                    return "/api/farm/activities/flat/".concat(args.page, "/").concat(args.maxResult, "/").concat(args.isPlan, "/").concat(args.orderBy, "/").concat(args.dir, "?filter=").concat(args.filter);
                },
                // transformResponse: responseData => {
                //     return activitiesAdapter.setAll(initialState, responseData.content)
                // },
                providesTags: [
                    'Activities'
                ]
            }),
            getActivitiesField: builder.query({
                query: function(args) {
                    return "/api/farm/activities/field/".concat(args.fieldId, "/").concat(args.page, "/").concat(args.maxResult, "/").concat(args.isPlan, "/").concat(args.orderBy, "/").concat(args.dir, "?filter=").concat(args.filter);
                },
                // transformResponse: responseData => {
                //     return fieldActivitiesAdapter.setAll(fieldActivityinitialState, responseData)
                // },
                providesTags: [
                    'FieldActivities'
                ]
            }),
            getActivityById: builder.query({
                query: function(uuid) {
                    return "/api/farm/activity/".concat(uuid);
                },
                // transformResponse: responseData => {
                //     const act = {...responseData}
                //     act.execution = parseISOOrNull(responseData.execution);
                //     return act;
                // },
                providesTags: [
                    'SelectedActivity'
                ]
            }),
            createActivity: builder.mutation({
                query: function(args) {
                    return {
                        url: '/api/farm/activity',
                        method: 'POST',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, args)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Activities_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectedActivity_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldActivities_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inventory_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points_TAG"]
                ]
            }),
            updateActivity: builder.mutation({
                query: function(args) {
                    return {
                        url: '/api/farm/activity',
                        method: 'PUT',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, args)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Activities_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectedActivity_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldActivities_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inventory_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points_TAG"]
                ]
            }),
            deleteActivity: builder.mutation({
                query: function query(uuid) {
                    return {
                        url: "/api/farm/activity/".concat(uuid),
                        method: 'DELETE'
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Activities_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectedActivity_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldActivities_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inventory_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points_TAG"]
                ]
            })
        };
    }
});
var useGetActivitiesFlatQuery = activityApiSlice.useGetActivitiesFlatQuery, useGetActivitiesFieldQuery = activityApiSlice.useGetActivitiesFieldQuery, useGetActivityByIdQuery = activityApiSlice.useGetActivityByIdQuery, useCreateActivityMutation = activityApiSlice.useCreateActivityMutation, useUpdateActivityMutation = activityApiSlice.useUpdateActivityMutation, useDeleteActivityMutation = activityApiSlice.useDeleteActivityMutation;
var selectActivitiesResult = activityApiSlice.endpoints.getActivitiesFlat.select();
var getActivitiesState = function(state) {
    return state;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/season/seasonDataApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>adapter,
    "getSeasonDataState",
    ()=>getSeasonDataState,
    "seasonApiSlice",
    ()=>seasonApiSlice,
    "useCreateSeasonDataMutation",
    ()=>useCreateSeasonDataMutation,
    "useGetSeasonDataQuery",
    ()=>useGetSeasonDataQuery,
    "useUpdateSeasonDataMutation",
    ()=>useUpdateSeasonDataMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
;
;
;
;
var adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = adapter.getInitialState();
var seasonApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getSeasonData: builder.query({
                query: function(args) {
                    return "/api/farm/seasondata/".concat(args.year, "/").concat(args.fieldId);
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Season_TAG"]
                ]
            }),
            createSeasonData: builder.mutation({
                query: function(args) {
                    return {
                        url: '/api/farm/seasondata',
                        method: 'POST',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, args)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Season_TAG"]
                ]
            }),
            updateSeasonData: builder.mutation({
                query: function(args) {
                    return {
                        url: '/api/farm/seasondata',
                        method: 'PUT',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, args)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Season_TAG"]
                ]
            })
        };
    }
});
var useGetSeasonDataQuery = seasonApiSlice.useGetSeasonDataQuery, useCreateSeasonDataMutation = seasonApiSlice.useCreateSeasonDataMutation, useUpdateSeasonDataMutation = seasonApiSlice.useUpdateSeasonDataMutation;
var getSeasonDataState = function(state) {
    return state;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/inventory/inventoryApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>adapter,
    "inventoryApiSlice",
    ()=>inventoryApiSlice,
    "useGetInventoryQuery",
    ()=>useGetInventoryQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
;
;
;
var adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var inventoryApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getInventory: builder.query({
                query: function(args) {
                    return "/api/farm/resources/inventory/".concat(args.date, "?t=''");
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inventory_TAG"]
                ]
            })
        };
    }
});
var useGetInventoryQuery = inventoryApiSlice.useGetInventoryQuery;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/warehouses/warehouseApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWarehousesState",
    ()=>getWarehousesState,
    "selectWarehousesResult",
    ()=>selectWarehousesResult,
    "useGetWarehousesQuery",
    ()=>useGetWarehousesQuery,
    "warehousesAdapter",
    ()=>warehousesAdapter,
    "warehousesApiSlice",
    ()=>warehousesApiSlice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
;
;
var warehousesAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = warehousesAdapter.getInitialState();
var warehousesApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getWarehouses: builder.query({
                query: function(args) {
                    return "/api/farm/warehouses";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Warehouses_TAG"]
                ]
            })
        };
    }
});
var useGetWarehousesQuery = warehousesApiSlice.useGetWarehousesQuery;
var selectWarehousesResult = warehousesApiSlice.endpoints.getWarehouses.select();
var getWarehousesState = function(state) {
    return state;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/dashboard/dashboardApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardApiSlice",
    ()=>dashboardApiSlice,
    "useGetFieldDashBoardQuery",
    ()=>useGetFieldDashBoardQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
;
;
var dashboardApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getFieldDashBoard: builder.query({
                query: function(args) {
                    return "/api/farm/dashboard/field/".concat(args.fieldId, "?year=").concat(args.year);
                },
                providesTags: function(result, error, args) {
                    return [
                        {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dashboard_TAG"],
                            id: args.fieldId
                        }
                    ];
                }
            })
        };
    }
});
var useGetFieldDashBoardQuery = dashboardApiSlice.useGetFieldDashBoardQuery;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/scout/scoutsApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>adapter,
    "scoutsApiSlice",
    ()=>scoutsApiSlice,
    "useCreateFieldScoutMutation",
    ()=>useCreateFieldScoutMutation,
    "useDeleteFieldScoutMutation",
    ()=>useDeleteFieldScoutMutation,
    "useGetFieldScoutsQuery",
    ()=>useGetFieldScoutsQuery,
    "useUpdateFieldScoutMutation",
    ()=>useUpdateFieldScoutMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
;
;
;
;
var adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = adapter.getInitialState();
var scoutsApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getFieldScouts: builder.query({
                query: function(args) {
                    return "/api/farm/scouts/field/".concat(args.fieldId);
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldScouts_TAG"]
                ]
            }),
            createFieldScout: builder.mutation({
                query: function(args) {
                    return {
                        url: '/api/farm/scouts',
                        method: 'POST',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, args)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldScouts_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPoints_TAG"]
                ]
            }),
            updateFieldScout: builder.mutation({
                query: function(args) {
                    return {
                        url: '/api/farm/scouts',
                        method: 'PUT',
                        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, args)
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldScouts_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPoints_TAG"]
                ]
            }),
            deleteFieldScout: builder.mutation({
                query: function(args) {
                    return {
                        url: "/api/farm/scouts/".concat(args.id),
                        method: 'DELETE'
                    };
                },
                invalidatesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldScouts_TAG"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPoints_TAG"]
                ]
            })
        };
    }
});
var useGetFieldScoutsQuery = scoutsApiSlice.useGetFieldScoutsQuery, useCreateFieldScoutMutation = scoutsApiSlice.useCreateFieldScoutMutation, useUpdateFieldScoutMutation = scoutsApiSlice.useUpdateFieldScoutMutation, useDeleteFieldScoutMutation = scoutsApiSlice.useDeleteFieldScoutMutation;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/utils/containersApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "containersApiSlice",
    ()=>containersApiSlice,
    "getContainersState",
    ()=>getContainersState,
    "getQualitiesState",
    ()=>getQualitiesState,
    "getSizesState",
    ()=>getSizesState,
    "useGetContainersQuery",
    ()=>useGetContainersQuery,
    "useGetQualitiesQuery",
    ()=>useGetQualitiesQuery,
    "useGetSizesQuery",
    ()=>useGetSizesQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
;
;
var containersApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getContainers: builder.query({
                query: function(args) {
                    return "/api/farm/containers";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Containers_TAG"]
                ]
            }),
            getQualities: builder.query({
                query: function(args) {
                    return "/api/farm/qualities";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Qualities_TAG"]
                ]
            }),
            getSizes: builder.query({
                query: function(args) {
                    return "/api/farm/sizes";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sizes_TAG"]
                ]
            })
        };
    }
});
var useGetContainersQuery = containersApiSlice.useGetContainersQuery, useGetQualitiesQuery = containersApiSlice.useGetQualitiesQuery, useGetSizesQuery = containersApiSlice.useGetSizesQuery;
var getContainersState = function(state) {
    return state;
};
var getQualitiesState = function(state) {
    return state;
};
var getSizesState = function(state) {
    return state;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/resources/resourcesApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUSTOMER",
    ()=>CUSTOMER,
    "getResourcesState",
    ()=>getResourcesState,
    "resourcesAdapter",
    ()=>resourcesAdapter,
    "resourcesApiSlice",
    ()=>resourcesApiSlice,
    "useGetResourcesQuery",
    ()=>useGetResourcesQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
;
;
var resourcesAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = resourcesAdapter.getInitialState();
var CUSTOMER = 'customer';
var resourcesApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getResources: builder.query({
                query: function(args) {
                    return "/api/farm/".concat(args.type, "/resources");
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resources_TAG"]
                ]
            })
        };
    }
});
var useGetResourcesQuery = resourcesApiSlice.useGetResourcesQuery;
var getResourcesState = function(state) {
    return state;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/pesticides/pecticidesApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUSTOMER",
    ()=>CUSTOMER,
    "pesticidesAdapter",
    ()=>pesticidesAdapter,
    "resourcesApiSlice",
    ()=>resourcesApiSlice,
    "useGetCropPesticidesQuery",
    ()=>useGetCropPesticidesQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
;
;
var pesticidesAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = pesticidesAdapter.getInitialState();
var CUSTOMER = 'customer';
var resourcesApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getCropPesticides: builder.query({
                query: function(args) {
                    return "/api/farm/pesticides/".concat(args.cropId);
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CropPesticides_TAG"]
                ]
            })
        };
    }
});
var useGetCropPesticidesQuery = resourcesApiSlice // returns the query result object
 //export const selectResourcesResult = resourcesApiSlice.endpoints.getResources.select()
 //export const getResourcesState = (state) => state;
.useGetCropPesticidesQuery;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/crops/cropsApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cropsAdapter",
    ()=>cropsAdapter,
    "cropsApiSlice",
    ()=>cropsApiSlice,
    "getCropsState",
    ()=>getCropsState,
    "selectCropsResult",
    ()=>selectCropsResult,
    "useGetCropsQuery",
    ()=>useGetCropsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
;
;
var cropsAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = cropsAdapter.getInitialState();
var cropsApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getCrops: builder.query({
                query: function(args) {
                    return "/api/farm/crops";
                },
                providesTags: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Crops_TAG"]
                ]
            })
        };
    }
});
var useGetCropsQuery = cropsApiSlice.useGetCropsQuery;
var selectCropsResult = cropsApiSlice.endpoints.getCrops.select();
var getCropsState = function(state) {
    return state;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/tariff/tariffApiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTariffState",
    ()=>getTariffState,
    "tariffAdapter",
    ()=>tariffAdapter,
    "tariffApiSlice",
    ()=>tariffApiSlice,
    "useGetResourcesTariffQuery",
    ()=>useGetResourcesTariffQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
;
;
;
var tariffAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEntityAdapter"])();
var initialState = tariffAdapter.getInitialState();
var buildResourceTariffSearch = function(param) {
    var reference = param.reference, resources = param.resources;
    var urlParams = null;
    resources.forEach(function(r, index, arr) {
        if (!urlParams) {
            if (r) {
                urlParams = 'r=' + r;
            }
        } else {
            if (r) {
                urlParams += '&r=' + r;
            }
        }
    });
    if (reference) {
        urlParams += '&ref=' + reference;
    }
    return urlParams;
};
var tariffApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: function(builder) {
        return {
            getResourcesTariff: builder.query({
                query: function(args) {
                    return "/api/farm/resources/tariff/".concat(args.activityType, "/").concat(args.date, "?").concat(buildResourceTariffSearch(args));
                }
            })
        };
    }
});
var useGetResourcesTariffQuery = tariffApiSlice.useGetResourcesTariffQuery;
var getTariffState = function(state) {
    return state;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/fields/fieldSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "fieldSlice",
    ()=>fieldSlice,
    "selectFieldById",
    ()=>selectFieldById,
    "selectFields",
    ()=>selectFields,
    "setFields",
    ()=>setFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
var fieldSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'field',
    initialState: {
        fields: []
    },
    reducers: {
        setFields: function(state, action) {
            state.fields = action.payload;
        }
    }
});
var setFields = fieldSlice.actions.setFields;
const __TURBOPACK__default__export__ = fieldSlice.reducer;
var selectFields = function(state) {
    return state.field.fields;
};
var selectFieldById = function(state, id) {
    return state.field.fields.find(function(e) {
        return e.id === id;
    });
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api/apiSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activities_TAG",
    ()=>Activities_TAG,
    "ActivityDefs_TAG",
    ()=>ActivityDefs_TAG,
    "Containers_TAG",
    ()=>Containers_TAG,
    "CropPesticides_TAG",
    ()=>CropPesticides_TAG,
    "Crops_TAG",
    ()=>Crops_TAG,
    "Dashboard_TAG",
    ()=>Dashboard_TAG,
    "FARM_MANAGER",
    ()=>FARM_MANAGER,
    "FieldActivities_TAG",
    ()=>FieldActivities_TAG,
    "FieldPoints_TAG",
    ()=>FieldPoints_TAG,
    "FieldScouts_TAG",
    ()=>FieldScouts_TAG,
    "Field_TAG",
    ()=>Field_TAG,
    "InfectionLevels_TAG",
    ()=>InfectionLevels_TAG,
    "Inventory_TAG",
    ()=>Inventory_TAG,
    "Layers_TAG",
    ()=>Layers_TAG,
    "PestsStages_TAG",
    ()=>PestsStages_TAG,
    "Pests_TAG",
    ()=>Pests_TAG,
    "PlantParts_TAG",
    ()=>PlantParts_TAG,
    "Points_TAG",
    ()=>Points_TAG,
    "Qualities_TAG",
    ()=>Qualities_TAG,
    "Resources_TAG",
    ()=>Resources_TAG,
    "Season_TAG",
    ()=>Season_TAG,
    "SelectedActivity_TAG",
    ()=>SelectedActivity_TAG,
    "Sizes_TAG",
    ()=>Sizes_TAG,
    "User_TAG",
    ()=>User_TAG,
    "Warehouses_TAG",
    ()=>Warehouses_TAG,
    "apiSlice",
    ()=>apiSlice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
;
;
;
;
;
var Field_TAG = 'Field';
var Activities_TAG = 'Activities';
var FieldActivities_TAG = 'FieldActivities';
var User_TAG = 'User';
var Dashboard_TAG = 'Dashboard';
var ActivityDefs_TAG = 'ActivityDefs';
var Crops_TAG = 'Crops';
var SelectedActivity_TAG = 'SelectedActivity';
var Warehouses_TAG = 'Warehouses';
var Resources_TAG = 'Resources';
var Containers_TAG = 'Containers';
var CropPesticides_TAG = 'CropPesticides_TAG';
var Qualities_TAG = 'Qualities';
var Sizes_TAG = 'Sizes';
var Inventory_TAG = 'Inventory_TAG';
var Season_TAG = 'FieldSeason';
var FieldPoints_TAG = 'FieldPoints';
var Points_TAG = 'Points';
var FieldScouts_TAG = 'FieldScouts';
var Pests_TAG = 'Pests';
var PestsStages_TAG = 'PestsStages';
var InfectionLevels_TAG = 'InfectionLevels';
var PlantParts_TAG = 'PlantParts';
var Layers_TAG = 'Layers';
var FARM_MANAGER = 'https://api.manager.farm';
var baseQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
    baseUrl: FARM_MANAGER,
    // credentials: 'include',
    prepareHeaders: function(headers, param) {
        var getState = param.getState;
        var token = 'refresh' === getState().app.token ? getState().app.refreshToken : getState().app.token;
        if (token) {
            headers.set("X-Authorization", "Bearer ".concat(token));
        }
        headers.set("Content-Type", 'application/json');
        headers.set('X-Requested-With', 'XMLHttpRequest');
        return headers;
    }
});
var baseQueryWithReauth = function(args, api, extraOptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var _result_error, result, refreshToken, refreshResult, refreshToken1, token;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        baseQuery(args, api, extraOptions)
                    ];
                case 1:
                    result = _state.sent();
                    if (!((result === null || result === void 0 ? void 0 : (_result_error = result.error) === null || _result_error === void 0 ? void 0 : _result_error.status) === 401)) return [
                        3,
                        5
                    ];
                    refreshToken = api.getState().app.refreshToken;
                    if (!refreshToken) return [
                        3,
                        5
                    ];
                    api.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCredentials"])({
                        token: 'refresh',
                        refreshToken: refreshToken
                    }));
                    return [
                        4,
                        baseQuery('/api/auth/token', api, extraOptions)
                    ];
                case 2:
                    refreshResult = _state.sent();
                    if (!(refreshResult === null || refreshResult === void 0 ? void 0 : refreshResult.data)) return [
                        3,
                        4
                    ];
                    refreshToken1 = api.getState().app.refreshToken;
                    token = refreshResult.data.token;
                    // // store the new token 
                    api.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCredentials"])({
                        token: token,
                        refreshToken: refreshToken1
                    }));
                    return [
                        4,
                        baseQuery(args, api, extraOptions)
                    ];
                case 3:
                    // // retry the original query with new access token 
                    result = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    api.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logOut"])());
                    if (api.util && api.util.resetApiState) {
                        api.dispatch(api.utils.resetApiState());
                    }
                    _state.label = 5;
                case 5:
                    return [
                        2,
                        result
                    ];
            }
        });
    })();
};
var apiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: [
        Field_TAG,
        Activities_TAG,
        User_TAG,
        FieldActivities_TAG,
        Dashboard_TAG,
        ActivityDefs_TAG,
        Crops_TAG,
        SelectedActivity_TAG,
        Warehouses_TAG,
        Containers_TAG,
        Resources_TAG,
        CropPesticides_TAG,
        Qualities_TAG,
        Sizes_TAG,
        Inventory_TAG,
        Season_TAG,
        FieldPoints_TAG,
        Points_TAG,
        FieldScouts_TAG,
        Pests_TAG,
        PestsStages_TAG,
        InfectionLevels_TAG,
        PlantParts_TAG,
        Layers_TAG
    ],
    endpoints: function(builder) {
        return {};
    }
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/fields/fieldSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
;
;
;
;
;
;
var _obj;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: (_obj = {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].reducerPath, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].reducer), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "app", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), _obj),
    middleware: function(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].middleware);
    },
    devTools: true
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lang/he.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dir":"rtl","lang":"he","field":"חלקה","crop":"גידול","variety":"זן","dunam":"דונם","hectare":"הקטר","acre":"אקר","spray":"ריסוס","scouting":"ניטור","harvest":"קטיף","market":"שיווק","irrigation":"השקיה","note":"הערה","end":"סיום","density":"עומד","season":"עונה","maturity":"בגרות","site":"אתר","parentField":"חלקת אם","plantSpacing":"מרווח בין שתילים","rowSpacing":"מרווח בין שורות","activities":"פעולות","map":"מפה","fields":"חלקות","satellite":"לווין","details":"פרטים","dashboard":"דשבורד","logout":"יציאה","date":"תאריך","resources":"משאבים","activity":"פעולה","alias":"כינוי","name":"שם","qty":"כמות","unit":"יחידה","type":"סוג","day":"יום","hour":"שעה","container":"מיכל","m3":"קוב","kg":"ק\"ג","lit":"ליטר","worker":"עובד","contractor":"קבלן","pesticide":"חומר הדברה","fertilizer":"דשן","waterSource":"מקור מים","workerGroup":"קב' עובדים","water_source":"מקור מים","worker_group":"קב' עובדים","equipment":"ציוד","sprayer":"מרסס","compost":"זבל אורגני","energy":"אנרגיה","product":"מוצר","year":"שנה","days":"ימים","fromDate":"מתאריך","toDate":"עד תאריך","pesticides":"חומרי הדברה","fertilizers":"דשנים","month":"חודש","dosage":"מינון","inactive":"לא פעיל","active":"פעיל","all":"הכל","plans":"תכנון","spray_plan":"תכנון ריסוס","irrigation_plan":"תכנון השקיה","general_plan":"תכנון פעולה","fieldSize":"גודל חלקה","fieldNote":"הערה לחלקה","executed":"בוצע","executedDate":"תאריך ביצוע","cost":"עלות","resourceNote":"הערה למשאב","disinfectant":"חומר חיטוי","accessory":"אביזר","warehouse":"מחסן","plan":"תכנון","delete":"מחק","save":"שמור","duplicate":"שכפל","execute":"לביצוע","cancel":"בטל","windSpeedNone":"ללא רוח","windSpeedStrong":"רוח חזקה","windSpeedCalm":"רוח קלה","windSpeed":"מהירות רוח","total":"סה\"כ","sprayVolumehectare":"תרסיס להקטר","sprayVolumedunam":"תרסיס לדונם","sprayVolumeacre":"תרסיס לאקר","sprayerCapacity":"מיכל מרסס","sprayersCount":"מס' מרססים","totalSprayVolume":"סה\"כ נפח","speed":"מהירות","unitCost":"מחיר יח'","tapInFieldPosition":"לחץ על מיקום בחלקה","clear":"נקה","select":"בחר","endHour":"שעת סיום","invoice":"חשבונית","deleteFormTitle":"למחוק נתונים?","deleteFormBody":"הנתונים ימחקו לצמיתות","recordUpdated":"הרשומה עודכנה","recordCreated":"רשומה חדשה נוצרה","recordDeleted":"הרשומה נמחקה","kwh":"קוט\"ש","tonne":"טון","workerCount":"מס' עובדים","qtyPerWorker":"כמות לעובד","renewable":"מתחדשת","bulkQtyUpdate":"עדכון כמות","waybill":"ת. משלוח","customer":"לקוח","updateFields":"עדכון חלקות","settings":"הגדרות","water":"מקור מים","publicSource":"מקור ציבורי","category":"קטגוריה","start":"התחלה","irrigationMethod":"שיטת השקיה","fertilizeMethod":"שיטת דישון","irrigationDay":"יום השקיה","irrigationDays":"ימי השקיה","per":"ל","frequency":"תדירות","close":"סגור","requiredFieldsMissing":"שדות חובה חסרים","waterQty":"כמות מים","every":"כל","fertilization":"דישון","and":"ו","other":"אחר","agro_machine":"Agro Machine","tractor":"Tractor","listpesticide":"חומר הדברה","pest":"פגע","grm":"גרם","cc":"סמ\"ק","percent":"%","capacity":"נפח","export":"ייצוא","localMarket":"שוק מקומי","industry":"תעשייה","size":"גודל","quality":"איכות","destination":"יעד","income":"הכנסה","sortReference":"תעודת מיון","sort":"מיון","incomeCalc":"חישוב הכנסות","weight":"משקל","amount":"כמות","area":"שטח","none":"ללא","daysSinceSeedling":"ימים מזריעה","inventory":"מלאי","status":"סטטוס","estimatedProduce":"הערכת יבול","ripe":"הבשלה","flash":"הצצה","of":"מתוך","layers":"שכבות","generic":"כללי","trap":"מלכודת","tree":"עץ","waypoint":"נ.צ.","history":"היסטוריה","edit":"עריכה","trunk":"גזע","fruit":"פרי","root":"שורש","treetop":"אמירים","inflorescence":"תפרחת","sepal":"עלי גביע","bud":"ניצן","seed":"זרעים","stalk":"גבעול","leaf":"עלה","leafstalk":"פטוטרת","location":"מיקום","high":"גבוהה","low":"נמוכה","medium":"בינונית","infectionLevel":"רמת נגיעות","phenologicalStage":"שלב פנולוגי","perennial":"רב שנתי","pests":"פגעים","traps":"מלכודות","irrigationHeads":"ראשי השקיה","irrigationHead":"ראש השקיה","expiry":"תוקף","share":"שיתוף","add":"הוסף","baitExpiry":"תוקף נדיפית","newActivityGeo":"פעולות - חפש חלקות לפי GPS","usernameOrPasswordInvalid":"שם משתמש/סיסמה שגויים","accountExpired":"תוקף המנוי הסתיים","officialFieldId":"מס משרד חקלאות","executor":"מבצע","seedpod":"תרמיל","freetext":"טקסט חופשי"});}),
"[project]/src/lang/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dir":"ltr","lang":"en","field":"Field","crop":"Crop","variety":"Variety","dunam":"Dunam","hectare":"ha","acre":"ac","spray":"Spray","scouting":"Scouting","harvest":"Harvest","market":"Merketing","irrigation":"Irrigation","note":"Note","end":"End","density":"Density","season":"Season","maturity":"Maturity","site":"Site","parentField":"Parent Field","plantSpacing":"Plant Spacing","rowSpacing":"Row Spacing","activities":"Activities","map":"Map","fields":"Fields","satellite":"Satellite","details":"Details","dashboard":"Dashboard","logout":"Logout","date":"Date","resources":"Reources","activity":"Activity","alias":"Alias","name":"Name","qty":"Qty","unit":"Unit","type":"Type","day":"Day","hour":"Hour","container":"Container","m3":"M3","kg":"Kg","lit":"Lit","worker":"Worker","contractor":"Contractor","pesticide":"Pesticide","fertilizer":"Fertilizer","waterSource":"Water Source","water_source":"Water Source","workerGroup":"Worker Group","worker_group":"Worker Group","equipment":"Equipment","sprayer":"Sprayer","compost":"Compost","energy":"Energy","product":"Product","year":"Year","days":"Days","fromDate":"From Date","toDate":"To Date","pesticides":"Pesticides","fertilizers":"Fertilizers","month":"Month","dosage":"Dosage","inactive":"Inactive","active":"Active","all":"All","plans":"Plans","spray_plan":"Spray Plan","irrigation_plan":"Irrigation Plan","general_plan":"Activity Plan","fieldSize":"Field Size","fieldNote":"Field Note","executed":"Executed","executedDate":"Executed Date","cost":"Cost","resourceNote":"Resource Note","disinfectant":"Disinfectant","accessory":"Accessory","warehouse":"Warehouse","plan":"Plan","delete":"Delete","save":"Save","duplicate":"Duplicate","execute":"Execute","cancel":"Cancel","windSpeedNone":"No Wind","windSpeedStrong":"Strong Wind","windSpeedCalm":"Calm Wind","windSpeed":"Wind Speed","total":"Total","sprayVolumehectare":"Vol/Hectare","sprayVolumedunam":"Vol/Dunam","sprayVolumeacre":"Vol/Acre","sprayerCapacity":"Sprayer Capacity","sprayersCount":"Sprayer Count","totalSprayVolume":"Total Vol","speed":"Speed","unitCost":"Unit Cost","tapInFieldPosition":"Tap in field position","clear":"Clear","select":"Select","endHour":"End Hour","invoice":"Invoice","deleteFormTitle":"Delete data?","deleteFormBody":"Data will be deleted permanently","recordUpdated":"Record Updated","recordCreated":"Record Created","recordDeleted":"Record deleted","kwh":"Kwh","tonne":"Tonne","workerCount":"Worker Count","qtyPerWorker":"Qty/Worker","renewable":"Renewable","bulkQtyUpdate":"Qty Updated","waybill":"Waybill","customer":"Customer","updateFields":"Update Fields","settings":"Settings","water":"Water Source","publicSource":"Public Source","category":"Category","start":"Start","irrigationMethod":"Irrigation Method","fertilizeMethod":"Fertilize Method","irrigationDay":"Irrigation Day","irrigationDays":"Irrigation Days","per":"Per/","frequency":"Frequency","close":"Close","requiredFieldsMissing":"Required fields missing","waterQty":"Water Qty","every":"Every","fertilization":"Fertilization","and":"& ","other":"Other","agro_machine":"Agro Machinery","tractor":"Tractor","listpesticide":"Pesticide","pest":"Pest","grm":"grm","cc":"cc","percent":"%","capacity":"Capacity","export":"Export","localMarket":"Local","industry":"Industry","size":"Size","quality":"Quality","destination":"Destination","income":"Income","sortReference":"Sort Reference","sort":"Sort","incomeCalc":"Income Calc","weight":"Weight","amount":"Qty","area":"Area","none":"None","daysSinceSeedling":"Days Since Seedling","inventory":"Inventory","status":"Status","estimatedProduce":"Estimated Produce","ripe":"Ripe","flash":"Flash","of":"Of","layers":"Layers","generic":"Generic","trap":"Trap","tree":"Tree","waypoint":"Waypoint","history":"History","edit":"Edit","trunk":"Trunk","fruit":"Fruit","root":"Root","treetop":"Treetop","inflorescence":"Inflorescence","sepal":"Sepal","bud":"Bud","seed":"Seed","stalk":"Stalk","leaf":"Leaf","leafstalk":"Leafstalk","location":"Location","high":"High","low":"Low","medium":"Medium","infectionLevel":"Infection Level","phenologicalStage":"Phenological Stage","perennial":"Perennial","pests":"Pests","traps":"Traps","irrigationHeads":"Irrigation Heads","irrigationHead":"Irrigation Head","expiry":"Expiry","share":"Share","add":"Add","baitExpiry":"Bait Expiry","newActivityGeo":"Activities - search fields by GPS","usernameOrPasswordInvalid":"User/Password Invalid","accountExpired":"Account expired","officialFieldId":"Official Field Id","executor":"Executor","seedpod":"Seed Pod","freetext":"Free Text"});}),
"[project]/src/lang/pt.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dir":"ltr","lang":"pt","field":"Campo","crop":"Cortar","variety":"Variedade","dunam":"Dunam","hectare":"ha","acre":"ac","spray":"Pulverizar","scouting":"Escotismo","harvest":"Colheita","market":"Marketing","irrigation":"Irrigação","note":"Observação","end":"Fim","density":"Densidade","season":"Temporada","maturity":"Maturidade","site":"Site","parentField":"Campo pai","plantSpacing":"Espaçamento entre plantas","rowSpacing":"Espaçamento entre linhas","activities":"Atividades","map":"Mapa","fields":"Campos","satellite":"Satélite","details":"Detalhes","dashboard":"Painel","logout":"Sair","date":"Data","resources":"Recursos","activity":"Atividade","alias":"Alias","name":"Nome","qty":"Quantidade","unit":"Unidade","type":"Tipo","day":"Dia","hour":"Hora","container":"Recipiente","m3":"M3","kg":"Kg","lit":"Aceso","worker":"Trabalhador","contractor":"Contratante","pesticide":"Pesticida","fertilizer":"Fertilizante","waterSource":"Fonte de água","water_source":"Fonte de água","workerGroup":"Grupo de Trabalhadores","worker_group":"Grupo de Trabalhadores","equipment":"Equipamento","sprayer":"Pulverizador","compost":"Composto","energy":"Energia","product":"produtos","year":"Ano","days":"Dias","fromDate":"Da data","toDate":"A data","pesticides":"Pesticidas","fertilizers":"Fertilizantes","month":"Mês","dosage":"Dosagem","inactive":"Inativo","active":"Ativo","all":"Todos","plans":"Planos","spray_plan":"Plano de Pulverização","irrigation_plan":"Plano de Irrigação","general_plan":"Plano de atividades","fieldSize":"Tamanho do campo","fieldNote":"Nota de campo","executed":"Executado","cost":"Custo","resourceNote":"Nota de recurso","disinfectant":"Desinfetante","accessory":"Acessório","warehouse":"Armazém","plan":"Plano","delete":"Excluir","save":"Salvar","duplicate":"Duplicado","execute":"Executar","cancel":"Cancelar","windSpeedNone":"Sem vento","windSpeedStrong":"Vento forte","windSpeedCalm":"Vento calmo","windSpeed":"Velocidade do vento","total":"Total","sprayVolumehectare":"Volume/hectare","sprayVolumedunam":"Vol/Dunam","sprayVolumeacre":"Volume/Acre","sprayerCapacity":"Capacidade do Pulverizador","sprayersCount":"Contagem de pulverizadores","totalSprayVolume":"Volume total","speed":"Velocidade","unitCost":"Custo unitário","tapInFieldPosition":"Toque na posição do campo","clear":"Claro","select":"Selecione","endHour":"hora final","invoice":"Fatura","deleteFormTitle":"Excluir dados?","deleteFormBody":"Os dados serão excluídos permanentemente","recordUpdated":"Registro atualizado","recordCreated":"Registro criado","recordDeleted":"Registro excluído","kwh":"kWh","tonne":"Tonelada","workerCount":"Contagem de trabalhadores","qtyPerWorker":"Quantidade/Trabalhador","renewable":"Renovável","bulkQtyUpdate":"Quantidade atualizada","waybill":"Guia","customer":"Cliente","updateFields":"Atualizar campos","settings":"Configurações","water":"Fonte de água","publicSource":"Fonte pública","category":"Categoria","start":"Começar","irrigationMethod":"Método de irrigação","fertilizeMethod":"Método de fertilização","irrigationDay":"Dia de Irrigação","irrigationDays":"Dias de irrigação","per":"Por/","frequency":"Frequência","close":"Fechar","requiredFieldsMissing":"Campos obrigatórios ausentes","waterQty":"Quantidade de água","every":"Todo","fertilization":"Fertilização","and":"e ","listpesticide":"Pesticidas","pest":"Praga","grm":"grm","cc":"cc","percent":"%","capacity":"Capacidade","export":"Exportar","localMarket":"Local","industry":"Indústria","size":"Tamanho","quality":"Qualidade","destination":"Destino","income":"Renda","sortReference":"Referência de classificação","sort":"Organizar","incomeCalc":"Cálculo de Renda","weight":"Peso","amount":"Quantidade","area":"Área","none":"Nenhum","daysSinceSeedling":"Dias desde a muda","inventory":"Inventário","status":"Status","estimatedProduce":"Produto estimado","ripe":"Maduro","flash":"Clarão","of":"De","layers":"Layers","generic":"Generic","trap":"Trap","tree":"Tree","waypoint":"Waypoint","history":"History","edit":"Edit","trunk":"Trunk","fruit":"Fruit","root":"Root","treetop":"Treetop","inflorescence":"Inflorescence","sepal":"Sepal","bud":"Bud","seed":"Seed","stalk":"Stalk","leaf":"Leaf","leafstalk":"Leafstalk","location":"Location","high":"High","low":"Low","medium":"Medium","infectionLevel":"Infection Level","phenologicalStage":"Phenological Stage","perennial":"Perennial","pests":"Pests","traps":"Traps","irrigationHeads":"Irrigation Heads","irrigationHead":"Irrigation Head","expiry":"Expiry","share":"Share","add":"Add","baitExpiry":"Bait Expiry","newActivityGeo":"Activities - search fields by GPS","usernameOrPasswordInvalid":"User/Password Invalid","accountExpired":"Account expired","officialFieldId":"Ffficial Field Id","executor":"Executor","seedpod":"Seed Pod","freetext":"Free Text"});}),
"[project]/src/lang/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dir":"ltr","lang":"es","field":"Campo","crop":"Cultivo","variety":"Variedad","dunam":"dunam","hectare":"Ja","acre":"C.A","spray":"Rociar","scouting":"Exploración","harvest":"Cosecha","market":"Mercadeo","irrigation":"Irrigación","note":"Nota","end":"Fin","density":"Densidad","season":"Estación","maturity":"Madurez","site":"Sitio","parentField":"Campo principal","plantSpacing":"Espaciado de plantas","rowSpacing":"Distancia entre filas","activities":"Actividades","map":"Mapa","fields":"Campos","satellite":"Satélite","details":"Detalles","dashboard":"Panel","logout":"Cerrar sesión","date":"Fecha","resources":"Recursos","activity":"Actividad","alias":"Alias","name":"Nombre","qty":"Cantidad","unit":"Unidad","type":"Tipo","day":"Día","hour":"Hora","container":"Envase","m3":"M3","kg":"Kg","lit":"Iluminado","worker":"Obrero","contractor":"Contratista","pesticide":"Pesticida","fertilizer":"Fertilizante","waterSource":"Fuente de agua","water_source":"Fuente de agua","workerGroup":"Grupo de trabajadores","worker_group":"Grupo de trabajadores","equipment":"Equipo","sprayer":"Pulverizador","compost":"Compost","energy":"Energía","product":"Producto","year":"Año","days":"Días","fromDate":"Partir de la fecha","toDate":"Hasta la fecha","pesticides":"Pesticidas","fertilizers":"Fertilizantes","month":"Mes","dosage":"Dosis","inactive":"Inactivo","active":"Activo","all":"Todo","plans":"Planes","spray_plan":"Plan de pulverización","irrigation_plan":"Plan de riego","general_plan":"Plan de actividades","fieldSize":"Tamaño del campo","fieldNote":"Nota de campo","executed":"Ejecutado","cost":"Costo","resourceNote":"Nota de recursos","disinfectant":"Desinfectante","accessory":"Accesorio","warehouse":"Depósito","plan":"Plan","delete":"Borrar","save":"Ahorrar","duplicate":"Duplicar","execute":"Ejecutar","cancel":"Cancelar","windSpeedNone":"Sin viento","windSpeedStrong":"Viento fuerte","windSpeedCalm":"viento tranquilo","windSpeed":"Velocidad del viento","total":"Total","sprayVolumehectare":"Vol/Hectárea","sprayVolumedunam":"Vol/Dunam","sprayVolumeacre":"Volumen/Acre","sprayerCapacity":"Capacidad del pulverizador","sprayersCount":"Recuento de pulverizadores","totalSprayVolume":"volumen total","speed":"Velocidad","unitCost":"Costo unitario","tapInFieldPosition":"Toque en la posición del campo","clear":"Claro","select":"Seleccionar","endHour":"hora final","invoice":"Factura","deleteFormTitle":"¿Borrar datos?","deleteFormBody":"Los datos se eliminarán permanentemente.","recordUpdated":"Registro actualizado","recordCreated":"Grabación creada","recordDeleted":"Registro eliminado","kwh":"kWh","tonne":"Tonelada","workerCount":"Conteo de trabajadores","qtyPerWorker":"Cant./Trabajador","renewable":"Renovable","bulkQtyUpdate":"Cantidad actualizada","waybill":"Hoja de ruta","customer":"Cliente","updateFields":"Actualizar campos","settings":"Ajustes","water":"Fuente de agua","publicSource":"Fuente pública","category":"Categoría","start":"Comenzar","irrigationMethod":"Método de riego","fertilizeMethod":"Método de fertilización","irrigationDay":"Día de riego","irrigationDays":"Días de riego","per":"Por/","frequency":"Frecuencia","close":"Cerca","requiredFieldsMissing":"Faltan campos obligatorios","waterQty":"Cantidad de agua","every":"Cada","fertilization":"Fertilización","and":"y ","listpesticide":"Pesticidas","pest":"Parásito","grm":"grm","cc":"cc","percent":"%","capacity":"Capacidad","export":"Exportar","localMarket":"Local","industry":"Industria","size":"Tamaño","quality":"Calidad","destination":"Destino","income":"Ingreso","sortReference":"Ordenar referencia","sort":"Clasificar","incomeCalc":"cálculo de ingresos","weight":"Peso","amount":"Cantidad","area":"Área","none":"Ninguno","daysSinceSeedling":"Días desde la plántula","inventory":"Inventario","status":"Status","estimatedProduce":"Geschätzte Produktion","ripe":"Reif","flash":"Blitz","of":"De","layers":"Layers","generic":"Generic","trap":"Trap","tree":"Tree","waypoint":"Waypoint","history":"History","edit":"Edit","trunk":"Trunk","fruit":"Fruit","root":"Root","treetop":"Treetop","inflorescence":"Inflorescence","sepal":"Sepal","bud":"Bud","seed":"Seed","stalk":"Stalk","leaf":"Leaf","leafstalk":"Leafstalk","location":"Location","high":"High","low":"Low","medium":"Medium","infectionLevel":"Infection Level","phenologicalStage":"Phenological Stage","perennial":"Perennial","pests":"Pests","traps":"Traps","irrigationHeads":"Irrigation Heads","irrigationHead":"Irrigation Head","expiry":"Expiry","share":"Share","add":"Add","baitExpiry":"Bait Expiry","newActivityGeo":"Activities - search fields by GPS","usernameOrPasswordInvalid":"User/Password Invalid","accountExpired":"Account expired","officialFieldId":"Ffficial Field Id","executor":"Executor","seedpod":"Seed Pod","freetext":"Free Text"});}),
"[project]/src/router/UserRoutes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getUserLang",
    ()=>getUserLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$he$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lang/he.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lang/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$pt$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lang/pt.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$es$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lang/es.json (json)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
var langs = {
    'he': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$he$2e$json__$28$json$29$__["default"],
    'pt': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$pt$2e$json__$28$json$29$__["default"],
    'en': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$en$2e$json__$28$json$29$__["default"],
    'es': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lang$2f$es$2e$json__$28$json$29$__["default"]
};
var getUserLang = function(lang) {
    return langs[lang];
};
var UserRoutes = function() {
    _s();
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data, isLoading = _useGetUserDataQuery.isLoading, isSuccess = _useGetUserDataQuery.isSuccess, isError = _useGetUserDataQuery.isError, error = _useGetUserDataQuery.error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserRoutes.useEffect": function() {
            if (isSuccess) {
                var lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : user.lang;
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLang"])(getUserLang(lang)));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentYear"])(user.year));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFieldsViewStatus"])(user.fieldsViewStatus));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMapCenter"])([
                    user.lat,
                    user.lng
                ]));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMapZoom"])(user.zoom));
            }
        }
    }["UserRoutes.useEffect"], [
        user,
        isLoading,
        isSuccess,
        isError
    ]);
    return user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
        fileName: "[project]/src/router/UserRoutes.js",
        lineNumber: 42,
        columnNumber: 19
    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/router/UserRoutes.js",
        lineNumber: 42,
        columnNumber: 32
    }, _this);
};
_s(UserRoutes, "leyBPn41Ws8fdkd9T82qGY8SdHE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"]
    ];
});
_c = UserRoutes;
const __TURBOPACK__default__export__ = UserRoutes;
var _c;
__turbopack_context__.k.register(_c, "UserRoutes");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/router/ProtectedRoutes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
var ProtectedRoutes = function() {
    _s();
    var token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectCurrentToken"]);
    return token ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
        fileName: "[project]/src/router/ProtectedRoutes.js",
        lineNumber: 9,
        columnNumber: 17
    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
        to: "/login"
    }, void 0, false, {
        fileName: "[project]/src/router/ProtectedRoutes.js",
        lineNumber: 9,
        columnNumber: 30
    }, _this);
};
_s(ProtectedRoutes, "bD5+gKbiITcJRDYAIJK4ZSEgato=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ProtectedRoutes;
const __TURBOPACK__default__export__ = ProtectedRoutes // //if the role required is there or not
 // if (props.roleRequired) {
 // 	return auth ? (
 // 		props.roleRequired === role ? (
 // 			<Outlet />
 // 		) : (
 // 			<Navigate to="/denied" />
 // 		)
 // 	) : (
 // 		<Navigate to="/login" />
 // 	)
 // } else {
 // 	return auth ? <Outlet /> : <Navigate to="/login" />
 // }
;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoutes");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/router/PublicRoutes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
var PublicRoutes = function() {
    _s();
    var token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectCurrentToken"]);
    return token ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
        to: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ROUTE"]
    }, void 0, false, {
        fileName: "[project]/src/router/PublicRoutes.js",
        lineNumber: 9,
        columnNumber: 16
    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
        fileName: "[project]/src/router/PublicRoutes.js",
        lineNumber: 9,
        columnNumber: 48
    }, _this);
};
_s(PublicRoutes, "bD5+gKbiITcJRDYAIJK4ZSEgato=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = PublicRoutes;
const __TURBOPACK__default__export__ = PublicRoutes;
var _c;
__turbopack_context__.k.register(_c, "PublicRoutes");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/router/DataRoutes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/fields/fieldsApiSlice.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
var DataRoutes = function() {
    _s();
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectCurrentYear"]);
    var _useGetFieldsByYearQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldsByYearQuery"])(year), data = _useGetFieldsByYearQuery.data, isLoading = _useGetFieldsByYearQuery.isLoading, isSuccess = _useGetFieldsByYearQuery.isSuccess, isError = _useGetFieldsByYearQuery.isError, error = _useGetFieldsByYearQuery.error;
    return data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
        fileName: "[project]/src/router/DataRoutes.js",
        lineNumber: 18,
        columnNumber: 19
    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/router/DataRoutes.js",
        lineNumber: 18,
        columnNumber: 32
    }, _this);
};
_s(DataRoutes, "zrvZKifJZAzVGIVLdSZqgAVzfP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldsByYearQuery"]
    ];
});
_c = DataRoutes;
const __TURBOPACK__default__export__ = DataRoutes;
var _c;
__turbopack_context__.k.register(_c, "DataRoutes");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/App.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BACKGROUND",
    ()=>BACKGROUND,
    "BORDER_COLOR",
    ()=>BORDER_COLOR,
    "BORDER_COLOR_DARK",
    ()=>BORDER_COLOR_DARK,
    "DEFAULT_ROUTE",
    ()=>DEFAULT_ROUTE,
    "PRIMARY_DARK",
    ()=>PRIMARY_DARK,
    "PRIMARY_LIGHT",
    ()=>PRIMARY_LIGHT,
    "PRIMARY_MAIN",
    ()=>PRIMARY_MAIN,
    "SECONDARY_LIGHT",
    ()=>SECONDARY_LIGHT,
    "SECONDARY_MAIN",
    ()=>SECONDARY_MAIN,
    "SECOND_TOP_LINE",
    ()=>SECOND_TOP_LINE,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/Login.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$ProtectedRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/router/ProtectedRoutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$PublicRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/router/PublicRoutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$tabs$2f$MainTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/tabs/MainTabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/Field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$DataRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/router/DataRoutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$UserRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/router/UserRoutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocaleApplication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LocaleApplication.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$view$2f$ActivityView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/view/ActivityView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$view$2f$NewActivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/view/NewActivity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var PRIMARY_MAIN = '#49A05E';
var PRIMARY_DARK = '#49A05E';
var PRIMARY_LIGHT = '#D9EEDE';
var SECONDARY_LIGHT = '#F2F5F4';
var SECONDARY_MAIN = '#585C59';
var BORDER_COLOR = '#e8e8e8';
var BORDER_COLOR_DARK = '#bdbdbd';
var BACKGROUND = '#E9EEEC';
var SECOND_TOP_LINE = BACKGROUND;
var theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: PRIMARY_MAIN
        },
        secondary: {
            // This is green.A700 as hex.
            main: SECONDARY_MAIN
        },
        text: {
            link: '#2196f3'
        }
    }
});
var DEFAULT_ROUTE = "/tabs/map";
function App() {
    _s();
    var dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]).dir;
    var snackbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectSnackbarMsg"]);
    var sevirity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectSnackbarSeverity"]);
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    document.body.dir = dir;
    theme.direction = dir;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: theme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocaleApplication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Routes"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                            path: "/",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 67,
                                columnNumber: 36
                            }, void 0),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                    path: "/",
                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$ProtectedRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/App.js",
                                        lineNumber: 68,
                                        columnNumber: 38
                                    }, void 0),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                        path: "/",
                                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$UserRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/App.js",
                                            lineNumber: 69,
                                            columnNumber: 40
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                            path: "/",
                                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$DataRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/App.js",
                                                lineNumber: 70,
                                                columnNumber: 42
                                            }, void 0),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                                    index: true,
                                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
                                                        to: DEFAULT_ROUTE,
                                                        replace: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.js",
                                                        lineNumber: 71,
                                                        columnNumber: 41
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.js",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                                    path: "/tabs/activities/:page",
                                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$tabs$2f$MainTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/App.js",
                                                        lineNumber: 72,
                                                        columnNumber: 65
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.js",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                                    path: "/tabs/plans/:page",
                                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$tabs$2f$MainTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/App.js",
                                                        lineNumber: 73,
                                                        columnNumber: 60
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.js",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                                    path: "/tabs/*",
                                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$tabs$2f$MainTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/App.js",
                                                        lineNumber: 74,
                                                        columnNumber: 50
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.js",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                                    path: "/field/:src/:fieldId/history/:page",
                                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/App.js",
                                                        lineNumber: 75,
                                                        columnNumber: 77
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.js",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                                    path: "/field/:src/:fieldId/*",
                                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/App.js",
                                                        lineNumber: 76,
                                                        columnNumber: 65
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.js",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                                    path: "/activity/:src/:activityId",
                                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$view$2f$ActivityView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/App.js",
                                                        lineNumber: 77,
                                                        columnNumber: 69
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.js",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                                    path: "/activity/new/:type",
                                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$view$2f$NewActivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/App.js",
                                                        lineNumber: 78,
                                                        columnNumber: 62
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.js",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.js",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.js",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/App.js",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                    path: "/",
                                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$PublicRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/App.js",
                                        lineNumber: 83,
                                        columnNumber: 38
                                    }, void 0),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                        path: "/login",
                                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/App.js",
                                            lineNumber: 84,
                                            columnNumber: 45
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.js",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/App.js",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                            path: "*",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
                                to: DEFAULT_ROUTE,
                                replace: true
                            }, void 0, false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 87,
                                columnNumber: 36
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
                    open: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStringEmpty"])(snackbar),
                    autoHideDuration: 1000,
                    onClose: function() {
                        return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSnackbar"])('', ''));
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                        variant: "filled",
                        onClose: function() {
                            return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSnackbar"])('', ''));
                        },
                        severity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStringEmpty"])(sevirity) ? 'success' : 'success',
                        sx: {
                            width: '100%'
                        },
                        children: snackbar
                    }, void 0, false, {
                        fileName: "[project]/src/App.js",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/App.js",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/App.js",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(App, "iXsYfp3fVMCtpRKwqb0LMtGJlAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/RouterApp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function RouterApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].StrictMode, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HashRouter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Routes"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "*",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/RouterApp.js",
                            lineNumber: 13,
                            columnNumber: 41
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/RouterApp.js",
                        lineNumber: 13,
                        columnNumber: 16
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/RouterApp.js",
                    lineNumber: 12,
                    columnNumber: 14
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/RouterApp.js",
                lineNumber: 11,
                columnNumber: 12
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/RouterApp.js",
            lineNumber: 10,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/RouterApp.js",
        lineNumber: 9,
        columnNumber: 4
    }, this);
}
_c = RouterApp;
const __TURBOPACK__default__export__ = RouterApp;
var _c;
__turbopack_context__.k.register(_c, "RouterApp");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/RouterApp.js [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/RouterApp.js [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_ad6fff06._.js.map