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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompletedChallenges */ \"./src/components/CompletedChallenges.tsx\");\n/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExperienceBar */ \"./src/components/ExperienceBar.tsx\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ \"./src/components/Profile.tsx\");\n/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Countdown */ \"./src/components/Countdown.tsx\");\n/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChallengeBox */ \"./src/components/ChallengeBox.tsx\");\n/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ \"./src/styles/pages/Home.module.css\");\n/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/CountdownContext */ \"./src/contexts/CountdownContext.tsx\");\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { level , currentExperience , challengesCompleted , time  } = param;\n    _s();\n    const [userTime, setUserTime] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0);\n    function handleChange(param) {\n        let { key , target  } = param;\n        console.log(target.value);\n        if (key === \"Enter\") {\n            setUserTime(target.value);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_9__[\"default\"].set(\"time\", userTime);\n    }, [\n        userTime\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_8__.ChallengesProvider, {\n        level: level,\n        currentExperience: currentExperience,\n        challengesCompleted: challengesCompleted,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"In\\xedcio | te-meche\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__.ExperienceBar, {}, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().input),\n                        type: \"number\",\n                        onKeyDown: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_7__.CountdownProvider, {\n                        userTime: time,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile__WEBPACK_IMPORTED_MODULE_4__.Profile, {}, void 0, false, {\n                                            fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__.CompletedChallenges, {}, void 0, false, {\n                                            fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Countdown__WEBPACK_IMPORTED_MODULE_5__.Countdown, {}, void 0, false, {\n                                            fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__.ChallengeBox, {}, void 0, false, {\n                                        fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/te-meche/src/pages/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"BUEeDaD2Eso4RlSvwnLmRP07fec=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUUyQztBQUNaO0FBQ1o7QUFDSTtBQUNNO0FBRUw7QUFDWTtBQUVFO0FBQ25DO0FBQ1k7O0FBUzdCLFNBQVNZLEtBQUssS0FLakIsRUFBRTtRQUxlLEVBQzNCQyxNQUFLLEVBQ0xDLGtCQUFpQixFQUNqQkMsb0JBQW1CLEVBQ25CQyxLQUFJLEVBQ00sR0FMaUI7O0lBTTNCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCxnREFBUUEsQ0FBQztJQUN6QyxTQUFTUSxhQUFhLEtBR2tCLEVBQUU7WUFIcEIsRUFDcEJDLElBQUcsRUFDSEMsT0FBTSxFQUNnQyxHQUhsQjtRQUlwQkMsUUFBUUMsR0FBRyxDQUFDRixPQUFPRyxLQUFLO1FBQ3hCLElBQUlKLFFBQVEsU0FBUztZQUNuQkYsWUFBWUcsT0FBT0csS0FBSztRQUMxQixDQUFDO0lBQ0g7SUFDQWQsaURBQVNBLENBQUMsSUFBTTtRQUNkRCxxREFBVyxDQUFDLFFBQVFRO0lBQ3RCLEdBQUc7UUFBQ0E7S0FBUztJQUNiLHFCQUNFLDhEQUFDVCwyRUFBa0JBO1FBQ2pCSyxPQUFPQTtRQUNQQyxtQkFBbUJBO1FBQ25CQyxxQkFBcUJBOzswQkFFckIsOERBQUNmLGtEQUFJQTs7a0NBQ0gsOERBQUMwQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ0M7Z0JBQUtDLFdBQVd6QixpRkFBZ0I7O2tDQUMvQiw4REFBQ0osb0VBQWFBOzs7OztrQ0FDZCw4REFBQytCO3dCQUNDRixXQUFXekIsNkVBQVk7d0JBQ3ZCNEIsTUFBSzt3QkFDTEMsV0FBV2hCOzs7Ozs7a0NBRWIsOERBQUNaLHlFQUFpQkE7d0JBQUNVLFVBQVVEO2tDQUMzQiw0RUFBQ29COzs4Q0FDQyw4REFBQ0M7O3NEQUNDLDhEQUFDbEMsd0RBQU9BOzs7OztzREFDUiw4REFBQ0YsZ0ZBQW1CQTs7Ozs7c0RBQ3BCLDhEQUFDRyw0REFBU0E7Ozs7Ozs7Ozs7OzhDQUVaLDhEQUFDaUM7OENBQ0MsNEVBQUNoQyxrRUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQixDQUFDO0dBbkR1Qk87S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHsgQ29tcGxldGVkQ2hhbGxlbmdlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXNcIjtcbmltcG9ydCB7IEV4cGVyaWVuY2VCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZVwiO1xuaW1wb3J0IHsgQ291bnRkb3duIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRkb3duXCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3hcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQ291bnRkb3duUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENoYWxsZW5nZXNQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICB0aW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe1xuICBsZXZlbCxcbiAgY3VycmVudEV4cGVyaWVuY2UsXG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQsXG4gIHRpbWUsXG59OiBIb21lUHJvcHMpIHtcbiAgY29uc3QgW3VzZXJUaW1lLCBzZXRVc2VyVGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHtcbiAgICBrZXksXG4gICAgdGFyZ2V0LFxuICB9OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc29sZS5sb2codGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoa2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHNldFVzZXJUaW1lKHRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ29va2llcy5zZXQoXCJ0aW1lXCIsIHVzZXJUaW1lKTtcbiAgfSwgW3VzZXJUaW1lXSk7XG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNQcm92aWRlclxuICAgICAgbGV2ZWw9e2xldmVsfVxuICAgICAgY3VycmVudEV4cGVyaWVuY2U9e2N1cnJlbnRFeHBlcmllbmNlfVxuICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZD17Y2hhbGxlbmdlc0NvbXBsZXRlZH1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkluw61jaW8gfCB0ZS1tZWNoZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8RXhwZXJpZW5jZUJhciAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvdW50ZG93blByb3ZpZGVyIHVzZXJUaW1lPXt0aW1lfT5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxQcm9maWxlIC8+XG4gICAgICAgICAgICAgIDxDb21wbGV0ZWRDaGFsbGVuZ2VzIC8+XG4gICAgICAgICAgICAgIDxDb3VudGRvd24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPENoYWxsZW5nZUJveCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L0NvdW50ZG93blByb3ZpZGVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvQ2hhbGxlbmdlc1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGxldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZCwgdGltZSB9ID1cbiAgICBjb250ZXh0LnJlcS5jb29raWVzO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxldmVsOiBOdW1iZXIobGV2ZWwpLFxuICAgICAgY3VycmVudEV4cGVyaWVuY2U6IE51bWJlcihjdXJyZW50RXhwZXJpZW5jZSksXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBOdW1iZXIoY2hhbGxlbmdlc0NvbXBsZXRlZCksXG4gICAgICB0aW1lOiBOdW1iZXIodGltZSksXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNvbXBsZXRlZENoYWxsZW5nZXMiLCJFeHBlcmllbmNlQmFyIiwiUHJvZmlsZSIsIkNvdW50ZG93biIsIkNoYWxsZW5nZUJveCIsInN0eWxlcyIsIkNvdW50ZG93blByb3ZpZGVyIiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiQ29va2llcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImxldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwidGltZSIsInVzZXJUaW1lIiwic2V0VXNlclRpbWUiLCJoYW5kbGVDaGFuZ2UiLCJrZXkiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzZXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJvbktleURvd24iLCJzZWN0aW9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});