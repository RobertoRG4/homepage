"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ui/breadcrumb.jsx":
/*!**************************************!*\
  !*** ./components/ui/breadcrumb.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BreadcrumbCurrentLink: function() { return /* binding */ BreadcrumbCurrentLink; },\n/* harmony export */   BreadcrumbEllipsis: function() { return /* binding */ BreadcrumbEllipsis; },\n/* harmony export */   BreadcrumbLink: function() { return /* binding */ BreadcrumbLink; },\n/* harmony export */   BreadcrumbRoot: function() { return /* binding */ BreadcrumbRoot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/breadcrumb/breadcrumb.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst BreadcrumbRoot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = function BreadcrumbRoot(props, ref) {\n    const { separator, separatorGap, children, ...rest } = props;\n    const validChildren = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).filter(react__WEBPACK_IMPORTED_MODULE_1__.isValidElement);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbRoot, {\n        ref: ref,\n        ...rest,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbList, {\n            gap: separatorGap,\n            children: validChildren.map((child, index)=>{\n                const last = index === validChildren.length - 1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, {\n                            children: child\n                        }, void 0, false, {\n                            fileName: \"/Users/kiyotaka/homepage/components/ui/breadcrumb.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 15\n                        }, this),\n                        !last && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbSeparator, {\n                            color: \"#fff\",\n                            children: separator\n                        }, void 0, false, {\n                            fileName: \"/Users/kiyotaka/homepage/components/ui/breadcrumb.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/kiyotaka/homepage/components/ui/breadcrumb.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/kiyotaka/homepage/components/ui/breadcrumb.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kiyotaka/homepage/components/ui/breadcrumb.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n});\n_c1 = BreadcrumbRoot;\nconst BreadcrumbLink = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbLink;\nconst BreadcrumbCurrentLink = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbCurrentLink;\nconst BreadcrumbEllipsis = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbEllipsis;\nvar _c, _c1;\n$RefreshReg$(_c, \"BreadcrumbRoot$React.forwardRef\");\n$RefreshReg$(_c1, \"BreadcrumbRoot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvYnJlYWRjcnVtYi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFFeEIsTUFBTUUsK0JBQWlCRCw2Q0FBZ0IsTUFBQyxTQUFTQyxlQUN0REUsS0FBSyxFQUNMQyxHQUFHO0lBRUgsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsUUFBUSxFQUFFLEdBQUdDLE1BQU0sR0FBR0w7SUFFdkQsTUFBTU0sZ0JBQWdCVCwyQ0FBYyxDQUFDVyxPQUFPLENBQUNKLFVBQVVLLE1BQU0sQ0FDM0RaLGlEQUFvQjtJQUd0QixxQkFDRSw4REFBQ0QsNERBQWU7UUFBQ0ssS0FBS0E7UUFBTSxHQUFHSSxJQUFJO2tCQUNqQyw0RUFBQ1QsNERBQWU7WUFBQ2lCLEtBQUtWO3NCQUNuQkcsY0FBY1EsR0FBRyxDQUFDLENBQUNDLE9BQU9DO2dCQUN6QixNQUFNQyxPQUFPRCxVQUFVVixjQUFjWSxNQUFNLEdBQUc7Z0JBQzlDLHFCQUNFLDhEQUFDckIsMkNBQWM7O3NDQUNiLDhEQUFDRCw0REFBZTtzQ0FBRW1COzs7Ozs7d0JBQ2pCLENBQUNFLHNCQUNBLDhEQUFDckIsaUVBQW9COzRCQUFDMEIsT0FBTTtzQ0FDekJwQjs7Ozs7OzttQkFKY2M7Ozs7O1lBU3pCOzs7Ozs7Ozs7OztBQUlSLEdBQUc7O0FBRUksTUFBTU8saUJBQWlCM0IsNERBQWUsQ0FBQztBQUN2QyxNQUFNNkIsd0JBQXdCN0IsbUVBQXNCLENBQUM7QUFDckQsTUFBTStCLHFCQUFxQi9CLGdFQUFtQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvYnJlYWRjcnVtYi5qc3g/NDAyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcmVhZGNydW1iIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQnJlYWRjcnVtYlJvb3QgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEJyZWFkY3J1bWJSb290KFxuICBwcm9wcyxcbiAgcmVmXG4pIHtcbiAgY29uc3QgeyBzZXBhcmF0b3IsIHNlcGFyYXRvckdhcCwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHZhbGlkQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5maWx0ZXIoXG4gICAgUmVhY3QuaXNWYWxpZEVsZW1lbnRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxCcmVhZGNydW1iLlJvb3QgcmVmPXtyZWZ9IHsuLi5yZXN0fT5cbiAgICAgIDxCcmVhZGNydW1iLkxpc3QgZ2FwPXtzZXBhcmF0b3JHYXB9PlxuICAgICAgICB7dmFsaWRDaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhc3QgPSBpbmRleCA9PT0gdmFsaWRDaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+e2NoaWxkfTwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICB7IWxhc3QgJiYgKFxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLlNlcGFyYXRvciBjb2xvcj1cIiNmZmZcIj5cbiAgICAgICAgICAgICAgICAgIHtzZXBhcmF0b3J9XG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLlNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0JyZWFkY3J1bWIuTGlzdD5cbiAgICA8L0JyZWFkY3J1bWIuUm9vdD5cbiAgKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgQnJlYWRjcnVtYkxpbmsgPSBCcmVhZGNydW1iLkxpbms7XG5leHBvcnQgY29uc3QgQnJlYWRjcnVtYkN1cnJlbnRMaW5rID0gQnJlYWRjcnVtYi5DdXJyZW50TGluaztcbmV4cG9ydCBjb25zdCBCcmVhZGNydW1iRWxsaXBzaXMgPSBCcmVhZGNydW1iLkVsbGlwc2lzO1xuIl0sIm5hbWVzIjpbIkJyZWFkY3J1bWIiLCJSZWFjdCIsIkJyZWFkY3J1bWJSb290IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwic2VwYXJhdG9yIiwic2VwYXJhdG9yR2FwIiwiY2hpbGRyZW4iLCJyZXN0IiwidmFsaWRDaGlsZHJlbiIsIkNoaWxkcmVuIiwidG9BcnJheSIsImZpbHRlciIsImlzVmFsaWRFbGVtZW50IiwiUm9vdCIsIkxpc3QiLCJnYXAiLCJtYXAiLCJjaGlsZCIsImluZGV4IiwibGFzdCIsImxlbmd0aCIsIkZyYWdtZW50IiwiSXRlbSIsIlNlcGFyYXRvciIsImNvbG9yIiwiQnJlYWRjcnVtYkxpbmsiLCJMaW5rIiwiQnJlYWRjcnVtYkN1cnJlbnRMaW5rIiwiQ3VycmVudExpbmsiLCJCcmVhZGNydW1iRWxsaXBzaXMiLCJFbGxpcHNpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/breadcrumb.jsx\n"));

/***/ })

});