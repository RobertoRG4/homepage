"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/motion-dom";
exports.ids = ["vendor-chunks/motion-dom"];
exports.modules = {

/***/ "(ssr)/./node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isDragActive: () => (/* binding */ isDragActive),\n/* harmony export */   isDragging: () => (/* binding */ isDragging)\n/* harmony export */ });\nconst isDragging = {\n    x: false,\n    y: false,\n};\nfunction isDragActive() {\n    return isDragging.x || isDragging.y;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvc3RhdGUvaXMtYWN0aXZlLm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3N0YXRlL2lzLWFjdGl2ZS5tanM/NDhmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc0RyYWdnaW5nID0ge1xuICAgIHg6IGZhbHNlLFxuICAgIHk6IGZhbHNlLFxufTtcbmZ1bmN0aW9uIGlzRHJhZ0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gaXNEcmFnZ2luZy54IHx8IGlzRHJhZ2dpbmcueTtcbn1cblxuZXhwb3J0IHsgaXNEcmFnQWN0aXZlLCBpc0RyYWdnaW5nIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setDragLock: () => (/* binding */ setDragLock)\n/* harmony export */ });\n/* harmony import */ var _is_active_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-active.mjs */ \"(ssr)/./node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs\");\n\n\nfunction setDragLock(axis) {\n    if (axis === \"x\" || axis === \"y\") {\n        if (_is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging[axis]) {\n            return null;\n        }\n        else {\n            _is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging[axis] = true;\n            return () => {\n                _is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging[axis] = false;\n            };\n        }\n    }\n    else {\n        if (_is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging.x || _is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging.y) {\n            return null;\n        }\n        else {\n            _is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging.x = _is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging.y = true;\n            return () => {\n                _is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging.x = _is_active_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragging.y = false;\n            };\n        }\n    }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvc3RhdGUvc2V0LWFjdGl2ZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7O0FBRTdDO0FBQ0E7QUFDQSxZQUFZLHNEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVU7QUFDdEI7QUFDQSxnQkFBZ0Isc0RBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNEQUFVLE1BQU0sc0RBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBVSxLQUFLLHNEQUFVO0FBQ3JDO0FBQ0EsZ0JBQWdCLHNEQUFVLEtBQUssc0RBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvc3RhdGUvc2V0LWFjdGl2ZS5tanM/ODU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0RyYWdnaW5nIH0gZnJvbSAnLi9pcy1hY3RpdmUubWpzJztcblxuZnVuY3Rpb24gc2V0RHJhZ0xvY2soYXhpcykge1xuICAgIGlmIChheGlzID09PSBcInhcIiB8fCBheGlzID09PSBcInlcIikge1xuICAgICAgICBpZiAoaXNEcmFnZ2luZ1theGlzXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpc0RyYWdnaW5nW2F4aXNdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaXNEcmFnZ2luZ1theGlzXSA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzRHJhZ2dpbmcueCB8fCBpc0RyYWdnaW5nLnkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXNEcmFnZ2luZy54ID0gaXNEcmFnZ2luZy55ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaXNEcmFnZ2luZy54ID0gaXNEcmFnZ2luZy55ID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBzZXREcmFnTG9jayB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/motion-dom/dist/es/gestures/hover.mjs":
/*!************************************************************!*\
  !*** ./node_modules/motion-dom/dist/es/gestures/hover.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hover: () => (/* binding */ hover)\n/* harmony export */ });\n/* harmony import */ var _utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resolve-elements.mjs */ \"(ssr)/./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs\");\n/* harmony import */ var _drag_state_is_active_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag/state/is-active.mjs */ \"(ssr)/./node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs\");\n\n\n\n/**\n * Filter out events that are not pointer events, or are triggering\n * while a Motion gesture is active.\n */\nfunction filterEvents(callback) {\n    return (event) => {\n        if (event.pointerType === \"touch\" || (0,_drag_state_is_active_mjs__WEBPACK_IMPORTED_MODULE_1__.isDragActive)())\n            return;\n        callback(event);\n    };\n}\n/**\n * Create a hover gesture. hover() is different to .addEventListener(\"pointerenter\")\n * in that it has an easier syntax, filters out polyfilled touch events, interoperates\n * with drag gestures, and automatically removes the \"pointerennd\" event listener when the hover ends.\n *\n * @public\n */\nfunction hover(elementOrSelector, onHoverStart, options = {}) {\n    const gestureAbortController = new AbortController();\n    const eventOptions = {\n        passive: true,\n        ...options,\n        signal: gestureAbortController.signal,\n    };\n    const onPointerEnter = filterEvents((enterEvent) => {\n        const { target } = enterEvent;\n        const onHoverEnd = onHoverStart(enterEvent);\n        if (!onHoverEnd || !target)\n            return;\n        const onPointerLeave = filterEvents((leaveEvent) => {\n            onHoverEnd(leaveEvent);\n            target.removeEventListener(\"pointerleave\", onPointerLeave);\n        });\n        target.addEventListener(\"pointerleave\", onPointerLeave, eventOptions);\n    });\n    (0,_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveElements)(elementOrSelector).forEach((element) => {\n        element.addEventListener(\"pointerenter\", onPointerEnter, eventOptions);\n    });\n    return () => gestureAbortController.abort();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL2hvdmVyLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0U7QUFDTjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHVFQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsSUFBSSw0RUFBZTtBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9nZXN0dXJlcy9ob3Zlci5tanM/OGExYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNvbHZlRWxlbWVudHMgfSBmcm9tICcuLi91dGlscy9yZXNvbHZlLWVsZW1lbnRzLm1qcyc7XG5pbXBvcnQgeyBpc0RyYWdBY3RpdmUgfSBmcm9tICcuL2RyYWcvc3RhdGUvaXMtYWN0aXZlLm1qcyc7XG5cbi8qKlxuICogRmlsdGVyIG91dCBldmVudHMgdGhhdCBhcmUgbm90IHBvaW50ZXIgZXZlbnRzLCBvciBhcmUgdHJpZ2dlcmluZ1xuICogd2hpbGUgYSBNb3Rpb24gZ2VzdHVyZSBpcyBhY3RpdmUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlckV2ZW50cyhjYWxsYmFjaykge1xuICAgIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIgfHwgaXNEcmFnQWN0aXZlKCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBob3ZlciBnZXN0dXJlLiBob3ZlcigpIGlzIGRpZmZlcmVudCB0byAuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJlbnRlclwiKVxuICogaW4gdGhhdCBpdCBoYXMgYW4gZWFzaWVyIHN5bnRheCwgZmlsdGVycyBvdXQgcG9seWZpbGxlZCB0b3VjaCBldmVudHMsIGludGVyb3BlcmF0ZXNcbiAqIHdpdGggZHJhZyBnZXN0dXJlcywgYW5kIGF1dG9tYXRpY2FsbHkgcmVtb3ZlcyB0aGUgXCJwb2ludGVyZW5uZFwiIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGhvdmVyIGVuZHMuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBob3ZlcihlbGVtZW50T3JTZWxlY3Rvciwgb25Ib3ZlclN0YXJ0LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBnZXN0dXJlQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IGV2ZW50T3B0aW9ucyA9IHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc2lnbmFsOiBnZXN0dXJlQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcbiAgICB9O1xuICAgIGNvbnN0IG9uUG9pbnRlckVudGVyID0gZmlsdGVyRXZlbnRzKChlbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlbnRlckV2ZW50O1xuICAgICAgICBjb25zdCBvbkhvdmVyRW5kID0gb25Ib3ZlclN0YXJ0KGVudGVyRXZlbnQpO1xuICAgICAgICBpZiAoIW9uSG92ZXJFbmQgfHwgIXRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgb25Qb2ludGVyTGVhdmUgPSBmaWx0ZXJFdmVudHMoKGxlYXZlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIG9uSG92ZXJFbmQobGVhdmVFdmVudCk7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJsZWF2ZVwiLCBvblBvaW50ZXJMZWF2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJsZWF2ZVwiLCBvblBvaW50ZXJMZWF2ZSwgZXZlbnRPcHRpb25zKTtcbiAgICB9KTtcbiAgICByZXNvbHZlRWxlbWVudHMoZWxlbWVudE9yU2VsZWN0b3IpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmVudGVyXCIsIG9uUG9pbnRlckVudGVyLCBldmVudE9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiBnZXN0dXJlQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG59XG5cbmV4cG9ydCB7IGhvdmVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/motion-dom/dist/es/gestures/hover.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/motion-dom/dist/es/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/motion-dom/dist/es/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hover: () => (/* reexport safe */ _gestures_hover_mjs__WEBPACK_IMPORTED_MODULE_0__.hover),\n/* harmony export */   isDragActive: () => (/* reexport safe */ _gestures_drag_state_is_active_mjs__WEBPACK_IMPORTED_MODULE_2__.isDragActive),\n/* harmony export */   isDragging: () => (/* reexport safe */ _gestures_drag_state_is_active_mjs__WEBPACK_IMPORTED_MODULE_2__.isDragging),\n/* harmony export */   resolveElements: () => (/* reexport safe */ _utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveElements),\n/* harmony export */   setDragLock: () => (/* reexport safe */ _gestures_drag_state_set_active_mjs__WEBPACK_IMPORTED_MODULE_3__.setDragLock)\n/* harmony export */ });\n/* harmony import */ var _gestures_hover_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestures/hover.mjs */ \"(ssr)/./node_modules/motion-dom/dist/es/gestures/hover.mjs\");\n/* harmony import */ var _utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/resolve-elements.mjs */ \"(ssr)/./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs\");\n/* harmony import */ var _gestures_drag_state_is_active_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gestures/drag/state/is-active.mjs */ \"(ssr)/./node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs\");\n/* harmony import */ var _gestures_drag_state_set_active_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestures/drag/state/set-active.mjs */ \"(ssr)/./node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkM7QUFDa0I7QUFDZ0I7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9pbmRleC5tanM/NDJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBob3ZlciB9IGZyb20gJy4vZ2VzdHVyZXMvaG92ZXIubWpzJztcbmV4cG9ydCB7IHJlc29sdmVFbGVtZW50cyB9IGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1lbGVtZW50cy5tanMnO1xuZXhwb3J0IHsgaXNEcmFnQWN0aXZlLCBpc0RyYWdnaW5nIH0gZnJvbSAnLi9nZXN0dXJlcy9kcmFnL3N0YXRlL2lzLWFjdGl2ZS5tanMnO1xuZXhwb3J0IHsgc2V0RHJhZ0xvY2sgfSBmcm9tICcuL2dlc3R1cmVzL2RyYWcvc3RhdGUvc2V0LWFjdGl2ZS5tanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/motion-dom/dist/es/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveElements: () => (/* binding */ resolveElements)\n/* harmony export */ });\nfunction resolveElements(elementOrSelector, scope, selectorCache) {\n    var _a;\n    if (elementOrSelector instanceof Element) {\n        return [elementOrSelector];\n    }\n    else if (typeof elementOrSelector === \"string\") {\n        let root = document;\n        if (scope) {\n            // TODO: Refactor to utils package\n            // invariant(\n            //     Boolean(scope.current),\n            //     \"Scope provided, but no element detected.\"\n            // )\n            root = scope.current;\n        }\n        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);\n        return elements ? Array.from(elements) : [];\n    }\n    return Array.from(elementOrSelector);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3V0aWxzL3Jlc29sdmUtZWxlbWVudHMubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy91dGlscy9yZXNvbHZlLWVsZW1lbnRzLm1qcz85ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlc29sdmVFbGVtZW50cyhlbGVtZW50T3JTZWxlY3Rvciwgc2NvcGUsIHNlbGVjdG9yQ2FjaGUpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGVsZW1lbnRPclNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gW2VsZW1lbnRPclNlbGVjdG9yXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGVsZW1lbnRPclNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQ7XG4gICAgICAgIGlmIChzY29wZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogUmVmYWN0b3IgdG8gdXRpbHMgcGFja2FnZVxuICAgICAgICAgICAgLy8gaW52YXJpYW50KFxuICAgICAgICAgICAgLy8gICAgIEJvb2xlYW4oc2NvcGUuY3VycmVudCksXG4gICAgICAgICAgICAvLyAgICAgXCJTY29wZSBwcm92aWRlZCwgYnV0IG5vIGVsZW1lbnQgZGV0ZWN0ZWQuXCJcbiAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgIHJvb3QgPSBzY29wZS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gKF9hID0gc2VsZWN0b3JDYWNoZSA9PT0gbnVsbCB8fCBzZWxlY3RvckNhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RvckNhY2hlW2VsZW1lbnRPclNlbGVjdG9yXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRPclNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzID8gQXJyYXkuZnJvbShlbGVtZW50cykgOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudE9yU2VsZWN0b3IpO1xufVxuXG5leHBvcnQgeyByZXNvbHZlRWxlbWVudHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs\n");

/***/ })

};
;