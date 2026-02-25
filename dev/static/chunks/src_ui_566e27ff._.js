(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/ui/FarmUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCESSORY",
    ()=>ACCESSORY,
    "ACTIVE",
    ()=>ACTIVE,
    "ACTIVITY_DEF_TYPES",
    ()=>ACTIVITY_DEF_TYPES,
    "ACTIVITY_RESOURCES",
    ()=>ACTIVITY_RESOURCES,
    "ALL",
    ()=>ALL,
    "AREA_UNIT",
    ()=>AREA_UNIT,
    "COMPOST",
    ()=>COMPOST,
    "CONTRACTOR",
    ()=>CONTRACTOR,
    "CUSTOMER_TYPES",
    ()=>CUSTOMER_TYPES,
    "DISINFECTANT",
    ()=>DISINFECTANT,
    "ENERGY",
    ()=>ENERGY,
    "EQUIPMENT",
    ()=>EQUIPMENT,
    "EXECUTED",
    ()=>EXECUTED,
    "FERTILIZER",
    ()=>FERTILIZER,
    "FormSpacer",
    ()=>FormSpacer,
    "GENERAL",
    ()=>GENERAL,
    "GENERAL_PLAN",
    ()=>GENERAL_PLAN,
    "HARVEST",
    ()=>HARVEST,
    "HARVEST_TYPES",
    ()=>HARVEST_TYPES,
    "HOUR",
    ()=>HOUR,
    "INACTIVE",
    ()=>INACTIVE,
    "INVENTORY",
    ()=>INVENTORY,
    "IRRIGARION_TYPES",
    ()=>IRRIGARION_TYPES,
    "IRRIGATION",
    ()=>IRRIGATION,
    "IRRIGATION_PLAN",
    ()=>IRRIGATION_PLAN,
    "LIST_PESTICIDE",
    ()=>LIST_PESTICIDE,
    "MARKET",
    ()=>MARKET,
    "MAX_PER_MAP",
    ()=>MAX_PER_MAP,
    "MapToolTip",
    ()=>MapToolTip,
    "PESTICIDE",
    ()=>PESTICIDE,
    "PLAN",
    ()=>PLAN,
    "PLANS",
    ()=>PLANS,
    "QTY_PER_AREA_UNIT_RESOURCE_TYPE",
    ()=>QTY_PER_AREA_UNIT_RESOURCE_TYPE,
    "SCOUT",
    ()=>SCOUT,
    "SECONDARY_QTY_RESOURCES",
    ()=>SECONDARY_QTY_RESOURCES,
    "SPRAY",
    ()=>SPRAY,
    "SPRAYER",
    ()=>SPRAYER,
    "SPRAY_PLAN",
    ()=>SPRAY_PLAN,
    "SPRAY_TYPES",
    ()=>SPRAY_TYPES,
    "UI_SIZE",
    ()=>UI_SIZE,
    "VARIETY",
    ()=>VARIETY,
    "WAREHOUSE_RESOURCE_TYPE",
    ()=>WAREHOUSE_RESOURCE_TYPE,
    "WATER",
    ()=>WATER,
    "WORKER",
    ()=>WORKER,
    "WORKER_GROUP",
    ()=>WORKER_GROUP,
    "activityDescription",
    ()=>activityDescription,
    "activityLongText",
    ()=>activityLongText,
    "asLocalDate",
    ()=>asLocalDate,
    "asLocalDateTime",
    ()=>asLocalDateTime,
    "asLocalTime",
    ()=>asLocalTime,
    "asShortStringDate",
    ()=>asShortStringDate,
    "asShortStringDateTime",
    ()=>asShortStringDateTime,
    "buildActiviesFilter",
    ()=>buildActiviesFilter,
    "buildActivityOptions",
    ()=>buildActivityOptions,
    "buildFieldOptions",
    ()=>buildFieldOptions,
    "countLines",
    ()=>countLines,
    "dateToString",
    ()=>dateToString,
    "daysDiff",
    ()=>daysDiff,
    "daysDiffToday",
    ()=>daysDiffToday,
    "displayFieldArea",
    ()=>displayFieldArea,
    "displayFieldName",
    ()=>displayFieldName,
    "endOfDay",
    ()=>endOfDay,
    "filterFields",
    ()=>filterFields,
    "firstDayOfThisMonth",
    ()=>firstDayOfThisMonth,
    "formatNumber",
    ()=>formatNumber,
    "generic",
    ()=>generic,
    "getActivityStatusText",
    ()=>getActivityStatusText,
    "getActivityStatuses",
    ()=>getActivityStatuses,
    "getActivityTypeText",
    ()=>getActivityTypeText,
    "getActivityTypes",
    ()=>getActivityTypes,
    "getBottomNavigationSx",
    ()=>getBottomNavigationSx,
    "getDateYear",
    ()=>getDateYear,
    "getExpieryText",
    ()=>getExpieryText,
    "getFieldCenter",
    ()=>getFieldCenter,
    "getFillColor",
    ()=>getFillColor,
    "getGeoCurrentPosition",
    ()=>getGeoCurrentPosition,
    "getGeoPosition",
    ()=>getGeoPosition,
    "getMarketingDestinations",
    ()=>getMarketingDestinations,
    "getMarketingIncomeCalcOptions",
    ()=>getMarketingIncomeCalcOptions,
    "getMinDateWidth",
    ()=>getMinDateWidth,
    "getOpacity",
    ()=>getOpacity,
    "getPointTypeColor",
    ()=>getPointTypeColor,
    "getPointTypes",
    ()=>getPointTypes,
    "getResourceTypeText",
    ()=>getResourceTypeText,
    "getResourceUsageUnit",
    ()=>getResourceUsageUnit,
    "getUnitText",
    ()=>getUnitText,
    "getWinds",
    ()=>getWinds,
    "getYearArray",
    ()=>getYearArray,
    "irrigationHead",
    ()=>irrigationHead,
    "isArrayEmpty",
    ()=>isArrayEmpty,
    "isFieldMatchOption",
    ()=>isFieldMatchOption,
    "isInventoryPossible",
    ()=>isInventoryPossible,
    "isMatchFieldFilterOptions",
    ()=>isMatchFieldFilterOptions,
    "isMatchFreeTextFilter",
    ()=>isMatchFreeTextFilter,
    "isMobile",
    ()=>isMobile,
    "isPlansPossible",
    ()=>isPlansPossible,
    "isPointInPoly",
    ()=>isPointInPoly,
    "isStringEmpty",
    ()=>isStringEmpty,
    "lastDayOfThisMonth",
    ()=>lastDayOfThisMonth,
    "mapDisplayFieldName",
    ()=>mapDisplayFieldName,
    "mapTextStyle",
    ()=>mapTextStyle,
    "maxLenghtStr",
    ()=>maxLenghtStr,
    "newDate",
    ()=>newDate,
    "parseDate",
    ()=>parseDate,
    "parseDateTime",
    ()=>parseDateTime,
    "parseISOOrNull",
    ()=>parseISOOrNull,
    "pointTypeColor",
    ()=>pointTypeColor,
    "removeRedundantSelectedActivityOptions",
    ()=>removeRedundantSelectedActivityOptions,
    "safeDiv",
    ()=>safeDiv,
    "setEmptyIfNull",
    ()=>setEmptyIfNull,
    "setISODate",
    ()=>setISODate,
    "startOfDay",
    ()=>startOfDay,
    "stopMapEventPropagation",
    ()=>stopMapEventPropagation,
    "subtractDays",
    ()=>subtractDays,
    "subtractYear",
    ()=>subtractYear,
    "tableCellSx",
    ()=>tableCellSx,
    "tableHeaderSx",
    ()=>tableHeaderSx,
    "toUTCDate",
    ()=>toUTCDate,
    "trap",
    ()=>trap,
    "tree",
    ()=>tree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$grey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__grey$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/colors/grey.js [app-client] (ecmascript) <export default as grey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/parseISO/index.js [app-client] (ecmascript) <export default as parseISO>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
;
;
;
;
;
var UI_SIZE = 'medium';
var GENERAL = 'GENERAL';
var GENERAL_PLAN = 'GENERAL_PLAN';
var SPRAY = 'SPRAY';
var SPRAY_PLAN = 'SPRAY_PLAN';
var MARKET = 'MARKET';
var HARVEST = 'HARVEST';
var SCOUT = 'SCOUTING';
var IRRIGATION = 'IRRIGATION';
var IRRIGATION_PLAN = 'IRRIGATION_PLAN';
var INVENTORY = 'INVENTORY';
var PLANS = 'PLANS';
var GROWER_ACTIVITY_TYPES = [
    GENERAL,
    SPRAY,
    SCOUT,
    IRRIGATION,
    HARVEST,
    MARKET
];
var GROWER_ACTIVITY_TYPES_MAP = [
    GENERAL,
    SPRAY,
    SCOUT,
    IRRIGATION,
    HARVEST,
    MARKET
]; //.concat(SCOUT)
var GROWER_PLAN_TYPES = [
    GENERAL_PLAN,
    SPRAY_PLAN,
    IRRIGATION_PLAN
];
var CUSTOMER_TYPES = [
    HARVEST,
    MARKET
];
var SPRAY_TYPES = [
    SPRAY,
    SPRAY_PLAN
];
var IRRIGARION_TYPES = [
    IRRIGATION,
    IRRIGATION_PLAN
];
var ACTIVITY_DEF_TYPES = [
    GENERAL,
    GENERAL_PLAN,
    HARVEST
];
var HARVEST_TYPES = [
    HARVEST
];
var WORKER = 'WORKER';
var CONTRACTOR = 'CONTRACTOR';
var WORKER_GROUP = 'WORKER_GROUP';
var FERTILIZER = 'FERTILIZER';
var PESTICIDE = 'PESTICIDE';
var ENERGY = 'ENERGY';
var ACCESSORY = 'ACCESSORY';
var VARIETY = 'VARIETY';
var COMPOST = 'COMPOST';
var EQUIPMENT = 'EQUIPMENT';
var DISINFECTANT = 'DISINFECTANT';
var WATER = 'WATER';
var SPRAYER = 'SPRAYER';
var LIST_PESTICIDE = 'listPesticide';
var WAREHOUSE_RESOURCE_TYPE = [
    PESTICIDE,
    FERTILIZER,
    ACCESSORY,
    VARIETY
];
var QTY_PER_AREA_UNIT_RESOURCE_TYPE = [
    PESTICIDE,
    FERTILIZER,
    ACCESSORY,
    VARIETY,
    COMPOST,
    DISINFECTANT
];
var SECONDARY_QTY_RESOURCES = [
    {
        type: WATER,
        label: 'publicSource',
        lessThanQty: true,
        gg: true
    },
    {
        type: ENERGY,
        label: 'renewable',
        lessThanQty: true,
        gg: true
    }
];
var ACTIVITY_RESOURCES = [
    {
        activity: GENERAL,
        types: [
            WORKER,
            CONTRACTOR,
            WORKER_GROUP,
            EQUIPMENT,
            PESTICIDE,
            FERTILIZER,
            ACCESSORY,
            VARIETY,
            COMPOST,
            DISINFECTANT,
            ENERGY
        ]
    },
    {
        activity: SPRAY,
        types: [
            SPRAYER,
            LIST_PESTICIDE,
            WORKER,
            CONTRACTOR,
            WORKER_GROUP,
            EQUIPMENT,
            FERTILIZER
        ]
    },
    {
        activity: HARVEST,
        types: [
            WORKER,
            CONTRACTOR,
            WORKER_GROUP,
            EQUIPMENT,
            ACCESSORY
        ]
    },
    {
        activity: IRRIGATION,
        types: [
            WATER,
            FERTILIZER,
            PESTICIDE,
            WORKER,
            CONTRACTOR,
            WORKER_GROUP,
            ACCESSORY
        ]
    },
    {
        activity: SCOUT,
        types: [
            LIST_PESTICIDE
        ]
    }
];
var tableHeaderSx = {
    fontWeight: 'bold',
    padding: 0.5
};
var tableCellSx = {
    padding: 0.5
};
function getBottomNavigationSx(disabled) {
    return disabled ? {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$grey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__grey$3e$__["grey"][400]
    } : null;
}
function getActivityTypes(role, isMap, isPlan) {
    if (isMap) {
        return GROWER_ACTIVITY_TYPES_MAP;
    } else if (isPlan) {
        return GROWER_PLAN_TYPES;
    } else {
        return GROWER_ACTIVITY_TYPES;
    }
}
var PLAN = 'PLAN';
var EXECUTED = 'EXECUTED';
function getActivityStatuses(role, isPlan) {
    if (isPlan) {
        return [
            PLAN,
            EXECUTED
        ];
    } else {
        return [];
    }
}
var activityDescription = function(e, text) {
    var _e_activityDef;
    if (!e) {
        return '';
    }
    return (e === null || e === void 0 ? void 0 : e.activityDef) ? (_e_activityDef = e.activityDef) === null || _e_activityDef === void 0 ? void 0 : _e_activityDef.name : text[e.type.toLowerCase()];
};
var activityLongText = function(e, text) {
    if (!e) {
        return '';
    }
    if (e.type === SCOUT) {
        var _e_scoutParams_scouts, _e_scoutParams;
        return (_e_scoutParams = e.scoutParams) === null || _e_scoutParams === void 0 ? void 0 : (_e_scoutParams_scouts = _e_scoutParams.scouts) === null || _e_scoutParams_scouts === void 0 ? void 0 : _e_scoutParams_scouts.map(function(s) {
            return s.finding.name;
        }).join(", ");
    } else {
        return e.note;
    }
//  return 'e'
// return e.activityDef ? e.activityDef.name : text[e.type.toLowerCase()];
};
var maxLenghtStr = function(str, maxLenght) {
    return !isStringEmpty(str) || str.lenght > maxLenght ? str.slice(0, maxLenght) : str;
};
var displayFieldName = function(field) {
    if (field) {
        return field.alias ? "".concat(field.name, ", ").concat(field.alias) : field.name;
    } else {
        return '';
    }
};
var mapDisplayFieldName = function(field, showName, showAlias, showOfficialFieldId) {
    var tooltipText = [];
    if (showName) {
        tooltipText.push(field.name);
    }
    if (showAlias && !isStringEmpty(field.alias)) {
        tooltipText.push(field.name);
    }
    if (showOfficialFieldId && !isStringEmpty(field.baseFieldOfficialId)) {
        tooltipText.push(field.baseFieldOfficialId);
    }
    return tooltipText.join(', ');
// if (showName && !showAlias) {
//     return field.name;
// } else if (!showName && showAlias) {
//     return field.alias ? field.alias : '';
// } else {
//     return field.alias ? `${field.name}, ${field.alias}` : field.name;
// }
};
var mapTextStyle = {
    color: 'white',
    textShadow: '-1px 1px 0 #000,1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'
};
var MAX_PER_MAP = 600;
var MapToolTip = function(param) {
    var textArr = param.textArr, large = param.large;
    var variant = large ? 'h6' : 'subtitle1';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        className: 'empty-tooltip',
        direction: "center",
        opacity: 0.8,
        permanent: true,
        children: textArr.map(function(e, index) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: variant,
                style: mapTextStyle,
                children: e
            }, index, false, {
                fileName: "[project]/src/ui/FarmUtil.js",
                lineNumber: 172,
                columnNumber: 13
            }, _this);
        })
    }, void 0, false, {
        fileName: "[project]/src/ui/FarmUtil.js",
        lineNumber: 168,
        columnNumber: 12
    }, _this);
};
_c = MapToolTip;
var displayFieldArea = function(field, areaUnit, text) {
    return "".concat(field.area, " ").concat(text[areaUnit]);
};
var AREA_UNIT = "area_unit";
var HOUR = "hour";
var getUnitText = function(unit, areaUnit, text) {
    if (isStringEmpty(unit)) {
        return '';
    }
    var value = unit.toLowerCase();
    if (value === AREA_UNIT) {
        return text[areaUnit];
    }
    var result = text[value];
    if (isStringEmpty(result)) {
        console.log('Translate: ', value);
        return '';
    } else return result;
};
var getResourceTypeText = function(type, text) {
    if (isStringEmpty(type)) {
        return '';
    }
    var value = type.toLowerCase();
    var result = text[value];
    if (result) {
        return result;
    } else {
        console.log('Translate: ', value);
        return '';
    }
};
var getActivityStatusText = function(type, text) {
    if (isStringEmpty(type)) {
        return '';
    }
    var value = type.toLowerCase();
    var result = text[value];
    if (result) {
        return result;
    } else {
        console.log('Translate: ', value);
        return '';
    }
};
var getResourceUsageUnit = function(resource, activityDef) {
    if (activityDef && CONTRACTOR === resource.type) {
        return activityDef.unit;
    }
    return resource.usageUnit;
};
var getActivityTypeText = function(type, text, long) {
    if (SCOUT === type) {
        return text.scouting;
    }
    if (long) {
        if (IRRIGARION_TYPES.includes(type)) {
            return "".concat(text[type.toLowerCase()], " ").concat(text.and).concat(text.fertilization);
        }
    }
    return [
        GENERAL
    ].includes(type) ? text.activity : text[type.toLowerCase()];
};
function isArrayEmpty(filterValue, filterNulls) {
    if (filterNulls) {
        return !filterValue || filterValue.filter(function(e) {
            return e !== null;
        }).length === 0;
    } else {
        return !filterValue || filterValue.length === 0;
    }
}
function isStringEmpty(str, print) {
    if (print) {
        console.log('isStringEmpty', str, print);
    }
    return !str || /^\s*$/.test(str);
}
function toUTCDate(date) {
    return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), 0, 0) / 1000; //minutes,seconds,milliseconds
}
function newDate() {
    var date = new Date();
    return date;
}
function startOfDay(date) {
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
function endOfDay(date) {
    date.setUTCHours(23, 59, 59, 999);
    ;
    return date;
}
function subtractYear(date, years) {
    var val = years ? years : 1;
    var d = new Date(date.getTime());
    d.setYear(d.getFullYear() - val);
    return d;
}
function subtractDays(date, days) {
    return new Date(date - 1000 * 60 * 60 * 24 * days);
}
function asShortStringDate(time) {
    if (time !== null) {
        return new Date(time).toLocaleDateString('en-GB', {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        });
    }
    return null;
}
function asShortStringDateTime(time) {
    if (time !== null) {
        return new Date(time).toLocaleDateString('en-GB', {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        });
    }
    return null;
}
function dateToString(date) {
    if (date && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(date, Date) && !isNaN(date.valueOf())) {
        return date.toLocaleDateString('en-GB', {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        });
    }
    return date;
}
function asLocalDate(date, hyphen) {
    if (date && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(date, Date)) {
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString(); // getMonth() is zero-based         
        var dd = date.getDate().toString();
        var space = hyphen ? "-" : "";
        return yyyy + space + (mm[1] ? mm : "0" + mm[0]) + space + (dd[1] ? dd : "0" + dd[0]);
    } else {
        return date;
    }
}
function setISODate(entity, param) {
    if (entity && entity[param]) {
        entity[param] = parseISOOrNull(entity[param]);
    }
}
function setEmptyIfNull(entity, param) {
    if (entity && !entity[param]) {
        entity[param] = '';
    }
}
function asLocalTime(date, hyphen) {
    if (date && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(date, Date)) {
        var hh = date.getHours().toString();
        var mm = date.getMinutes().toString(); // getMonth() is zero-based         
        var space = hyphen ? "-" : "";
        return (hh[1] ? hh : "0" + hh[0]) + ":" + (mm[1] ? mm : "0" + mm[0]) + ":00";
    } else {
        return date;
    }
}
function asLocalDateTime(date, hyphen) {
    if (date && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(date, Date)) {
        var yyyy = date.getFullYear().toString();
        var MM = (date.getMonth() + 1).toString(); // getMonth() is zero-based         
        var dd = date.getDate().toString();
        var hh = date.getHours().toString();
        var mm = date.getMinutes().toString(); // getMonth() is zero-based         
        var space = hyphen ? "-" : "";
        return yyyy + space + (MM[1] ? MM : "0" + MM[0]) + space + (dd[1] ? dd : "0" + dd[0]) + 'T' + (hh[1] ? hh : "0" + hh[0]) + ":" + (mm[1] ? mm : "0" + mm[0]) + ":00";
    } else {
        return date;
    }
}
function parseISOOrNull(date) {
    return date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__["parseISO"])(date) : null;
}
var daysDiff = function(before, after) {
    if (before && after) {
        var difference = endOfDay(after).getTime() - startOfDay(before).getTime();
        var TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }
    return 0;
};
var daysDiffToday = function(before) {
    var after = newDate();
    if (before) {
        var difference = endOfDay(after).getTime() - startOfDay(before).getTime();
        var TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }
    return 0;
};
function getDateYear(date) {
    if (date) {
        var d = new Date(Date.parse(date)).getFullYear();
        return d;
    } else {
        return null;
    }
}
function parseDate(date) {
    if (date !== null) {
        return asShortStringDate(Date.parse(date));
    }
    return null;
}
function parseDateTime(date) {
    if (date !== null) {
        return asShortStringDateTime(Date.parse(date));
    }
    return null;
}
function isMatchFieldFilterOptions(field, filterOptions) {
    var matchFilter = filterOptions.find(function(e) {
        var entry = e.key.split('_');
        var type = entry[0];
        var id = Number(entry[1]);
        var isMatchOption = isFieldMatchOption(field, type, id);
        if (isMatchOption) {
            return e;
        }
    });
    return matchFilter ? true : null;
}
function isFieldMatchOption(field, type, id) {
    if (type === 'field') {
        return field.baseFieldId === id;
    } else if (type === 'site') {
        return field.siteId === id;
    } else if (type === 'variety') {
        return field.varietyId === id;
    } else if (type === 'crop') {
        return field.cropId === id;
    } else if (type === 'tag1') {
        return field.tag1Id === id;
    } else if (type === 'tag2') {
        return field.tag2Id === id;
    } else if (type === 'parentField') {
        return field.parentFieldId === id;
    } else {
        return false;
    }
}
function isMatchFreeTextFilter(field, freeText) {
    var _field_alias, _field_note;
    if (((_field_alias = field.alias) === null || _field_alias === void 0 ? void 0 : _field_alias.includes(freeText)) || ((_field_note = field.note) === null || _field_note === void 0 ? void 0 : _field_note.includes(freeText))) {
        return true;
    }
}
var ACTIVE = 'active';
var INACTIVE = 'inactive';
var ALL = 'all';
function filterFields(fields, filterOptions, freeText, fieldsViewStatus) {
    var result = fields;
    if (!isStringEmpty(freeText)) {
        result = fields.filter(function(e) {
            return isMatchFreeTextFilter(e, freeText);
        });
    }
    if (!isArrayEmpty(filterOptions)) {
        result = result.filter(function(e) {
            return isMatchFieldFilterOptions(e, filterOptions);
        });
    }
    // if (fieldSiteFilter !== 0) {
    //     result = result.filter(e => fieldSiteFilter === e.siteId);
    // }
    // if (fieldBaseFieldFilter !== 0) {
    //     result = result.filter(e => fieldBaseFieldFilter === e.baseFieldId);
    // }
    if ([
        ACTIVE,
        INACTIVE
    ].includes(fieldsViewStatus)) {
        if (ACTIVE === fieldsViewStatus) {
            result = result.filter(function(e) {
                return e.endDate === null;
            });
        } else {
            result = result.filter(function(e) {
                return e.endDate !== null;
            });
        }
    }
    return result;
}
var buildActiviesFilter = function(start, end, freeText, autoComplete) {
    var filter = autoComplete.map(function(e) {
        return e.key;
    });
    if (!isStringEmpty(start)) {
        filter.push("start_".concat(start.replaceAll('-', '')));
    }
    if (!isStringEmpty(end)) {
        filter.push("end_".concat(end.replaceAll('-', '')));
    }
    if (!isStringEmpty(freeText)) {
        filter.push("freeText_".concat(freeText));
    }
    return filter;
};
var formatNumber = function(value) {
    if (!isNaN(value)) {
        return value.toLocaleString('en-US');
    }
    return value;
};
var thisYear = newDate().getFullYear();
var yearOptions = [
    thisYear + 2,
    thisYear + 1,
    thisYear,
    thisYear - 1,
    thisYear - 2,
    thisYear - 3
];
var getYearArray = function(minYear) {
    if (minYear) {
        return yearOptions.filter(function(e) {
            return e >= minYear;
        });
    }
    return yearOptions;
};
function getOpacity(field) {
    return field.endDate ? 1 : 0.3;
}
function getFillColor(field) {
    if (field.endDate) {
        return '#FFFFFF';
    } else {
        return field.color;
    }
}
function getWinds() {
    return [
        'windSpeedNone',
        'windSpeedCalm',
        'windSpeedStrong'
    ];
}
function getMarketingDestinations() {
    return [
        'noneDestination',
        'exportDestination',
        'localMarketDestination',
        'industryDestination'
    ];
}
function getMarketingIncomeCalcOptions() {
    return [
        'weight',
        'amount',
        'area'
    ];
}
function safeDiv(numerator, denominator) {
    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
        return 0;
    } else return (numerator / denominator).toFixed(2);
}
function isMobile() {
    var regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}
