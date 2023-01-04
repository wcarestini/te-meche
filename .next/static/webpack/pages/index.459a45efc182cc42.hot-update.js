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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": function() { return /* binding */ ChallengesContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ \"./src/components/LevelUpModal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallengesProvider(param) {\n    let { children , ...rest } = param;\n    _s();\n    var _rest_level;\n    const [level, setLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_level = rest.level) !== null && _rest_level !== void 0 ? _rest_level : 1);\n    var _rest_currentExperience;\n    const [currentExperience, setCurrentExperience] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_currentExperience = rest.currentExperience) !== null && _rest_currentExperience !== void 0 ? _rest_currentExperience : 0);\n    var _rest_challengesCompleted;\n    const [challengesCompleted, setChallengesCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_challengesCompleted = rest.challengesCompleted) !== null && _rest_challengesCompleted !== void 0 ? _rest_challengesCompleted : 0);\n    const [activeChallenge, setActiveChallenge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Notification.requestPermission();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"level\", String(level));\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"currentExperience\", String(currentExperience));\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"challengesCompleted\", String(challengesCompleted));\n    }, [\n        level,\n        currentExperience,\n        challengesCompleted\n    ]);\n    function levelUp() {\n        setLevel(level + 1);\n        setIsLevelUpModalOpen(true);\n    }\n    function closeLevelUpModal() {\n        setIsLevelUpModalOpen(false);\n    }\n    function startNewChallenge() {\n        const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);\n        const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n        new Audio(\"/notification.mp3\").play();\n        if (Notification.permission === \"granted\") {\n            new Notification(\"Novo desafio\", {\n                body: \"Valendo \".concat(challenge.amount)\n            });\n        }\n    }\n    function resetChallenge() {\n        setActiveChallenge(null);\n    }\n    function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        const { amount  } = activeChallenge;\n        let finalExperience = currentExperience + amount;\n        if (finalExperience >= experienceToNextLevel) {\n            finalExperience = finalExperience - experienceToNextLevel;\n            levelUp();\n        }\n        setCurrentExperience(finalExperience);\n        setActiveChallenge(null);\n        setChallengesCompleted(challengesCompleted + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            startNewChallenge,\n            level,\n            challengesCompleted,\n            currentExperience,\n            levelUp,\n            activeChallenge,\n            resetChallenge,\n            experienceToNextLevel,\n            completeChallenge\n        },\n        children: [\n            children,\n            isLevelUpModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__.LevelUpModal, {}, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/contexts/ChallengesContext.tsx\",\n                lineNumber: 121,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/te-meche/src/contexts/ChallengesContext.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n_s(ChallengesProvider, \"UqHVByiPLb7kVaLDO0z8bDhE3KM=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4P2E1OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tIFwiLi4vLi4vY2hhbGxlbmdlcy5qc29uXCI7XG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWxcIjtcblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6IFwiYm9keVwiIHwgXCJleWVcIjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xuICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZVByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBsZXZlbDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG59XG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgLi4ucmVzdFxufTogQ2hhbGxlbmdlUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XG4gIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoXG4gICAgcmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwXG4gICk7XG4gIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKFxuICAgIHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwXG4gICk7XG5cbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ29va2llcy5zZXQoXCJsZXZlbFwiLCBTdHJpbmcobGV2ZWwpKTtcbiAgICBDb29raWVzLnNldChcImN1cnJlbnRFeHBlcmllbmNlXCIsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xuICAgIENvb2tpZXMuc2V0KFwiY2hhbGxlbmdlc0NvbXBsZXRlZFwiLCBTdHJpbmcoY2hhbGxlbmdlc0NvbXBsZXRlZCkpO1xuICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkXSk7XG5cbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICAgIHNldElzTGV2ZWxVcE1vZGFsT3Blbih0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xuICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcblxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xuXG4gICAgbmV3IEF1ZGlvKFwiL25vdGlmaWNhdGlvbi5tcDNcIikucGxheSgpO1xuXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpb1wiLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xuXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgIGxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcbiAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXG4gICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxuICAgICAgICBsZXZlbFVwLFxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7aXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwgLz59XG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb29raWVzIiwiY2hhbGxlbmdlcyIsIkxldmVsVXBNb2RhbCIsIkNoYWxsZW5nZXNDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0IiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImlzTGV2ZWxVcE1vZGFsT3BlbiIsInNldElzTGV2ZWxVcE1vZGFsT3BlbiIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJjbG9zZUxldmVsVXBNb2RhbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n"));

/***/ })

});