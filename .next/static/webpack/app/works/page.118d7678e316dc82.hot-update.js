"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/works/page",{

/***/ "(app-pages-browser)/./components/works.js":
/*!*****************************!*\
  !*** ./components/works.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/box/box.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/link/link-box.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/image/image.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/typography/text.js\");\n\n\nconst WorksItem = (param)=>{\n    let { title, url, description, categoria, id } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        textAlign: \"center\",\n        paddingY: \"10px\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkBox, {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                    width: \"fit-content\",\n                    maxHeight: \"200px\",\n                    borderRadius: \"10px\",\n                    src: url,\n                    alt: title,\n                    loading: \"lazy\"\n                }, void 0, false, {\n                    fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkOverlay, {\n                    href: \"/\".concat(categoria, \"/\").concat(id),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            as: \"h2\",\n                            fontSize: \"x-large\",\n                            fontWeight: \"bold\",\n                            color: \"#fff\",\n                            textShadow: \"2px 2px 4px rgba(0, 0, 0, 0.6)\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            as: \"p\",\n                            color: \"#fff\",\n                            textShadow: \"2px 2px 4px rgba(0, 0, 0, 0.6)\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WorksItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorksItem);\nvar _c;\n$RefreshReg$(_c, \"WorksItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvd29ya3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwRTtBQUUxRSxNQUFNSyxZQUFZO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxFQUFFLEVBQUU7SUFDM0QscUJBQ0UsOERBQUNWLGlEQUFHQTtRQUFDVyxXQUFVO1FBQVNDLFVBQVM7a0JBQy9CLDRFQUFDVCxxREFBT0E7WUFBQ1UsU0FBUTtZQUFPQyxlQUFjO1lBQVNDLFlBQVc7OzhCQUN4RCw4REFBQ2QsbURBQUtBO29CQUNKZSxPQUFNO29CQUNOQyxXQUFVO29CQUNWQyxjQUFhO29CQUNiQyxLQUFLWjtvQkFDTGEsS0FBS2Q7b0JBQ0xlLFNBQVE7Ozs7Ozs4QkFFViw4REFBQ2pCLHlEQUFXQTtvQkFBQ2tCLE1BQU0sSUFBaUJaLE9BQWJELFdBQVUsS0FBTSxPQUFIQzs7c0NBQ2xDLDhEQUFDUixrREFBSUE7NEJBQ0hxQixJQUFHOzRCQUNIQyxVQUFTOzRCQUNUQyxZQUFXOzRCQUNYQyxPQUFNOzRCQUNOQyxZQUFXO3NDQUVWckI7Ozs7OztzQ0FFSCw4REFBQ0osa0RBQUlBOzRCQUFDcUIsSUFBRzs0QkFBSUcsT0FBTTs0QkFBT0MsWUFBVztzQ0FDbENuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtLQTdCTUg7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93b3Jrcy5qcz83NGU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UsIFRleHQsIExpbmtCb3gsIExpbmtPdmVybGF5IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuY29uc3QgV29ya3NJdGVtID0gKHsgdGl0bGUsIHVybCwgZGVzY3JpcHRpb24sIGNhdGVnb3JpYSwgaWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgcGFkZGluZ1k9XCIxMHB4XCI+XG4gICAgICA8TGlua0JveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHdpZHRoPVwiZml0LWNvbnRlbnRcIlxuICAgICAgICAgIG1heEhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPExpbmtPdmVybGF5IGhyZWY9e2AvJHtjYXRlZ29yaWF9LyR7aWR9YH0+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGFzPVwiaDJcIlxuICAgICAgICAgICAgZm9udFNpemU9XCJ4LWxhcmdlXCJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICB0ZXh0U2hhZG93PVwiMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIGNvbG9yPVwiI2ZmZlwiIHRleHRTaGFkb3c9XCIycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNilcIj5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvTGlua092ZXJsYXk+XG4gICAgICA8L0xpbmtCb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV29ya3NJdGVtO1xuIl0sIm5hbWVzIjpbIkJveCIsIkltYWdlIiwiVGV4dCIsIkxpbmtCb3giLCJMaW5rT3ZlcmxheSIsIldvcmtzSXRlbSIsInRpdGxlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yaWEiLCJpZCIsInRleHRBbGlnbiIsInBhZGRpbmdZIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJzcmMiLCJhbHQiLCJsb2FkaW5nIiwiaHJlZiIsImFzIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0ZXh0U2hhZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/works.js\n"));

/***/ })

});