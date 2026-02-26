(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/ui/field/FieldMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/CircleMarker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Polygon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$SatelliteMapProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/SatelliteMapProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GeoLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GeoLocation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
;
;
;
var FieldMap = function(param) {
    var field = param.field, height = param.height, tile = param.tile, setMap = param.setMap, onClick = param.onClick, points = param.points, setCenter = param.setCenter, center = param.center, setZoom = param.setZoom, zoom = param.zoom;
    var HandleMapEvents = function HandleMapEvents(d) {
        _s();
        var m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
            click: {
                "FieldMap.HandleMapEvents.useMapEvents[m]": function(e) {
                    if (onClick) {
                        onClick(e, field, 'map');
                    }
                }
            }["FieldMap.HandleMapEvents.useMapEvents[m]"],
            dragend: {
                "FieldMap.HandleMapEvents.useMapEvents[m]": function(e) {
                    if (setCenter) {
                        setCenter(e.target.getCenter());
                    }
                }
            }["FieldMap.HandleMapEvents.useMapEvents[m]"],
            zoom: {
                "FieldMap.HandleMapEvents.useMapEvents[m]": function(e) {
                    if (setZoom) {
                        setZoom(e.target.getZoom());
                    }
                }
            }["FieldMap.HandleMapEvents.useMapEvents[m]"]
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/src/ui/field/FieldMap.js",
            lineNumber: 34,
            columnNumber: 16
        }, this);
    };
    var _s = __turbopack_context__.k.signature();
    _s(HandleMapEvents, "5maJET9eqIuK0ZZsxUJ62nuMHLI=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
        ];
    });
    var hasPoints = Array.isArray(points);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        flex: 1,
        id: "map",
        dir: "ltr",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
            style: {
                height: height,
                width: '100%'
            },
            center: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldCenter"])(center, field),
            zoom: zoom ? zoom : field.zoom,
            scrollWheelZoom: false,
            ref: setMap,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$SatelliteMapProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/ui/field/FieldMap.js",
                    lineNumber: 46,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GeoLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/ui/field/FieldMap.js",
                    lineNumber: 47,
                    columnNumber: 17
                }, _this),
                tile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                    attribution: "Farm Manager",
                    url: tile,
                    bounds: field.geoPoints
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/FieldMap.js",
                    lineNumber: 48,
                    columnNumber: 26
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polygon"], {
                    eventHandlers: {
                        click: function(e) {
                            if (onClick) {
                                onClick(e, field, 'polygon');
                            }
                        // mapCliecked(e, f, 'polygon');
                        // navigate(`/field/map/${f.id}/info`)
                        }
                    },
                    color: field.color,
                    fillColor: field.color,
                    positions: field.geoPoints
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/FieldMap.js",
                    lineNumber: 53,
                    columnNumber: 17
                }, _this),
                hasPoints && points.map(function(e) //    <Circle center={[e.lat, e.lng]} radius={10}  />
                {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
                        eventHandlers: {
                            click: function(event) {
                                if (onClick) {
                                    onClick(event, e, 'point');
                                }
                            // mapCliecked(e, f, 'polygon');
                            // navigate(`/field/map/${f.id}/info`)
                            }
                        },
                        radius: 12,
                        color: e.color,
                        weight: 4,
                        fillColor: e.fillColor,
                        fillOpacity: 1,
                        center: [
                            e.lat,
                            e.lng
                        ]
                    }, e.id, false, {
                        fileName: "[project]/src/ui/field/FieldMap.js",
                        lineNumber: 72,
                        columnNumber: 25
                    }, _this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HandleMapEvents, {}, void 0, false, {
                    fileName: "[project]/src/ui/field/FieldMap.js",
                    lineNumber: 95,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/field/FieldMap.js",
            lineNumber: 43,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/field/FieldMap.js",
        lineNumber: 42,
        columnNumber: 9
    }, _this);
};
_c = FieldMap;
const __TURBOPACK__default__export__ = FieldMap;
var _c;
__turbopack_context__.k.register(_c, "FieldMap");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/InfoLine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
var InfoLine = function(param) {
    var value = param.value, title = param.title;
    if (value) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    marginTop: 1,
                    marginLeft: 1,
                    marginRight: 1,
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle1",
                            color: "text.secondary",
                            children: [
                                title,
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/ui/field/InfoLine.js",
                            lineNumber: 9,
                            columnNumber: 17
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            paddingLeft: 1
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/InfoLine.js",
                            lineNumber: 12,
                            columnNumber: 17
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle1",
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/InfoLine.js",
                            lineNumber: 13,
                            columnNumber: 17
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/field/InfoLine.js",
                    lineNumber: 8,
                    columnNumber: 13
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                    fileName: "[project]/src/ui/field/InfoLine.js",
                    lineNumber: 18,
                    columnNumber: 13
                }, _this)
            ]
        }, void 0, true);
    }
};
_c = InfoLine;
const __TURBOPACK__default__export__ = InfoLine;
var _c;
__turbopack_context__.k.register(_c, "InfoLine");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/FieldInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/FieldMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/InfoLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionSpeedDial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ActionSpeedDial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/points/pointsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$layers$2f$LayersDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/layers/LayersDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$point$2f$FieldPointDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/point/FieldPointDialog.js [app-client] (ecmascript)");
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
var FieldInfo = function(param) {
    var field = param.field;
    _s();
    var fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])().fieldId;
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useGetFieldPointsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldPointsQuery"])({
        fieldId: fieldId
    }), points = _useGetFieldPointsQuery.data, isLoadingPoints = _useGetFieldPointsQuery.isLoading, isFetchingPoints = _useGetFieldPointsQuery.isFetching;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), point = _useState[0], setPoint = _useState[1];
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null), 2), dialog = _React_useState[0], setDialog = _React_useState[1];
    var onFieldMapClick = function(event, element, type) {
    // console.log('onFieldMapClick', /*event, element*/ type);
    // if (type === 'map') {
    //     const p = { id: null, lat: event.latlng.lat, lng: event.latlng.lng, fieldId, 
    //         name: `${displayFieldName(field)} - ${points.length+1} `, 
    //         pest: null,
    //         expiry: null,
    //         active: true, type: getPointTypes()[0] };
    //     setPoint(p);
    //     //setDialog('point')
    // }
    // if (type === 'point') {
    //     event.originalEvent.view.L.DomEvent.stopPropagation(event)
    //     setPoint(element);
    // }
    };
    var handleCloseEditPoint = function(action, e) {
        // setEditPoint(false);
        // console.log(action)
        if (action === 'delete') {
        //handleClose(null);
        } else if (action === 'save') {
            setPoint(null);
        }
        setPoint(null);
    };
    var height = (window.innerHeight - 120) / 2;
    var buildFieldPoints = function(arr) {
        return arr === null || arr === void 0 ? void 0 : arr.map(function(e) {
            var val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, e), {
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPointTypeColor"])(e.type),
                fillColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPointTypeColor"])(e.type)
            });
            return val;
        });
    };
    var src = 'map';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        display: 'flex',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'column',
        children: [
            field.polygon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: field,
                height: height,
                onClick: onFieldMapClick,
                points: []
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 73,
                columnNumber: 31
            }, _this),
            !field.plantation && !field.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysDiffToday"])(new Date(field.startDate)),
                title: text.daysSinceSeedling
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 74,
                columnNumber: 53
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.siteName,
                title: text.site
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 75,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.parentFieldName,
                title: text.parentField
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 76,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.season,
                title: text.season
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 77,
                columnNumber: 13
            }, _this),
            field.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(field.endDate)),
                title: text.end
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 78,
                columnNumber: 30
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.tag1Name,
                title: field.tag1Type
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 79,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.tag2Name,
                title: field.tag2Type
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 80,
                columnNumber: 13
            }, _this),
            field.maturity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(field.maturity)),
                title: text.maturity
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 81,
                columnNumber: 33
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.density,
                title: text.density
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 82,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.plantSpacing,
                title: text.plantSpacing
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 83,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.rowSpacing,
                title: text.rowSpacing
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 84,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$InfoLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: field.note,
                title: text.note
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 85,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                height: 150
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 86,
                columnNumber: 13
            }, _this),
            point && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$point$2f$FieldPointDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: point !== null,
                deletable: true,
                defaultValues: point,
                handleClose: handleCloseEditPoint,
                types: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPointTypes"])()
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 87,
                columnNumber: 23
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionSpeedDial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                bottom: 100,
                map: true,
                plan: false,
                fieldId: fieldId
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldInfo.js",
                lineNumber: 89,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/field/FieldInfo.js",
        lineNumber: 72,
        columnNumber: 9
    }, _this);
};
_s(FieldInfo, "Rx4p4lRidmVvhUEdVTC352jFVoU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldPointsQuery"]
    ];
});
_c = FieldInfo;
const __TURBOPACK__default__export__ = FieldInfo;
var _c;
__turbopack_context__.k.register(_c, "FieldInfo");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/dash/WaterBarchart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaterBarchart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
var COLOR = '#1c84c6';
var renderCustomizedLabel = function(props) {
    var x = props.x, y = props.y, width = props.width, height = props.height, value = props.value;
    var radius = 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        style: {
            fontSize: 13
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: x + width / 2,
            y: y - radius,
            // fill="white"
            textAnchor: "middle",
            dominantBaseline: "middle",
            children: value.toFixed(0)
        }, void 0, false, {
            fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
            lineNumber: 14,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
        lineNumber: 13,
        columnNumber: 9
    }, _this);
};
function WaterBarchart(param) {
    var data = param.data, text = param.text, waterUnit = param.waterUnit;
    // areaUnit={text[user.waterUnit]}
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(data)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: 230,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            // width={150} height={40}
            data: data,
            margin: {
                top: 18,
                // right: 30,
                // left: 20,
                bottom: 18
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "colorWater",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "5%",
                                stopColor: COLOR,
                                stopOpacity: 0.8
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "95%",
                                stopColor: COLOR,
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    dataKey: "value",
                    fill: "url(#colorWater)",
                    minPointSize: 5,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                        dataKey: "value",
                        content: renderCustomizedLabel
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                    label: {
                        value: "".concat(text[waterUnit], "/").concat(text.month),
                        position: 'bottom'
                    },
                    axisLine: false,
                    tickLine: false,
                    dataKey: "key"
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
            lineNumber: 35,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui/field/dash/WaterBarchart.js",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_c = WaterBarchart;
var _c;
__turbopack_context__.k.register(_c, "WaterBarchart");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/dash/FieldFertilizerTable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Table/Table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableBody/TableBody.js [app-client] (ecmascript) <export default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableContainer$2f$TableContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableContainer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableContainer/TableContainer.js [app-client] (ecmascript) <export default as TableContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableHead/TableHead.js [app-client] (ecmascript) <export default as TableHead>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript) <export default as TableRow>");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
var FieldFertilizerTable = function(param) {
    var fertilizers = param.fertilizers;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
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
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.name
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                                lineNumber: 13,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.unit
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                                lineNumber: 14,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.qty
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                                lineNumber: 15,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.date
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                                lineNumber: 16,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                        lineNumber: 12,
                        columnNumber: 21
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                    lineNumber: 11,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__["TableBody"], {
                    children: fertilizers.map(function(row, index) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: row.resource.name
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitText"])(row.resource.usageUnit, null, text)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(row.qty)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(row.date)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, _this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                            lineNumber: 21,
                            columnNumber: 25
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
                    lineNumber: 19,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
            lineNumber: 10,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/field/dash/FieldFertilizerTable.js",
        lineNumber: 9,
        columnNumber: 9
    }, _this);
};
_s(FieldFertilizerTable, "6VGIJY2ZBpHkWzECv8FWAjvZPaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = FieldFertilizerTable;
const __TURBOPACK__default__export__ = FieldFertilizerTable;
var _c;
__turbopack_context__.k.register(_c, "FieldFertilizerTable");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/dash/FieldPesticdeTable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Table/Table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableBody/TableBody.js [app-client] (ecmascript) <export default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableContainer$2f$TableContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableContainer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableContainer/TableContainer.js [app-client] (ecmascript) <export default as TableContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableHead/TableHead.js [app-client] (ecmascript) <export default as TableHead>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript) <export default as TableRow>");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
var FieldPesticdeTable = function(param) {
    var pesticides = param.pesticides;
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
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
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.name
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                lineNumber: 13,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.unit
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                lineNumber: 14,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.qty
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                lineNumber: 15,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.dosage
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                lineNumber: 16,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.date
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                lineNumber: 17,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderSx"],
                                children: text.days
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                lineNumber: 18,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                        lineNumber: 12,
                        columnNumber: 21
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                    lineNumber: 11,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__["TableBody"], {
                    children: pesticides.map(function(row, index) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: row.resource.name
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitText"])(row.resource.usageUnit, null, text)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(row.qty)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                    lineNumber: 27,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: row.dosage
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(row.date)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellSx"],
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysDiff"])(new Date(row.date), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newDate"])())
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                                    lineNumber: 30,
                                    columnNumber: 29
                                }, _this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                            lineNumber: 24,
                            columnNumber: 25
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
                    lineNumber: 22,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
            lineNumber: 10,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/field/dash/FieldPesticdeTable.js",
        lineNumber: 9,
        columnNumber: 9
    }, _this);
};
_s(FieldPesticdeTable, "6VGIJY2ZBpHkWzECv8FWAjvZPaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = FieldPesticdeTable;
const __TURBOPACK__default__export__ = FieldPesticdeTable;
var _c;
__turbopack_context__.k.register(_c, "FieldPesticdeTable");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/dash/FieldDashboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardHeader/CardHeader.js [app-client] (ecmascript) <export default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Collapse/Collapse.js [app-client] (ecmascript) <export default as Collapse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blue$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/colors/blue.js [app-client] (ecmascript) <export default as blue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__green$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/colors/green.js [app-client] (ecmascript) <export default as green>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__red$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/colors/red.js [app-client] (ecmascript) <export default as red>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__orange$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/colors/orange.js [app-client] (ecmascript) <export default as orange>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BugReport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/BugReport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NaturePeople$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/NaturePeople.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$OpacityOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/OpacityOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ScatterPlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ScatterPlot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$dash$2f$WaterBarchart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/dash/WaterBarchart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$dashboardApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/dashboard/dashboardApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$dash$2f$FieldFertilizerTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/dash/FieldFertilizerTable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$dash$2f$FieldPesticdeTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/dash/FieldPesticdeTable.js [app-client] (ecmascript)");
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
var FIELD_DASH_PESTICIDES = 'field_dash_pesticides';
var FIELD_DASH_FERTILIZERS = 'field_dash_pesticides';
// const element = document.getElementById(FIELD_DASH_PESTICIDES);
// if (element) {
//     // 👇 Will scroll smoothly to the top of the next section
//     element.scrollIntoView({ behavior: 'smooth' });
// }
var elevation = 4;
var cardHeaderPadding = 1;
var FieldDashboard = function() {
    _s();
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), expandedPesticides = _useState[0], setPxpandedPesticides = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), expandedFertilizers = _useState1[0], setExpandedFertilizers = _useState1[1];
    var fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])().fieldId;
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectFieldDashboardYear"]);
    var _useGetFieldDashBoardQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$dashboardApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldDashBoardQuery"])({
        fieldId: fieldId,
        year: year
    }), data = _useGetFieldDashBoardQuery.data, isLoading = _useGetFieldDashBoardQuery.isLoading, isSuccess = _useGetFieldDashBoardQuery.isSuccess, isError = _useGetFieldDashBoardQuery.isError, error = _useGetFieldDashBoardQuery.error;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
            lineNumber: 51,
            columnNumber: 12
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            width: '100%',
            height: '100%',
            paddingBottom: 5
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            container: true,
            rowSpacing: 1,
            columnSpacing: {
                xs: 1,
                sm: 1,
                md: 1
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 6,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        elevation: elevation,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__["CardHeader"], {
                            sx: {
                                padding: cardHeaderPadding
                            },
                            avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                sx: {
                                    bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__orange$3e$__["orange"][500]
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NaturePeople$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 60,
                                columnNumber: 23
                            }, void 0),
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                whiteSpace: 'nowrap',
                                variant: "body2",
                                children: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(data.weightTotal), " ").concat(text[user.weightUnit])
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 63,
                                columnNumber: 22
                            }, void 0),
                            subheader: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                whiteSpace: 'nowrap',
                                variant: "body2",
                                children: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(data.weightPerAreaUnit), "   ").concat(text[user.weightUnit], "/").concat(text[user.areaUnit])
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 64,
                                columnNumber: 26
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                            lineNumber: 59,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                    lineNumber: 57,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 6,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        elevation: elevation,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__["CardHeader"], {
                            sx: {
                                padding: cardHeaderPadding
                            },
                            avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                sx: {
                                    bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__red$3e$__["red"][500]
                                },
                                children: user.currency
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 71,
                                columnNumber: 23
                            }, void 0),
                            title: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(data.expenseTotal)),
                            subheader: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                whiteSpace: 'nowrap',
                                variant: "body2",
                                children: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(data.expensePerAreaUnit), "/").concat(text[user.areaUnit])
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 75,
                                columnNumber: 26
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                        lineNumber: 69,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 4,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        elevation: elevation,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__["CardHeader"], {
                            sx: {
                                padding: cardHeaderPadding
                            },
                            avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                sx: {
                                    bgcolor: 'inherit',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blue$3e$__["blue"][700],
                                    fontWeight: 'bolder'
                                },
                                "aria-label": "recipe",
                                children: "K"
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 82,
                                columnNumber: 23
                            }, void 0),
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                whiteSpace: 'nowrap',
                                variant: "body2",
                                children: "".concat(data.kperAreaUnit, " /")
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 83,
                                columnNumber: 22
                            }, void 0),
                            subheader: text[user.areaUnit]
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                            lineNumber: 81,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                        lineNumber: 80,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 4,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        elevation: elevation,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__["CardHeader"], {
                            sx: {
                                padding: cardHeaderPadding
                            },
                            avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                sx: {
                                    bgcolor: 'inherit',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__green$3e$__["green"][700],
                                    fontWeight: 'bolder'
                                },
                                "aria-label": "recipe",
                                children: "P"
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 91,
                                columnNumber: 23
                            }, void 0),
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                whiteSpace: 'nowrap',
                                variant: "body2",
                                children: "".concat(data.pperAreaUnit, " /")
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 92,
                                columnNumber: 22
                            }, void 0),
                            subheader: text[user.areaUnit]
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                            lineNumber: 90,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                        lineNumber: 89,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 4,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        elevation: elevation,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__["CardHeader"], {
                            sx: {
                                padding: cardHeaderPadding
                            },
                            avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                sx: {
                                    bgcolor: 'inherit',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__red$3e$__["red"][700],
                                    fontWeight: 'bolder'
                                },
                                "aria-label": "recipe",
                                children: "N"
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 100,
                                columnNumber: 23
                            }, void 0),
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                whiteSpace: 'nowrap',
                                variant: "body2",
                                children: "".concat(data.nperAreaUnit, " /")
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 101,
                                columnNumber: 22
                            }, void 0),
                            subheader: text[user.areaUnit]
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                            lineNumber: 99,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                        lineNumber: 98,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                    lineNumber: 97,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 12,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        elevation: elevation,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__["CardHeader"], {
                                sx: {
                                    padding: cardHeaderPadding
                                },
                                avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                    sx: {
                                        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blue$3e$__["blue"][500]
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$OpacityOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 109,
                                    columnNumber: 23
                                }, void 0),
                                title: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(data.waterTotal), " ").concat(text[user.waterUnit]),
                                subheader: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(data.waterPerAreaUnit), " ").concat(text[user.waterUnit], "/").concat(text[user.areaUnit])
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 108,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                sx: {
                                    padding: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$dash$2f$WaterBarchart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    data: data.water,
                                    text: text,
                                    waterUnit: user.waterUnit
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 115,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                        lineNumber: 107,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                    lineNumber: 106,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 12,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        elevation: elevation,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__["CardHeader"], {
                                onClick: function() {
                                    return setPxpandedPesticides(!expandedPesticides);
                                },
                                sx: {
                                    padding: cardHeaderPadding
                                },
                                avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                    sx: {
                                        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__green$3e$__["green"][500]
                                    },
                                    "aria-label": "recipe",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BugReport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                        lineNumber: 123,
                                        columnNumber: 80
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 123,
                                    columnNumber: 23
                                }, void 0),
                                title: text.pesticides,
                                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    "aria-label": "pesticides",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                        lineNumber: 127,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 122,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
                                in: expandedPesticides,
                                timeout: "auto",
                                unmountOnExit: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$dash$2f$FieldPesticdeTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        pesticides: data.pesticides
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 132,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                        lineNumber: 121,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                    lineNumber: 120,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 12,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                        elevation: elevation,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardHeader$3e$__["CardHeader"], {
                                onClick: function() {
                                    return setExpandedFertilizers(!expandedFertilizers);
                                },
                                sx: {
                                    padding: cardHeaderPadding
                                },
                                avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                    sx: {
                                        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__orange$3e$__["orange"][500]
                                    },
                                    "aria-label": "recipe",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ScatterPlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                        lineNumber: 142,
                                        columnNumber: 81
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 142,
                                    columnNumber: 23
                                }, void 0),
                                title: text.fertilizers,
                                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    "aria-label": "fertilizers",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 141,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
                                in: expandedFertilizers,
                                timeout: "auto",
                                unmountOnExit: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$dash$2f$FieldFertilizerTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        fertilizers: data.fertilizers
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                                lineNumber: 150,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                        lineNumber: 140,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
                    lineNumber: 139,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
            lineNumber: 56,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/ui/field/dash/FieldDashboard.js",
        lineNumber: 55,
        columnNumber: 5
    }, _this);
};
_s(FieldDashboard, "DBldwGSyt3YVILFePkVeYbhLSc8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$dashboardApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldDashBoardQuery"]
    ];
});
_c = FieldDashboard;
const __TURBOPACK__default__export__ = FieldDashboard;
var _c;
__turbopack_context__.k.register(_c, "FieldDashboard");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/FieldHistory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItem/ListItem.js [app-client] (ecmascript) <export default as ListItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemAvatar$2f$ListItemAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemAvatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js [app-client] (ecmascript) <export default as ListItemAvatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activities/activitiesApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ListPager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ListPager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$ActivityTypeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/ActivityTypeIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$filters$2f$ActivitiesFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/filters/ActivitiesFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
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
var FieldHistory = function() {
    _s();
    var _useParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(), fieldId = _useParams.fieldId, page = _useParams.page, src = _useParams.src;
    var navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    var height = window.innerHeight - 300;
    var maxResult = 20;
    var isPlan = false;
    var orderBy = 'execution';
    var dir = 'desc';
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var startDateFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectStartDateFilter"]);
    var endDateFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectEndDateFilter"]);
    var activityFreeTextFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectActivityFreeTextFilter"]);
    var selectedFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectSelectedActivityFilterOptions"]);
    var filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildActiviesFilter"])(startDateFilter, endDateFilter, activityFreeTextFilter, selectedFilters);
    // useEffect(() => {
    //   if(page !== 0){
    //     navigate(`/field/${src}/${fieldId}/history/0`)
    //   }
    // }, [activityFreeTextFilter]);
    var _useGetActivitiesFieldQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetActivitiesFieldQuery"])({
        fieldId: fieldId,
        page: page,
        maxResult: maxResult,
        isPlan: isPlan,
        orderBy: orderBy,
        dir: dir,
        filter: filter
    }), data = _useGetActivitiesFieldQuery.data, isLoading = _useGetActivitiesFieldQuery.isLoading, isSuccess = _useGetActivitiesFieldQuery.isSuccess, isError = _useGetActivitiesFieldQuery.isError, error = _useGetActivitiesFieldQuery.error;
    if (!data || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/ui/field/FieldHistory.js",
            lineNumber: 48,
            columnNumber: 12
        }, _this);
    }
    var renderRows = function() {
        if (isSuccess && data) {
            var activities = data.content;
            return activities.map(function(e) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__["ListItem"], {
                            onClick: function() {
                                return navigate("/activity/fh/".concat(e.uuid));
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemAvatar$2f$ListItemAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemAvatar$3e$__["ListItemAvatar"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                        sx: {
                                            bgcolor: 'white'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$ActivityTypeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: e.type
                                        }, void 0, false, {
                                            fileName: "[project]/src/ui/field/FieldHistory.js",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldHistory.js",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/FieldHistory.js",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                    primary: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        justifyContent: 'space-between',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                children: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activityDescription"])(e, text))
                                            }, void 0, false, {
                                                fileName: "[project]/src/ui/field/FieldHistory.js",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                children: "".concat(e.reference)
                                            }, void 0, false, {
                                                fileName: "[project]/src/ui/field/FieldHistory.js",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ui/field/FieldHistory.js",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, void 0),
                                    secondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(e.execution)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/FieldHistory.js",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/ui/field/FieldHistory.js",
                            lineNumber: 59,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                            fileName: "[project]/src/ui/field/FieldHistory.js",
                            lineNumber: 76,
                            columnNumber: 11
                        }, _this)
                    ]
                }, e.id, true, {
                    fileName: "[project]/src/ui/field/FieldHistory.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, _this);
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                sx: {
                    height: height,
                    overflow: 'auto',
                    width: '100%',
                    bgcolor: 'background.paper'
                },
                children: renderRows()
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldHistory.js",
                lineNumber: 84,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ListPager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                bottom: 90,
                page: Number(page),
                totalPages: data.totalPages,
                setPage: function(value) {
                    return navigate("/field/".concat(src, "/").concat(fieldId, "/history/").concat(value));
                }
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldHistory.js",
                lineNumber: 87,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$filters$2f$ActivitiesFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/ui/field/FieldHistory.js",
                lineNumber: 88,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/field/FieldHistory.js",
        lineNumber: 83,
        columnNumber: 5
    }, _this);
};
_s(FieldHistory, "eSP295XqJxQYGX00ZzbFoHlk1qI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activities$2f$activitiesApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetActivitiesFieldQuery"]
    ];
});
_c = FieldHistory;
const __TURBOPACK__default__export__ = FieldHistory;
var _c;
__turbopack_context__.k.register(_c, "FieldHistory");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/ColorPalette.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var p1 = [
    {
        color: '#F1F8E9',
        label: '0'
    },
    {
        color: '#DCEDC8',
        label: '0.1'
    },
    {
        color: '#C5E1A5',
        label: '0.2'
    },
    {
        color: '#AED581',
        label: '0.3'
    },
    {
        color: '#9CCC65',
        label: '0.4'
    },
    {
        color: '#8BC34A',
        label: '0.5'
    },
    {
        color: '#2E7D32',
        label: '0.6',
        textColor: '#FAFAFA'
    },
    {
        color: '#1B5E20',
        label: '0.7',
        textColor: '#FAFAFA'
    },
    {
        color: '#1B5E20',
        label: ''
    },
    {
        color: '#1B5E20',
        label: ''
    },
    {
        color: '#1B5E20',
        label: '1',
        textColor: '#FAFAFA'
    }
];
var p2 = [
    {
        color: '#212121',
        textColor: '#FAFAFA',
        label: '-1'
    },
    {
        color: '#424242',
        label: ''
    },
    {
        color: '#616161',
        label: ''
    },
    {
        color: '#757575',
        label: ''
    },
    {
        color: '#9E9E9E',
        label: ' '
    },
    {
        color: '#BDBDBD',
        label: ''
    },
    {
        color: '#E0E0E0',
        label: ''
    },
    {
        color: '#EEEEEE',
        label: ''
    },
    {
        color: '#F5F5F5',
        label: ''
    },
    {
        color: '#FAFAFA',
        label: '1'
    }
];
//(0, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,               0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1)
var p3 = [
    {
        color: '#d7d7d7ff',
        label: '0'
    },
    {
        color: '#d7d7d7ff',
        label: ''
    },
    {
        color: '#d7d7d7ff',
        label: '0.25'
    },
    {
        color: '#a22211ff',
        label: '0.3'
    },
    {
        color: '#ed2909ff',
        label: '0.35'
    },
    {
        color: '#f8840aff',
        label: '0.4'
    },
    {
        color: '#fcc201ff',
        label: '0.45'
    },
    {
        color: '#f9eb06ff',
        label: '0.5'
    },
    {
        color: '#c9db06ff',
        label: '0.55'
    },
    {
        color: '#94c805ff',
        label: '0.6'
    },
    {
        color: '#7abb05ff',
        label: '0.65'
    },
    {
        color: '#6cb006ff',
        label: '0.7'
    },
    {
        color: '#5da604ff',
        label: '0.75'
    },
    {
        color: '#4f9b04ff',
        label: '0.8'
    },
    {
        color: '#428f05ff',
        label: '0.85'
    },
    {
        color: '#338504ff',
        label: '0.9',
        textColor: '#FAFAFA'
    },
    {
        color: '#237a00ff',
        label: '0.95',
        textColor: '#FAFAFA'
    },
    {
        color: '#156e00ff',
        label: '1',
        textColor: '#FAFAFA'
    }
];
var p4 = [
    {
        color: '#d7d7d7ff',
        label: '0'
    },
    {
        color: '#d7d7d7ff',
        label: '0.07'
    },
    {
        color: '#ef2e14ff',
        textColor: "",
        label: '0.15'
    },
    {
        color: '#ed2909ff',
        label: '0.23'
    },
    {
        color: '#f8840aff',
        label: '0.3'
    },
    {
        color: '#fcc201ff',
        label: '0.37'
    },
    {
        color: '#f9eb06ff',
        label: '0.45'
    },
    {
        color: '#c9db06ff',
        label: '0.51'
    },
    {
        color: '#94c805ff',
        label: '0.58'
    },
    {
        color: '#7abb05ff',
        label: '0.65'
    },
    {
        color: '#6cb006ff',
        label: '0.7'
    },
    {
        color: '#5da604ff',
        label: '0.75'
    },
    {
        color: '#4f9b04ff',
        label: '0.8'
    },
    {
        color: '#428f05ff',
        label: '0.85'
    },
    {
        color: '#338504ff',
        label: '0.9',
        textColor: '#FAFAFA'
    },
    {
        color: '#237a00ff',
        label: '0.95',
        textColor: '#FAFAFA'
    },
    {
        color: '#156e00ff',
        label: '1',
        textColor: '#FAFAFA'
    }
];
// 0,#FF2200
// 0.07,#FF4D00
// 0.13,#FF6A00
// 0.2,#FF8400
// 0.26,#FFA200
// 0.33,#FFBB00
// 0.4,#FFD900
// 0.46,#FFF200
// 0.53,#EAF200
// 0.59,#C5DB00
// 0.66,#A4C400
// 0.73,#81B000
// 0.79,#619900
// 0.86,#468700
// 0.93,#287300
// 1,#006100
var p5 = [
    {
        color: '#FF2200',
        label: '0'
    },
    {
        color: '#FF4D00',
        label: '0.07'
    },
    {
        color: '#FF6A00',
        textColor: "",
        label: '0.13'
    },
    {
        color: '#FF8400',
        label: '0.2'
    },
    {
        color: '#FFA200',
        label: '0.26'
    },
    {
        color: '#FFBB00',
        label: '0.33'
    },
    {
        color: '#FFD900',
        label: '0.4'
    },
    {
        color: '#FFF200',
        label: '0.46'
    },
    {
        color: '#EAF200',
        label: '0.53'
    },
    {
        color: '#C5DB00',
        label: '0.59'
    },
    {
        color: '#A4C400',
        label: '0.66'
    },
    {
        color: '#81B000',
        label: '0.73'
    },
    {
        color: '#619900',
        label: '0.79'
    },
    {
        color: '#468700',
        label: '0.86',
        textColor: '#FAFAFA'
    },
    {
        color: '#287300',
        label: '0.93',
        textColor: '#FAFAFA'
    },
    {
        color: '#006100',
        label: '1',
        textColor: '#FAFAFA'
    }
];
var palettes = [
    p1,
    p2,
    p3,
    p4,
    p5
];
var ColorPalette = function(props) {
    var type = props.type;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        children: palettes[type - 1].map(function(e, index) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: e.flex ? e.flex : 1,
                    textAlign: 'center',
                    fontSize: 12,
                    color: e.textColor,
                    backgroundColor: e.color,
                    height: 20
                },
                children: [
                    " ",
                    e.label
                ]
            }, index, true, {
                fileName: "[project]/src/ui/field/ColorPalette.js",
                lineNumber: 115,
                columnNumber: 50
            }, _this);
        })
    }, void 0, false, {
        fileName: "[project]/src/ui/field/ColorPalette.js",
        lineNumber: 114,
        columnNumber: 9
    }, _this);
};
_c = ColorPalette;
const __TURBOPACK__default__export__ = ColorPalette;
var _c;
__turbopack_context__.k.register(_c, "ColorPalette");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/FieldImagery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChevronLeft.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChevronLeftOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChevronRight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronRightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChevronRightOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Cloud.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CloudOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WbSunnyOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/WbSunnyOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$ColorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/ColorPalette.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/FieldMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
var BASE_URL = 'https://api.agromonitoring.com/agro/1.0/';
var IMAGE_SEARCH_URL = "".concat(BASE_URL, "image/search");
var S2 = 's2';
var FieldImagery = function(param) {
    var field = param.field;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), data = _useState[0], setData = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), viewDate = _useState1[0], setViewDate = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), viewClouds = _useState2[0], setViewClouds = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), map = _useState3[0], setMap = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), selectedView = _useState4[0], setSelectedView = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), tile = _useState5[0], setTile = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ndvi'), 2), view = _useState6[0], setView = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3), 2), palette = _useState7[0], setPalette = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), reload = _useState8[0], setRealod = _useState8[1];
    var _useState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30), 2), days = _useState9[0], setDays = _useState9[1];
    var _useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), message = _useState10[0], setMessage = _useState10[1];
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])().fieldId;
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var imageryKey = user.imageryKey;
    var type = S2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FieldImagery.useEffect": function() {
            var end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUTCDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newDate"])());
            var start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUTCDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtractDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newDate"])(), days));
            var url = "".concat(IMAGE_SEARCH_URL, "?start=").concat(start, "&end=").concat(end, "&polyid=").concat(field.imageryId, "&appid=").concat(imageryKey, "&type=").concat(type);
            setData([]);
            fetch(url).then({
                "FieldImagery.useEffect": function(response) {
                    return response.json();
                }
            }["FieldImagery.useEffect"]).then({
                "FieldImagery.useEffect": function(data) {
                    if (data.message) {
                        setMessage(data.message);
                    } else {
                        setMessage(null);
                        setData(data.sort({
                            "FieldImagery.useEffect": function(x, y) {
                                return y.dt - x.dt;
                            }
                        }["FieldImagery.useEffect"]));
                    }
                }
            }["FieldImagery.useEffect"]);
        }
    }["FieldImagery.useEffect"], [
        days
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FieldImagery.useEffect": function() {
            setRealod(true);
            if (selectedView !== null && data && data.length > selectedView) {
                var _data_selectedView_tile_view, _data_selectedView;
                setTile(((_data_selectedView = data[selectedView]) === null || _data_selectedView === void 0 ? void 0 : (_data_selectedView_tile_view = _data_selectedView.tile[view]) === null || _data_selectedView_tile_view === void 0 ? void 0 : _data_selectedView_tile_view.replace("http:", "https:")) + '&paletteid=' + palette);
                setViewDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asShortStringDate"])(new Date(data[selectedView].dt * 1000)));
                setViewClouds(data[selectedView].cl);
            } else {
                setTile(null);
                setSelectedView(0);
            }
        }
    }["FieldImagery.useEffect"], [
        selectedView,
        palette,
        view,
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FieldImagery.useEffect": function() {
            setRealod(false);
        }
    }["FieldImagery.useEffect"], [
        reload
    ]);
    // console.log('tile', tile)
    var height = window.innerHeight - 350;
    var dir = text.dir;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        display: 'flex',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'column',
        children: [
            field.polygon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: field,
                height: height,
                tile: reload ? null : tile,
                setMap: setMap
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldImagery.js",
                lineNumber: 80,
                columnNumber: 31
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$ColorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: palette
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldImagery.js",
                lineNumber: 81,
                columnNumber: 13
            }, _this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(data) && message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                marginTop: 2,
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/ui/field/FieldImagery.js",
                    lineNumber: 85,
                    columnNumber: 21
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldImagery.js",
                lineNumber: 83,
                columnNumber: 17
            }, _this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(data) && !message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                marginTop: 3
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldImagery.js",
                lineNumber: 87,
                columnNumber: 48
            }, _this),
            !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(data) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 1,
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(data) || selectedView === 0,
                                onClick: function() {
                                    return setSelectedView(selectedView - 1);
                                },
                                color: "secondary",
                                variant: "outlined",
                                disableElevation: true,
                                children: dir === 'rtl' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronRightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/field/FieldImagery.js",
                                    lineNumber: 94,
                                    columnNumber: 46
                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/field/FieldImagery.js",
                                    lineNumber: 94,
                                    columnNumber: 73
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/FieldImagery.js",
                                lineNumber: 93,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                children: viewDate
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/FieldImagery.js",
                                lineNumber: 96,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                display: 'flex',
                                flexDirection: 'row',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        marginLeft: 1,
                                        marginRight: 1,
                                        children: "".concat(viewClouds.toFixed(1), "%")
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, _this),
                                    viewClouds <= 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WbSunnyOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: "secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 104,
                                        columnNumber: 52
                                    }, _this),
                                    viewClouds > 10 && viewClouds <= 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: "secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 106,
                                        columnNumber: 33
                                    }, _this),
                                    viewClouds > 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: "secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 107,
                                        columnNumber: 51
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/field/FieldImagery.js",
                                lineNumber: 99,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(data) || selectedView === data.length - 1,
                                onClick: function() {
                                    return setSelectedView(selectedView + 1);
                                },
                                color: "secondary",
                                variant: "outlined",
                                disableElevation: true,
                                children: dir === 'rtl' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/field/FieldImagery.js",
                                    lineNumber: 112,
                                    columnNumber: 46
                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/ui/field/FieldImagery.js",
                                    lineNumber: 112,
                                    columnNumber: 64
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/FieldImagery.js",
                                lineNumber: 109,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/FieldImagery.js",
                        lineNumber: 90,
                        columnNumber: 21
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        marginTop: 3,
                        display: 'flex',
                        flex: 1,
                        alignItems: 'stretch',
                        justifyContent: 'space-between',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                size: "small",
                                sx: {
                                    flex: 1
                                },
                                value: view,
                                onChange: function(e) {
                                    return setView(e.target.value);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 'ndvi',
                                        children: "NDVI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 126,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 'evi',
                                        children: "EVI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 127,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 'evi2',
                                        children: "EVI 2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/field/FieldImagery.js",
                                lineNumber: 120,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                size: "small",
                                sx: {
                                    marginLeft: 2,
                                    marginRight: 2,
                                    flex: 1
                                },
                                value: days,
                                placeholder: text.days,
                                onChange: function(e) {
                                    return setDays(Number(e.target.value));
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 30,
                                        children: "30 ".concat(text.days)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 60,
                                        children: "60 ".concat(text.days)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 90,
                                        children: "90 ".concat(text.days)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 139,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 365,
                                        children: "1 ".concat(text.year)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 140,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/field/FieldImagery.js",
                                lineNumber: 130,
                                columnNumber: 25
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                size: "small",
                                sx: {
                                    flex: 1
                                },
                                value: palette,
                                onChange: function(e) {
                                    return setPalette(e.target.value);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 1,
                                        children: "#1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 2,
                                        children: "#2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 3,
                                        children: "#3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 4,
                                        children: "#4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 153,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: 5,
                                        children: "#5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ui/field/FieldImagery.js",
                                        lineNumber: 154,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ui/field/FieldImagery.js",
                                lineNumber: 143,
                                columnNumber: 25
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/FieldImagery.js",
                        lineNumber: 115,
                        columnNumber: 21
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/field/FieldImagery.js",
                lineNumber: 89,
                columnNumber: 17
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/field/FieldImagery.js",
        lineNumber: 79,
        columnNumber: 9
    }, _this);
};
_s(FieldImagery, "vsjeiAkaZsADR2EpW9qlLrPb7W8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"]
    ];
});
_c = FieldImagery;
const __TURBOPACK__default__export__ = FieldImagery /*

    const { dir, value, onChange } = props;
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton onClick={() => onChange(Number(value) - 1)}>
                {dir === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
            <Button
                variant="text"
                sx={{ color: 'black' }}

            >
                {value}
            </Button>
            <IconButton onClick={() => onChange(Number(value) + 1)}>
                {dir === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
        </div>
    )*/ ;
