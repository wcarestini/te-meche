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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countdown\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nlet countdownTimeout;\nfunction Countdown() {\n    _s();\n    const { startNewChallenge  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.ChallengesContext);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(25 * 60);\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hasFinished, setHasFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const minutes = Math.floor(time / 60);\n    const seconds = time % 60;\n    const [minuteLeft, minuteRight] = String(minutes).padStart(2, \"0\").split(\"\");\n    const [secondLeft, secondRight] = String(seconds).padStart(2, \"0\").split(\"\");\n    function startCountdown() {\n        setIsActive(true);\n    }\n    function resetCountdown() {\n        clearTimeout(countdownTimeout);\n        setIsActive(false);\n        setTime(25 * 60);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isActive && time > 0) {\n            countdownTimeout = setTimeout(()=>{\n                setTime(time - 1);\n            }, 1000);\n        } else if (isActive && time === 0) {\n            setHasFinished(true);\n            setIsActive(false);\n            startNewChallenge();\n        }\n    }, [\n        isActive,\n        time\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: minuteLeft\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: minuteRight\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \":\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: secondLeft\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: secondRight\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            hasFinished ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: true,\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton),\n                children: \"Ciclo encerrado\"\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"\".concat((_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton), \" \").concat((_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButtonDisabled)),\n                    onClick: resetCountdown,\n                    children: \"Abandonar ciclo\"\n                }, void 0, false, {\n                    fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton),\n                    onClick: startCountdown,\n                    children: \"Iniciar um ciclo\"\n                }, void 0, false, {\n                    fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/te-meche/src/components/Countdown.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Countdown, \"mj5/cnN4jENLd9Ysf8U5sf/QRNY=\");\n_c = Countdown;\nvar _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdEO0FBQ1U7QUFDSDtBQUUvRCxJQUFJSztBQUVHLFNBQVNDLFlBQVk7O0lBQzFCLE1BQU0sRUFBRUMsa0JBQWlCLEVBQUUsR0FBR1AsaURBQVVBLENBQUNHLDBFQUFpQkE7SUFFMUQsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFFcEQsTUFBTVksVUFBVUMsS0FBS0MsS0FBSyxDQUFDUixPQUFPO0lBQ2xDLE1BQU1TLFVBQVVULE9BQU87SUFFdkIsTUFBTSxDQUFDVSxZQUFZQyxZQUFZLEdBQUdDLE9BQU9OLFNBQVNPLFFBQVEsQ0FBQyxHQUFHLEtBQUtDLEtBQUssQ0FBQztJQUN6RSxNQUFNLENBQUNDLFlBQVlDLFlBQVksR0FBR0osT0FBT0gsU0FBU0ksUUFBUSxDQUFDLEdBQUcsS0FBS0MsS0FBSyxDQUFDO0lBRXpFLFNBQVNHLGlCQUFpQjtRQUN4QmQsWUFBWSxJQUFJO0lBQ2xCO0lBRUEsU0FBU2UsaUJBQWlCO1FBQ3hCQyxhQUFhdEI7UUFDYk0sWUFBWSxLQUFLO1FBQ2pCRixRQUFRLEtBQUs7SUFDZjtJQUVBUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVMsWUFBWUYsT0FBTyxHQUFHO1lBQ3hCSCxtQkFBbUJ1QixXQUFXLElBQU07Z0JBQ2xDbkIsUUFBUUQsT0FBTztZQUNqQixHQUFHO1FBQ0wsT0FBTyxJQUFJRSxZQUFZRixTQUFTLEdBQUc7WUFDakNLLGVBQWUsSUFBSTtZQUNuQkYsWUFBWSxLQUFLO1lBQ2pCSjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNHO1FBQVVGO0tBQUs7SUFFbkIscUJBQ0UsOERBQUNxQjs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFXMUIsbUdBQXlCOztrQ0FDdkMsOERBQUN5Qjs7MENBQ0MsOERBQUNHOzBDQUFNZDs7Ozs7OzBDQUNQLDhEQUFDYzswQ0FBTWI7Ozs7Ozs7Ozs7OztrQ0FFVCw4REFBQ2E7a0NBQUs7Ozs7OztrQ0FDTiw4REFBQ0g7OzBDQUNDLDhEQUFDRzswQ0FBTVQ7Ozs7OzswQ0FDUCw4REFBQ1M7MENBQU1SOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJVlosNEJBQ0MsOERBQUNxQjtnQkFBT0MsUUFBUTtnQkFBQ0osV0FBVzFCLGdHQUFzQjswQkFBRTs7Ozs7cUNBSXBEOzBCQUNHTSx5QkFDQyw4REFBQ3VCO29CQUNDRyxNQUFLO29CQUNMTixXQUFXLEdBQTZCMUIsT0FBMUJBLGdHQUFzQixFQUFDLEtBQWtDLE9BQS9CQSx3R0FBOEI7b0JBQ3RFa0MsU0FBU1o7OEJBQ1Y7Ozs7O3lDQUlELDhEQUFDTztvQkFDQ0csTUFBSztvQkFDTE4sV0FBVzFCLGdHQUFzQjtvQkFDakNrQyxTQUFTYjs4QkFDVjs7Ozs7d0JBR0Y7NkJBRUo7Ozs7Ozs7QUFHUCxDQUFDO0dBNUVlbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD81NTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzc1wiO1xuXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XG4gIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xuXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDI1ICogNjApO1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcblxuICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsIFwiMFwiKS5zcGxpdChcIlwiKTtcbiAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCBcIjBcIikuc3BsaXQoXCJcIik7XG5cbiAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XG4gICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcbiAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgIHNldFRpbWUoMjUgKiA2MCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xuICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCkge1xuICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSk7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xuICAgIH1cbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2hhc0ZpbmlzaGVkID8gKFxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0+XG4gICAgICAgICAgQ2ljbG8gZW5jZXJyYWRvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkRpc2FibGVkfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYmFuZG9uYXIgY2ljbG9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdHlsZXMiLCJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0Iiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb3VudGRvd25Db250YWluZXIiLCJzcGFuIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJjb3VudGRvd25CdXR0b24iLCJ0eXBlIiwiY291bnRkb3duQnV0dG9uRGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n"));

/***/ })

});