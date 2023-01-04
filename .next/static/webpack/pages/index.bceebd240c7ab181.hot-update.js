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

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": function() { return /* binding */ ChallengesContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallengesProvider(param) {\n    let { children , ...rest } = param;\n    _s();\n    var _rest_level;\n    const [level, setLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_level = rest.level) !== null && _rest_level !== void 0 ? _rest_level : 1);\n    var _rest_currentExperience;\n    const [currentExperience, setCurrentExperience] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_currentExperience = rest.currentExperience) !== null && _rest_currentExperience !== void 0 ? _rest_currentExperience : 0);\n    var _rest_challengesCompleted;\n    const [challengesCompleted, setChallengesCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_challengesCompleted = rest.challengesCompleted) !== null && _rest_challengesCompleted !== void 0 ? _rest_challengesCompleted : 0);\n    const [activeChallenge, setActiveChallenge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Notification.requestPermission();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"level\", String(level));\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"currentExperience\", String(currentExperience));\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"challengesCompleted\", String(challengesCompleted));\n    }, [\n        level,\n        currentExperience,\n        challengesCompleted\n    ]);\n    function levelUp() {\n        setLevel(level + 1);\n    }\n    function startNewChallenge() {\n        const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);\n        const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n        new Audio(\"/notification.mp3\").play();\n        if (Notification.permission === \"granted\") {\n            new Notification(\"Novo desafio\", {\n                body: \"Valendo \".concat(challenge.amount)\n            });\n        }\n    }\n    function resetChallenge() {\n        setActiveChallenge(null);\n    }\n    function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        const { amount  } = activeChallenge;\n        let finalExperience = currentExperience + amount;\n        if (finalExperience >= experienceToNextLevel) {\n            finalExperience = finalExperience - experienceToNextLevel;\n            levelUp();\n        }\n        setCurrentExperience(finalExperience);\n        setActiveChallenge(null);\n        setChallengesCompleted(challengesCompleted + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            startNewChallenge,\n            level,\n            challengesCompleted,\n            currentExperience,\n            levelUp,\n            activeChallenge,\n            resetChallenge,\n            experienceToNextLevel,\n            completeChallenge\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/carestiniw/Workspace/te-meche/src/contexts/ChallengesContext.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(ChallengesProvider, \"rRgkk49nHdmxiilpCV+wZetkgvA=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXNFO0FBQ3RDO0FBQ2U7QUEwQnhDLE1BQU1LLGtDQUFvQkwsb0RBQWFBLENBQUMsQ0FBQyxHQUE0QjtBQUVyRSxTQUFTTSxtQkFBbUIsS0FHVixFQUFFO1FBSFEsRUFDakNDLFNBQVEsRUFDUixHQUFHQyxNQUNvQixHQUhVOztRQUlFQTtJQUFuQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUNNLENBQUFBLGNBQUFBLEtBQUtDLEtBQUssY0FBVkQseUJBQUFBLGNBQWMsQ0FBQztRQUVoREE7SUFERixNQUFNLENBQUNHLG1CQUFtQkMscUJBQXFCLEdBQUdWLCtDQUFRQSxDQUN4RE0sQ0FBQUEsMEJBQUFBLEtBQUtHLGlCQUFpQixjQUF0QkgscUNBQUFBLDBCQUEwQixDQUFDO1FBRzNCQTtJQURGLE1BQU0sQ0FBQ0sscUJBQXFCQyx1QkFBdUIsR0FBR1osK0NBQVFBLENBQzVETSxDQUFBQSw0QkFBQUEsS0FBS0ssbUJBQW1CLGNBQXhCTCx1Q0FBQUEsNEJBQTRCLENBQUM7SUFHL0IsTUFBTSxDQUFDTyxpQkFBaUJDLG1CQUFtQixHQUFHZCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNELE1BQU1lLHdCQUF3QkMsS0FBS0MsR0FBRyxDQUFDLENBQUNWLFFBQVEsS0FBSyxHQUFHO0lBRXhEUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RtQixhQUFhQyxpQkFBaUI7SUFDaEMsR0FBRyxFQUFFO0lBRUxwQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RFLHFEQUFXLENBQUMsU0FBU29CLE9BQU9kO1FBQzVCTixxREFBVyxDQUFDLHFCQUFxQm9CLE9BQU9aO1FBQ3hDUixxREFBVyxDQUFDLHVCQUF1Qm9CLE9BQU9WO0lBQzVDLEdBQUc7UUFBQ0o7UUFBT0U7UUFBbUJFO0tBQW9CO0lBRWxELFNBQVNXLFVBQVU7UUFDakJkLFNBQVNELFFBQVE7SUFDbkI7SUFFQSxTQUFTZ0Isb0JBQW9CO1FBQzNCLE1BQU1DLHVCQUF1QlIsS0FBS1MsS0FBSyxDQUFDVCxLQUFLVSxNQUFNLEtBQUt4QixvREFBaUI7UUFDekUsTUFBTTBCLFlBQVkxQiw2Q0FBVSxDQUFDc0IscUJBQXFCO1FBRWxEVixtQkFBbUJjO1FBRW5CLElBQUlDLE1BQU0scUJBQXFCQyxJQUFJO1FBRW5DLElBQUlaLGFBQWFhLFVBQVUsS0FBSyxXQUFXO1lBQ3pDLElBQUliLGFBQWEsZ0JBQWdCO2dCQUMvQmMsTUFBTSxXQUE0QixPQUFqQkosVUFBVUssTUFBTTtZQUNuQztRQUNGLENBQUM7SUFDSDtJQUVBLFNBQVNDLGlCQUFpQjtRQUN4QnBCLG1CQUFtQixJQUFJO0lBQ3pCO0lBRUEsU0FBU3FCLG9CQUFvQjtRQUMzQixJQUFJLENBQUN0QixpQkFBaUI7WUFDcEI7UUFDRixDQUFDO1FBRUQsTUFBTSxFQUFFb0IsT0FBTSxFQUFFLEdBQUdwQjtRQUVuQixJQUFJdUIsa0JBQWtCM0Isb0JBQW9Cd0I7UUFFMUMsSUFBSUcsbUJBQW1CckIsdUJBQXVCO1lBQzVDcUIsa0JBQWtCQSxrQkFBa0JyQjtZQUNwQ087UUFDRixDQUFDO1FBRURaLHFCQUFxQjBCO1FBQ3JCdEIsbUJBQW1CLElBQUk7UUFDdkJGLHVCQUF1QkQsc0JBQXNCO0lBQy9DO0lBRUEscUJBQ0UsOERBQUNSLGtCQUFrQmtDLFFBQVE7UUFDekJDLE9BQU87WUFDTGY7WUFDQWhCO1lBQ0FJO1lBQ0FGO1lBQ0FhO1lBQ0FUO1lBQ0FxQjtZQUNBbkI7WUFDQW9CO1FBQ0Y7a0JBRUM5Qjs7Ozs7O0FBR1AsQ0FBQztHQXJGZUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9hNTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcbiAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBsZXZlbDogbnVtYmVyO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG4gIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGxldmVsOiBudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7XG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0XG59OiBDaGFsbGVuZ2VQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShcbiAgICByZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDBcbiAgKTtcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoXG4gICAgcmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDBcbiAgKTtcblxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDb29raWVzLnNldChcImxldmVsXCIsIFN0cmluZyhsZXZlbCkpO1xuICAgIENvb2tpZXMuc2V0KFwiY3VycmVudEV4cGVyaWVuY2VcIiwgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XG4gICAgQ29va2llcy5zZXQoXCJjaGFsbGVuZ2VzQ29tcGxldGVkXCIsIFN0cmluZyhjaGFsbGVuZ2VzQ29tcGxldGVkKSk7XG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcblxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xuICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcblxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xuXG4gICAgbmV3IEF1ZGlvKFwiL25vdGlmaWNhdGlvbi5tcDNcIikucGxheSgpO1xuXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpb1wiLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xuXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgIGxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcbiAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXG4gICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxuICAgICAgICBsZXZlbFVwLFxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb29raWVzIiwiY2hhbGxlbmdlcyIsIkNoYWxsZW5nZXNDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0IiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n"));

/***/ })

});