function getMinDateWidth() {
    return isMobile() ? 115 : 150;
}
function firstDayOfThisMonth() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay;
}
function lastDayOfThisMonth() {
    var date = new Date();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay;
}
function isInventoryPossible(userConf) {
    return userConf.find(function(e) {
        return e.type === INVENTORY;
    }) ? true : false;
}
function isPlansPossible(userConf) {
    return userConf.find(function(e) {
        return e.type.includes("_PLAN");
    }) ? true : false;
}
var trap = 'trap';
var generic = 'generic';
var tree = 'tree';
var irrigationHead = 'irrigationHead';
var pointTypeColor = [
    {
        type: trap,
        color: "red"
    },
    {
        type: tree,
        color: "green"
    },
    {
        type: irrigationHead,
        color: "blue"
    },
    {
        type: generic,
        color: "orange"
    }
];
var getPointTypeColor = function(type) {
    var _pointTypeColor_find;
    return (_pointTypeColor_find = pointTypeColor.find(function(e) {
        return e.type === type;
    })) === null || _pointTypeColor_find === void 0 ? void 0 : _pointTypeColor_find.color;
};
function getPointTypes() {
    return [
        generic,
        tree,
        trap,
        irrigationHead
    ];
}
function stopMapEventPropagation(e) {
    e.originalEvent.view.L.DomEvent.stopPropagation(e);
}
var FormSpacer = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        margin: 1
    }, void 0, false, {
        fileName: "[project]/src/ui/FarmUtil.js",
        lineNumber: 609,
        columnNumber: 12
    }, _this);
};
_c1 = FormSpacer;
var getFieldCenter = function(center, field) {
    if (center) {
        return center;
    } else if (field.lat && field.lng) {
        return [
            field.lat,
            field.lng
        ];
    } else if (!isArrayEmpty(field.geoPoints)) {
        return field.geoPoints[0];
    }
};
var countLines = function(text) {
    if (text) {
        var lines = text.split('\n').length;
        return lines;
    }
    return 0;
};
var getExpieryText = function(text, type) {
    if ([
        trap
    ].includes(type)) {
        return text.baitExpiry;
    } else {
        return text.expiry;
    }
};
var geoOptions = {
    enableHighAccuracy: true,
    timeOut: 5000
};
var getGeoCurrentPosition = function(setPosition) {
    if (isMobile() && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, setPosition(-1), geoOptions);
    } else {
        setPosition(-2);
    }
};
var getGeoPosition = function(setPosition) {
    var geoSucces = function(position) {
        setPosition([
            position.coords.latitude,
            position.coords.longitude
        ]);
    };
    var goFailure = function(err) {
        console.log('Error getCurrentPosition: ' + err);
        setPosition(-1);
    };
    if (isMobile() && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSucces, goFailure, geoOptions);
    } else {
        setPosition(-2);
    }
};
function isPointInPoly(poly, pt) {
    if (isArrayEmpty(poly) || isArrayEmpty(pt)) {
        return false;
    }
    for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)(poly[i][1] <= pt[1] && pt[1] < poly[j][1] || poly[j][1] <= pt[1] && pt[1] < poly[i][1]) && pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0] && (c = !c);
    return c;
}
var buildFieldOptions = function(fields) {
    if (isArrayEmpty(fields)) {
        return [];
    }
    var options = fields.map(function(e) {
        return {
            key: 'field_' + e.baseFieldId,
            id: e.baseFieldId,
            label: e.name,
            element: e
        };
    }).concat(fields.map(function(e) {
        return {
            key: 'site_' + e.siteId,
            id: e.id,
            label: e.siteName,
            element: e
        };
    })).concat(fields.map(function(e) {
        return {
            key: 'crop_' + e.cropId,
            id: e.id,
            label: e.cropName,
            element: e
        };
    })).concat(fields.map(function(e) {
        return {
            key: 'variety_' + e.varietyId,
            id: e.id,
            label: e.varietyName,
            element: e
        };
    })).concat(fields.filter(function(e) {
        return e.parentFieldId !== null;
    }).map(function(e) {
        return {
            key: 'parentField_' + e.parentFieldId,
            id: e.parentFieldId,
            label: e.parentFieldName,
            element: e
        };
    })).concat(fields.filter(function(e) {
        return e.tag1Id !== null;
    }).map(function(e) {
        return {
            key: 'tag1_' + e.tag1Id,
            id: e.tag1Id,
            label: e.tag1Name,
            element: e
        };
    })).concat(fields.filter(function(e) {
        return e.tag2Id !== null;
    }).map(function(e) {
        return {
            key: 'tag2_' + e.tag2Id,
            id: e.tag2Id,
            label: e.tag2Name,
            element: e
        };
    }));
    return uniqueArray(options, 'key');
};
var isFieldKey = function(key) {
    var stateList = [
        'field_',
        'crop_',
        'variety_',
        'parentField_',
        'tag1_',
        'tag2_'
    ];
    var result = stateList.filter(function(e) {
        return key.startsWith(e);
    });
    return result.length !== 0;
};
var buildActivityOptions = function(fields, activityDefs, fieldId, text, isPlan, role) {
    // const resourceTypes = [PESTICIDE, FERTILIZER]
    var options = getActivityStatuses(role, isPlan).map(function(e) {
        return {
            key: 'status_' + e,
            id: e,
            label: getActivityStatusText(e, text),
            element: e
        };
    }).concat(getActivityTypes(role, false, isPlan).map(function(e) {
        return {
            key: 'activityType_' + e,
            id: e,
            label: getActivityTypeText(e, text),
            element: e
        };
    })).concat(isNaN(fieldId) ? buildFieldOptions(fields) : []).concat(asSafeArray(activityDefs).map(function(e) {
        return {
            key: 'activityDef_' + e.id,
            id: e,
            label: e.name,
            element: e
        };
    })).concat(asSafeArray(activityDefs).map(function(e) {
        return {
            key: 'activityDefType_' + e.activityGroupId,
            id: e.activityGroupId,
            label: e.activityGroupName,
            element: e
        };
    }));
    // .concat(resourceTypes.map(e => {
    //     return { key: 'resourceType_' + e, id: e, label: getResourceTypeText(e,text), element: e }
    // }))
    return uniqueArray(options, 'key');
};
var asSafeArray = function(arr) {
    return isArrayEmpty(arr) ? [] : arr;
};
var removeRedundantSelectedActivityOptions = function(options, fieldId) {
    return isNaN(Number(fieldId)) ? options : options.filter(function(e) {
        return !isFieldKey(e.key);
    });
};
var uniqueArray = function(array, propertyName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(new Map(array.map(function(item) {
        return [
            item[propertyName],
            item
        ];
    })).values());
/*
        const attr = isStringEmpty(propertyName) ? 'key' : propertyName;
        return array.reduce((acc, current) => {
            const x = acc.find(item => item[attr] === current[attr]);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);*/ };
