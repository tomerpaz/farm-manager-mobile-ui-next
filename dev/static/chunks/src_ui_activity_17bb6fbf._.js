(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/ui/activity/form/header/ActivityHeaderView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DUPLICATE_COLOR",
    ()=>DUPLICATE_COLOR,
    "EXECUTE_STATUS_COLOR",
    ()=>EXECUTE_STATUS_COLOR,
    "PLAN_PASSED_STATUS_COLOR",
    ()=>PLAN_PASSED_STATUS_COLOR,
    "PLAN_STATUS_COLOR",
    ()=>PLAN_STATUS_COLOR,
    "WHITE",
    ()=>WHITE,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Autocomplete/Autocomplete.js [app-client] (ecmascript) <locals> <export default as Autocomplete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$ActivityTypeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/ActivityTypeIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$TimePicker$2f$TimePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-date-pickers/TimePicker/TimePicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DecoratedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/DecoratedBox.js [app-client] (ecmascript)");
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
var HEADER_CONFIG = [
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL"],
        date: true,
        year: true,
        activity: true,
        activityType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL"]
    },
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL_PLAN"],
        date: true,
        year: true,
        activity: true,
        activityType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL"]
    },
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY"],
        date: true,
        year: true,
        endHour: true,
        startHour: true,
        crop: true,
        wind: true
    },
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_PLAN"],
        date: true,
        year: true,
        endHour: true,
        startHour: true,
        crop: true,
        wind: false
    },
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGATION"],
        date: true,
        year: true,
        endDate: true
    },
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGATION_PLAN"],
        date: true,
        year: true,
        endDate: true
    },
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"],
        date: true,
        year: true,
        activity: true,
        activityType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"],
        waybill: true,
        customer: true
    },
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"],
        date: true,
        year: true,
        customer: true,
        marketCalcMethod: true
    },
    {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"],
        date: true,
        year: true,
        crop: true
    }
];
var PLAN_PASSED_STATUS_COLOR = '#EF9A9A';
var PLAN_STATUS_COLOR = '#FFF59D';
var EXECUTE_STATUS_COLOR = '#C5E1A5';
var DUPLICATE_COLOR = '#ffc107';
var WHITE = 'white';
var getColor = function(isDuplicate, isExecutePlan) {
    if (isDuplicate) {
        return DUPLICATE_COLOR;
    } else if (isExecutePlan) {
        return EXECUTE_STATUS_COLOR;
    } else {
        return null;
    }
};
var ActivityHeaderView = function(param) {
    var activity = param.activity, control = param.control, errors = param.errors, customers = param.customers, activityDefs = param.activityDefs, type = param.type, crops = param.crops, reference = param.reference, isDuplicate = param.isDuplicate, execution = param.execution, days = param.days, crop = param.crop, onCropCHange = param.onCropCHange, isExecutePlan = param.isExecutePlan;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var config = HEADER_CONFIG.filter(function(e) {
        return type === e.type;
    })[0];
    var _onCropChange = function(onChange, data) {
        onChange(data);
        onCropCHange();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        margin: 1,
        paddingTop: 1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    backgroundColor: getColor(isDuplicate, isExecutePlan),
                                    borderRadius: 2,
                                    paddingLeft: 1,
                                    paddingRight: 1
                                },
                                variant: "h6",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivityTypeText"])(type, text, true)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                sx: {
                                    bgcolor: 'white'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$ActivityTypeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: type
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        flex: 1,
                        variant: "h6",
                        children: reference
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "year",
                        rules: {
                            required: true
                        },
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                id: "outlined-select-year",
                                select: true
                            }, field), {
                                size: "small",
                                label: text.year,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYearArray"])().map(function(option) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: option,
                                        children: option
                                    }, option, false, {
                                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, void 0);
                                })
                            }), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 65,
                                columnNumber: 13
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                lineNumber: 52,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                paddingTop: 2,
                display: 'flex',
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        name: "execution",
                        control: control,
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                label: config.endDate ? text.start : text.date,
                                closeOnSelect: true,
                                showToolbar: false,
                                localeText: {
                                    cancelButtonLabel: text.cancel,
                                    clearButtonLabel: text.clear,
                                    okButtonLabel: text.save
                                },
                                slotProps: {
                                    textField: {
                                        size: 'small',
                                        variant: 'outlined',
                                        sx: {
                                            flex: 1
                                        }
                                    },
                                    actionBar: {
                                        actions: [
                                            "cancel" /*, "clear"*/ 
                                        ]
                                    }
                                }
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 86,
                                columnNumber: 13
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 1
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, _this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"] === type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                            name: "sprayParams.crop",
                            control: control,
                            rules: {
                                required: true
                            },
                            render: function(_0) {
                                var _ref = _0.field, ref = _ref.ref, onChange = _ref.onChange, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                    "ref",
                                    "onChange"
                                ]);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                    blurOnSelect: true,
                                    onChange: function(_, data) {
                                        return _onCropChange(onChange, data);
                                    },
                                    options: crops.filter(function(e) {
                                        return e.active;
                                    }),
                                    fullWidth: true,
                                    size: "small",
                                    getOptionLabel: function(option) {
                                        return option ? option.name : '';
                                    },
                                    isOptionEqualToValue: function(option, value) {
                                        var _ref;
                                        var _option_id, _this;
                                        return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                    },
                                    renderInput: function(params) {
                                        var _errors_sprayParams;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                            error: ((_errors_sprayParams = errors.sprayParams) === null || _errors_sprayParams === void 0 ? void 0 : _errors_sprayParams.crop) ? true : false,
                                            sx: {
                                                marginTop: 0.5
                                            }
                                        }, params), {
                                            label: text.crop
                                        }), void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                            lineNumber: 115,
                                            columnNumber: 42
                                        }, void 0);
                                    }
                                }, field), void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                    lineNumber: 107,
                                    columnNumber: 67
                                }, void 0);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                            lineNumber: 103,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 102,
                        columnNumber: 11
                    }, _this),
                    config.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "executionEnd",
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                closeOnSelect: true,
                                showToolbar: false,
                                minDate: execution,
                                label: text.end,
                                localeText: {
                                    cancelButtonLabel: text.cancel,
                                    clearButtonLabel: text.clear,
                                    okButtonLabel: text.save
                                },
                                slotProps: {
                                    textField: {
                                        size: 'small',
                                        error: (errors === null || errors === void 0 ? void 0 : errors.executionEnd) ? true : false,
                                        variant: 'outlined',
                                        sx: {
                                            flex: 1
                                        }
                                    },
                                    actionBar: {
                                        actions: [
                                            "cancel" /*, "clear"*/ 
                                        ]
                                    }
                                }
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 126,
                                columnNumber: 36
                            }, void 0);
                        },
                        rules: {
                            required: true,
                            min: execution
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 122,
                        columnNumber: 11
                    }, _this),
                    config.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        justifyContent: 'end',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DecoratedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: "".concat(days, " ").concat(text.days),
                                error: days < 1
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 143,
                                columnNumber: 73
                            }, _this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 143,
                        columnNumber: 28
                    }, _this),
                    config.activity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        name: "activityDef",
                        control: control,
                        rules: {
                            required: true
                        },
                        render: function(_0) {
                            var _ref = _0.field, ref = _ref.ref, onChange = _ref.onChange, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                "ref",
                                "onChange"
                            ]);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                blurOnSelect: true,
                                onChange: function(_, data) {
                                    return onChange(data);
                                },
                                options: activityDefs.filter(function(e) {
                                    return e.active && config.activityType === e.type;
                                }),
                                sx: {
                                    flex: 1.6
                                },
                                // fullWidth
                                size: "small",
                                getOptionLabel: function(option) {
                                    return option ? option.name : '';
                                },
                                isOptionEqualToValue: function(option, value) {
                                    var _ref;
                                    var _option_id, _this;
                                    return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                },
                                renderInput: function(params) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                        error: errors.activityDef ? true : false,
                                        sx: {
                                            marginTop: 0.5
                                        }
                                    }, params), {
                                        label: text.activity
                                    }), void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                        lineNumber: 158,
                                        columnNumber: 40
                                    }, void 0);
                                }
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 149,
                                columnNumber: 65
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 145,
                        columnNumber: 11
                    }, _this),
                    config.endHour && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "endHour",
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$TimePicker$2f$TimePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimePicker"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                closeOnSelect: true,
                                showToolbar: false,
                                label: text.endHour,
                                localeText: {
                                    cancelButtonLabel: text.cancel,
                                    clearButtonLabel: text.clear,
                                    okButtonLabel: text.save
                                },
                                slotProps: {
                                    textField: {
                                        size: 'small',
                                        error: (errors === null || errors === void 0 ? void 0 : errors.endHour) ? true : false,
                                        variant: 'outlined',
                                        sx: {
                                            flex: 1
                                        }
                                    },
                                    actionBar: {
                                        actions: []
                                    }
                                }
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 169,
                                columnNumber: 36
                            }, void 0);
                        },
                        rules: {
                            required: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 165,
                        columnNumber: 11
                    }, _this),
                    config.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        name: "customer",
                        rules: {
                            required: true
                        },
                        control: control,
                        render: function(_0) {
                            var _ref = _0.field, ref = _ref.ref, onChange = _ref.onChange, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                "ref",
                                "onChange"
                            ]);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                disablePortal: true,
                                blurOnSelect: true,
                                onChange: function(_, data) {
                                    return onChange(data);
                                },
                                options: customers,
                                sx: {
                                    flex: 1
                                },
                                size: "small",
                                getOptionLabel: function(option) {
                                    return option ? option.name : '';
                                },
                                isOptionEqualToValue: function(option, value) {
                                    var _ref;
                                    var _option_id, _this;
                                    return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                },
                                renderInput: function(params) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                        error: errors.customer ? true : false,
                                        sx: {
                                            marginTop: 0.5
                                        }
                                    }, params), {
                                        label: text.customer
                                    }), void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                        lineNumber: 199,
                                        columnNumber: 40
                                    }, void 0);
                                }
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 190,
                                columnNumber: 65
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 186,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                lineNumber: 81,
                columnNumber: 7
            }, _this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"] === type && crop && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(crop.stages) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                paddingTop: 1,
                display: 'flex',
                flex: 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                    control: control,
                    name: "scoutParams.phenologicalStage",
                    render: function(param) {
                        var field = param.field;
                        var _crop_stages;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            sx: {
                                flex: 1
                            },
                            id: "outlined-select-crop-phenologicalStage",
                            select: true
                        }, field), {
                            size: "small",
                            label: text.phenologicalStage,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {}, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                        lineNumber: 251,
                                        columnNumber: 27
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, void 0),
                                (_crop_stages = crop.stages) === null || _crop_stages === void 0 ? void 0 : _crop_stages.map(function(option) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: option,
                                        children: option
                                    }, option, false, {
                                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, void 0);
                                })
                            ]
                        }), void 0, true, {
                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                            lineNumber: 243,
                            columnNumber: 15
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                    lineNumber: 239,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                lineNumber: 238,
                columnNumber: 9
            }, _this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                display: 'flex',
                marginTop: 2,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        name: "sprayParams.crop",
                        control: control,
                        rules: {
                            required: true
                        },
                        render: function(_0) {
                            var _ref = _0.field, ref = _ref.ref, onChange = _ref.onChange, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                "ref",
                                "onChange"
                            ]);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                // disablePortal
                                blurOnSelect: true,
                                onChange: function(_, data) {
                                    return _onCropChange(onChange, data);
                                },
                                options: crops.filter(function(e) {
                                    return e.active;
                                }),
                                // sx={{ width: 150 }}
                                fullWidth: true,
                                size: "small",
                                getOptionLabel: function(option) {
                                    return option ? option.name : '';
                                },
                                isOptionEqualToValue: function(option, value) {
                                    var _ref;
                                    var _option_id, _this;
                                    return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                },
                                renderInput: function(params) {
                                    var _errors_sprayParams;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                        error: ((_errors_sprayParams = errors.sprayParams) === null || _errors_sprayParams === void 0 ? void 0 : _errors_sprayParams.crop) ? true : false,
                                        sx: {
                                            marginTop: 0.5
                                        }
                                    }, params), {
                                        label: text.crop
                                    }), void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                        lineNumber: 279,
                                        columnNumber: 40
                                    }, void 0);
                                }
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 269,
                                columnNumber: 65
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 265,
                        columnNumber: 11
                    }, _this),
                    config.wind && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 1
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 282,
                        columnNumber: 27
                    }, _this),
                    config.wind && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "sprayParams.wind",
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                id: "outlined-select-wind",
                                select: true
                            }, field), {
                                size: "small",
                                label: text.windSpeed,
                                fullWidth: true,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWinds"])().map(function(option) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: option,
                                        children: text[option]
                                    }, option, false, {
                                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                        lineNumber: 296,
                                        columnNumber: 19
                                    }, void 0);
                                })
                            }), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 287,
                                columnNumber: 15
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 283,
                        columnNumber: 27
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                lineNumber: 264,
                columnNumber: 9
            }, _this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"] === type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                marginTop: 2,
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                            control: control,
                            name: "waybill",
                            render: function(param) {
                                var field = param.field;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                    size: "small",
                                    sx: {
                                        flex: 1
                                    },
                                    id: "activity-waybill",
                                    label: text.waybill
                                }, field), void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                    lineNumber: 312,
                                    columnNumber: 17
                                }, void 0);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                            lineNumber: 308,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            margin: 1
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                            lineNumber: 318,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                            name: "customer",
                            rules: {
                                required: true
                            },
                            control: control,
                            render: function(_0) {
                                var _ref = _0.field, ref = _ref.ref, onChange = _ref.onChange, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                    "ref",
                                    "onChange"
                                ]);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                    disablePortal: true,
                                    blurOnSelect: true,
                                    onChange: function(_, data) {
                                        return onChange(data);
                                    },
                                    options: customers,
                                    sx: {
                                        flex: 1
                                    },
                                    size: "small",
                                    getOptionLabel: function(option) {
                                        return option ? option.name : '';
                                    },
                                    isOptionEqualToValue: function(option, value) {
                                        var _ref;
                                        var _option_id, _this;
                                        return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                    },
                                    renderInput: function(params) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                            error: errors.customer ? true : false,
                                            sx: {
                                                marginTop: 0.5
                                            }
                                        }, params), {
                                            label: text.customer
                                        }), void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                            lineNumber: 332,
                                            columnNumber: 42
                                        }, void 0);
                                    }
                                }, field), void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                    lineNumber: 323,
                                    columnNumber: 67
                                }, void 0);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                            lineNumber: 319,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                    lineNumber: 307,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                lineNumber: 306,
                columnNumber: 9
            }, _this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"] === type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                marginTop: 2,
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "invoice",
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                size: "small",
                                sx: {
                                    flex: 1
                                },
                                id: "activity-invoice",
                                label: text.invoice
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 353,
                                columnNumber: 15
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 349,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 1
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 359,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        name: "marketParams.sortDate",
                        control: control,
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                label: text.sort,
                                closeOnSelect: true,
                                showToolbar: false,
                                localeText: {
                                    cancelButtonLabel: text.cancel,
                                    clearButtonLabel: text.clear,
                                    okButtonLabel: text.save
                                },
                                slotProps: {
                                    textField: {
                                        size: 'small',
                                        variant: 'outlined',
                                        sx: {
                                            flex: 1
                                        } /*sx: { maxWidth: getMinDateWidth() } */ 
                                    },
                                    actionBar: {
                                        actions: [
                                            "cancel",
                                            "clear"
                                        ]
                                    }
                                }
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 364,
                                columnNumber: 15
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 360,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                lineNumber: 341,
                columnNumber: 9
            }, _this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"] === type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                marginTop: 2,
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "marketParams.incomeCalc",
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                id: "outlined-select-incomeCalc",
                                select: true
                            }, field), {
                                size: "small",
                                label: text.incomeCalc,
                                sx: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: '',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: text.none
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, void 0)
                                    }, '', false, {
                                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, void 0),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarketingIncomeCalcOptions"])().map(function(option) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                            value: option,
                                            children: text[option]
                                        }, option, false, {
                                            fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                            lineNumber: 403,
                                            columnNumber: 19
                                        }, void 0);
                                    })
                                ]
                            }), void 0, true, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 389,
                                columnNumber: 15
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 385,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 1
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 410,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "marketParams.sortReference",
                        render: function(param) {
                            var field = param.field;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                size: "small",
                                sx: {
                                    flex: 1
                                },
                                id: "activity-sortReference",
                                label: text.sortReference
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                                lineNumber: 415,
                                columnNumber: 15
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                        lineNumber: 411,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
                lineNumber: 383,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/header/ActivityHeaderView.js",
        lineNumber: 51,
        columnNumber: 5
    }, _this);
};
_s(ActivityHeaderView, "6VGIJY2ZBpHkWzECv8FWAjvZPaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ActivityHeaderView;
const __TURBOPACK__default__export__ = ActivityHeaderView;
var _c;
__turbopack_context__.k.register(_c, "ActivityHeaderView");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/fields/ActivityFieldDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Autocomplete/Autocomplete.js [app-client] (ecmascript) <locals> <export default as Autocomplete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ControlPointDuplicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ControlPointDuplicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$utils$2f$containersApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/utils/containersApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionApprovalDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ActionApprovalDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
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
;
;
;
var ActivityFieldDialog = function(param) {
    var selectedRow = param.selectedRow, selectedIndex = param.selectedIndex, handleClose = param.handleClose, activityType = param.activityType, update = param.update, remove = param.remove, prepend = param.prepend;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var isMarket = activityType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"];
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.fieldNote ? selectedRow.fieldNote : ''), 2), note = _useState[0], setNote = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.activityArea), 2), activityArea = _useState1[0], setActivityArea = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.actualExecution), 2), actualExecution = _useState2[0], setActualExecution = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.qty), 2), qty = _useState3[0], setQty = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.weight), 2), weight = _useState4[0], setWeight = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activityType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"] ? selectedRow.container : null), 2), container = _useState5[0], setContainer = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), duplicateOpen = _useState6[0], setDuplicateOpen = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMarket ? selectedRow.fieldMarketParams.marketingQuality : null), 2), quality = _useState7[0], setQuality = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMarket ? selectedRow.fieldMarketParams.marketingSize : null), 2), size = _useState8[0], setSize = _useState8[1];
    var _useState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMarket ? selectedRow.fieldMarketParams.marketingDestination : null), 2), destination = _useState9[0], setDestination = _useState9[1];
    var _useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMarket ? selectedRow.fieldMarketParams.income : null), 2), income = _useState10[0], setIncome = _useState10[1];
    var _useState11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMarket ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeDiv"])(selectedRow.fieldMarketParams.income, selectedRow.qty) : null), 2), incomePerUnit = _useState11[0], setIncomePerUnit = _useState11[1];
    var _useState12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMarket ? selectedRow.fieldMarketParams.waybill : null), 2), waybill = _useState12[0], setWaybill = _useState12[1];
    var _useGetContainersQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$utils$2f$containersApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetContainersQuery"])({}, {
        skip: activityType !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"]
    }), containers = _useGetContainersQuery.data, isContainersSuccess = _useGetContainersQuery.isSuccess;
    var _useGetQualitiesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$utils$2f$containersApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetQualitiesQuery"])({}, {
        skip: !isMarket
    }), qualities = _useGetQualitiesQuery.data, isQUalitiesSuccess = _useGetQualitiesQuery.isSuccess;
    var _useGetSizesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$utils$2f$containersApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetSizesQuery"])({}, {
        skip: !isMarket
    }), sizes = _useGetSizesQuery.data, isSizesSuccess = _useGetSizesQuery.isSuccess;
    var isExecute = activityType !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"];
    var onAction = function(save) {
        if (save) {
            selectedRow.activityArea = activityArea;
            selectedRow.fieldNote = note;
            selectedRow.actualExecution = actualExecution;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"] === activityType) {
                selectedRow.qty = qty;
                selectedRow.weight = weight;
                selectedRow.container = container;
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"] === activityType) {
                selectedRow.qty = qty;
                selectedRow.weight = weight;
                selectedRow.fieldMarketParams.marketingDestination = destination;
                selectedRow.fieldMarketParams.marketingSize = size;
                selectedRow.fieldMarketParams.marketingQuality = quality;
                selectedRow.fieldMarketParams.income = income;
                selectedRow.fieldMarketParams.waybill = waybill;
            }
            update(selectedIndex, selectedRow);
        }
        handleClose();
    };
    var handleSetActivityArea = function(val) {
        setActivityArea(val > 0 ? val : selectedRow.field.area);
    };
    var handleDuplicate = function(val) {
        setDuplicateOpen(false);
        if (val) {
            prepend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, selectedRow));
            handleClose();
        }
    };
    var onIncomeChange = function(value) {
        setIncome(value);
        if (value && qty) {
            setIncomePerUnit((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeDiv"])(value, qty));
        }
    };
    var onIncomePerUnitChange = function(value) {
        setIncomePerUnit(value);
        if (value && qty) {
            setIncome((value * qty).toFixed(0));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActivityFieldDialog.useEffect": function() {
            if (incomePerUnit) {
                setIncome((incomePerUnit * qty).toFixed(0));
            }
        }
    }["ActivityFieldDialog.useEffect"], [
        qty
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: selectedRow !== null,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: function() {
                            return onAction(false);
                        },
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayFieldName"])(selectedRow.field)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                        lineNumber: 112,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        id: "alert-dialog-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        component: 'div',
                                        children: [
                                            " ",
                                            selectedRow.field.cropName,
                                            " / ",
                                            selectedRow.field.varietyName,
                                            " - ",
                                            selectedRow.field.area,
                                            " ",
                                            text[user.areaUnit]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, _this),
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"]
                                ].includes(activityType) && // <Button size='large'  startIcon={<ControlPointDuplicate />}  onClick={_=>console.log('duplicate field')}>{text.duplicate}</Button>
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    onClick: function(_) {
                                        return setDuplicateOpen(true);
                                    },
                                    color: "primary",
                                    "aria-label": "duplicate-activity-field",
                                    size: "large",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ControlPointDuplicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "large"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 128,
                                        columnNumber: 33
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                            lineNumber: 119,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                        lineNumber: 118,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: [
                            !isMarket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            flex: 1
                                        },
                                        value: activityArea,
                                        onChange: function(e) {
                                            return handleSetActivityArea(Number(e.target.value));
                                        },
                                        type: "number",
                                        label: text[user.areaUnit]
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        margin: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], {
                                        label: text.executedDate,
                                        closeOnSelect: true,
                                        localeText: {
                                            cancelButtonLabel: text.cancel,
                                            clearButtonLabel: text.clear
                                        },
                                        showToolbar: false,
                                        value: actualExecution,
                                        onChange: function(e) {
                                            return setActualExecution(e);
                                        },
                                        slotProps: {
                                            textField: {
                                                size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI_SIZE"],
                                                variant: 'outlined',
                                                sx: {
                                                    marginTop: 0.5,
                                                    flex: 1
                                                }
                                            },
                                            actionBar: {
                                                actions: [
                                                    "cancel",
                                                    "clear"
                                                ]
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 134,
                                columnNumber: 35
                            }, _this),
                            isMarket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            flex: 1
                                        },
                                        value: waybill,
                                        onChange: function(e) {
                                            return setWaybill(e.target.value);
                                        },
                                        label: text.waybill
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 156,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        margin: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        id: "outlined-select-destination",
                                        select: true,
                                        onChange: function(e) {
                                            return setDestination(e.target.value);
                                        },
                                        value: destination,
                                        label: text.destination,
                                        sx: {
                                            flex: 1
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarketingDestinations"])().map(function(option) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                value: option,
                                                children: text[option.replace('Destination', '')]
                                            }, option, false, {
                                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                                lineNumber: 167,
                                                columnNumber: 33
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 155,
                                columnNumber: 34
                            }, _this),
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"]
                            ].includes(activityType) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flexDirection: 'row',
                                flex: 1,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            flex: 1
                                        },
                                        value: qty,
                                        onChange: function(e) {
                                            return setQty(Number(e.target.value));
                                        },
                                        type: "number",
                                        label: text.qty
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        margin: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 178,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            flex: 1
                                        },
                                        value: weight,
                                        onChange: function(e) {
                                            return setWeight(Number(e.target.value));
                                        },
                                        type: "number",
                                        label: text[user.weightUnit]
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 179,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 176,
                                columnNumber: 25
                            }, _this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"] === activityType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], {
                                blurOnSelect: true,
                                value: container,
                                onChange: function(_, data) {
                                    return setContainer(data);
                                },
                                options: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(containers) ? containers : [
                                    container
                                ],
                                //fullWidth
                                getOptionLabel: function(option) {
                                    return option ? option.name : '';
                                },
                                isOptionEqualToValue: function(option, value) {
                                    var _ref;
                                    var _option_id, _this;
                                    return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                },
                                renderInput: function(params) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, params), {
                                        label: text.container
                                    }), void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 191,
                                        columnNumber: 54
                                    }, void 0);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 183,
                                columnNumber: 25
                            }, _this),
                            isMarket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], {
                                        blurOnSelect: true,
                                        value: size,
                                        onChange: function(_, data) {
                                            return setSize(data);
                                        },
                                        options: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(sizes) ? sizes : [
                                            size
                                        ],
                                        fullWidth: true,
                                        getOptionLabel: function(option) {
                                            return option ? option.name : '';
                                        },
                                        isOptionEqualToValue: function(option, value) {
                                            var _ref;
                                            var _option_id, _this;
                                            return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                        },
                                        renderInput: function(params) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, params), {
                                                label: text.size
                                            }), void 0, false, {
                                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                                lineNumber: 204,
                                                columnNumber: 58
                                            }, void 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        margin: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 206,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], {
                                        blurOnSelect: true,
                                        value: quality,
                                        onChange: function(_, data) {
                                            return setQuality(data);
                                        },
                                        options: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(qualities) ? qualities : [
                                            quality
                                        ],
                                        fullWidth: true,
                                        getOptionLabel: function(option) {
                                            return option ? option.name : '';
                                        },
                                        isOptionEqualToValue: function(option, value) {
                                            var _ref;
                                            var _option_id, _this;
                                            return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                        },
                                        renderInput: function(params) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, params), {
                                                label: text.quality
                                            }), void 0, false, {
                                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                                lineNumber: 216,
                                                columnNumber: 58
                                            }, void 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 208,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 195,
                                columnNumber: 25
                            }, _this),
                            isMarket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flexDirection: 'row',
                                flex: 1,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            flex: 1
                                        },
                                        value: incomePerUnit,
                                        onChange: function(e) {
                                            return onIncomePerUnitChange(Number(e.target.value));
                                        },
                                        type: "number",
                                        label: "".concat(text.unitCost)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 222,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        margin: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 223,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            flex: 1
                                        },
                                        value: income,
                                        onChange: function(e) {
                                            return onIncomeChange(Number(e.target.value));
                                        },
                                        type: "number",
                                        label: "".concat(text.income)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                        lineNumber: 224,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 221,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: note,
                                onChange: function(e) {
                                    return setNote(e.target.value);
                                },
                                fullWidth: true,
                                label: "".concat(text.fieldNote)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 228,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                        lineNumber: 133,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        sx: {
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                size: "large",
                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                    lineNumber: 231,
                                    columnNumber: 51
                                }, void 0),
                                disableElevation: true,
                                variant: "outlined",
                                onClick: remove,
                                children: text.delete
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 231,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                size: "large",
                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                    lineNumber: 232,
                                    columnNumber: 51
                                }, void 0),
                                disableElevation: true,
                                variant: "contained",
                                onClick: function() {
                                    return onAction(true);
                                },
                                children: text.save
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                                lineNumber: 232,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                        lineNumber: 230,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                lineNumber: 106,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionApprovalDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: duplicateOpen,
                handleClose: handleDuplicate,
                title: "".concat(text.duplicate, " ").concat(text.field, "?"),
                okText: text.duplicate,
                cancelText: text.cancel
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
                lineNumber: 237,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/fields/ActivityFieldDialog.js",
        lineNumber: 104,
        columnNumber: 9
    }, _this);
};
_s(ActivityFieldDialog, "DouYS5yEYq3lXsiVtWAsfM9enK8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$utils$2f$containersApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetContainersQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$utils$2f$containersApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetQualitiesQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$utils$2f$containersApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetSizesQuery"]
    ];
});
_c = ActivityFieldDialog;
const __TURBOPACK__default__export__ = ActivityFieldDialog;
var _c;
__turbopack_context__.k.register(_c, "ActivityFieldDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
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
var UpdateAllFieldsDialog = function(param) {
    var open = param.open, text = param.text, handleClose = param.handleClose, areaUnit = param.areaUnit, activityArea = param.activityArea, totalWeight = param.totalWeight, totalQty = param.totalQty, weightUnit = param.weightUnit, fields = param.fields, replace = param.replace;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(totalWeight), 2), _totalWeight = _useState[0], setTotalWeight = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(totalQty), 2), _totalQty = _useState1[0], setTotalQty = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), touched = _useState2[0], setTouched = _useState2[1];
    // useEffect(() => {
    //     setTouched(true)
    //   }, [_totalWeight,_totalQty])
    var handleTotalWeight = function(val) {
        setTotalWeight(val);
        setTouched(true);
    };
    var handleTotalQty = function(val) {
        setTotalQty(val);
        setTouched(true);
    };
    var onAction = function(val) {
        if (val) {
            var newFields = fields.slice();
            var qtyPerAreaUnit = _totalQty / activityArea;
            var weightPerAreaUnit = _totalWeight / activityArea;
            newFields.forEach(function(e, index, arr) {
                var _e_container;
                e.qty = Number((qtyPerAreaUnit * e.activityArea).toFixed(2));
                if (((_e_container = e.container) === null || _e_container === void 0 ? void 0 : _e_container.capacity) > 0) {
                    var _e_container1;
                    e.weight = Number((e.qty * ((_e_container1 = e.container) === null || _e_container1 === void 0 ? void 0 : _e_container1.capacity)).toFixed(2));
                } else {
                    e.weight = Number((weightPerAreaUnit * e.activityArea).toFixed(2));
                }
            });
            replace(newFields);
            console.log('save..');
        }
        handleClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: function() {
                    return onAction(false);
                },
                title: text.updateFields
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                lineNumber: 57,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    display: 'flex',
                    flexDirection: 'row',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "number",
                            value: _totalQty,
                            onChange: function(e) {
                                return handleTotalQty(Number(e.target.value));
                            },
                            fullWidth: true,
                            label: "".concat(text.total, " ").concat(text.qty)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                            lineNumber: 61,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            margin: 1
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                            lineNumber: 62,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "number",
                            value: _totalWeight,
                            onChange: function(e) {
                                return handleTotalWeight(Number(e.target.value));
                            },
                            fullWidth: true,
                            label: "".concat(text.total, " ").concat(text[weightUnit])
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                            lineNumber: 63,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                    lineNumber: 60,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                lineNumber: 59,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                sx: {
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    disabled: !touched,
                    size: "large",
                    endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                        lineNumber: 68,
                        columnNumber: 67
                    }, void 0),
                    disableElevation: true,
                    variant: "contained",
                    onClick: function() {
                        return onAction(true);
                    },
                    children: text.save
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                    lineNumber: 68,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
                lineNumber: 67,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js",
        lineNumber: 51,
        columnNumber: 9
    }, _this);
};
_s(UpdateAllFieldsDialog, "depCUi4PbGBUqKSK5YPL+8iD578=");
_c = UpdateAllFieldsDialog;
const __TURBOPACK__default__export__ = UpdateAllFieldsDialog;
var _c;
__turbopack_context__.k.register(_c, "UpdateAllFieldsDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/ActivityUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReference",
    ()=>getReference,
    "getTotalActivityArea",
    ()=>getTotalActivityArea,
    "getTotalByField",
    ()=>getTotalByField,
    "getTotalFieldArea",
    ()=>getTotalFieldArea,
    "getTotalQty",
    ()=>getTotalQty,
    "getTotalweight",
    ()=>getTotalweight,
    "isSkipTariffFetch",
    ()=>isSkipTariffFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
;
;
function getReference(type, resources, activityDef) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(type)) {
        var sprayer = resources.find(function(e) {
            return e.resource.category === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAYER"];
        });
        if (sprayer) {
            return sprayer.id;
        }
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVITY_DEF_TYPES"].includes(type) && activityDef) {
        return activityDef.id;
    }
}
function isSkipTariffFetch(isDirty, isFinanace, resources) {
    if (!isFinanace) {
        return true;
    }
    if (!isDirty) {
        return true;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(resources)) {
        return true;
    }
    return false;
}
function getTotalByField(fields, fieldName, decimalPiont) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(fields)) {
        return 0;
    }
    var values = fields.filter(function(e) {
        return e[fieldName];
    }).map(function(e) {
        return e[fieldName];
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(values)) {
        return 0;
    }
    var sum = values.reduce(function(a, b) {
        return a + b;
    });
    return Number(sum.toFixed(decimalPiont ? decimalPiont : 2));
}
function getTotalQty(fields, decimalPiont) {
    return getTotalByField(fields, 'qty', decimalPiont);
}
function getTotalweight(fields, decimalPiont) {
    return getTotalByField(fields, 'weight', decimalPiont);
}
function getTotalFieldArea(fields, decimalPiont) {
    return getTotalByField(fields, 'area', decimalPiont);
}
function getTotalActivityArea(fields, decimalPiont) {
    return getTotalByField(fields, 'activityArea', decimalPiont);
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/ActivityUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
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
var UpdateAllFieldsAreaDialog = function(param) {
    var open = param.open, text = param.text, handleClose = param.handleClose, areaUnit = param.areaUnit, fields = param.fields, replace = param.replace;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), _percent = _useState[0], setPercent = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), touched = _useState1[0], setTouched = _useState1[1];
    var handlePercent = function(val) {
        if (val > 0) {
            setPercent(val);
            setTouched(true);
        }
    };
    var onAction = function(val) {
        if (val) {
            var newFields = fields.slice();
            newFields.forEach(function(e) {
                var newArea = Number((_percent / 100 * e.field.area).toFixed(2));
                if (newArea > 0) {
                    e.activityArea = newArea;
                }
            });
            replace(newFields);
        }
        handleClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: function() {
                    return onAction(false);
                },
                title: "% ".concat(text.of, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalFieldArea"])(fields.map(function(e) {
                    return e.field;
                })), " ").concat(text[areaUnit])
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js",
                lineNumber: 42,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "number",
                    value: _percent,
                    onChange: function(e) {
                        return handlePercent(Number(e.target.value));
                    },
                    fullWidth: true,
                    InputProps: {
                        endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                            position: "end",
                            children: '%'
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js",
                            lineNumber: 46,
                            columnNumber: 39
                        }, void 0)
                    }
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js",
                    lineNumber: 44,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js",
                lineNumber: 43,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                sx: {
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    disabled: !touched,
                    size: "large",
                    endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js",
                        lineNumber: 52,
                        columnNumber: 67
                    }, void 0),
                    disableElevation: true,
                    variant: "contained",
                    onClick: function() {
                        return onAction(true);
                    },
                    children: text.save
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js",
                    lineNumber: 52,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js",
                lineNumber: 51,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js",
        lineNumber: 36,
        columnNumber: 9
    }, _this);
};
_s(UpdateAllFieldsAreaDialog, "tTsRLKnB0Qc2uroJeiv2SevdJlA=");
_c = UpdateAllFieldsAreaDialog;
const __TURBOPACK__default__export__ = UpdateAllFieldsAreaDialog;
var _c;
__turbopack_context__.k.register(_c, "UpdateAllFieldsAreaDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/fields/ActivityFields.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "newFieldMarketParams",
    ()=>newFieldMarketParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Badge/Badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Table/Table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableBody/TableBody.js [app-client] (ecmascript) <export default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableContainer$2f$TableContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableContainer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableContainer/TableContainer.js [app-client] (ecmascript) <export default as TableContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableHead/TableHead.js [app-client] (ecmascript) <export default as TableHead>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript) <export default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/Util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/fields/fieldsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$FieldsSelectionDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/FieldsSelectionDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DragHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/MoreVert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Percent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AddLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AddLocation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$ActivityFieldDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/fields/ActivityFieldDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$UpdateAllFieldsDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/fields/UpdateAllFieldsDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/ActivityUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$UpdateAllFieldsAreaDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/fields/UpdateAllFieldsAreaDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blue$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/colors/blue.js [app-client] (ecmascript) <export default as blue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__orange$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/colors/orange.js [app-client] (ecmascript) <export default as orange>");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
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
;
;
;
var TRASHHOLD = 3;
function newFieldMarketParams() {
    return {
        marketingDestination: '',
        marketingQuality: null,
        marketingSize: null,
        waybill: '',
        income: 0
    };
}
var ActivityFields = function(param) {
    var activity = param.activity, getValues = param.getValues, control = param.control, register = param.register, errors = param.errors, activityArea = param.activityArea, crop = param.crop, openWaypointSelection = param.openWaypointSelection, setOpenWaypointSelection = param.setOpenWaypointSelection, pointsCount = param.pointsCount, scoutParams = param.scoutParams;
    _s();
    var _useFieldArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"])({
        control: control,
        name: "fields",
        keyName: "key",
        rules: {
            required: true
        }
    }), fields = _useFieldArray.fields, append = _useFieldArray.append, prepend = _useFieldArray.prepend, remove = _useFieldArray.remove, swap = _useFieldArray.swap, move = _useFieldArray.move, insert = _useFieldArray.insert, update = _useFieldArray.update, replace = _useFieldArray.replace;
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var fieldsByYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFields"])(getValues('year'));
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), open = _useState[0], setOpen = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), openBulkUpdateFields = _useState1[0], setOpenBulkUpdateFields = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), openBulkUpdateFieldsArea = _useState2[0], setOpenBulkUpdateFieldsArea = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedRow = _useState3[0], setSelectedRow = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedIndex = _useState4[0], setSelectedIndex = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), expendFields = _useState5[0], setExpendFields = _useState5[1];
    var handleClickOpen = function() {
        setOpen(true);
    };
    var handleOpenEditRow = function(index, row) {
        setSelectedRow(row);
        setSelectedIndex(index);
    };
    var handleCloseEditRow = function() {
        setSelectedRow(null);
        setSelectedIndex(null);
    };
    var handleRemoveRow = function(index) {
        setSelectedRow(null);
        setSelectedIndex(null);
        remove(index);
    };
    var handleClose = function(selectedFields) {
        setOpen(false);
        if (selectedFields) {
            var alreadySelectedIDs = fields.map(function(e) {
                return e.field.id;
            });
            var newtlySelectedFields = selectedFields.filter(function(e) {
                return !alreadySelectedIDs.includes(e.id);
            }).map(function(e) {
                return {
                    field: e,
                    activityArea: e.area,
                    fieldNote: null,
                    actualExecution: null,
                    qty: 0,
                    weight: 0,
                    fieldMarketParams: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"] === activity.type ? newFieldMarketParams() : null
                };
            });
            append(newtlySelectedFields);
        }
    };
    var isWaypointsDisabled = function() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"] === activity.type && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(scoutParams === null || scoutParams === void 0 ? void 0 : scoutParams.scouts)) {
            return true;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(fields);
    };
    var handleCloseBulkUpdateFields = function() {
        setOpenBulkUpdateFields(false);
    };
    var handleCloseBulkUpdateFieldsArea = function() {
        setOpenBulkUpdateFieldsArea(false);
    };
    var getFields = function() {
        return expendFields && fields.length > TRASHHOLD ? fields : fields.slice(0, TRASHHOLD);
    };
    var disabledSelections = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"]).includes(activity.type) && crop === null;
    var isHarvest = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST_TYPES"].includes(activity.type);
    var LocationIconSx = function() {
        if (pointsCount && pointsCount > 0) {
            return {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blue$3e$__["blue"][800]
            };
        } else if (isWaypointsDisabled(fields)) {
            return null;
        } else {
            return {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__orange$3e$__["orange"][800]
            };
        }
    };
    var getAmountTitle = function() {
        if (isHarvest) {
            return text.qty;
        } else {
            return "".concat(text[user.areaUnit]);
        }
    };
    var getTotalValue = function() {
        if (isHarvest) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalQty"])(fields, 0);
        } else {
            return activityArea;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        margin: 1,
        display: 'flex',
        flexDirection: 'column',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                disabled: disabledSelections,
                                size: "large",
                                color: errors.fields ? 'error' : 'primary',
                                disableElevation: true,
                                variant: "contained",
                                onClick: handleClickOpen,
                                children: [
                                    text.fields,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                lineNumber: 154,
                                columnNumber: 21
                            }, _this),
                            fields.length > TRASHHOLD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                sx: {
                                    marginLeft: 1,
                                    marginRight: 1
                                },
                                onClick: function() {
                                    return setExpendFields(!expendFields);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                    badgeContent: fields.length,
                                    color: "info",
                                    children: [
                                        expendFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                            lineNumber: 158,
                                            columnNumber: 50
                                        }, _this),
                                        !expendFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                            lineNumber: 159,
                                            columnNumber: 51
                                        }, _this),
                                        "                            "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                    lineNumber: 157,
                                    columnNumber: 29
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                lineNumber: 156,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                        lineNumber: 153,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        children: [
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"]
                            ].includes(activity.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "large",
                                disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(fields),
                                onClick: function(_) {
                                    return setOpenBulkUpdateFields(true);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                    lineNumber: 164,
                                    columnNumber: 161
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                lineNumber: 164,
                                columnNumber: 59
                            }, _this),
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL"]
                            ].includes(activity.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "large",
                                disabled: isWaypointsDisabled(fields),
                                onClick: function() {
                                    return setOpenWaypointSelection(true);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AddLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: LocationIconSx(),
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                    lineNumber: 165,
                                    columnNumber: 177
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                lineNumber: 165,
                                columnNumber: 66
                            }, _this),
                            ![
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"]
                            ].includes(activity.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "large",
                                disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(fields),
                                onClick: function(_) {
                                    return setOpenBulkUpdateFieldsArea(true);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                    lineNumber: 166,
                                    columnNumber: 165
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                lineNumber: 166,
                                columnNumber: 59
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "large",
                                disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(fields),
                                onClick: function(e) {
                                    return remove();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                    lineNumber: 167,
                                    columnNumber: 102
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                lineNumber: 167,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                        lineNumber: 163,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                lineNumber: 152,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableContainer$2f$TableContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableContainer$3e$__["TableContainer"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                    size: "small",
                    sx: {
                        margin: 0,
                        padding: 0
                    },
                    "aria-label": "a dense table",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__["TableHead"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                        children: text.field
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                        lineNumber: 175,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                        children: text.alias
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                        lineNumber: 176,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                        children: text.crop
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                        children: text.variety
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                        lineNumber: 178,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                        children: getAmountTitle()
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                        lineNumber: 179,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                lineNumber: 174,
                                columnNumber: 25
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                            lineNumber: 173,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__["TableBody"], {
                            children: [
                                getFields().map(function(row, index) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                        index: index,
                                        row: row,
                                        text: text,
                                        register: register,
                                        remove: remove,
                                        onClick: function() {
                                            return handleOpenEditRow(index, row);
                                        },
                                        isHarvest: isHarvest
                                    }, row.key, false, {
                                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                        lineNumber: 184,
                                        columnNumber: 29
                                    }, _this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                            colSpan: 4,
                                            children: "".concat(text.total, " ").concat(getAmountTitle())
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                            children: getTotalValue()
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                            lineNumber: 188,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                                    lineNumber: 186,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                            lineNumber: 182,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                    lineNumber: 172,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                lineNumber: 171,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$FieldsSelectionDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                fields: fieldsByYear,
                handleClose: handleClose,
                cropId: crop === null || crop === void 0 ? void 0 : crop.id
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                lineNumber: 193,
                columnNumber: 13
            }, _this),
            selectedRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$ActivityFieldDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selectedIndex: selectedIndex,
                selectedRow: selectedRow,
                activityType: activity.type,
                handleClose: handleCloseEditRow,
                update: update,
                remove: function() {
                    return handleRemoveRow(selectedIndex);
                },
                prepend: prepend
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                lineNumber: 194,
                columnNumber: 29
            }, _this),
            openBulkUpdateFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$UpdateAllFieldsDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: openBulkUpdateFields,
                text: text,
                totalQty: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalQty"])(fields),
                fields: fields,
                totalWeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalweight"])(fields),
                weightUnit: user.weightUnit,
                activityArea: activityArea,
                handleClose: handleCloseBulkUpdateFields,
                replace: replace
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                lineNumber: 195,
                columnNumber: 38
            }, _this),
            openBulkUpdateFieldsArea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$UpdateAllFieldsAreaDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: openBulkUpdateFieldsArea,
                text: text,
                activityArea: activityArea,
                fields: fields,
                areaUnit: user.areaUnit,
                handleClose: handleCloseBulkUpdateFieldsArea,
                replace: replace
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                lineNumber: 202,
                columnNumber: 42
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
        lineNumber: 151,
        columnNumber: 9
    }, _this);
};
_s(ActivityFields, "68d0fWw6mbzJ5Zx6CKBtIFR27J4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFields"]
    ];
});
_c = ActivityFields;
function Row(props) {
    var row = props.row, index = props.index, text = props.text, onClick = props.onClick, register = props.register, remove = props.remove, isHarvest = props.isHarvest;
    //        {...register(`test.${index}.value`)} 
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, register("field.".concat(index, ".fieldMarketParams"))), {
            key: index,
            sx: {
                '&:last-child td, &:last-child th': {
                    border: 0
                }
            },
            __source: {
                fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                lineNumber: 218,
                columnNumber: 13
            },
            __self: this,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                    onClick: onClick,
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSxLink"],
                    children: row.field.name
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                    lineNumber: 222,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: row.field.alias
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                    lineNumber: 223,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: row.field.cropName
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                    lineNumber: 224,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: row.field.varietyName
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                    lineNumber: 225,
                    columnNumber: 17
                }, this),
                !isHarvest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                    sx: row.activityArea === row.field.area ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSxChange"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, register("field.".concat(index, ".activityArea"))), {
                        children: row.activityArea.toFixed(2)
                    }), void 0, false, {
                        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                        lineNumber: 227,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                    lineNumber: 226,
                    columnNumber: 32
                }, this),
                isHarvest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: row.qty
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
                    lineNumber: 231,
                    columnNumber: 31
                }, this)
            ]
        }))
    }, void 0, false, {
        fileName: "[project]/src/ui/activity/form/fields/ActivityFields.js",
        lineNumber: 217,
        columnNumber: 9
    }, this);
}
_c1 = Row;
const __TURBOPACK__default__export__ = ActivityFields;
var _c, _c1;
__turbopack_context__.k.register(_c, "ActivityFields");
__turbopack_context__.k.register(_c1, "Row");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/waypoints/ActivityWaypoints.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$WaypointSelectionDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/WaypointSelectionDialog.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
var ActivityWaypoints = function(param) {
    var getValues = param.getValues, control = param.control, openWaypointSelection = param.openWaypointSelection, setOpenWaypointSelection = param.setOpenWaypointSelection, activity = param.activity, setPointsCount = param.setPointsCount, activityDef = param.activityDef;
    _s();
    var _useFieldArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"])({
        control: control,
        name: "points",
        keyName: "key",
        rules: {
            required: false
        }
    }), fields = _useFieldArray.fields, replace = _useFieldArray.replace;
    var handleCloseWaypoints = function(values) {
        setOpenWaypointSelection(false);
        if (values) {
            replace(values);
            setPointsCount(values.length);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$WaypointSelectionDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        activityType: activity.type,
        activityDef: activityDef,
        open: openWaypointSelection,
        handleClose: handleCloseWaypoints,
        fields: getValues('fields'),
        waypoints: fields
    }, void 0, false, {
        fileName: "[project]/src/ui/activity/form/waypoints/ActivityWaypoints.js",
        lineNumber: 22,
        columnNumber: 9
    }, _this);
};
_s(ActivityWaypoints, "dPaA28q67kk6O/+YoU378LdwuvM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"]
    ];
});
_c = ActivityWaypoints;
const __TURBOPACK__default__export__ = ActivityWaypoints;
var _c;
__turbopack_context__.k.register(_c, "ActivityWaypoints");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/resources/ActivityResourceDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmCalculator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/Util.js [app-client] (ecmascript)");
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
;
var getQtyPerWorker = function(selectedRow) {
    if (selectedRow.qty && selectedRow.secondaryQty && selectedRow.secondaryQty != 0) {
        return (selectedRow.qty / selectedRow.secondaryQty).toFixed(2);
    }
    return 0;
};
var getSecondaryQtyConfig = function(selectedRow, user) {
    var val = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECONDARY_QTY_RESOURCES"].find(function(e) {
        return e.type === selectedRow.resource.type;
    });
    if (val && val.gg === true && user.gg === false) {
        return null;
    }
    return val;
};
var isQtyPerAreaUnitFunc = function(selectedRow, irrigationParams) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FERTILIZER"] === selectedRow.resource.type && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStringEmpty"])(irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.fertilizeMethod)) {
        return false;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PESTICIDE"] === selectedRow.resource.type && (selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.pesticideListItem)) {
        return false;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QTY_PER_AREA_UNIT_RESOURCE_TYPE"].includes(selectedRow.resource.type);
};
var ActivityResourceDialog = function(param) {
    var selectedRow = param.selectedRow, selectedIndex = param.selectedIndex, handleClose = param.handleClose, update = param.update, warehouses = param.warehouses, activityArea = param.activityArea, remove = param.remove, resourceUnit = param.resourceUnit, activityType = param.activityType, irrigationParams = param.irrigationParams, sprayParams = param.sprayParams;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.note ? selectedRow.note : ''), 2), note = _useState[0], setNote = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.qty), 2), qty = _useState1[0], setQty = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeDiv"])(selectedRow.qty, activityArea)), 2), qtyPerAreaUnit = _useState2[0], setQtyPerAreaUnit = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.secondaryQty), 2), secondaryQty = _useState3[0], setSecondaryQty = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.tariff ? selectedRow.tariff : 0), 2), tariff = _useState4[0], setTariff = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.warehouse), 2), warehouse = _useState5[0], setWarehouse = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.manualTariff), 2), manualTariff = _useState6[0], setManualTariff = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getQtyPerWorker(selectedRow)), 2), qtyPerWorker = _useState7[0], setQtyPerWorker = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.dosage), 2), dosage = _useState8[0], setDosage = _useState8[1];
    var secondaryQtyConfig = getSecondaryQtyConfig(selectedRow, user);
    var isWarehouse = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAREHOUSE_RESOURCE_TYPE"].includes(selectedRow.resource.type);
    var isQtyPerAreaUnit = isQtyPerAreaUnitFunc(selectedRow, irrigationParams);
    var isWorkerGropup = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORKER_GROUP"] === selectedRow.resource.type;
    var isWater = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER"] === selectedRow.resource.type;
    var isDosage = selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.pesticideListItem;
    console.log(selectedRow);
    var autoCalc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGARION_TYPES"]).includes(activityType) && [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PESTICIDE"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FERTILIZER"]
    ].includes(selectedRow.resource.type) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNIT"].toUpperCase() === selectedRow.resource.usageUnit;
    var onAction = function(save) {
        if (save) {
            if (autoCalc) {
                var qtyChanged = selectedRow.qty !== qty;
                if (qtyChanged) {
                    selectedRow.manualQty = true;
                }
            }
            selectedRow.qty = qty;
            selectedRow.note = note;
            selectedRow.tariff = tariff;
            selectedRow.totalCost = tariff * qty;
            selectedRow.warehouse = warehouse;
            selectedRow.manualTariff = manualTariff;
            if (secondaryQtyConfig || isWorkerGropup) {
                selectedRow.secondaryQty = secondaryQty;
            }
            if (isDosage) {
                selectedRow.dosage = dosage;
            }
            update(selectedIndex, selectedRow);
        }
        handleClose(save);
    };
    var onTariffChange = function(value) {
        setTariff(value);
        setManualTariff(true);
    };
    var onQtyPerAreUnitChange = function(value) {
        setQtyPerAreaUnit(value);
        if (value && activityArea) {
            setQty((value * activityArea).toFixed());
        }
    };
    var onQtyChange = function(value) {
        setQty(value);
        if (isQtyPerAreaUnit && value && activityArea && activityArea !== 0) {
            setQtyPerAreaUnit((value / activityArea).toFixed(2));
        }
    };
    var onDosageChange = function(value) {
        setDosage(value);
        if (value && activityArea && !selectedRow.manualQty) {
            var pesticideListItem = selectedRow.pesticideListItem;
            var calcQty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calacTotalPesticideVolume"])(pesticideListItem.unit, value, sprayParams.volumePerAreaUnit, activityArea);
            setQty(calcQty);
        }
    };
    var onSecondaryQtyChange = function(value) {
        if (secondaryQtyConfig.lessThanQty) {
            if (qty) {
                if (value <= qty) {
                    setSecondaryQty(value);
                } else {
                    setSecondaryQty(qty);
                }
            }
        } else {
            setSecondaryQty(value);
        }
    };
    var onQtyPerWorkerChange = function(value) {
        setQtyPerWorker(value);
        if (value && secondaryQty) {
            setQty((value * secondaryQty).toFixed(2));
        }
    };
    var onWorkerCountChange = function(value) {
        var workerCount = value ? value.toFixed(0) : 0;
        setSecondaryQty(workerCount);
        if (workerCount && qtyPerWorker) {
            setQty((workerCount * qtyPerWorker).toFixed(2));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: selectedRow !== null,
        disableRestoreFocus: true,
        fullScreen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])(),
        fullWidth: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])(),
        slots: {
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: function() {
                    return onAction(false);
                },
                title: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceTypeText"])(selectedRow.resource.type, text), ":  ").concat(selectedRow.resource.name)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                lineNumber: 161,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"] /*sx={{ minHeight: isWarehouse ? height : null }}*/ , {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: qty,
                                onChange: function(e) {
                                    return onQtyChange(Number(e.target.value));
                                },
                                type: "number",
                                label: text.qty,
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                        position: "end",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitText"])(resourceUnit, user.areaUnit, text)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                        lineNumber: 170,
                                        columnNumber: 43
                                    }, void 0)
                                },
                                fullWidth: true
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 167,
                                columnNumber: 21
                            }, _this),
                            isDosage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: dosage,
                                onChange: function(e) {
                                    return onDosageChange(Number(e.target.value));
                                },
                                type: "number",
                                label: "".concat(text.dosage),
                                fullWidth: true,
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                        position: "end",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitText"])(selectedRow.pesticideListItem.unit, user.areaUnit, text)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                        lineNumber: 183,
                                        columnNumber: 47
                                    }, void 0)
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 179,
                                columnNumber: 25
                            }, _this),
                            isQtyPerAreaUnit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: qtyPerAreaUnit,
                                onChange: function(e) {
                                    return onQtyPerAreUnitChange(Number(e.target.value));
                                },
                                type: "number",
                                label: "".concat(text.qty, "/").concat(text[user.areaUnit]),
                                fullWidth: true
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 190,
                                columnNumber: 25
                            }, _this),
                            secondaryQtyConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: secondaryQty ? secondaryQty : 0,
                                onChange: function(e) {
                                    return onSecondaryQtyChange(Number(e.target.value));
                                },
                                type: "number",
                                label: "".concat(text[secondaryQtyConfig.label]),
                                fullWidth: true
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 196,
                                columnNumber: 25
                            }, _this),
                            isWorkerGropup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'row',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: secondaryQty ? secondaryQty : 0,
                                        onChange: function(e) {
                                            return onWorkerCountChange(Number(e.target.value));
                                        },
                                        type: "number",
                                        label: "".concat(text.workerCount),
                                        fullWidth: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                        lineNumber: 201,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        margin: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                        lineNumber: 205,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: qtyPerWorker,
                                        onChange: function(e) {
                                            return onQtyPerWorkerChange(Number(e.target.value));
                                        },
                                        type: "number",
                                        label: "".concat(text.qtyPerWorker),
                                        fullWidth: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                        lineNumber: 206,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 200,
                                columnNumber: 40
                            }, _this),
                            user.financial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: tariff,
                                onChange: function(e) {
                                    return onTariffChange(Number(e.target.value));
                                },
                                type: "number",
                                label: text.unitCost,
                                fullWidth: true,
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                        position: "end",
                                        children: user.currency
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                        lineNumber: 215,
                                        columnNumber: 43
                                    }, void 0)
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 211,
                                columnNumber: 40
                            }, _this),
                            isWarehouse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: warehouse === null || warehouse === void 0 ? void 0 : warehouse.id,
                                id: "outlined-select-warehouse",
                                select: true,
                                label: text.warehouse,
                                onChange: function(e) {
                                    return setWarehouse(warehouses.find(function(w) {
                                        return w.id === Number(e.target.value);
                                    }));
                                },
                                children: warehouses.filter(function(e) {
                                    return e.active;
                                }).map(function(option) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: option.id,
                                        children: option.name
                                    }, option.id, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                        lineNumber: 232,
                                        columnNumber: 33
                                    }, _this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 223,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: note,
                                onChange: function(e) {
                                    return setNote(e.target.value);
                                },
                                fullWidth: true,
                                label: text.resourceNote
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 250,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                        lineNumber: 166,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        sx: {
                            paddingTop: 4,
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                size: "large",
                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                    lineNumber: 253,
                                    columnNumber: 51
                                }, void 0),
                                disableElevation: true,
                                variant: "outlined",
                                onClick: remove,
                                children: text.delete
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 253,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                size: "large",
                                disableElevation: true,
                                variant: "contained",
                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                    lineNumber: 256,
                                    columnNumber: 34
                                }, void 0),
                                onClick: function() {
                                    return onAction(true);
                                },
                                children: text.save
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                                lineNumber: 255,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                        lineNumber: 252,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
                lineNumber: 165,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/resources/ActivityResourceDialog.js",
        lineNumber: 155,
        columnNumber: 9
    }, _this);
};
_s(ActivityResourceDialog, "vKoaYqsymEuYdQYOIRn/B1mxREI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"]
    ];
});
_c = ActivityResourceDialog;
const __TURBOPACK__default__export__ = ActivityResourceDialog;
var _c;
__turbopack_context__.k.register(_c, "ActivityResourceDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/Util.js [app-client] (ecmascript)");
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
var UpdateResourcesQtyDialog = function(param) {
    var open = param.open, units = param.units, text = param.text, handleClose = param.handleClose, areaUnit = param.areaUnit, activityArea = param.activityArea;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), qty = _useState[0], setQty = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), unit = _useState1[0], setUnit = _useState1[1];
    var onAction = function(val) {
        handleClose(val ? unit : null, val ? qty : null);
        setQty('');
        setUnit('');
    };
    var handleSetUnit = function(val) {
        if (val.toLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNIT"] && activityArea) {
            setQty(activityArea);
        }
        setUnit(val);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        disableRestoreFocus: true,
        fullScreen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])(),
        fullWidth: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])(),
        slots: {
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: function() {
                    return onAction(false);
                },
                title: text.bulkQtyUpdate
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                lineNumber: 34,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                sx: {
                                    marginTop: 0.5
                                },
                                value: unit,
                                id: "outlined-select-unit",
                                onChange: function(e) {
                                    return handleSetUnit(e.target.value);
                                },
                                fullWidth: true,
                                select: true,
                                label: text.unit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: '',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {}, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                                            lineNumber: 49,
                                            columnNumber: 55
                                        }, _this)
                                    }, '', false, {
                                        fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, _this),
                                    units.map(function(option) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                            value: option,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitText"])(option, areaUnit, text)
                                        }, option, false, {
                                            fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                                            lineNumber: 51,
                                            columnNumber: 29
                                        }, _this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                                lineNumber: 40,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                margin: 1
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                                lineNumber: 56,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "number",
                                value: qty,
                                onChange: function(e) {
                                    return setQty(Number(e.target.value));
                                },
                                fullWidth: true,
                                label: text.qty
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                                lineNumber: 57,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                        lineNumber: 39,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        sx: {
                            paddingTop: 4,
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            disabled: '' === unit || '' === qty,
                            size: "large",
                            endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                                lineNumber: 60,
                                columnNumber: 88
                            }, void 0),
                            disableElevation: true,
                            variant: "contained",
                            onClick: function() {
                                return onAction(true);
                            },
                            children: text.save
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                            lineNumber: 60,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                        lineNumber: 59,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
                lineNumber: 38,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js",
        lineNumber: 28,
        columnNumber: 9
    }, _this);
};
_s(UpdateResourcesQtyDialog, "83b7DA6ejyBJPNdKBfkTK/k7Kpc=");
_c = UpdateResourcesQtyDialog;
const __TURBOPACK__default__export__ = UpdateResourcesQtyDialog;
var _c;
__turbopack_context__.k.register(_c, "UpdateResourcesQtyDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmCalculator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DecoratedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/DecoratedBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
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
var IrrigationConfigDialog = function(param) {
    var open = param.open, units = param.units, text = param.text, handleClose = param.handleClose, areaUnit = param.areaUnit, activityArea = param.activityArea, days = param.days, irrigationParams = param.irrigationParams;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.irrigationMethod) ? irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.irrigationMethod : ''), 2), irrigationMethod = _useState[0], setIrrigationMethod = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.fertilizeMethod) ? irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.fertilizeMethod : ''), 2), fertilizeMethod = _useState1[0], setFertilizeMethod = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.frequency) ? irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.frequency : 1), 2), frequency = _useState2[0], setFrequency = _useState2[1];
    // const [irrigationDays, setIrrigationDays] = useState(calcIrrigationDays(days,irrigationParams.frequency));
    // useEffect(() => {
    //     if(frequency !== 0){
    //         calcIrrigationDays(days,frequency);
    //     }
    // }, [frequency]);
    var onAction = function(val) {
        handleClose(val ? {
            irrigationMethod: irrigationMethod,
            fertilizeMethod: fertilizeMethod,
            frequency: frequency
        } : null);
    };
    var clear = function() {
        // setIrrigationDays(1);
        setFrequency(1);
        setIrrigationMethod('');
        setFertilizeMethod('');
    };
    var handleSetIrrigationMethod = function(val) {
        setIrrigationMethod(val);
    };
    var handleSetFrequency = function(val) {
        if (val < 1) {
            setFrequency(1);
        } else if (val > days) {
            setFrequency(days);
        } else {
            setFrequency(val);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        // onClose={handleClose}
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: function() {
                    return onAction(false);
                },
                title: ''
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                lineNumber: 58,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        value: irrigationMethod,
                        id: "outlined-select_irrigation-method",
                        onChange: function(e) {
                            return handleSetIrrigationMethod(e.target.value);
                        },
                        fullWidth: true,
                        select: true,
                        label: text.irrigationMethod,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: '',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    style: {
                                        height: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                    lineNumber: 71,
                                    columnNumber: 51
                                }, _this)
                            }, '', false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 71,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PER_AREA_UNIT_PER_DAY"],
                                children: "".concat(text[areaUnit], "/").concat(text.day)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 72,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PER_AREA_UNIT_PER_IRREGATION_DAY"],
                                children: "".concat(text[areaUnit], "/").concat(text.irrigationDay)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 73,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_PER_AREA_UNIT"],
                                children: "".concat(text.total, "/").concat(text[areaUnit])
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 74,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_PER_FIELD"],
                                children: "".concat(text.total, "/  ").concat(text.field)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 75,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                        lineNumber: 63,
                        columnNumber: 17
                    }, _this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PER_AREA_UNIT_PER_IRREGATION_DAY"] === irrigationMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 2
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                        lineNumber: 79,
                        columnNumber: 21
                    }, _this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PER_AREA_UNIT_PER_IRREGATION_DAY"] === irrigationMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    flex: 1
                                },
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PER_AREA_UNIT_PER_IRREGATION_DAY"] !== irrigationMethod ? '' : frequency,
                                onChange: function(e) {
                                    return handleSetFrequency(Number(e.target.value));
                                },
                                type: "number",
                                label: "".concat(text.frequency, ", ").concat(text.every),
                                fullWidth: true,
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                        position: "end",
                                        children: text.days
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                        lineNumber: 87,
                                        columnNumber: 47
                                    }, void 0)
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 82,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DecoratedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: "".concat(text.irrigationDays, ": ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcIrrigationDays"])(days, frequency))
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                    lineNumber: 94,
                                    columnNumber: 29
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 93,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                        lineNumber: 81,
                        columnNumber: 21
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 2
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                        lineNumber: 100,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        value: fertilizeMethod,
                        id: "outlined-select-fertilize-unit",
                        onChange: function(e) {
                            return setFertilizeMethod(e.target.value);
                        },
                        fullWidth: true,
                        select: true,
                        label: text.fertilizeMethod,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: '',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    style: {
                                        height: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                    lineNumber: 109,
                                    columnNumber: 52
                                }, _this)
                            }, '', false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 109,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PER_WATER_UNIT"],
                                children: "".concat(text.per).concat(text.m3)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 110,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PER_AREA_UNIT_PER_DAY"],
                                children: "".concat(text[areaUnit], "/").concat(text.day)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 111,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PER_AREA_UNIT_PER_IRREGATION_DAY"],
                                children: "".concat(text[areaUnit], "/").concat(text.irrigationDay)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 112,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_PER_AREA_UNIT"],
                                children: "".concat(text.total, "/").concat(text[areaUnit])
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 113,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_PER_FIELD"],
                                children: "".concat(text.total, "/").concat(text.field)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                                lineNumber: 114,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                        lineNumber: 101,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                lineNumber: 62,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                sx: {
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    size: "large",
                    endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                        lineNumber: 119,
                        columnNumber: 47
                    }, void 0),
                    disableElevation: true,
                    variant: "contained",
                    onClick: function() {
                        return onAction(true);
                    },
                    children: text.save
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                    lineNumber: 119,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
                lineNumber: 118,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js",
        lineNumber: 51,
        columnNumber: 9
    }, _this);
};
_s(IrrigationConfigDialog, "OLyZZI6l7Y8GhzN+tDWzZ/9Sqr4=");
_c = IrrigationConfigDialog;
const __TURBOPACK__default__export__ = IrrigationConfigDialog;
var _c;
__turbopack_context__.k.register(_c, "IrrigationConfigDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/resources/SprayParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
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
var SprayParams = function(param) {
    var open = param.open, units = param.units, text = param.text, handleClose = param.handleClose, areaUnit = param.areaUnit, activityArea = param.activityArea, days = param.days, sprayParams = param.sprayParams;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((sprayParams === null || sprayParams === void 0 ? void 0 : sprayParams.speed) ? sprayParams === null || sprayParams === void 0 ? void 0 : sprayParams.speed : ''), 2), speed = _useState[0], setSpeed = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sprayParams === null || sprayParams === void 0 ? void 0 : sprayParams.pto), 2), pto = _useState1[0], setPto = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sprayParams === null || sprayParams === void 0 ? void 0 : sprayParams.psi), 2), psi = _useState2[0], setPsi = _useState2[1];
    var onAction = function(val) {
        handleClose(val ? {
            speed: speed,
            pto: pto,
            psi: psi
        } : null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: function() {
                    return onAction(false);
                },
                title: ""
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                lineNumber: 24,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                flex: 1
                            },
                            value: speed,
                            onChange: function(e) {
                                return setSpeed(Number(e.target.value));
                            },
                            type: "number",
                            label: "".concat(text.speed),
                            fullWidth: true
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                            lineNumber: 28,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                        lineNumber: 27,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 2
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                        lineNumber: 34,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                flex: 1
                            },
                            value: pto,
                            onChange: function(e) {
                                return setPto(Number(e.target.value));
                            },
                            type: "number",
                            label: "PTO",
                            fullWidth: true
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                            lineNumber: 36,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                        lineNumber: 35,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 2
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                        lineNumber: 42,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                flex: 1
                            },
                            value: psi,
                            onChange: function(e) {
                                return setPsi(Number(e.target.value));
                            },
                            type: "number",
                            label: "PSI",
                            fullWidth: true
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                            lineNumber: 44,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                        lineNumber: 43,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                lineNumber: 26,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                sx: {
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    size: "large",
                    endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                        lineNumber: 54,
                        columnNumber: 47
                    }, void 0),
                    disableElevation: true,
                    variant: "contained",
                    onClick: function() {
                        return onAction(true);
                    },
                    children: text.save
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                    lineNumber: 54,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
                lineNumber: 53,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/resources/SprayParams.js",
        lineNumber: 18,
        columnNumber: 9
    }, _this);
};
_s(SprayParams, "dlLDktpppBzWWh/BqhIXkJC3s68=");
_c = SprayParams;
const __TURBOPACK__default__export__ = SprayParams;
var _c;
__turbopack_context__.k.register(_c, "SprayParams");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/resources/ActivityResources.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Table/Table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableBody/TableBody.js [app-client] (ecmascript) <export default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableContainer$2f$TableContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableContainer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableContainer/TableContainer.js [app-client] (ecmascript) <export default as TableContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableHead/TableHead.js [app-client] (ecmascript) <export default as TableHead>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript) <export default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Badge/Badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/Util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$ResourcseSelectionDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/ResourcseSelectionDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Agriculture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Agriculture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DragHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/MoreVert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$ActivityResourceDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/resources/ActivityResourceDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$warehouses$2f$warehouseApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/warehouses/warehouseApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$UpdateResourcesQtyDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/resources/UpdateResourcesQtyDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/Calculator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$IrrigationConfigDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/resources/IrrigationConfigDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$AlertDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/AlertDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmCalculator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$SprayParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/resources/SprayParams.js [app-client] (ecmascript)");
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
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
;
;
;
;
;
var TRASHHOLD = 3;
var UNITS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNIT"].toUpperCase(),
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOUR"].toUpperCase()
];
//const REQUIRED_RESOURCES = SPRAY_TYPES.concat(IRRIGARION_TYPES);
var ELEMENT_ID = 'resources';
var ActivityResources = function(param) {
    var activity = param.activity, control = param.control, errors = param.errors, register = param.register, tariffs = param.tariffs, activityArea = param.activityArea, activityDef = param.activityDef, days = param.days, irrigationParams = param.irrigationParams, setValue = param.setValue, trigger = param.trigger, fieldsCount = param.fieldsCount, sprayParams = param.sprayParams, scoutParams = param.scoutParams;
    var _errors_resources_root_message, _errors_resources_root, _errors_resources, _sprayParams_crop;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), open = _useState[0], setOpen = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedRow = _useState1[0], setSelectedRow = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedIndex = _useState2[0], setSelectedIndex = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), expendFields = _useState3[0], setExpendFields = _useState3[1];
    var _useGetWarehousesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$warehouses$2f$warehouseApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetWarehousesQuery"])(), warehouses = _useGetWarehousesQuery.data, isWarehousesDefsSuccess = _useGetWarehousesQuery.isSuccess;
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), loadTariffs = _useState4[0], setLoadTariffs = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), openEditBulkQty = _useState5[0], setOpenEditBulkQty = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), openIrrigationConfig = _useState6[0], setOpenIrrigationConfig = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), openSprayParams = _useState7[0], setOpenSprayParams = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), showAlert = _useState8[0], setShowAlert = _useState8[1];
    var disabledSelections = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].concat([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"]
    ]).includes(activity.type) && (sprayParams === null || sprayParams === void 0 ? void 0 : sprayParams.crop) === null;
    var handleOpenEditRow = function(index, row) {
        setSelectedRow(row);
        setSelectedIndex(index);
    };
    var handleCloseEditRow = function() {
        setSelectedRow(null);
        setSelectedIndex(null);
        trigger([
            'resources'
        ]);
    };
    var handleRemoveRow = function(index) {
        setSelectedRow(null);
        setSelectedIndex(null);
        remove(index);
    };
    var valideArray = function(arr, act) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGARION_TYPES"].includes(act.type)) {
            var water = arr.find(function(e) {
                return e.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER"];
            });
            if (!water) {
                return 'waterSource,waterQty';
            } else if (water.qty <= 0) {
                return 'waterQty';
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(act.type)) {
            var sprayer = arr.find(function(e) {
                return e.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQUIPMENT"] && e.resource.category === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAYER"];
            });
            var pesticides = arr.find(function(e) {
                return e.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PESTICIDE"];
            });
            if (!sprayer && !pesticides) {
                return 'sprayer,pesticides';
            } else if (!sprayer) {
                return 'sprayer';
            } else if (!pesticides) {
                return 'pesticides';
            }
        }
        return null;
    };
    var _useFieldArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"])({
        control: control,
        name: "resources",
        keyName: "key",
        rules: {
            required: false,
            validate: valideArray
        }
    }), fields = _useFieldArray.fields, append = _useFieldArray.append, prepend = _useFieldArray.prepend, remove = _useFieldArray.remove, swap = _useFieldArray.swap, move = _useFieldArray.move, insert = _useFieldArray.insert, update = _useFieldArray.update;
    var errorMsg = (_errors_resources = errors.resources) === null || _errors_resources === void 0 ? void 0 : (_errors_resources_root = _errors_resources.root) === null || _errors_resources_root === void 0 ? void 0 : (_errors_resources_root_message = _errors_resources_root.message) === null || _errors_resources_root_message === void 0 ? void 0 : _errors_resources_root_message.split(",");
    var runTariffMatch = function() {
        if (tariffs) {
            fields.map(function(row, index) {
                var tariff = tariffs.find(function(e) {
                    return e.resource.id === row.resource.id;
                });
                if (tariff && row.manualTariff === false) {
                    row.tariff = tariff.price;
                    if (row.qty) {
                        row.totalCost = tariff.price * row.qty;
                    }
                    update(index, row);
                }
            });
        }
    };
    var resourceBulkUnits = Array.from(new Set(fields.filter(function(e) {
        return UNITS.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceUsageUnit"])(e.resource, activityDef));
    }).map(function(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceUsageUnit"])(e.resource, activityDef);
    })));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActivityResources.useEffect": function() {
            runTariffMatch();
        }
    }["ActivityResources.useEffect"], [
        tariffs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActivityResources.useEffect": function() {
            if (loadTariffs === true) {
                runTariffMatch();
            }
            setLoadTariffs(false);
        }
    }["ActivityResources.useEffect"], [
        loadTariffs
    ]);
    var updateActivityArea = function() {
        fields.map(function(row, index) {
            if (row.manualQty === false) {
                if (row.resource.usageUnit === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNIT"].toUpperCase() && activityArea !== row.qty) {
                    row.qty = activityArea;
                    update(index, row);
                } else if (row.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PESTICIDE"] && row.pesticideListItem && row.dosage) {
                    row.qty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calacTotalPesticideVolume"])(row.pesticideListItem.unit, row.dosage, sprayParams === null || sprayParams === void 0 ? void 0 : sprayParams.volumePerAreaUnit, activityArea);
                    update(index, row);
                }
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActivityResources.useEffect": function() {
            updateActivityArea();
        }
    }["ActivityResources.useEffect"], [
        activityArea
    ]);
    var clearSingular = function(newtlySelectedResources) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGARION_TYPES"].concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"]).includes(activity.type)) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGARION_TYPES"].includes(activity.type)) {
                var ws = newtlySelectedResources.filter(function(e) {
                    return e.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER"];
                });
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(ws)) {
                    fields.forEach(function(e, index, arr) {
                        if (e.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER"]) {
                            remove(index);
                        }
                    });
                }
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(activity.type)) {
                var sprayer = newtlySelectedResources.filter(function(e) {
                    return e.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQUIPMENT"] && e.resource.category === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAYER"];
                });
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(sprayer)) {
                    fields.forEach(function(e, index, arr) {
                        if (e.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQUIPMENT"] && e.resource.category === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAYER"]) {
                            remove(index);
                        }
                    });
                }
            }
        }
        return newtlySelectedResources;
    };
    var handleClickOpen = function() {
        setOpen(true);
    };
    var getResourceDefaultQty = function(e) {
        return (e === null || e === void 0 ? void 0 : e.usageUnit.toLowerCase()) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNIT"] ? activityArea : 0;
    };
    var handleClose = function(selectedResources) {
        setOpen(false);
        if (selectedResources) {
            var alreadySelectedIDs = fields.map(function(e) {
                return e.resource.id;
            });
            var newtlySelectedResources = selectedResources.filter(function(e) {
                return !alreadySelectedIDs.includes(e.resouece ? e.resource.id : e.id);
            }).map(function(e) {
                var r = e.resource ? e.resource : e;
                var pesticideListItem = e.pestId ? e : null;
                var qty = pesticideListItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calacTotalPesticideVolume"])(pesticideListItem.unit, pesticideListItem.dosage, sprayParams.volumePerAreaUnit, activityArea) : getResourceDefaultQty(r);
                return {
                    resource: r,
                    qty: qty,
                    totalCost: 0,
                    note: null,
                    date: null,
                    dosage: pesticideListItem === null || pesticideListItem === void 0 ? void 0 : pesticideListItem.dosage,
                    tariff: 0,
                    manualTariff: false,
                    manualQty: false,
                    pesticideListItem: pesticideListItem,
                    warehouse: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAREHOUSE_RESOURCE_TYPE"].includes(r.type) ? user.warehouse : null
                };
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(newtlySelectedResources)) {
                newtlySelectedResources = clearSingular(newtlySelectedResources);
                prepend(newtlySelectedResources);
                setLoadTariffs(true);
            }
        }
        var element = document.getElementById(ELEMENT_ID);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    var handleBulkQtyUpdate = function(unit, qty) {
        if (unit && qty) {
            fields.map(function(row, index) {
                if (unit === (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceUsageUnit"])(row.resource, activityDef)) {
                    row.qty = qty;
                    if (row.tariff) {
                        row.totalCost = row.tariff * qty;
                    }
                    update(index, row);
                }
            });
        }
        setOpenEditBulkQty(false);
    };
    var handleIrrigationConfig = function(conf) {
        if (conf) {
            setValue('irrigationParams', conf, {
                shouldDirty: true
            });
        }
        setOpenIrrigationConfig(false);
    };
    var handleSprayParam = function(data) {
        if (data) {
            setValue('sprayParams.speed', data.speed);
            setValue('sprayParams.psi', data.psi);
            setValue('sprayParams.pto', data.pto, {
                shouldDirty: true
            });
        }
        setOpenSprayParams(false);
    };
    var getResourceTypes = function() {
        var _ACTIVITY_RESOURCES_find;
        var types = (_ACTIVITY_RESOURCES_find = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVITY_RESOURCES"].find(function(e) {
            return activity.type.includes(e.activity);
        })) === null || _ACTIVITY_RESOURCES_find === void 0 ? void 0 : _ACTIVITY_RESOURCES_find.types;
        if (types && !user.gg) {
            types = types.filter(function(e) {
                return e !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENERGY"];
            });
        }
        return types;
    };
    var resourceTypes = getResourceTypes();
    if (!resourceTypes) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    var getFields = function() {
        return expendFields && fields.length > TRASHHOLD ? fields : fields.slice(0, TRASHHOLD);
    };
    var calcIrrigation = (irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.irrigationMethod) || (irrigationParams === null || irrigationParams === void 0 ? void 0 : irrigationParams.fertilizeMethod) ? true : false;
    var caclTotalWater = function() {
        var water = fields.find(function(e) {
            return e.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER"];
        });
        if (calcIrrigation && water && water.qty && irrigationParams.irrigationMethod) {
            var irrigationDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcIrrigationDays"])(days, irrigationParams.frequency);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcTotalWaterQtyUtilFunc"])(irrigationParams.irrigationMethod, water.qty, activityArea, days, irrigationDays, fieldsCount);
        }
        return 0;
    };
    var onSprayVolumeChange = function(onChange, value) {
        onChange(value);
        setValue('sprayParams.volumePerAreaUnit', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcSprayVolumePerArea"])(Number(value), Number(activityArea)));
        updatePesticideQty(Number(value));
    };
    var onSprayVolumePerAreaChange = function(onChange, value) {
        onChange(value);
        var sprayVolume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcSprayVolume"])(Number(value), Number(activityArea));
        setValue('sprayParams.volume', sprayVolume);
        updatePesticideQty(value);
    };
    var updatePesticideQty = function(sprayVolumePerAreaUnit) {
        fields.map(function(row, index) {
            if (row.pesticideListItem && !row.manualQty) {
                var newQty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calacTotalPesticideVolume"])(row.pesticideListItem.unit, row.dosage, sprayVolumePerAreaUnit, activityArea);
                if (newQty && newQty !== row.qty) {
                    row.qty = newQty;
                    if (row.tariff) {
                        row.totalCost = row.tariff * row.qty;
                    }
                    update(index, row);
                }
            }
        });
    };
    var totalWaterQty = caclTotalWater();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        margin: 1,
        paddingTop: 2,
        display: 'flex',
        flexDirection: 'column',
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(activity.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                marginTop: 1,
                marginBottom: 1,
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "sprayParams.volumePerAreaUnit",
                        rules: {
                            required: true
                        },
                        render: function(_0) {
                            var _ref = _0.field, onChange = _ref.onChange, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                "onChange"
                            ]);
                            var _errors_sprayParams;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                size: "small",
                                onChange: function(e) {
                                    return onSprayVolumePerAreaChange(onChange, e.target.value);
                                },
                                type: "number",
                                id: "spray-volume-per-area-unit",
                                error: ((_errors_sprayParams = errors.sprayParams) === null || _errors_sprayParams === void 0 ? void 0 : _errors_sprayParams.volumePerAreaUnit) ? true : false,
                                label: text["sprayVolume".concat(user.areaUnit)]
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 333,
                                columnNumber: 25
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                        lineNumber: 328,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 1
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                        lineNumber: 341,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                        control: control,
                        name: "sprayParams.volume",
                        render: function(_0) {
                            var _ref = _0.field, onChange = _ref.onChange, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                "onChange"
                            ]);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                size: "small",
                                onChange: function(e) {
                                    return onSprayVolumeChange(onChange, e.target.value);
                                },
                                id: "spray-volume",
                                type: "number",
                                label: text.totalSprayVolume
                            }, field), void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 346,
                                columnNumber: 25
                            }, void 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                        lineNumber: 342,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 327,
                columnNumber: 53
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    disabled: disabledSelections,
                                    id: ELEMENT_ID,
                                    size: "large",
                                    color: errors.resources ? 'error' : 'primary',
                                    disableElevation: true,
                                    variant: "contained",
                                    onClick: handleClickOpen,
                                    children: [
                                        text.resources,
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                    lineNumber: 357,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 356,
                                columnNumber: 21
                            }, _this),
                            fields.length > TRASHHOLD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                sx: {
                                    marginLeft: 1,
                                    marginRight: 1
                                },
                                onClick: function() {
                                    return setExpendFields(!expendFields);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                    badgeContent: fields.length,
                                    color: "info",
                                    children: [
                                        expendFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                            lineNumber: 362,
                                            columnNumber: 50
                                        }, _this),
                                        !expendFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                            lineNumber: 363,
                                            columnNumber: 51
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                    lineNumber: 361,
                                    columnNumber: 29
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 360,
                                columnNumber: 25
                            }, _this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGARION_TYPES"].includes(activity.type) && ![
                                'ICCPRO',
                                'TALGIL'
                            ].includes(activity.src) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "large",
                                onClick: function() {
                                    return setOpenIrrigationConfig(true);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    color: calcIrrigation ? 'primary' : 'secondary',
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                    lineNumber: 368,
                                    columnNumber: 96
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 368,
                                columnNumber: 25
                            }, _this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(activity.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "large",
                                onClick: function() {
                                    return setOpenSprayParams(true);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Agriculture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                    lineNumber: 371,
                                    columnNumber: 91
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 371,
                                columnNumber: 25
                            }, _this),
                            errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                color: "error",
                                size: "large",
                                onClick: function() {
                                    return setShowAlert(true);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                    badgeContent: errorMsg.length,
                                    color: "secondary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "large"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                        lineNumber: 376,
                                        columnNumber: 33
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                    lineNumber: 375,
                                    columnNumber: 29
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 374,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                        lineNumber: 355,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        flex: 1
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                        lineNumber: 382,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "large",
                                disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(resourceBulkUnits),
                                onClick: function() {
                                    return setOpenEditBulkQty(true);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                    lineNumber: 384,
                                    columnNumber: 130
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 384,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "large",
                                disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(fields),
                                onClick: function() {
                                    return remove();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                    lineNumber: 385,
                                    columnNumber: 103
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 385,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                        lineNumber: 383,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 354,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderTable, {
                register: register,
                remove: remove,
                user: user,
                activity: activity,
                handleOpenEditRow: handleOpenEditRow,
                text: text,
                getFields: getFields,
                activityDef: activityDef,
                irrigationParams: irrigationParams,
                calcIrrigation: calcIrrigation,
                activityArea: activityArea,
                daysInPeriod: days,
                fieldsCount: fieldsCount,
                totalWaterQty: totalWaterQty
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 390,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$ResourcseSelectionDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                handleClose: handleClose,
                resourceTypes: resourceTypes,
                cropId: sprayParams === null || sprayParams === void 0 ? void 0 : (_sprayParams_crop = sprayParams.crop) === null || _sprayParams_crop === void 0 ? void 0 : _sprayParams_crop.id
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 399,
                columnNumber: 13
            }, _this),
            selectedRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$ActivityResourceDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selectedIndex: selectedIndex,
                selectedRow: selectedRow,
                activityType: activity.type,
                handleClose: handleCloseEditRow,
                update: update,
                warehouses: warehouses,
                control: control,
                errors: errors,
                activityArea: activityArea,
                resourceUnit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceUsageUnit"])(selectedRow.resource, activityDef),
                remove: function() {
                    return handleRemoveRow(selectedIndex);
                },
                irrigationParams: irrigationParams,
                sprayParams: sprayParams
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 400,
                columnNumber: 29
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$UpdateResourcesQtyDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: openEditBulkQty,
                units: resourceBulkUnits,
                text: text,
                handleClose: handleBulkQtyUpdate,
                areaUnit: user.areaUnit,
                activityArea: activityArea
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 407,
                columnNumber: 13
            }, _this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGARION_TYPES"].includes(activity.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$IrrigationConfigDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: openIrrigationConfig,
                days: days,
                text: text,
                handleClose: handleIrrigationConfig,
                areaUnit: user.areaUnit,
                activityArea: activityArea,
                irrigationParams: irrigationParams
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 409,
                columnNumber: 58
            }, _this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(activity.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$SprayParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: openSprayParams,
                days: days,
                text: text,
                handleClose: handleSprayParam,
                areaUnit: user.areaUnit,
                activityArea: activityArea,
                sprayParams: sprayParams
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 412,
                columnNumber: 53
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$AlertDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showAlert,
                title: 'requiredFieldsMissing',
                message: errorMsg,
                varieant: 'error',
                handleClose: function(_) {
                    return setShowAlert(false);
                },
                buttonText: text.close
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 415,
                columnNumber: 13
            }, _this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"] !== activity.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                marginTop: 2,
                marginBottom: 0,
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                    control: control,
                    name: "invoice",
                    render: function(param) {
                        var field = param.field;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            size: "small",
                            id: "activity-invoice",
                            label: text.invoice,
                            fullWidth: true
                        }, field), void 0, false, {
                            fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                            lineNumber: 421,
                            columnNumber: 25
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 417,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 416,
                columnNumber: 41
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
        lineNumber: 326,
        columnNumber: 9
    }, _this);
};
_s(ActivityResources, "bl4yAFC+0XVty4E5NPqEF4aiHZo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$warehouses$2f$warehouseApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetWarehousesQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"]
    ];
});
_c = ActivityResources;
var RenderTable = function(param) {
    var register = param.register, remove = param.remove, user = param.user, activity = param.activity, handleOpenEditRow = param.handleOpenEditRow, text = param.text, getFields = param.getFields, activityDef = param.activityDef, irrigationParams = param.irrigationParams, calcIrrigation = param.calcIrrigation, activityArea = param.activityArea, daysInPeriod = param.daysInPeriod, fieldsCount = param.fieldsCount, totalWaterQty = param.totalWaterQty;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableContainer$2f$TableContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableContainer$3e$__["TableContainer"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
            size: "small",
            sx: {
                margin: 0,
                padding: 0
            },
            "aria-label": "a dense table",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__["TableHead"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.name
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 438,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.type
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 439,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.qty
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 440,
                                columnNumber: 25
                            }, _this),
                            calcIrrigation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                    lineNumber: 441,
                                    columnNumber: 68
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 441,
                                columnNumber: 44
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.unit
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 443,
                                columnNumber: 25
                            }, _this),
                            user.financial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.cost
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                                lineNumber: 444,
                                columnNumber: 44
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                        lineNumber: 437,
                        columnNumber: 21
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 436,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__["TableBody"], {
                    children: getFields().map(function(row, index) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            index: index,
                            row: row,
                            text: text,
                            areaUnit: user.areaUnit,
                            register: register,
                            activityArea: activityArea,
                            remove: remove,
                            currency: user.currency,
                            financial: user.financial,
                            onClick: function() {
                                return handleOpenEditRow(index, row);
                            },
                            activityDef: activityDef,
                            irrigationParams: irrigationParams,
                            calcIrrigation: calcIrrigation,
                            daysInPeriod: daysInPeriod,
                            fieldsCount: fieldsCount,
                            totalWaterQty: totalWaterQty
                        }, row.key, false, {
                            fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                            lineNumber: 450,
                            columnNumber: 25
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 448,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
            lineNumber: 435,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
        lineNumber: 434,
        columnNumber: 9
    }, _this);
};
_c1 = RenderTable;
function calcQty(row, irrigationParams, activityArea, daysInPeriod, fieldsCount, totalWaterQty) {
    if (row.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER"] && row.qty && irrigationParams.irrigationMethod) {
        return totalWaterQty.toFixed(2);
    }
    if (row.resource.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FERTILIZER"] && row.qty && irrigationParams.fertilizeMethod) {
        var irrigationDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcIrrigationDays"])(daysInPeriod, irrigationParams.frequency);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmCalculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcTotalFertilizerQty"])(irrigationParams.fertilizeMethod, row.qty, totalWaterQty, activityArea, daysInPeriod, irrigationDays, fieldsCount).toFixed(2);
    }
    return 0;
}
function getTotalCost(tariff, qty) {
    if (tariff * qty) {
        return (tariff * qty).toFixed(2);
    }
    return 0;
}
function Row(props) {
    var row = props.row, index = props.index, text = props.text, areaUnit = props.areaUnit, onClick = props.onClick, currency = props.currency, remove = props.remove, register = props.register, financial = props.financial, activityDef = props.activityDef, irrigationParams = props.irrigationParams, calcIrrigation = props.calcIrrigation, activityArea = props.activityArea, daysInPeriod = props.daysInPeriod, fieldsCount = props.fieldsCount, totalWaterQty = props.totalWaterQty;
    var calc = calcIrrigation && [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FERTILIZER"]
    ].includes(row.resource.type) ? calcQty(row, irrigationParams, activityArea, daysInPeriod, fieldsCount, totalWaterQty) : null;
    var totalCost = getTotalCost(row.tariff, calc ? calc : row.qty);
    var resourceType = row.resource.category === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAYER"] ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAYER"] : row.resource.type;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, register("resource.".concat(index, ".totalCost")), register("resource.".concat(index, ".qty")), register("resource.".concat(index, ".note")), register("resource.".concat(index, ".warehouse")), register("resource.".concat(index, ".manualTariff"))), {
            key: index,
            sx: {
                '&:last-child td, &:last-child th': {
                    border: 0
                }
            },
            __source: {
                fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                lineNumber: 500,
                columnNumber: 13
            },
            __self: this,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                    onClick: onClick,
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSxLink"],
                    children: row.resource.name
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 509,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"] /*onClick={onClick}*/ , {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceTypeText"])(resourceType, text)
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 510,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"] /*onClick={onClick}*/ , {
                    sx: row.manualQty ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSxChange"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: row.qty
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 511,
                    columnNumber: 17
                }, this),
                calcIrrigation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"] /*onClick={onClick}*/ , {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: calc ? calc : ''
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 512,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"] /*onClick={onClick}*/ , {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitText"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceUsageUnit"])(row.resource, activityDef), areaUnit, text)
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 513,
                    columnNumber: 17
                }, this),
                financial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"] /*onClick={onClick}*/ , {
                    sx: row.manualTariff ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSxChange"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: totalCost
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
                    lineNumber: 514,
                    columnNumber: 31
                }, this)
            ]
        }))
    }, void 0, false, {
        fileName: "[project]/src/ui/activity/form/resources/ActivityResources.js",
        lineNumber: 499,
        columnNumber: 9
    }, this);
}
_c2 = Row;
const __TURBOPACK__default__export__ = ActivityResources;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ActivityResources");
__turbopack_context__.k.register(_c1, "RenderTable");
__turbopack_context__.k.register(_c2, "Row");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/pests/pestsApiSlice.js [app-client] (ecmascript)");
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
var ActivityScoutDialog = function(param) {
    var selectedRow = param.selectedRow, selectedIndex = param.selectedIndex, handleClose = param.handleClose, update = param.update, remove = param.remove, stages = param.stages;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.note ? selectedRow.note : ''), 2), note = _useState[0], setNote = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.value ? selectedRow.value : ''), 2), value = _useState1[0], setValue = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.infectionLevel), 2), infectionLevel = _useState2[0], setInfectionLevel = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.stage ? selectedRow.stage : stages.find({
        "ActivityScoutDialog._useState.useState": function(e) {
            return e.code === 'none';
        }
    }["ActivityScoutDialog._useState.useState"])), 2), stage = _useState3[0], setStage = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedRow.location), 2), plantLocation = _useState4[0], setPlantLocation = _useState4[1];
    var _useGetInfectionLevelsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetInfectionLevelsQuery"])(), infectionLevels = _useGetInfectionLevelsQuery.data, isLoadingInfectionLevels = _useGetInfectionLevelsQuery.isLoading;
    var _useGetPlantLocationsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPlantLocationsQuery"])(), plantLocations = _useGetPlantLocationsQuery.data, isLoadingPlantLocations = _useGetPlantLocationsQuery.isLoading;
    var onAction = function(save) {
        if (save) {
            selectedRow.value = value;
            selectedRow.note = note;
            selectedRow.location = plantLocation;
            selectedRow.infectionLevel = infectionLevel;
            selectedRow.stage = stage;
            update(selectedIndex, selectedRow);
        }
        handleClose(save);
    };
    if (isLoadingPlantLocations || isLoadingInfectionLevels) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: selectedRow !== null,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: function() {
                    return onAction(false);
                },
                title: "".concat(selectedRow.finding.name)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                lineNumber: 48,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"] /*sx={{ minHeight: isWarehouse ? height : null }}*/ , {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "scout-location",
                            select: true,
                            value: plantLocation,
                            label: text.location,
                            fullWidth: true,
                            onChange: function(e) {
                                return setPlantLocation(e.target.value);
                            },
                            children: plantLocations.map(function(option) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                    value: option,
                                    children: text[option]
                                }, option, false, {
                                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                            lineNumber: 54,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "scout-infection-level",
                            select: true,
                            value: infectionLevel,
                            label: text.infectionLevel,
                            fullWidth: true,
                            onChange: function(e) {
                                return setInfectionLevel(e.target.value);
                            },
                            children: infectionLevels.map(function(option) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                    value: option,
                                    children: text[option]
                                }, option, false, {
                                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                            lineNumber: 68,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "scout-pest-stage",
                            select: true,
                            value: stage.id,
                            label: text.phenologicalStage,
                            fullWidth: true,
                            onChange: function(e) {
                                return setStage(stages.find(function(s) {
                                    return s.id === e.target.value;
                                }));
                            },
                            children: stages.map(function(option) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                    value: option.id,
                                    children: option.name
                                }, option.id, false, {
                                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                                    lineNumber: 91,
                                    columnNumber: 29
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                            lineNumber: 82,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            value: value,
                            onChange: function(e) {
                                return setValue(Number(e.target.value));
                            },
                            type: "number",
                            label: text.qty,
                            fullWidth: true
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                            lineNumber: 96,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            value: note,
                            onChange: function(e) {
                                return setNote(e.target.value);
                            },
                            fullWidth: true,
                            label: text.note
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                            lineNumber: 100,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                    lineNumber: 53,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                lineNumber: 52,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                sx: {
                    justifyContent: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        size: "large",
                        endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                            lineNumber: 104,
                            columnNumber: 47
                        }, void 0),
                        disableElevation: true,
                        variant: "outlined",
                        onClick: remove,
                        children: text.delete
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                        lineNumber: 104,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        size: "large",
                        disableElevation: true,
                        variant: "contained",
                        endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                            lineNumber: 107,
                            columnNumber: 30
                        }, void 0),
                        onClick: function() {
                            return onAction(true);
                        },
                        children: text.save
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                        lineNumber: 106,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
                lineNumber: 103,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js",
        lineNumber: 43,
        columnNumber: 9
    }, _this);
};
_s(ActivityScoutDialog, "3iOizN0MuFREV7YTSimfnp5YCQM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetInfectionLevelsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPlantLocationsQuery"]
    ];
});
_c = ActivityScoutDialog;
const __TURBOPACK__default__export__ = ActivityScoutDialog;
var _c;
__turbopack_context__.k.register(_c, "ActivityScoutDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/scouts/ActivityScouts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Table/Table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableBody/TableBody.js [app-client] (ecmascript) <export default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableContainer$2f$TableContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableContainer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableContainer/TableContainer.js [app-client] (ecmascript) <export default as TableContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableHead/TableHead.js [app-client] (ecmascript) <export default as TableHead>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript) <export default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Badge/Badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Autocomplete/Autocomplete.js [app-client] (ecmascript) <locals> <export default as Autocomplete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/Util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DragHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$PestSelectionDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/PestSelectionDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$scout$2f$ScoutingUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/scout/ScoutingUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$scouts$2f$ActivityScoutDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/scouts/ActivityScoutDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/pests/pestsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$resources$2f$resourcesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/resources/resourcesApiSlice.js [app-client] (ecmascript)");
;
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
;
;
;
;
;
;
;
var TRASHHOLD = 3;
var UNITS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AREA_UNIT"].toUpperCase(),
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOUR"].toUpperCase()
];
//const REQUIRED_RESOURCES = SPRAY_TYPES.concat(IRRIGARION_TYPES);
var ELEMENT_ID = 'scoutParams.scouts';
var ActivityScouts = function(param) {
    var activity = param.activity, control = param.control, errors = param.errors, register = param.register, setValue = param.setValue, trigger = param.trigger;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), open = _useState[0], setOpen = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedRow = _useState1[0], setSelectedRow = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedIndex = _useState2[0], setSelectedIndex = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), expendFields = _useState3[0], setExpendFields = _useState3[1];
    var _useGetPestStagesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPestStagesQuery"])(), stages = _useGetPestStagesQuery.data, isLoadingStages = _useGetPestStagesQuery.isLoading;
    var _useGetResourcesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$resources$2f$resourcesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourcesQuery"])({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORKER"]
    }), scouters = _useGetResourcesQuery.data;
    var handleOpenEditRow = function(index, row) {
        setSelectedRow(row);
        setSelectedIndex(index);
    };
    var handleCloseEditRow = function() {
        setSelectedRow(null);
        setSelectedIndex(null);
    // trigger(['scoutParams.scouts'])
    };
    var handleRemoveRow = function(index) {
        setSelectedRow(null);
        setSelectedIndex(null);
        remove(index);
    };
    var _useFieldArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"])({
        control: control,
        name: "scoutParams.scouts",
        keyName: "key",
        rules: {
            required: false
        }
    }), fields = _useFieldArray.fields, append = _useFieldArray.append, prepend = _useFieldArray.prepend, remove = _useFieldArray.remove, swap = _useFieldArray.swap, move = _useFieldArray.move, insert = _useFieldArray.insert, update = _useFieldArray.update;
    var handleClose = function(selectedElements) {
        setOpen(false);
        if (selectedElements) {
            var alreadySelectedIDs = fields.map(function(e) {
                return e.finding.id;
            });
            var newtlySelectedFields = selectedElements.filter(function(e) {
                return !alreadySelectedIDs.includes(e.id);
            }).map(function(e) {
                return {
                    finding: e,
                    note: '',
                    qty: 0,
                    location: 'none',
                    infectionLevel: 'none',
                    stage: stages.find(function(e) {
                        return e.code === 'none';
                    })
                };
            });
            append(newtlySelectedFields);
        }
    };
    var handleClickOpen = function() {
        setOpen(true);
    };
    var getFields = function() {
        return expendFields && fields.length > TRASHHOLD ? fields : fields.slice(0, TRASHHOLD);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        margin: 1,
        paddingTop: 2,
        display: 'flex',
        flexDirection: 'column',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    id: ELEMENT_ID,
                                    size: "large",
                                    disableElevation: true,
                                    variant: "contained",
                                    onClick: handleClickOpen,
                                    children: [
                                        text.pests,
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                lineNumber: 106,
                                columnNumber: 21
                            }, _this),
                            fields.length > TRASHHOLD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                onClick: function() {
                                    return setExpendFields(!expendFields);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                    badgeContent: fields.length,
                                    color: "info",
                                    children: [
                                        expendFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                            lineNumber: 112,
                                            columnNumber: 50
                                        }, _this),
                                        !expendFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                            lineNumber: 113,
                                            columnNumber: 51
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                    lineNumber: 111,
                                    columnNumber: 29
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                lineNumber: 110,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                        lineNumber: 105,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        margin: 1
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                        lineNumber: 118,
                        columnNumber: 18
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        flex: 1,
                        children: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(scouters) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                            name: "scoutParams.scouter",
                            rules: {
                                required: true
                            },
                            control: control,
                            render: function(_0) {
                                var _ref = _0.field, ref = _ref.ref, onChange = _ref.onChange, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                    "ref",
                                    "onChange"
                                ]);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                    disablePortal: true,
                                    blurOnSelect: true,
                                    onChange: function(_, data) {
                                        return onChange(data);
                                    },
                                    options: scouters.filter(function(e) {
                                        return e.active;
                                    }),
                                    sx: {
                                        flex: 1
                                    },
                                    size: "small",
                                    getOptionLabel: function(option) {
                                        return option ? option.name : '';
                                    },
                                    isOptionEqualToValue: function(option, value) {
                                        var _ref;
                                        var _option_id, _this;
                                        return value === undefined || (option === null || option === void 0 ? void 0 : (_option_id = option.id) === null || _option_id === void 0 ? void 0 : _option_id.toString()) === ((_this = (_ref = value === null || value === void 0 ? void 0 : value.id) !== null && _ref !== void 0 ? _ref : value) === null || _this === void 0 ? void 0 : _this.toString());
                                    },
                                    renderInput: function(params) {
                                        var _errors_scoutParams;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                            error: (errors === null || errors === void 0 ? void 0 : (_errors_scoutParams = errors.scoutParams) === null || _errors_scoutParams === void 0 ? void 0 : _errors_scoutParams.scouter) ? true : false,
                                            sx: {
                                                marginTop: 0.5
                                            }
                                        }, params), {
                                            label: text.executor
                                        }), void 0, false, {
                                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                            lineNumber: 133,
                                            columnNumber: 54
                                        }, void 0);
                                    }
                                }, field), void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                    lineNumber: 124,
                                    columnNumber: 77
                                }, void 0);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                            lineNumber: 120,
                            columnNumber: 49
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                        lineNumber: 119,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "large",
                            disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(fields),
                            onClick: function() {
                                return remove();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "large"
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                lineNumber: 142,
                                columnNumber: 103
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                            lineNumber: 142,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                        lineNumber: 140,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                lineNumber: 104,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderTable, {
                register: register,
                remove: remove,
                user: user,
                activity: activity,
                handleOpenEditRow: handleOpenEditRow,
                text: text,
                getFields: getFields
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                lineNumber: 147,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$PestSelectionDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                handleClose: handleClose
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                lineNumber: 152,
                columnNumber: 13
            }, _this),
            selectedRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$scouts$2f$ActivityScoutDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selectedIndex: selectedIndex,
                selectedRow: selectedRow,
                handleClose: handleCloseEditRow,
                update: update,
                remove: function() {
                    return handleRemoveRow(selectedIndex);
                },
                stages: isLoadingStages ? [] : stages
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                lineNumber: 155,
                columnNumber: 29
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
        lineNumber: 102,
        columnNumber: 9
    }, _this);
};
_s(ActivityScouts, "2M3OtPC/ESMCOxGrnQnm6M4qG1k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPestStagesQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$resources$2f$resourcesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourcesQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"]
    ];
});
_c = ActivityScouts;
var RenderTable = function(param) {
    var register = param.register, remove = param.remove, user = param.user, activity = param.activity, handleOpenEditRow = param.handleOpenEditRow, text = param.text, getFields = param.getFields, activityDef = param.activityDef, irrigationParams = param.irrigationParams, calcIrrigation = param.calcIrrigation, activityArea = param.activityArea, daysInPeriod = param.daysInPeriod, fieldsCount = param.fieldsCount, totalWaterQty = param.totalWaterQty;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableContainer$2f$TableContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableContainer$3e$__["TableContainer"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
            size: "small",
            sx: {
                margin: 0,
                padding: 0
            },
            "aria-label": "a dense table",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__["TableHead"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.pest
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                lineNumber: 168,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.location
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                lineNumber: 170,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.infectionLevel
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                lineNumber: 171,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerSx"],
                                children: text.qty
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                                lineNumber: 172,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                        lineNumber: 167,
                        columnNumber: 21
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                    lineNumber: 166,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__["TableBody"], {
                    children: getFields().map(function(row, index) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            index: index,
                            row: row,
                            text: text,
                            register: register,
                            remove: remove,
                            onClick: function() {
                                return handleOpenEditRow(index, row);
                            }
                        }, row.key, false, {
                            fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                            lineNumber: 182,
                            columnNumber: 25
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                    lineNumber: 180,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
            lineNumber: 165,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
        lineNumber: 164,
        columnNumber: 9
    }, _this);
};
_c1 = RenderTable;
function Row(props) {
    var row = props.row, index = props.index, text = props.text, areaUnit = props.areaUnit, onClick = props.onClick, currency = props.currency, remove = props.remove, register = props.register;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
            sx: {
                '&:last-child td, &:last-child th': {
                    border: 0
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                    onClick: onClick,
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSxLink"],
                    children: row.finding.name
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                    lineNumber: 215,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"] /*onClick={onClick}*/ , {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: text[row.location]
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                    lineNumber: 216,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"] /*onClick={onClick}*/ , {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: text[row.infectionLevel]
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                    lineNumber: 217,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"] /*onClick={onClick}*/ , {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellSx"],
                    children: row.value
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
                    lineNumber: 218,
                    columnNumber: 17
                }, this)
            ]
        }, index, true, {
            fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
            lineNumber: 206,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui/activity/form/scouts/ActivityScouts.js",
        lineNumber: 205,
        columnNumber: 9
    }, this);
}
_c2 = Row;
const __TURBOPACK__default__export__ = ActivityScouts;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ActivityScouts");
__turbopack_context__.k.register(_c1, "RenderTable");
__turbopack_context__.k.register(_c2, "Row");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/form/ActivityForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigation$2f$BottomNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BottomNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/BottomNavigation/BottomNavigation.js [app-client] (ecmascript) <export default as BottomNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BottomNavigationAction$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/BottomNavigationAction/BottomNavigationAction.js [app-client] (ecmascript) <export default as BottomNavigationAction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$header$2f$ActivityHeaderView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/header/ActivityHeaderView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CheckCircleOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ControlPointDuplicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ControlPointDuplicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$ActivityFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/fields/ActivityFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$waypoints$2f$ActivityWaypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/waypoints/ActivityWaypoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$ActivityResources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/resources/ActivityResources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activities/activitiesApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$crops$2f$cropsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/crops/cropsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$resources$2f$resourcesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/resources/resourcesApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activityDefs$2f$activityDefsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activityDefs/activityDefsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionApprovalDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ActionApprovalDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tariff$2f$tariffApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/tariff/tariffApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/ActivityUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$scouts$2f$ActivityScouts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/scouts/ActivityScouts.js [app-client] (ecmascript)");
;
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
var ActivityForm = function(param) {
    var activity = param.activity;
    _s();
    var navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useCreateActivityMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateActivityMutation"])(), 1), createActivity = _useCreateActivityMutation[0];
    var _useUpdateActivityMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateActivityMutation"])(), 1), updateActivity = _useUpdateActivityMutation[0];
    var _useDeleteActivityMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteActivityMutation"])(), 1), deleteActivity = _useDeleteActivityMutation[0];
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useGetActivityDefsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activityDefs$2f$activityDefsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetActivityDefsQuery"])(), activityDefs = _useGetActivityDefsQuery.data, isActivityDefsSuccess = _useGetActivityDefsQuery.isSuccess;
    var _useGetCropsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$crops$2f$cropsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCropsQuery"])(), crops = _useGetCropsQuery.data, isCropsSuccess = _useGetCropsQuery.isSuccess;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), deleteOpen = _useState[0], setDeleteOpen = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDuplicate = _useState1[0], setIsDuplicate = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isExecutePlan = _useState2[0], setIsExecutePlan = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activity.points.length), 2), pointsCount = _useState3[0], setPointsCount = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), openWaypointSelection = _useState4[0], setOpenWaypointSelection = _useState4[1];
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    var _useGetResourcesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$resources$2f$resourcesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourcesQuery"])({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$resources$2f$resourcesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOMER"]
    }), customers = _useGetResourcesQuery.data, // isLoading,
    isCustomersSuccess = _useGetResourcesQuery.isSuccess, isError = _useGetResourcesQuery.isError, error = _useGetResourcesQuery.error;
    var _useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: activity
    }), control = _useForm.control, register = _useForm.register, handleSubmit = _useForm.handleSubmit, getValues = _useForm.getValues, watch = _useForm.watch, errors = _useForm.formState.errors, _useForm_formState = _useForm.formState, isDirty = _useForm_formState.isDirty, dirtyFields = _useForm_formState.dirtyFields, reset = _useForm.reset, setValue = _useForm.setValue, trigger = _useForm.trigger;
    var execution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "execution"
    });
    var activityDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "activityDef"
    });
    var resources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "resources"
    });
    var fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "fields"
    });
    var uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "uuid"
    });
    var reference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "reference"
    });
    var executionEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "executionEnd"
    });
    var irrigationParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "irrigationParams"
    });
    var days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysDiff"])(execution, executionEnd);
    var sprayParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "sprayParams"
    });
    var crop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "sprayParams.crop"
    });
    var activityArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalActivityArea"])(fields);
    var editable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "editable"
    });
    var type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "type"
    });
    var note = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "note"
    });
    var scoutParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control: control,
        name: "scoutParams"
    });
    var tariffResourceIds = resources.filter(function(e) {
        return e.manualTariff === false;
    }).map(function(e) {
        return e.resource.id;
    });
    var _useGetResourcesTariffQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tariff$2f$tariffApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourcesTariffQuery"])({
        activityType: activity.type,
        date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLocalDate"])(execution),
        reference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReference"])(activity.type, resources, activityDef),
        resources: tariffResourceIds
    }, {
        skip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSkipTariffFetch"])(isDirty, user.financial, tariffResourceIds)
    }), tariffs = _useGetResourcesTariffQuery.data, isTariffsSuccess = _useGetResourcesTariffQuery.isSuccess, isTariffLoading = _useGetResourcesTariffQuery.isLoading;
    if (!isCropsSuccess || !isActivityDefsSuccess || !isCustomersSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/ui/activity/form/ActivityForm.js",
            lineNumber: 87,
            columnNumber: 12
        }, _this);
    }
    var saveActivity = function(data) {
        var _data_scoutParams_scouter, _data_scoutParams;
        data.execution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLocalDate"])(data.execution, true);
        data.executionEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLocalDate"])(data.executionEnd, true);
        data.endHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLocalTime"])(data.endHour, true);
        if ((_data_scoutParams = data.scoutParams) === null || _data_scoutParams === void 0 ? void 0 : (_data_scoutParams_scouter = _data_scoutParams.scouter) === null || _data_scoutParams_scouter === void 0 ? void 0 : _data_scoutParams_scouter.id) {
            var _data_scoutParams1;
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDefaultScouter"])((_data_scoutParams1 = data.scoutParams) === null || _data_scoutParams1 === void 0 ? void 0 : _data_scoutParams1.scouter));
        }
        if (data.uuid) {
            return updateActivity(data).unwrap();
        } else {
            data.src = 'MUI';
            return createActivity(data).unwrap();
        }
    };
    var duplicate = function() {
        setValue('uuid', null);
        setValue('planUuid', null);
        setValue('reference', null);
        setValue('editable', true);
        setValue('status', null);
        setValue('points', []);
        setIsDuplicate(true);
    };
    var executePlan = function() {
        setValue('planUuid', uuid);
        setValue('uuid', null);
        setValue('editable', true);
        setValue('type', type.replaceAll('_PLAN', ''));
        setValue('status', 'EXECUTING');
        setIsExecutePlan(true);
    };
    var onCropCHange = function() {
        setValue('fields', []);
        setValue('resources', resources.filter(function(e) {
            return e.resource.type !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PESTICIDE"];
        }));
    };
    var handleDelete = function(value) {
        setDeleteOpen(false);
        if (value) {
            deleteActivity(activity.uuid);
            navigate(-1);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSnackbar"])({
                msg: text.recordDeleted
            }));
        }
    };
    var onSubmit = function(data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var result, err;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            saveActivity(data)
                        ];
                    case 1:
                        result = _state.sent();
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSnackbar"])({
                            msg: data.uuid ? text.recordUpdated : text.recordCreated,
                            severity: 'success'
                        }));
                        navigate(-1);
                        return [
                            3,
                            3
                        ];
                    case 2:
                        err = _state.sent();
                        console.log(err);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var saveDisabled = !isExecutePlan && !isDirty;
    var getLineNum = function() {
        var noteLineNum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countLines"])(note);
        if (noteLineNum <= 3) {
            return 3;
        } else {
            return noteLineNum;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            maxHeight: window.innerHeight - 130,
            overflow: 'auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            margin: 1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$header$2f$ActivityHeaderView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        control: control,
                        register: register,
                        type: type,
                        activity: activity,
                        errors: errors,
                        crops: crops,
                        activityDefs: activityDefs,
                        customers: customers,
                        reference: reference,
                        isDuplicate: isDuplicate,
                        isExecutePlan: isExecutePlan,
                        execution: execution,
                        days: days,
                        crop: crop,
                        onCropCHange: onCropCHange
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                        lineNumber: 175,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$ActivityFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        control: control,
                        register: register,
                        activity: activity,
                        getValues: getValues,
                        activityArea: activityArea,
                        errors: errors,
                        crop: crop,
                        openWaypointSelection: openWaypointSelection,
                        setOpenWaypointSelection: setOpenWaypointSelection,
                        pointsCount: pointsCount,
                        scoutParams: scoutParams
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                        lineNumber: 177,
                        columnNumber: 11
                    }, _this),
                    openWaypointSelection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$waypoints$2f$ActivityWaypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        control: control,
                        register: register,
                        activity: activity,
                        activityDef: activityDef,
                        getValues: getValues,
                        errors: errors,
                        crop: crop,
                        openWaypointSelection: openWaypointSelection,
                        setOpenWaypointSelection: setOpenWaypointSelection,
                        setPointsCount: setPointsCount
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                        lineNumber: 181,
                        columnNumber: 37
                    }, _this),
                    activity.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$scouts$2f$ActivityScouts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        control: control,
                        register: register,
                        activity: activity,
                        getValues: getValues,
                        errors: errors
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                        lineNumber: 186,
                        columnNumber: 39
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$resources$2f$ActivityResources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        control: control,
                        register: register,
                        activity: activity,
                        activityDef: activityDef,
                        errors: errors,
                        tariffs: tariffs,
                        activityArea: activityArea,
                        days: days,
                        irrigationParams: irrigationParams,
                        setValue: setValue,
                        trigger: trigger,
                        fieldsCount: fields.length,
                        sprayParams: sprayParams
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                        lineNumber: 188,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        padding: 1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                            control: control,
                            name: "note",
                            render: function(param) {
                                var field = param.field;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                    id: "activity-note",
                                    size: "small",
                                    label: text.note,
                                    fullWidth: true,
                                    multiline: true,
                                    rows: getLineNum()
                                }, field), void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, void 0);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                            lineNumber: 194,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                        lineNumber: 193,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigation$2f$BottomNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BottomNavigation$3e$__["BottomNavigation"], {
                        sx: {
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            paddingTop: 2,
                            paddingBottom: 2,
                            borderTop: 1,
                            borderTopColor: 'lightGray',
                            backgroundColor: 'white',
                            zIndex: 1000
                        },
                        value: -1,
                        showLabels: true,
                        children: [
                            activity.editable && uuid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BottomNavigationAction$3e$__["BottomNavigationAction"], {
                                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    children: text.delete
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 213,
                                    columnNumber: 22
                                }, void 0),
                                onClick: function() {
                                    return setDeleteOpen(true);
                                },
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 215,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                lineNumber: 212,
                                columnNumber: 43
                            }, _this),
                            uuid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BottomNavigationAction$3e$__["BottomNavigationAction"], {
                                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    children: text.duplicate
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 218,
                                    columnNumber: 22
                                }, void 0),
                                onClick: duplicate,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ControlPointDuplicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 220,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                lineNumber: 217,
                                columnNumber: 22
                            }, _this),
                            uuid && activity.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAN"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BottomNavigationAction$3e$__["BottomNavigationAction"], {
                                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    children: text.execute
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 224,
                                    columnNumber: 22
                                }, void 0),
                                onClick: executePlan,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 226,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                lineNumber: 222,
                                columnNumber: 50
                            }, _this),
                            editable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BottomNavigationAction$3e$__["BottomNavigationAction"], {
                                disabled: saveDisabled,
                                sx: {
                                    color: saveDisabled ? 'lightGray' : null
                                },
                                type: "submit",
                                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    children: text.save
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 230,
                                    columnNumber: 22
                                }, void 0),
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                    lineNumber: 231,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                                lineNumber: 228,
                                columnNumber: 26
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                        lineNumber: 205,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionApprovalDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        open: deleteOpen,
                        handleClose: handleDelete,
                        title: text.deleteFormTitle,
                        body: text.deleteFormBody,
                        okText: text.delete,
                        cancelText: text.cancel
                    }, void 0, false, {
                        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                        lineNumber: 234,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/activity/form/ActivityForm.js",
                lineNumber: 169,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/ui/activity/form/ActivityForm.js",
            lineNumber: 168,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/activity/form/ActivityForm.js",
        lineNumber: 167,
        columnNumber: 5
    }, _this);
};
_s(ActivityForm, "3/fN5FFgUH00vQgxKQoPiGnWDx4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateActivityMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateActivityMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteActivityMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activityDefs$2f$activityDefsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetActivityDefsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$crops$2f$cropsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCropsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$resources$2f$resourcesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourcesQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tariff$2f$tariffApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourcesTariffQuery"]
    ];
});
_c = ActivityForm;
const __TURBOPACK__default__export__ = ActivityForm;
var _c;
__turbopack_context__.k.register(_c, "ActivityForm");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/view/ActivityView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activities/activitiesApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/ActivityForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/parseISO/index.js [app-client] (ecmascript) <export default as parseISO>");
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
var SUPPORTED_TYPES = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARVEST"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGATION"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL_PLAN"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGATION_PLAN"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_PLAN"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"]
];
var ActivityView = function() {
    _s();
    var _useParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(), activityId = _useParams.activityId, src = _useParams.src;
    var navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    var _useGetActivityByIdQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetActivityByIdQuery"])(activityId), activity = _useGetActivityByIdQuery.data, isLoading = _useGetActivityByIdQuery.isLoading, isSuccess = _useGetActivityByIdQuery.isSuccess, isError = _useGetActivityByIdQuery.isError, error = _useGetActivityByIdQuery.error;
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/ui/activity/view/ActivityView.js",
        lineNumber: 19,
        columnNumber: 25
    }, _this);
    if (activity && isSuccess) {
        if (SUPPORTED_TYPES.includes(activity.type)) {
            var _act_marketParams;
            // const isPlan = activity.type.includes("_PLAN")
            var fields = activity.fields.map(function(e) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, e), {
                    actualExecution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISOOrNull"])(e.actualExecution)
                });
            });
            var act = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, activity), {
                fields: fields,
                marketParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, activity.marketParams)
            });
            act.execution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__["parseISO"])(activity.execution);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGARION_TYPES"].includes(activity.type)) {
                act.executionEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__["parseISO"])(activity.executionEnd);
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(activity.type)) {
                act.endHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__["parseISO"])("".concat(activity.execution, " ").concat(activity.endHour));
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"] === activity.type && ((_act_marketParams = act.marketParams) === null || _act_marketParams === void 0 ? void 0 : _act_marketParams.sortDate)) {
                act.marketParams.sortDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__["parseISO"])(act.marketParams.sortDate);
            }
            act.note = act.note ? act.note : '';
            act.invoice = act.invoice ? act.invoice : '';
            act.year = activity.year ? activity.year : act.execution.getFullYear();
            act.waybill = act.waybill ? act.waybill : '';
            // act.fields.forEach(e => {
            //   e.actualExecution = parseISOOrNull(e.actualExecution);
            // });
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activity: act
                }, void 0, false, {
                    fileName: "[project]/src/ui/activity/view/ActivityView.js",
                    lineNumber: 54,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/activity/view/ActivityView.js",
                lineNumber: 53,
                columnNumber: 9
            }, _this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            margin: 1,
            children: activity.type
        }, void 0, false, {
            fileName: "[project]/src/ui/activity/view/ActivityView.js",
            lineNumber: 60,
            columnNumber: 7
        }, _this);
    }
};
_s(ActivityView, "SayhE+K21oCW8aZFWvXWC6wc2YY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetActivityByIdQuery"]
    ];
});
_c = ActivityView;
const __TURBOPACK__default__export__ = ActivityView;
var _c;
__turbopack_context__.k.register(_c, "ActivityView");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/activity/view/NewActivity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFieldsByLocation",
    ()=>getFieldsByLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/ActivityForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/fields/fieldsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$ActivityFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/activity/form/fields/ActivityFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/points/pointsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
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
function getFieldsByLocation(data, pt) {
    if (data) {
        if (pt && Array.isArray(pt)) {
            var inFields = data.filter(function(e) {
                return e.endDate === null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPointInPoly"])(e.geoPoints, pt);
            });
            return inFields;
        }
    }
    return [];
}
var prepareFields = function(activityFields, isMarket) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(activityFields)) {
        return [];
    } else {
        return activityFields.map(function(field) {
            return {
                field: field,
                activityArea: field.area,
                fieldNote: null,
                actualExecution: null,
                fieldMarketParams: isMarket ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$fields$2f$ActivityFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newFieldMarketParams"])() : null
            };
        });
    }
