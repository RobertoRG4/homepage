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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/box/box.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/link/link-box.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/image/image.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/typography/text.js\");\n\n\nconst WorksItem = (param)=>{\n    let { title, url, description, categoria, id } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        maxWidth: \"300px\",\n        textAlign: \"center\",\n        paddingY: \"10px\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkBox, {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                    width: \"300px\",\n                    height: \"200px\",\n                    maxHeight: \"200px\",\n                    borderRadius: \"10px\",\n                    src: url,\n                    alt: title,\n                    loading: \"lazy\"\n                }, void 0, false, {\n                    fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkOverlay, {\n                    href: \"/\".concat(categoria, \"/\").concat(id),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            as: \"h2\",\n                            fontSize: \"x-large\",\n                            fontWeight: \"bold\",\n                            color: \"#fff\",\n                            textShadow: \"2px 2px 4px rgba(0, 0, 0, 0.6)\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            as: \"p\",\n                            color: \"#fff\",\n                            textShadow: \"2px 2px 4px rgba(0, 0, 0, 0.6)\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kiyotaka/homepage/components/works.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WorksItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorksItem);\nvar _c;\n$RefreshReg$(_c, \"WorksItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvd29ya3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwRTtBQUUxRSxNQUFNSyxZQUFZO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxFQUFFLEVBQUU7SUFDM0QscUJBQ0UsOERBQUNWLGlEQUFHQTtRQUFDVyxVQUFTO1FBQVFDLFdBQVU7UUFBU0MsVUFBUztrQkFDaEQsNEVBQUNWLHFEQUFPQTtZQUFDVyxTQUFRO1lBQU9DLGVBQWM7WUFBU0MsWUFBVzs7OEJBQ3hELDhEQUFDZixtREFBS0E7b0JBQ0pnQixPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxXQUFVO29CQUNWQyxjQUFhO29CQUNiQyxLQUFLZDtvQkFDTGUsS0FBS2hCO29CQUNMaUIsU0FBUTs7Ozs7OzhCQUVWLDhEQUFDbkIseURBQVdBO29CQUFDb0IsTUFBTSxJQUFpQmQsT0FBYkQsV0FBVSxLQUFNLE9BQUhDOztzQ0FDbEMsOERBQUNSLGtEQUFJQTs0QkFDSHVCLElBQUc7NEJBQ0hDLFVBQVM7NEJBQ1RDLFlBQVc7NEJBQ1hDLE9BQU07NEJBQ05DLFlBQVc7c0NBRVZ2Qjs7Ozs7O3NDQUVILDhEQUFDSixrREFBSUE7NEJBQUN1QixJQUFHOzRCQUFJRyxPQUFNOzRCQUFPQyxZQUFXO3NDQUNsQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0tBOUJNSDtBQStCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3dvcmtzLmpzPzc0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSwgVGV4dCwgTGlua0JveCwgTGlua092ZXJsYXkgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCBXb3Jrc0l0ZW0gPSAoeyB0aXRsZSwgdXJsLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcmlhLCBpZCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBtYXhXaWR0aD1cIjMwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgcGFkZGluZ1k9XCIxMHB4XCI+XG4gICAgICA8TGlua0JveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICBtYXhIZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTBweFwiXG4gICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5rT3ZlcmxheSBocmVmPXtgLyR7Y2F0ZWdvcmlhfS8ke2lkfWB9PlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgICAgIGZvbnRTaXplPVwieC1sYXJnZVwiXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgdGV4dFNoYWRvdz1cIjJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBhcz1cInBcIiBjb2xvcj1cIiNmZmZcIiB0ZXh0U2hhZG93PVwiMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpXCI+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0xpbmtPdmVybGF5PlxuICAgICAgPC9MaW5rQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFdvcmtzSXRlbTtcbiJdLCJuYW1lcyI6WyJCb3giLCJJbWFnZSIsIlRleHQiLCJMaW5rQm94IiwiTGlua092ZXJsYXkiLCJXb3Jrc0l0ZW0iLCJ0aXRsZSIsInVybCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcmlhIiwiaWQiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsInBhZGRpbmdZIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJzcmMiLCJhbHQiLCJsb2FkaW5nIiwiaHJlZiIsImFzIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0ZXh0U2hhZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/works.js\n"));

/***/ })

});