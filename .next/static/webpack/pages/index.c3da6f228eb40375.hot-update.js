"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExperienceBar\": function() { return /* binding */ ExperienceBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ \"./src/styles/components/ExperienceBar.module.css\");\n/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ExperienceBar() {\n    _s();\n    const { currentExperience , experienceToNextLevel  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.ChallengesContext);\n    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().experienceBar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"0 xp\"\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/ExperienceBar.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"\".concat(percentToNextLevel, \"%\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/ExperienceBar.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().currentExperience),\n                        style: {\n                            left: \"\".concat(percentToNextLevel, \"%\")\n                        },\n                        children: [\n                            currentExperience,\n                            \" xp\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/ExperienceBar.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/ExperienceBar.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    experienceToNextLevel,\n                    \" xp\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/ExperienceBar.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/ExperienceBar.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(ExperienceBar, \"vJz9w/yPxCuS+EIzmpz2qzto+DA=\");\n_c = ExperienceBar;\nvar _c;\n$RefreshReg$(_c, \"ExperienceBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFtQztBQUMrQjtBQUVBO0FBRTNELFNBQVNHLGdCQUFnQjs7SUFDOUIsTUFBTSxFQUFFQyxrQkFBaUIsRUFBRUMsc0JBQXFCLEVBQUUsR0FDaERMLGlEQUFVQSxDQUFDQywwRUFBaUJBO0lBRTlCLE1BQU1LLHFCQUNKQyxLQUFLQyxLQUFLLENBQUNKLG9CQUFvQixPQUFPQztJQUV4QyxxQkFDRSw4REFBQ0k7UUFBT0MsV0FBV1Isa0dBQW1COzswQkFDcEMsOERBQUNVOzBCQUFLOzs7Ozs7MEJBQ04sOERBQUNDOztrQ0FDQyw4REFBQ0E7d0JBQUlYLE9BQU87NEJBQUVZLE9BQU8sR0FBc0IsT0FBbkJSLG9CQUFtQjt3QkFBRzs7Ozs7O2tDQUM5Qyw4REFBQ007d0JBQ0NGLFdBQVdSLHNHQUF1Qjt3QkFDbENBLE9BQU87NEJBQUVhLE1BQU0sR0FBc0IsT0FBbkJULG9CQUFtQjt3QkFBRzs7NEJBRXZDRjs0QkFBa0I7Ozs7Ozs7Ozs7Ozs7MEJBR3ZCLDhEQUFDUTs7b0JBQU1QO29CQUFzQjs7Ozs7Ozs7Ozs7OztBQUduQyxDQUFDO0dBdEJlRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLnRzeD81Njk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0XCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBFeHBlcmllbmNlQmFyKCkge1xuICBjb25zdCB7IGN1cnJlbnRFeHBlcmllbmNlLCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgfSA9XG4gICAgdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XG5cbiAgY29uc3QgcGVyY2VudFRvTmV4dExldmVsID1cbiAgICBNYXRoLnJvdW5kKGN1cnJlbnRFeHBlcmllbmNlICogMTAwKSAvIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZS5leHBlcmllbmNlQmFyfT5cbiAgICAgIDxzcGFuPjAgeHA8L3NwYW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50VG9OZXh0TGV2ZWx9JWAgfX0gLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmN1cnJlbnRFeHBlcmllbmNlfVxuICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke3BlcmNlbnRUb05leHRMZXZlbH0lYCB9fVxuICAgICAgICA+XG4gICAgICAgICAge2N1cnJlbnRFeHBlcmllbmNlfSB4cFxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuPntleHBlcmllbmNlVG9OZXh0TGV2ZWx9IHhwPC9zcGFuPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0eWxlIiwiRXhwZXJpZW5jZUJhciIsImN1cnJlbnRFeHBlcmllbmNlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwicGVyY2VudFRvTmV4dExldmVsIiwiTWF0aCIsInJvdW5kIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZXhwZXJpZW5jZUJhciIsInNwYW4iLCJkaXYiLCJ3aWR0aCIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ExperienceBar.tsx\n"));

/***/ })

});