// const fields = field ? [{
//   field, activityArea: field.area, fieldNote: null, actualExecution: null,
//   fieldMarketParams: isMarket ? newFieldMarketParams() : null
// }] : [];
};
var getFieldCrop = function(field, fields) {
    var f = field;
    if (field) {
        f = field;
    } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(fields)) {
        f = fields[0].field;
    }
    if (f) {
        return {
            id: f.cropId,
            name: f.cropName
        };
    } else {
        return null;
    }
};
var NewActivity = function() {
    _s();
    var _useParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(), type = _useParams.type, src = _useParams.src;
    var _useSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])(), 2), searchParams = _useSearchParams[0], setSearchParams = _useSearchParams[1];
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data, isLoading = _useGetUserDataQuery.isLoading;
    var currentYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectCurrentYear"]);
    var fid = searchParams.get("fid");
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFields"])(currentYear);
    var longitude = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLongitude"]);
    var latitude = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLatitude"]);
    var scouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectDefaultScouter"]);
    var field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldsById"])(currentYear, Number(fid));
    var position = latitude && longitude ? [
        latitude,
        longitude
    ] : null;
    var pid = searchParams.get("pid");
    var _useGetPointQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPointQuery"])({
        id: pid
    }, {
        skip: !pid
    }), point = _useGetPointQuery.data, isLoadingPoint = _useGetPointQuery.isLoading, isFetchingPoint = _useGetPointQuery.isFetching;
    if (isLoadingPoint || isFetchingPoint) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/ui/activity/view/NewActivity.js",
            lineNumber: 84,
            columnNumber: 12
        }, _this);
    }
    var isPlan = type.includes("_PLAN");
    var isSpray = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRAY_TYPES"].includes(type);
    var isIrrigation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRRIGARION_TYPES"].includes(type);
    var isMarket = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET"] === type;
    var isScout = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT"] === type;
    var wind = isSpray ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWinds"])()[0] : null;
    var fields = prepareFields(field ? [
        field
    ] : getFieldsByLocation(data, position), isMarket);
    var points = point ? [
        {
            point: point,
            note: '',
            createTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLocalDateTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newDate"])(), true)
        }
    ] : [];
    var scouts = isScout && (point === null || point === void 0 ? void 0 : point.pest) ? [
        {
            finding: point.pest,
            note: '',
            location: 'none',
            infectionLevel: 'none',
            value: ''
        }
    ] : [];
    var crop = getFieldCrop(field, fields);
    var activity = {
        type: type,
        plan: isPlan,
        execution: isIrrigation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstDayOfThisMonth"])() : new Date(),
        executionEnd: isIrrigation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastDayOfThisMonth"])() : null,
        endHour: isSpray ? new Date() : null,
        irrigationParams: isIrrigation ? {} : null,
        sprayParams: isSpray || isScout ? {
            volumePerAreaUnit: '',
            volume: '',
            wind: wind,
            crop: crop
        } : null,
        scoutParams: isScout ? {
            scouts: scouts,
            phenologicalStage: '',
            scouter: scouter
        } : null,
        marketParams: isMarket ? {
            incomeCalc: '',
            sortDate: null,
            sortReference: ''
        } : null,
        activityDef: null,
        year: user.year,
        customer: null,
        fields: fields,
        resources: [],
        note: '',
        invoice: '',
        editable: true,
        waybill: '',
        points: points
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$activity$2f$form$2f$ActivityForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activity: activity
        }, void 0, false, {
            fileName: "[project]/src/ui/activity/view/NewActivity.js",
            lineNumber: 129,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/activity/view/NewActivity.js",
        lineNumber: 128,
        columnNumber: 5
    }, _this);
};
_s(NewActivity, "a6MRNy6m4Dp+N7otFiXUJxrKk4Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFields"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldsById"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPointQuery"]
    ];
});
_c = NewActivity;
const __TURBOPACK__default__export__ = NewActivity;
var _c;
__turbopack_context__.k.register(_c, "NewActivity");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ui_activity_17bb6fbf._.js.map