var fieldDisplayText = function(f) {
    if (isStringEmpty(f.alias)) {
        return f.name;
    } else {
        return "".concat(f.name, " (").concat(f.alias, ")");
    }
} /*
export function buildDomainFilter(domains, cropID) {
    const filterDomains = cropID ? domains.filter(domain => domain.variety.cropID === cropID) : domains;

    let fieldFilter = filterDomains.map(domain => (
        {
            value: 'field_' + domain.field.id,
            label: addBusinessName(domain, getFieldName(domain)),
        }
    ));

    let sites = filterDomains.map(domain => {
        if (domain.field.site)
            return (
                {
                    value: 'site_' + domain.field.site.id,
                    label: domain.field.site.name
                }
            )
    });
    let parentField = filterDomains.map(domain => {
        if (domain.field.parentField)
            return (
                {
                    value: 'parentField_' + domain.field.parentField.id,
                    label: domain.field.parentField.name
                }
            )
    });
    let crops = filterDomains.filter(domain => !isEmpty(domain.variety.identification)).map(domain => (
        {
            value: 'crop_' + domain.variety.cropID,
            label: addBusinessName(domain, domain.variety.category),
        }
    ));
    let varieties = filterDomains.filter(domain => !isEmpty(domain.variety.name)).map(domain => {
        return (
            {
                value: 'variety_' + domain.variety.id,
                label: addBusinessName(domain, domain.variety.name),

            }
        )
    });

    let tag1 = filterDomains.map(domain => {
        if (domain.tag1)
            return (
                {
                    value: 'tag1_' + domain.tag1.id,
                    label: domain.tag1.name
                }
            )
    });

    let tag2 = filterDomains.map(domain => {
        if (domain.tag2)
            return (
                {
                    value: 'tag2_' + domain.tag2.id,
                    label: domain.tag2.name
                }
            )
    });

    let all = [];
    if (!cropID) {
        all = all.concat(uniqBy(crops, 'value'));
    }
    all = all.concat(uniqBy(varieties, 'value'));
    all = all.concat(uniqBy(sites, 'value'));
    all = all.concat(uniqBy(parentField, 'value'));
    all = all.concat(uniqBy(fieldFilter, 'value'));
    all = all.concat(uniqBy(tag1, 'value'));
    all = all.concat(uniqBy(tag2, 'value'));

    return all.filter((element) => element !== undefined);
}


export function filterDomainsFreeText(domains, filter) {
    if (isEmpty(filter)) {
        return domains;
    }
    return domains.filter(d =>
        d.field.name.includes(filter) ||
        d.variety.name.includes(filter) ||
        d.variety.category.includes(filter) ||
        (!isEmpty(''+d.year) && (''+d.year).includes(filter)) ||
        (!isEmpty(d.alias) && d.alias.includes(filter)) ||
        (!isEmpty(d.description) && d.description.includes(filter)) ||
        // (d.field.site !== null && d.field.site.name.includes(filter)) ||
        (d.field.parentField !== null && !isEmpty(d.field.parentField.code) && d.field.parentField.code.includes(filter))
    );
}

*/ ;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapToolTip");
__turbopack_context__.k.register(_c1, "FormSpacer");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/Util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>Transition,
    "cellSx",
    ()=>cellSx,
    "cellSxChange",
    ()=>cellSxChange,
    "cellSxColor",
    ()=>cellSxColor,
    "cellSxLink",
    ()=>cellSxLink,
    "headerSx",
    ()=>headerSx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Slide$2f$Slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slide$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Slide/Slide.js [app-client] (ecmascript) <export default as Slide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
