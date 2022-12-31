"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": function() { return /* binding */ ChallengesContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallengesProvider(param) {\n    let { children  } = param;\n    _s();\n    const [level, setLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [currentExperience, setCurrentExperience] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [challengesCompleted, setChallengesCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeChallenge, setActiveChallenge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    function levelUp() {\n        setLevel(level + 1);\n    }\n    function startNewChallenge() {\n        const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    }\n    function resetChallenge() {\n        setActiveChallenge(null);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            startNewChallenge,\n            level,\n            challengesCompleted,\n            currentExperience,\n            levelUp,\n            activeChallenge,\n            resetChallenge,\n            experienceToNextLevel\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/carestiniw/Workspace/te-meche/src/contexts/ChallengesContext.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(ChallengesProvider, \"IDVxXaKVFd+/4zWgrdFssD4qVSE=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkQ7QUFFWjtBQXVCeEMsTUFBTUcsa0NBQW9CSCxvREFBYUEsQ0FBQyxDQUFDLEdBQTRCO0FBRXJFLFNBQVNJLG1CQUFtQixLQUFvQyxFQUFFO1FBQXRDLEVBQUVDLFNBQVEsRUFBMEIsR0FBcEM7O0lBQ2pDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLG1CQUFtQkMscUJBQXFCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ1MscUJBQXFCQyx1QkFBdUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0QsTUFBTSxDQUFDVyxpQkFBaUJDLG1CQUFtQixHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNELE1BQU1hLHdCQUF3QkMsS0FBS0MsR0FBRyxDQUFDLENBQUNWLFFBQVEsS0FBSyxHQUFHO0lBRXhELFNBQVNXLFVBQVU7UUFDakJWLFNBQVNELFFBQVE7SUFDbkI7SUFFQSxTQUFTWSxvQkFBb0I7UUFDM0IsTUFBTUMsdUJBQXVCSixLQUFLSyxLQUFLLENBQUNMLEtBQUtNLE1BQU0sS0FBS25CLG9EQUFpQjtRQUN6RSxNQUFNcUIsWUFBWXJCLDZDQUFVLENBQUNpQixxQkFBcUI7UUFFbEROLG1CQUFtQlU7SUFDckI7SUFFQSxTQUFTQyxpQkFBaUI7UUFDeEJYLG1CQUFtQixJQUFJO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNWLGtCQUFrQnNCLFFBQVE7UUFDekJDLE9BQU87WUFDTFI7WUFDQVo7WUFDQUk7WUFDQUY7WUFDQVM7WUFDQUw7WUFDQVk7WUFDQVY7UUFDRjtrQkFFQ1Q7Ozs7OztBQUdQLENBQUM7R0F4Q2VEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dC50c3g/YTU5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIjtcblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6IFwiYm9keVwiIHwgXCJleWVcIjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuIH06IENoYWxsZW5nZVByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwgYXMgQ2hhbGxlbmdlKTtcblxuICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xuXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcbiAgICAgICAgbGV2ZWxVcCxcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJjaGFsbGVuZ2VzIiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n"));

/***/ })

});