var _c;
__turbopack_context__.k.register(_c, "FieldImagery");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/FieldScouting.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/FieldMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/points/pointsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$point$2f$FieldPointDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/point/FieldPointDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$scout$2f$ScoutingFieldPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/scout/ScoutingFieldPoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$scout$2f$scoutsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/scout/scoutsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$scout$2f$ScoutingUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/scout/ScoutingUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/pests/pestsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
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
var FieldScouting = function(param) {
    var field = param.field;
    _s();
    var fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])().fieldId;
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), point = _useState[0], setPoint = _useState[1];
    //  const [reloadMap, setReloadMap] = useState(false);
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), map = _useState1[0], setMap = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), center = _useState2[0], setCenter = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(field.zoom), 2), zoom = _useState3[0], setZoom = _useState3[1];
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var _useGetFieldPointsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldPointsQuery"])({
        fieldId: fieldId
    }), points = _useGetFieldPointsQuery.data, isLoadingPoints = _useGetFieldPointsQuery.isLoading, isFetchingPoints = _useGetFieldPointsQuery.isFetching;
    var _useGetFieldScoutsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$scout$2f$scoutsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldScoutsQuery"])({
        fieldId: fieldId
    }), scouts = _useGetFieldScoutsQuery.data, isLoadingScouts = _useGetFieldScoutsQuery.isLoading, isFetchingScouts = _useGetFieldScoutsQuery.isFetching;
    var _useGetPestStagesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPestStagesQuery"])(), stages = _useGetPestStagesQuery.data, isLoadingStages = _useGetPestStagesQuery.isLoading, isFetchingStages = _useGetPestStagesQuery.isFetching;
    var _useGetPlantLocationsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPlantLocationsQuery"])(), plantLocations = _useGetPlantLocationsQuery.data, isLoadingPlantLocations = _useGetPlantLocationsQuery.isLoading;
    var _useGetInfectionLevelsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetInfectionLevelsQuery"])(), infectionLevels = _useGetInfectionLevelsQuery.data, isLoadingInfectionLevels = _useGetInfectionLevelsQuery.isLoading;
    var _useGetPestsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPestsQuery"])(), pests = _useGetPestsQuery.data, isLoadingPests = _useGetPestsQuery.isLoading;
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null), 2), dialog = _React_useState[0], setDialog = _React_useState[1];
    var height = window.innerHeight - 180;
    if (isLoadingInfectionLevels || isLoadingPlantLocations || isLoadingPests || isLoadingPoints || isLoadingScouts || isFetchingPoints || isFetchingScouts || isLoadingStages || isFetchingStages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/ui/field/FieldScouting.js",
            lineNumber: 47,
            columnNumber: 16
        }, _this);
    }
    var onScoutMapClick = function(event, element, type) {
        console.log('onScoutMapClick', type, event);
        if (type === 'map') {
            var p = {
                id: null,
                lat: event.latlng.lat,
                lng: event.latlng.lng,
                fieldId: fieldId,
                name: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayFieldName"])(field), " ").concat(text.scouting, " - ").concat(points.length, " "),
                active: true,
                type: 'scouting'
            };
            setPoint(p);
            setDialog('point');
        }
        if (type === 'point') {
            event.originalEvent.view.L.DomEvent.stopPropagation(event);
            setPoint(element);
            setDialog('pointScouting');
        }
    };
    var clear = function() {
        setDialog(null);
        setPoint(null);
    };
    var pointScouts = point ? scouts.filter(function(e) {
        return e.point.id === point.id;
    }) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        display: 'flex',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'column',
        children: [
            field.polygon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: field,
                height: height,
                onClick: onScoutMapClick,
                points: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$scout$2f$ScoutingUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildScoutPoints"])(points, scouts),
                setMap: setMap,
                center: center,
                setCenter: setCenter,
                zoom: zoom,
                setZoom: setZoom
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldScouting.js",
                lineNumber: 76,
                columnNumber: 31
            }, _this),
            point && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$point$2f$FieldPointDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: dialog === 'point',
                deletable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayEmpty"])(pointScouts),
                defaultValues: point,
                handleClose: clear,
                types: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$scout$2f$ScoutingUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOUT_TYPES"]
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldScouting.js",
                lineNumber: 77,
                columnNumber: 23
            }, _this),
            point && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$scout$2f$ScoutingFieldPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                stages: stages,
                open: dialog === 'pointScouting',
                point: point,
                scouts: pointScouts,
                handleClose: function() {
                    return clear(null);
                },
                setPoint: setPoint
            }, void 0, false, {
                fileName: "[project]/src/ui/field/FieldScouting.js",
                lineNumber: 78,
                columnNumber: 23
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/field/FieldScouting.js",
        lineNumber: 75,
        columnNumber: 9
    }, _this);
};
_s(FieldScouting, "sqGq8sd+kpWjG7iIcNA6GU+OvKs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$points$2f$pointsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldPointsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$scout$2f$scoutsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFieldScoutsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPestStagesQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPlantLocationsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetInfectionLevelsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pests$2f$pestsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPestsQuery"]
    ];
});
_c = FieldScouting;
const __TURBOPACK__default__export__ = FieldScouting;
var _c;
__turbopack_context__.k.register(_c, "FieldScouting");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/field/Field.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigation$2f$BottomNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/BottomNavigation/BottomNavigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/BottomNavigationAction/BottomNavigationAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Restore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Restore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardHeader/CardHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DashboardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DashboardOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InfoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/InfoOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SatelliteAltOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/SatelliteAltOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/FieldInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$dash$2f$FieldDashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/dash/FieldDashboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/FieldHistory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldImagery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/FieldImagery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$FruitIconUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/FruitIconUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/fields/fieldsApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/app/appSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/authApiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/FarmUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldScouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/field/FieldScouting.js [app-client] (ecmascript)");
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
;
;
;
var height = window.innerHeight - 100;
var Field = function() {
    _s();
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])().pathname;
    var _useParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(), fieldId = _useParams.fieldId, page = _useParams.page, src = _useParams.src;
    var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectLang"]);
    var _useGetUserDataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"])(), user = _useGetUserDataQuery.data;
    var year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectCurrentYear"]);
    var field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldsById"])(year, Number(fieldId));
    var navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Field.useEffect": function() {
            return ({
                "Field.useEffect": function() {
                    return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$app$2f$appSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFieldDashboardYear"])(year));
                }
            })["Field.useEffect"];
        }
    }["Field.useEffect"], []);
    if (!field) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/ui/field/Field.js",
            lineNumber: 43,
            columnNumber: 12
        }, _this);
    }
    var paths = [
        "/field/".concat(src, "/").concat(fieldId, "/info"),
        "/field/".concat(src, "/").concat(fieldId, "/dash"),
        "/field/".concat(src, "/").concat(fieldId, "/history/").concat(page),
        "/field/".concat(src, "/").concat(fieldId, "/imagery")
    ];
    var getIndex = function(element) {
        return element === pathname;
    };
    var value = paths.findIndex(getIndex) > 0 ? paths.findIndex(getIndex) : 0;
    var isHistory = pathname.includes("/history") ? true : false;
    var sidePadding = isHistory ? 0 : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    minHeight: height
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            padding: 1
                        },
                        avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                backgroundColor: 'white'
                            },
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$FruitIconUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFruitIcon"])(field.cropEngName)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 64,
                            columnNumber: 13
                        }, void 0),
                        // action={
                        //   <IconButton color='secondary' aria-label="settings" onClick={() => navigate(`/tabs/${src}`)}>
                        //    {/* <HighlightOffRounded sx={{ marginTop: 1, fontSize: 35 }}*/ }
                        //    <Cancel sx={{ margin: 1}} fontSize='large' />
                        //   </IconButton>
                        // }
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                backgroundColor: field.statusColor,
                                borderRadius: 1,
                                paddingLeft: 1,
                                paddingRight: 1
                            },
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    noWrap: true,
                                    variant: "h6",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxLenghtStr"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayFieldName"])(field), 20)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/Field.js",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    noWrap: true,
                                    variant: "h6",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayFieldArea"])(field, user.areaUnit, text)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/Field.js",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 75,
                            columnNumber: 13
                        }, void 0),
                        subheader: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            component: "span",
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    noWrap: true,
                                    color: "secondary",
                                    variant: "subtitle1",
                                    component: "span",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxLenghtStr"])("".concat(field.cropName, ",").concat(field.varietyName), 22)
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/Field.js",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    color: "secondary",
                                    variant: "subtitle1",
                                    component: "span",
                                    children: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(field.startDate))
                                }, void 0, false, {
                                    fileName: "[project]/src/ui/field/Field.js",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 85,
                            columnNumber: 13
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/Field.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            paddingTop: 0,
                            paddingLeft: sidePadding,
                            paddingRight: sidePadding
                        },
                        children: [
                            pathname.includes("/info") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                field: field
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/Field.js",
                                lineNumber: 96,
                                columnNumber: 42
                            }, _this),
                            pathname.includes("/dash") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$dash$2f$FieldDashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/ui/field/Field.js",
                                lineNumber: 97,
                                columnNumber: 42
                            }, _this),
                            pathname.includes("/history") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/ui/field/Field.js",
                                lineNumber: 98,
                                columnNumber: 45
                            }, _this),
                            pathname.includes("/imagery") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldImagery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                field: field
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/Field.js",
                                lineNumber: 99,
                                columnNumber: 45
                            }, _this),
                            pathname.includes("/scouting") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$field$2f$FieldScouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                field: field
                            }, void 0, false, {
                                fileName: "[project]/src/ui/field/Field.js",
                                lineNumber: 100,
                                columnNumber: 46
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ui/field/Field.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/field/Field.js",
                lineNumber: 61,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigation$2f$BottomNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                // <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value}
                showLabels: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            children: text.details
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 108,
                            columnNumber: 18
                        }, void 0),
                        to: "/field/".concat(src, "/").concat(fieldId, "/info"),
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"],
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InfoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "large"
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 110,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/Field.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            children: text.dashboard
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 113,
                            columnNumber: 18
                        }, void 0),
                        to: "/field/".concat(src, "/").concat(fieldId, "/dash"),
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"],
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DashboardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "large"
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 115,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/Field.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            children: text.activities
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 118,
                            columnNumber: 18
                        }, void 0),
                        to: "/field/".concat(src, "/").concat(fieldId, "/history/0"),
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"],
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Restore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "large"
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 120,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/Field.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, _this),
                    field.imageryId !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$BottomNavigationAction$2f$BottomNavigationAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$FarmUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBottomNavigationSx"])(field.imageryId === null),
                        disabled: field.imageryId === null,
                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            children: text.satellite
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 125,
                            columnNumber: 18
                        }, void 0),
                        to: "/field/".concat(src, "/").concat(fieldId, "/imagery"),
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"],
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SatelliteAltOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "large"
                        }, void 0, false, {
                            fileName: "[project]/src/ui/field/Field.js",
                            lineNumber: 127,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/ui/field/Field.js",
                        lineNumber: 122,
                        columnNumber: 37
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/field/Field.js",
                lineNumber: 104,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/field/Field.js",
        lineNumber: 60,
        columnNumber: 5
    }, _this);
};
_s(Field, "Zb1iIuYUF5/XGoGkD1KZiXw38V8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserDataQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$fields$2f$fieldsApiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldsById"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$LFPYN7LY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = Field;
const __TURBOPACK__default__export__ = Field;
var _c;
__turbopack_context__.k.register(_c, "Field");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ui_field_79709583._.js.map