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

/***/ "(app-pages-browser)/./components/models/renderIsland.js":
/*!*******************************************!*\
  !*** ./components/models/renderIsland.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst RenderIsland = (param)=>{\n    let { children, fov, coords, camera } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.Canvas, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 1\n            }, void 0, false, {\n                fileName: \"/Users/kiyotaka/homepage/components/models/renderIsland.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                position: [\n                    10,\n                    10,\n                    10\n                ],\n                intensity: 3\n            }, void 0, false, {\n                fileName: \"/Users/kiyotaka/homepage/components/models/renderIsland.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera, {\n                makeDefault: true,\n                position: camera,\n                fov: fov\n            }, void 0, false, {\n                fileName: \"/Users/kiyotaka/homepage/components/models/renderIsland.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n                position: coords,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/kiyotaka/homepage/components/models/renderIsland.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.OrbitControls, {\n                enableZoom: false\n            }, void 0, false, {\n                fileName: \"/Users/kiyotaka/homepage/components/models/renderIsland.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kiyotaka/homepage/components/models/renderIsland.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = RenderIsland;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderIsland);\nvar _c;\n$RefreshReg$(_c, \"RenderIsland\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW9kZWxzL3JlbmRlcklzbGFuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNEM7QUFDeUI7QUFFckUsTUFBTUcsZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsR0FBRyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUNyRCxxQkFDRSw4REFBQ1Asc0RBQU1BOzswQkFDTCw4REFBQ1E7Z0JBQWFDLFdBQVc7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFpQkMsVUFBVTtvQkFBQztvQkFBSTtvQkFBSTtpQkFBRztnQkFBRUYsV0FBVzs7Ozs7OzBCQUNyRCw4REFBQ1AsZ0VBQWlCQTtnQkFBQ1UsV0FBVztnQkFBQ0QsVUFBVUo7Z0JBQVFGLEtBQUtBOzs7Ozs7MEJBQ3RELDhEQUFDUTtnQkFBTUYsVUFBVUw7MEJBQVNGOzs7Ozs7MEJBQzFCLDhEQUFDSCw0REFBYUE7Z0JBQUNhLFlBQVk7Ozs7Ozs7Ozs7OztBQUdqQztLQVZNWDtBQVlOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9kZWxzL3JlbmRlcklzbGFuZC5qcz9hZGE4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scywgUGVyc3BlY3RpdmVDYW1lcmEgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcblxuY29uc3QgUmVuZGVySXNsYW5kID0gKHsgY2hpbGRyZW4sIGZvdiwgY29vcmRzLCBjYW1lcmEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYW52YXM+XG4gICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MX0gLz5cbiAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCAxMF19IGludGVuc2l0eT17M30gLz5cbiAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBtYWtlRGVmYXVsdCBwb3NpdGlvbj17Y2FtZXJhfSBmb3Y9e2Zvdn0gLz5cbiAgICAgIDxncm91cCBwb3NpdGlvbj17Y29vcmRzfT57Y2hpbGRyZW59PC9ncm91cD5cbiAgICAgIDxPcmJpdENvbnRyb2xzIGVuYWJsZVpvb209e2ZhbHNlfSAvPlxuICAgIDwvQ2FudmFzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVySXNsYW5kO1xuIl0sIm5hbWVzIjpbIkNhbnZhcyIsIk9yYml0Q29udHJvbHMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIlJlbmRlcklzbGFuZCIsImNoaWxkcmVuIiwiZm92IiwiY29vcmRzIiwiY2FtZXJhIiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5IiwiZGlyZWN0aW9uYWxMaWdodCIsInBvc2l0aW9uIiwibWFrZURlZmF1bHQiLCJncm91cCIsImVuYWJsZVpvb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/models/renderIsland.js\n"));

/***/ })

});