var p = 1;
var fontSize = 17;
var headerSx = {
    fontWeight: 'bold',
    padding: p,
    fontSize: fontSize
};
var cellSx = {
    padding: p,
    fontSize: fontSize
};
var cellSxLink = {
    padding: p,
    textDecoration: 'underline',
    color: 'blue',
    fontSize: fontSize
};
var cellSxChange = {
    padding: p,
    color: 'green',
    fontWeight: 'bold',
    fontSize: fontSize
};
var cellSxColor = function(color) {
    var val = {
        padding: p,
        fontWeight: 'bold',
        color: color,
        fontSize: fontSize
    };
    return val;
};
var Transition = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = function Transition(props, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Slide$2f$Slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slide$3e$__["Slide"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        direction: "up",
        ref: ref
    }, props), void 0, false, {
        fileName: "[project]/src/ui/Util.js",
        lineNumber: 19,
        columnNumber: 12
    }, this);
});
_c1 = Transition;
var _c, _c1;
__turbopack_context__.k.register(_c, "Transition$React.forwardRef");
__turbopack_context__.k.register(_c1, "Transition");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/settings/SettingsDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js [app-client] (ecmascript) <export default as FormControlLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DesktopWindowsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DesktopWindowsOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MobileFriendlyOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/MobileFriendlyOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$UserRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/router/UserRoutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
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
var flagMap = [
    {
        id: 'en',
        flag: 'GB',
        label: 'English',
        emoji: '🇬🇧'
    },
    {
        id: 'pt',
        flag: 'PT',
        label: 'Português',
        emoji: '🇵🇹'
    },
    {
        id: 'es',
        flag: 'ES',
        label: 'Español',
        emoji: '🇪🇸'
    },
    {
        id: 'he',
        flag: 'IL',
        label: 'עברית',
        emoji: '🇮🇱'
    }
];
var SettingsDialog = function() {
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    var open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectOpenSettings"]);
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false), 2), showAgent = _React_useState[0], setShowAgent = _React_useState[1];
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data, isUserSuccess = _useGetUserDataQuery.isSuccess;
    var isInventory = isUserSuccess ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInventoryPossible"])(user.userConf) : false;
    var isPlans = isUserSuccess ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlansPossible"])(user.userConf) : false;
    var showInventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectShowInventory"]);
    var showPlans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectShowPlans"]);
    var handleClose = function() {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpenSettings"])(false));
    };
    var handleLangChange = function(lang) {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLang"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$UserRoutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserLang"])(lang)));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpenSettings"])(false));
    };
    var handleInvenotryChange = function() {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowInventory"])(!showInventory));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpenSettings"])(false));
    };
    var handlePlansChange = function() {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowPlans"])(!showPlans));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpenSettings"])(false));
    };
    // const handleNewActivityGeoChange = () => {
    //     dispatch(setNewActivityGeo(!newActivityGeo));
    //     dispatch(setOpenSettings(false));
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        fullScreen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])(),
        fullWidth: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])(),
        open: open,
        onClose: handleClose,
        disableRestoreFocus: true,
        slots: {
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: handleClose,
                title: ""
            }, void 0, false, {
                fileName: "[project]/src/ui/settings/SettingsDialog.js",
                lineNumber: 67,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                        labelId: "demo-simple-select-label",
                        id: "demo-simple-select",
                        value: text.lang,
                        fullWidth: true,
                        onChange: function(e) {
                            return handleLangChange(e.target.value);
                        },
                        children: flagMap.map(function(e) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                value: e.id,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            fontSize: 25,
                                            children: [
                                                " ",
                                                e.emoji
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                            lineNumber: 81,
                                            columnNumber: 33
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            marginLeft: 1,
                                            marginRight: 1,
                                            children: [
                                                "".concat(e.label),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                            lineNumber: 82,
                                            columnNumber: 33
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                    lineNumber: 80,
                                    columnNumber: 29
                                }, _this)
                            }, e.id, false, {
                                fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                lineNumber: 79,
                                columnNumber: 25
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/ui/settings/SettingsDialog.js",
                        lineNumber: 70,
                        columnNumber: 17
                    }, _this),
                    isPlans && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: showPlans,
                                onChange: handlePlansChange
                            }, void 0, false, {
                                fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                lineNumber: 89,
                                columnNumber: 52
                            }, void 0),
                            label: text.plans
                        }, void 0, false, {
                            fileName: "[project]/src/ui/settings/SettingsDialog.js",
                            lineNumber: 89,
                            columnNumber: 25
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/settings/SettingsDialog.js",
                        lineNumber: 88,
                        columnNumber: 21
                    }, _this),
                    isInventory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: showInventory,
                                onChange: handleInvenotryChange
                            }, void 0, false, {
                                fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                lineNumber: 94,
                                columnNumber: 52
                            }, void 0),
                            label: text.inventory
                        }, void 0, false, {
                            fileName: "[project]/src/ui/settings/SettingsDialog.js",
                            lineNumber: 94,
                            columnNumber: 25
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/settings/SettingsDialog.js",
                        lineNumber: 93,
                        columnNumber: 21
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    sx: {
                                        padding: 0
                                    },
                                    onClick: function(_) {
                                        return setShowAgent(!showAgent);
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MobileFriendlyOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                        lineNumber: 102,
                                        columnNumber: 43
                                    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DesktopWindowsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                        lineNumber: 102,
                                        columnNumber: 72
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                lineNumber: 100,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                margin: 1
                            }, void 0, false, {
                                fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                lineNumber: 105,
                                columnNumber: 21
                            }, _this),
                            showAgent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: navigator.userAgent
                            }, void 0, false, {
                                fileName: "[project]/src/ui/settings/SettingsDialog.js",
                                lineNumber: 106,
                                columnNumber: 35
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/settings/SettingsDialog.js",
                        lineNumber: 99,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/settings/SettingsDialog.js",
                lineNumber: 69,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/settings/SettingsDialog.js",
        lineNumber: 60,
        columnNumber: 9
    }, _this);
};
_s(SettingsDialog, "iNPMqkSJ73M1JEARbwAwmTW21ow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = SettingsDialog;
const __TURBOPACK__default__export__ = SettingsDialog;
var _c;
__turbopack_context__.k.register(_c, "SettingsDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/layers/PointIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVITY_POINT_TYPE",
    ()=>ACTIVITY_POINT_TYPE,
    "SCOUT_POINT_TYPE",
    ()=>SCOUT_POINT_TYPE,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CenterFocusStrong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CenterFocusStrong.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Opacity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Opacity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AdjustOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AdjustOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PestControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PestControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$layers$2f$LayersDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/layers/LayersDialog.js [app-client] (ecmascript)");
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
var height = 32;
var isExpired = function(point) {
    if (point.active && point.expiry) {
        var expiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISOOrNull"])(point.expiry);
        if (expiry.valueOf() < new Date().valueOf()) {
            return true;
        }
    }
    return false;
};
var getBorderColor = function(point) {
    if (isExpired(point)) {
        return 'red';
    }
    return null;
};
var getBorderWidth = function(point) {
    if (getBorderColor(point) === null) {
        return null;
    }
    return 3;
};
var SCOUT_POINT_TYPE = "scout";
var ACTIVITY_POINT_TYPE = "activity";
var getBgColor = function(point, color) {
    if (color) {
        return color;
    } else if (!point.active) {
        return 'gray';
    } else if (point.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["irrigationHead"]) {
        return '#82b1ff';
    } else {
        return 'white';
    }
};
function PointIcon(param) {
    var point = param.point, color = param.color;
    var backgroundColor = getBgColor(point, color);
    if (point.type === SCOUT_POINT_TYPE) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
            sx: {
                height: height,
                width: height,
                backgroundColor: backgroundColor,
                borderColor: getBorderColor(point)
            },
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PestControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    fontSize: "medium",
                    sx: {
                        color: 'black'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/ui/layers/PointIcon.js",
                    lineNumber: 57,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/layers/PointIcon.js",
            lineNumber: 57,
            columnNumber: 16
        }, this);
    } else if (point.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trap"]) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
            sx: {
                height: height,
                width: height,
                backgroundColor: backgroundColor,
                border: getBorderWidth(point),
                borderColor: getBorderColor(point)
            },
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CenterFocusStrong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    fontSize: "medium",
                    sx: {
                        color: 'black'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/ui/layers/PointIcon.js",
                    lineNumber: 60,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/layers/PointIcon.js",
            lineNumber: 60,
            columnNumber: 16
        }, this);
    } else if (point.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["irrigationHead"]) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
            sx: {
                height: height,
                width: height,
                backgroundColor: backgroundColor,
                border: getBorderWidth(point),
                borderColor: getBorderColor(point)
            },
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Opacity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    fontSize: "medium",
                    sx: {
                        color: 'black'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/ui/layers/PointIcon.js",
                    lineNumber: 63,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/layers/PointIcon.js",
            lineNumber: 63,
            columnNumber: 16
        }, this);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
            sx: {
                height: height,
                width: height,
                backgroundColor: backgroundColor,
                border: getBorderWidth(point),
                borderColor: getBorderColor(point)
            },
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AdjustOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    fontSize: "medium",
                    sx: {
                        color: 'black'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/ui/layers/PointIcon.js",
                    lineNumber: 65,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/layers/PointIcon.js",
            lineNumber: 65,
            columnNumber: 16
        }, this);
    }
}
_c = PointIcon;
const __TURBOPACK__default__export__ = PointIcon;
var _c;
__turbopack_context__.k.register(_c, "PointIcon");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/layers/LayersDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVITY",
    ()=>ACTIVITY,
    "SCOUT",
    ()=>SCOUT,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js [app-client] (ecmascript) <export default as FormControlLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Slide$2f$Slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slide$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Slide/Slide.js [app-client] (ecmascript) <export default as Slide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/dialog/DialogAppBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CenterFocusStrong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CenterFocusStrong.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$point$2f$PointForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/point/PointForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/points/pointsApiSlice.js [app-client] (ecmascript)");
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
var Transition = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = function Transition(props, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Slide$2f$Slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slide$3e$__["Slide"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        direction: "up",
        ref: ref
    }, props), void 0, false, {
        fileName: "[project]/src/ui/layers/LayersDialog.js",
        lineNumber: 27,
        columnNumber: 12
    }, this);
});
_c1 = Transition;
var SCOUT = 'scout';
var ACTIVITY = 'activity';
var irrigationHead = 'irrigationHead';
var trap = 'trap';
var LayersDialog = function() {
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    var open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectOpenLayers"]);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), newPoint = _useState[0], setNewPoint = _useState[1];
    // const { data: user, isSuccess: isUserSuccess } = useGetUserDataQuery()
    var showLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectShowLayers"]);
    var showFieldAlias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectShowFieldAlias"]);
    var showFieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectShowFieldName"]);
    var showOfficialFieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectShowOfficialFieldId"]);
    var visibilLayes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectVisibilLayes"]);
    var _useGetLayersQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetLayersQuery"])(), layers = _useGetLayersQuery.data, isLoadingPoints = _useGetLayersQuery.isLoading, isFetchingPoints = _useGetLayersQuery.isFetching;
    // const onNewPointSaved = () => {
    //     setNewPoint(null);
    // }
    var addPoint = function(type) {
        var point = {
            id: null,
            lat: null,
            lng: null,
            fieldId: null,
            name: '',
            pest: null,
            expiry: null,
            active: true,
            type: type
        };
        setNewPoint(point);
    };
    var handleClose = function() {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpenLayers"])(false));
    };
    // const handleEditLayer = (layer) => {
    //     dispatch(setOpenLayers(false));
    //     dispatch(setEditLayer(layer));
    //     dispatch(setShowLayers([layer]));
    // }
    var handleChange = function(layer) {
        if (showLayers.includes(layer)) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowLayers"])(showLayers.filter(function(e) {
                return e !== layer;
            })));
        } else {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowLayers"])(showLayers.concat(layer)));
        }
    };
    var getLayers = function() {
        return layers ? layers : [];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        fullScreen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])(),
        fullWidth: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])(),
        open: open,
        onClose: handleClose,
        slots: {
            transition: Transition
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$dialog$2f$DialogAppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: handleClose,
                title: text.layers
            }, void 0, false, {
                fileName: "[project]/src/ui/layers/LayersDialog.js",
                lineNumber: 103,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: showLayers.includes(SCOUT),
                                onChange: function() {
                                    return handleChange(SCOUT);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/layers/LayersDialog.js",
                                lineNumber: 109,
                                columnNumber: 48
                            }, void 0),
                            label: text.pests
                        }, void 0, false, {
                            fileName: "[project]/src/ui/layers/LayersDialog.js",
                            lineNumber: 109,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 108,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 111,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: showLayers.includes(ACTIVITY),
                                onChange: function() {
                                    return handleChange(ACTIVITY);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/layers/LayersDialog.js",
                                lineNumber: 113,
                                columnNumber: 48
                            }, void 0),
                            label: text.activities
                        }, void 0, false, {
                            fileName: "[project]/src/ui/layers/LayersDialog.js",
                            lineNumber: 113,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 112,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 115,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 1,
                        marginBottom: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                                control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                    checked: showLayers.includes(trap),
                                    onChange: function() {
                                        return handleChange(trap);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/layers/LayersDialog.js",
                                    lineNumber: 117,
                                    columnNumber: 48
                                }, void 0),
                                label: text.traps
                            }, void 0, false, {
                                fileName: "[project]/src/ui/layers/LayersDialog.js",
                                lineNumber: 117,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                disableElevation: true,
                                variant: "outlined",
                                color: "secondary",
                                onClick: function() {
                                    return addPoint(trap);
                                },
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CenterFocusStrong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/layers/LayersDialog.js",
                                    lineNumber: 119,
                                    columnNumber: 125
                                }, void 0),
                                children: text.add
                            }, void 0, false, {
                                fileName: "[project]/src/ui/layers/LayersDialog.js",
                                lineNumber: 119,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 116,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 122,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: showFieldName,
                                onChange: function() {
                                    return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowFieldName"])(!showFieldName));
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/layers/LayersDialog.js",
                                lineNumber: 130,
                                columnNumber: 48
                            }, void 0),
                            label: text.field
                        }, void 0, false, {
                            fileName: "[project]/src/ui/layers/LayersDialog.js",
                            lineNumber: 130,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 129,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: showFieldAlias,
                                onChange: function() {
                                    return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowFieldAlias"])(!showFieldAlias));
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/layers/LayersDialog.js",
                                lineNumber: 133,
                                columnNumber: 48
                            }, void 0),
                            label: text.alias
                        }, void 0, false, {
                            fileName: "[project]/src/ui/layers/LayersDialog.js",
                            lineNumber: 133,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 132,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: showOfficialFieldId,
                                onChange: function() {
                                    return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowOfficialFieldId"])(!showOfficialFieldId));
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/ui/layers/LayersDialog.js",
                                lineNumber: 136,
                                columnNumber: 48
                            }, void 0),
                            label: text.officialFieldId
                        }, void 0, false, {
                            fileName: "[project]/src/ui/layers/LayersDialog.js",
                            lineNumber: 136,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 135,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                        fileName: "[project]/src/ui/layers/LayersDialog.js",
                        lineNumber: 138,
                        columnNumber: 17
                    }, _this),
                    getLayers().map(function(e) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            marginTop: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                                control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                    checked: visibilLayes.find(function(id) {
                                        return e.id === id;
                                    }) ? true : false,
                                    onChange: function() {
                                        return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVisibleLayers"])(e.id));
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/layers/LayersDialog.js",
                                    lineNumber: 141,
                                    columnNumber: 52
                                }, void 0),
                                label: e.name
                            }, void 0, false, {
                                fileName: "[project]/src/ui/layers/LayersDialog.js",
                                lineNumber: 141,
                                columnNumber: 25
                            }, _this)
                        }, e.id, false, {
                            fileName: "[project]/src/ui/layers/LayersDialog.js",
                            lineNumber: 140,
                            columnNumber: 28
                        }, _this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/layers/LayersDialog.js",
                lineNumber: 106,
                columnNumber: 13
            }, _this),
            newPoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$point$2f$PointForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: newPoint !== null,
                defaultValues: newPoint,
                handleClose: function() {
                    return setNewPoint(null);
                },
                deletable: false
            }, void 0, false, {
                fileName: "[project]/src/ui/layers/LayersDialog.js",
                lineNumber: 150,
                columnNumber: 29
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/layers/LayersDialog.js",
        lineNumber: 97,
        columnNumber: 9
    }, _this);
};
_s(LayersDialog, "Waiyj8n0WxtA5WWqsfxNoZjjr1k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetLayersQuery"]
    ];
});
_c2 = LayersDialog;
const __TURBOPACK__default__export__ = LayersDialog;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Transition$React.forwardRef");
__turbopack_context__.k.register(_c1, "Transition");
__turbopack_context__.k.register(_c2, "LayersDialog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/forms/season/SeasonDataForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AppBar/AppBar.js [app-client] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$season$2f$seasonDataApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/season/seasonDataApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
;
;
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
var SeasonDataForm = function(param) {
    var defaultValues = param.defaultValues, open = param.open, handleClose = param.handleClose, plantation = param.plantation;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useCreateSeasonDataMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$season$2f$seasonDataApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateSeasonDataMutation"])(), 1), createSeasonData = _useCreateSeasonDataMutation[0];
    var _useUpdateSeasonDataMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$season$2f$seasonDataApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateSeasonDataMutation"])(), 1), updateSeasonData = _useUpdateSeasonDataMutation[0];
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: defaultValues
    }), control = _useForm.control, register = _useForm.register, handleSubmit = _useForm.handleSubmit, getValues = _useForm.getValues, watch = _useForm.watch, errors = _useForm.formState.errors, _useForm_formState = _useForm.formState, isDirty = _useForm_formState.isDirty, dirtyFields = _useForm_formState.dirtyFields, reset = _useForm.reset, setValue = _useForm.setValue, trigger = _useForm.trigger;
    var saveSeasonData = function(data) {
        data.ripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLocalDate"])(data.ripe, true);
        data.flash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLocalDate"])(data.flash, true);
        if (data.id) {
            return createSeasonData(data).unwrap();
        } else {
            return updateSeasonData(data).unwrap();
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
                            saveSeasonData(data)
                        ];
                    case 1:
                        result = _state.sent();
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSnackbar"])({
                            msg: data.id ? text.recordUpdated : text.recordCreated,
                            severity: 'success'
                        }));
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
    var onAction = function(save) {
        handleClose(save ? null : null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
                sx: {
                    position: 'relative'
                },
                elevation: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'space-between',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    sx: {
                                        ml: 2,
                                        flex: 1
                                    },
                                    variant: "h6",
                                    component: "div",
                                    children: text.season
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    sx: {
                                        ml: 2,
                                        flex: 1
                                    },
                                    variant: "h6",
                                    component: "div",
                                    children: defaultValues.year
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                            lineNumber: 66,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            edge: "start",
                            onClick: function() {
                                return onAction(false);
                            },
                            color: "inherit",
                            "aria-label": "done",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                lineNumber: 80,
                                columnNumber: 25
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                            lineNumber: 74,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                    lineNumber: 65,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                lineNumber: 64,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                    control: control,
                                    name: "estimateProducePerAreaUnit",
                                    render: function(_0) {
                                        var _ref = _0.field, ref = _ref.ref, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                            "ref"
                                        ]);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                            sx: {
                                                flex: 1
                                            },
                                            size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI_SIZE"],
                                            fullWidth: true,
                                            type: "number",
                                            id: "activity-estimateProducePerAreaUnit",
                                            label: text.estimatedProduce
                                        }, field), {
                                            InputProps: {
                                                endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                                    position: "end",
                                                    children: "".concat(text[user.weightUnit], "/").concat(text[user.areaUnit])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                                    lineNumber: 101,
                                                    columnNumber: 55
                                                }, void 0)
                                            }
                                        }), void 0, false, {
                                            fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                            lineNumber: 93,
                                            columnNumber: 33
                                        }, void 0);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                lineNumber: 88,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                margin: 1
                            }, void 0, false, {
                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                lineNumber: 111,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flex: 1,
                                children: [
                                    plantation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        name: "ripe",
                                        control: control,
                                        render: function(param) {
                                            var field = param.field;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                                label: text.ripe,
                                                closeOnSelect: true,
                                                showToolbar: false,
                                                localeText: {
                                                    cancelButtonLabel: text.cancel,
                                                    clearButtonLabel: text.clear,
                                                    okButtonLabel: text.save
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
                                            }, field), void 0, false, {
                                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, void 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                        lineNumber: 113,
                                        columnNumber: 40
                                    }, _this),
                                    !plantation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        name: "flash",
                                        control: control,
                                        render: function(param) {
                                            var field = param.field;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                                label: text.flash,
                                                closeOnSelect: true,
                                                showToolbar: false,
                                                localeText: {
                                                    cancelButtonLabel: text.cancel,
                                                    clearButtonLabel: text.clear,
                                                    okButtonLabel: text.save
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
                                            }, field), void 0, false, {
                                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                                lineNumber: 135,
                                                columnNumber: 33
                                            }, void 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                        lineNumber: 131,
                                        columnNumber: 41
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                lineNumber: 112,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                margin: 1
                            }, void 0, false, {
                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                lineNumber: 150,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                    control: control,
                                    name: "note",
                                    render: function(_0) {
                                        var _ref = _0.field, ref = _ref.ref, field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                            "ref"
                                        ]);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                            id: "season-note",
                                            size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI_SIZE"],
                                            label: text.note,
                                            fullWidth: true,
                                            multiline: true,
                                            rows: 3
                                        }, field), void 0, false, {
                                            fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                            lineNumber: 156,
                                            columnNumber: 33
                                        }, void 0);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                    lineNumber: 152,
                                    columnNumber: 25
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                lineNumber: 151,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                        lineNumber: 87,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        sx: {
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            size: "large",
                            disabled: !isDirty,
                            endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                                lineNumber: 166,
                                columnNumber: 71
                            }, void 0),
                            disableElevation: true,
                            variant: "contained",
                            type: "submit",
                            children: text.save
                        }, void 0, false, {
                            fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                            lineNumber: 166,
                            columnNumber: 21
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                        lineNumber: 165,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
                lineNumber: 85,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/forms/season/SeasonDataForm.js",
        lineNumber: 57,
        columnNumber: 9
    }, _this);
};
_s(SeasonDataForm, "NDM5KqaLzOnzzzORrAlxYcK6XK8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$season$2f$seasonDataApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateSeasonDataMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$season$2f$seasonDataApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateSeasonDataMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = SeasonDataForm;
const __TURBOPACK__default__export__ = SeasonDataForm;
var _c;
__turbopack_context__.k.register(_c, "SeasonDataForm");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/forms/season/SeasonData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$forms$2f$season$2f$SeasonDataForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/forms/season/SeasonDataForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$season$2f$seasonDataApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/season/seasonDataApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/fields/fieldsApiSlice.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
var SeasonData = function(param) {
    var open = param.open, handleClose = param.handleClose, year = param.year, fieldId = param.fieldId;
    _s();
    var _useGetSeasonDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$season$2f$seasonDataApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetSeasonDataQuery"])({
        year: year,
        fieldId: fieldId
    }), data = _useGetSeasonDataQuery.data, isSuccess = _useGetSeasonDataQuery.isSuccess;
    var field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldsById"])(year, Number(fieldId));
    if (!data || !field) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/src/ui/forms/season/SeasonData.js",
            lineNumber: 12,
            columnNumber: 12
        }, _this);
    }
    var defaultValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setISODate"])(defaultValues, 'ripe');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setISODate"])(defaultValues, 'flash');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setEmptyIfNull"])(defaultValues, 'estimateProducePerAreaUnit');
    defaultValues.field = field;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$forms$2f$season$2f$SeasonDataForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        handleClose: handleClose,
        defaultValues: defaultValues,
        plantation: field.plantation
    }, void 0, false, {
        fileName: "[project]/src/ui/forms/season/SeasonData.js",
        lineNumber: 20,
        columnNumber: 5
    }, _this);
};
_s(SeasonData, "SCYcqgnz1CAXUNMR+2gc1OIYyf4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$season$2f$seasonDataApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetSeasonDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldsById"]
    ];
});
_c = SeasonData;
const __TURBOPACK__default__export__ = SeasonData;
var _c;
__turbopack_context__.k.register(_c, "SeasonData");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/FarmCalculator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { FERTILIZER } from "../reducers/ResourceReducer";
// import { PER_LIT, PER_KG, PER_M3, PER_CONTAINER } from "./Units";
// import { sumBy } from 'lodash';
// import { CONTRACTOR, WORKER, WORKER_GROUP } from "../modules/activity/types";
__turbopack_context__.s([
    "PER_AREA_UNIT_PER_DAY",
    ()=>PER_AREA_UNIT_PER_DAY,
    "PER_AREA_UNIT_PER_IRREGATION_DAY",
    ()=>PER_AREA_UNIT_PER_IRREGATION_DAY,
    "PER_WATER_UNIT",
    ()=>PER_WATER_UNIT,
    "TOTAL_PER_AREA_UNIT",
    ()=>TOTAL_PER_AREA_UNIT,
    "TOTAL_PER_FIELD",
    ()=>TOTAL_PER_FIELD,
    "calacTotalPesticideVolume",
    ()=>calacTotalPesticideVolume,
    "calcIrrigationDays",
    ()=>calcIrrigationDays,
    "calcNPK",
    ()=>calcNPK,
    "calcSprayVolume",
    ()=>calcSprayVolume,
    "calcSprayVolumePerArea",
    ()=>calcSprayVolumePerArea,
    "calcSprayerCount",
    ()=>calcSprayerCount,
    "calcTotalFertilizerQty",
    ()=>calcTotalFertilizerQty,
    "calcTotalWaterQtyUtilFunc",
    ()=>calcTotalWaterQtyUtilFunc,
    "convertKelvin",
    ()=>convertKelvin,
    "withinPerscentRange",
    ()=>withinPerscentRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
;
;
;
function calcNPK(quntity, specificGravity, value, usageUnit) {
    var result = quntity * value / 100 * specificGravity;
    if (result) {
        if ('m3' === usageUnit) {
            result = result * 1000;
        }
        return result.toFixed(2);
    }
    return 0;
}
function calcIrrigationDays(days, frequency) {
    if (days && frequency) {
        return (days / frequency).toFixed(0);
    }
    return 1;
}
function calcTotalWaterQtyUtilFunc(irrigationMtd, waterQty, area, daysInPeriod, irrigationDays, numberOfFields) {
    switch(irrigationMtd){
        case PER_AREA_UNIT_PER_DAY:
            {
                return waterQty * area * daysInPeriod;
            }
        case PER_AREA_UNIT_PER_IRREGATION_DAY:
            {
                return waterQty * area * irrigationDays;
            }
        case TOTAL_PER_AREA_UNIT:
            {
                return waterQty * area;
            }
        case TOTAL_PER_FIELD:
            {
                return waterQty * numberOfFields;
            }
        default:
            {
                return waterQty;
            }
    }
}
var PER_WATER_UNIT = 'perM3Water';
var PER_AREA_UNIT_PER_DAY = 'perAreaUnitPerDay';
var PER_AREA_UNIT_PER_IRREGATION_DAY = 'perAreaUnitPerIrrigationDay';
var TOTAL_PER_AREA_UNIT = 'totalPerAreaUnit';
var TOTAL_PER_FIELD = 'totalPerField';
function calcTotalFertilizerQty(fertilizeMethod, fertilizerQty, totalWaterQty, area, daysInPeriod, irrigationDays, numberOfFields) {
    switch(fertilizeMethod){
        case PER_WATER_UNIT:
            {
                return fertilizerQty * totalWaterQty;
            }
        case PER_AREA_UNIT_PER_DAY:
            {
                return fertilizerQty * area * daysInPeriod;
            }
        case PER_AREA_UNIT_PER_IRREGATION_DAY:
            {
                return fertilizerQty * area * irrigationDays;
            }
        case TOTAL_PER_AREA_UNIT:
            {
                return fertilizerQty * area;
            }
        case TOTAL_PER_FIELD:
            {
                return fertilizerQty * numberOfFields;
            }
        default:
            {
                return fertilizerQty * 1;
            }
    }
}
function calcSprayerCount(area, sprayerCapacity, sprayVolume) {
    if (area && sprayerCapacity && sprayVolume && sprayerCapacity > 0) {
        return area * sprayVolume / sprayerCapacity;
    } else {
        return 0;
    }
}
function calacTotalPesticideVolume(unit, pesticideDosage, sprayVolumePerAreaUnit, area) {
    var sprayVolumeValue = sprayVolumePerAreaUnit ? sprayVolumePerAreaUnit : 0;
    var point = 2;
    switch(unit){
        case 'PERCENT':
            {
                return toFixed(pesticideDosage * sprayVolumeValue / 100 * area, point);
            }
        case 'CC':
            {
                return toFixed(area * pesticideDosage / 1000, point);
                //TURBOPACK unreachable
                ;
            }
        case 'GRM':
            {
                return toFixed(area * pesticideDosage / 1000, point);
            }
        case 'LIT':
            {
                return toFixed(area * pesticideDosage, toFixed(), point);
            }
        case 'KG':
            {
                return toFixed(area * pesticideDosage, point);
            }
        // case 'PPM': {
        //     return ((pesticideDosage * sprayVolume * 0.001) / 1000) * area;
        // }
        case 'UNIT':
            {
                return toFixed(area * pesticideDosage, point);
            }
        default:
            {
                return 0;
            }
    }
}
function toFixed(value, floatingPoint) {
    if (value) {
        return Number(value.toFixed(floatingPoint));
    } else {
        return 0;
    }
}
function convertKelvin(value, toUnit) {
    var result = value - 273.15;
    return result.toFixed(1);
}
function withinPerscentRange(first, second, percentage) {
    if (first !== null && second !== null) {
        if (first === second) {
            return true;
        }
        if (first === 0 && second > 0) {
            return false;
        }
        if (second === 0 && first > 0) {
            return false;
        }
        if (first >= second) {
            return first < second * Number("1." + percentage);
        } else {
            return second < first * Number("1." + percentage);
        }
    }
    if (first == null && second == null) {
        return true;
    }
    return false;
}
function calcSprayVolumePerArea(volume, area) {
    if (volume && area && area > 0) {
        return (volume / area).toFixed(2);
    }
}
function calcSprayVolume(volumePerArea, area) {
    if (volumePerArea && area) {
        return (volumePerArea * area).toFixed(0);
    }
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ui_566e27ff._.js.map