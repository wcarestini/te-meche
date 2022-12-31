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

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countdown\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nlet countdownTimeout;\nfunction Countdown() {\n    _s();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.3 * 60);\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const minutes = Math.floor(time / 60);\n    const seconds = time % 60;\n    const [minuteLeft, minuteRight] = String(minutes).padStart(2, \"0\").split(\"\");\n    const [secondLeft, secondRight] = String(seconds).padStart(2, \"0\").split(\"\");\n    function startCountdown() {\n        setIsActive(true);\n    }\n    function resetCountdown() {\n        clearTimeout(countdownTimeout);\n        setIsActive(false);\n        setTime(0.03 * 60);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isActive && time > 0) {\n            countdownTimeout = setTimeout(()=>{\n                setTime(time - 1);\n            }, 1000);\n        }\n    }, [\n        isActive,\n        time\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: minuteLeft\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: minuteRight\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \":\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: secondLeft\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: secondRight\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"\".concat((_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownButton), \" \").concat((_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownButtonDisabled)),\n                onClick: resetCountdown,\n                children: \"Abandonar ciclo\"\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownButton),\n                onClick: startCountdown,\n                children: \"Iniciar um ciclo\"\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Countdown, \"tLHeoDamXpVZsOu7J4kbq3/s9ss=\");\n_c = Countdown;\nvar _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDbUI7QUFFL0QsSUFBSUc7QUFFRyxTQUFTQyxZQUFZOztJQUMxQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsTUFBTTtJQUN2QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUU5QyxNQUFNUSxVQUFVQyxLQUFLQyxLQUFLLENBQUNOLE9BQU87SUFDbEMsTUFBTU8sVUFBVVAsT0FBTztJQUV2QixNQUFNLENBQUNRLFlBQVlDLFlBQVksR0FBR0MsT0FBT04sU0FBU08sUUFBUSxDQUFDLEdBQUcsS0FBS0MsS0FBSyxDQUFDO0lBQ3pFLE1BQU0sQ0FBQ0MsWUFBWUMsWUFBWSxHQUFHSixPQUFPSCxTQUFTSSxRQUFRLENBQUMsR0FBRyxLQUFLQyxLQUFLLENBQUM7SUFFekUsU0FBU0csaUJBQWlCO1FBQ3hCWixZQUFZLElBQUk7SUFDbEI7SUFFQSxTQUFTYSxpQkFBaUI7UUFDeEJDLGFBQWFuQjtRQUNiSyxZQUFZLEtBQUs7UUFDakJGLFFBQVEsT0FBTztJQUNqQjtJQUVBTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSU8sWUFBWUYsT0FBTyxHQUFHO1lBQ3hCRixtQkFBbUJvQixXQUFXLElBQU07Z0JBQ2xDakIsUUFBUUQsT0FBTztZQUNqQixHQUFHO1FBQ0wsQ0FBQztJQUNILEdBQUc7UUFBQ0U7UUFBVUY7S0FBSztJQUVuQixxQkFDRSw4REFBQ21COzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVd2QixtR0FBeUI7O2tDQUN2Qyw4REFBQ3NCOzswQ0FDQyw4REFBQ0c7MENBQU1kOzs7Ozs7MENBQ1AsOERBQUNjOzBDQUFNYjs7Ozs7Ozs7Ozs7O2tDQUVULDhEQUFDYTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDSDs7MENBQ0MsOERBQUNHOzBDQUFNVDs7Ozs7OzBDQUNQLDhEQUFDUzswQ0FBTVI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlWWix5QkFDQyw4REFBQ3FCO2dCQUNDQyxNQUFLO2dCQUNMSixXQUFXLEdBQTZCdkIsT0FBMUJBLGdHQUFzQixFQUFDLEtBQWtDLE9BQS9CQSx3R0FBOEI7Z0JBQ3RFOEIsU0FBU1g7MEJBQ1Y7Ozs7O3FDQUlELDhEQUFDTztnQkFDQ0MsTUFBSztnQkFDTEosV0FBV3ZCLGdHQUFzQjtnQkFDakM4QixTQUFTWjswQkFDVjs7Ozs7b0JBR0Y7Ozs7Ozs7QUFHUCxDQUFDO0dBN0RlaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD81NTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCI7XG5cbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4zICogNjApO1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xuXG4gIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgXCIwXCIpLnNwbGl0KFwiXCIpO1xuICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsIFwiMFwiKS5zcGxpdChcIlwiKTtcblxuICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcbiAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcbiAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XG4gICAgc2V0VGltZSgwLjAzICogNjApO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcbiAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZSh0aW1lIC0gMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH0sIFtpc0FjdGl2ZSwgdGltZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuPjo8L3NwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWdodH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc0FjdGl2ZSA/IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uRGlzYWJsZWR9YH1cbiAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50ZG93bn1cbiAgICAgICAgPlxuICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259XG4gICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259XG4gICAgICAgID5cbiAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImNvdW50ZG93bkNvbnRhaW5lciIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwiY291bnRkb3duQnV0dG9uIiwiY291bnRkb3duQnV0dG9uRGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n"));

/***/ })

});