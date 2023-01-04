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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": function() { return /* binding */ ChallengesContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ \"./src/components/LevelUpModal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallengesProvider(param) {\n    let { children , ...rest } = param;\n    _s();\n    var _rest_level;\n    const [level, setLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_level = rest.level) !== null && _rest_level !== void 0 ? _rest_level : 1);\n    var _rest_currentExperience;\n    const [currentExperience, setCurrentExperience] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_currentExperience = rest.currentExperience) !== null && _rest_currentExperience !== void 0 ? _rest_currentExperience : 0);\n    var _rest_challengesCompleted;\n    const [challengesCompleted, setChallengesCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_challengesCompleted = rest.challengesCompleted) !== null && _rest_challengesCompleted !== void 0 ? _rest_challengesCompleted : 0);\n    const [activeChallenge, setActiveChallenge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Notification.requestPermission();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"level\", String(level));\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"currentExperience\", String(currentExperience));\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"challengesCompleted\", String(challengesCompleted));\n    }, [\n        level,\n        currentExperience,\n        challengesCompleted\n    ]);\n    function levelUp() {\n        setLevel(level + 1);\n        setIsLevelUpModalOpen(true);\n    }\n    function closeLevelUpModal() {\n        setIsLevelUpModalOpen(false);\n    }\n    function startNewChallenge() {\n        const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);\n        const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n        new Audio(\"/notification.mp3\").play();\n        if (Notification.permission === \"granted\") {\n            new Notification(\"Novo desafio\", {\n                body: \"Valendo \".concat(challenge.amount)\n            });\n        }\n    }\n    function resetChallenge() {\n        setActiveChallenge(undefined);\n    }\n    function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        const { amount  } = activeChallenge;\n        let finalExperience = currentExperience + amount;\n        if (finalExperience >= experienceToNextLevel) {\n            finalExperience = finalExperience - experienceToNextLevel;\n            levelUp();\n        }\n        setCurrentExperience(finalExperience);\n        setActiveChallenge(undefined);\n        setChallengesCompleted(challengesCompleted + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            startNewChallenge,\n            level,\n            challengesCompleted,\n            currentExperience,\n            levelUp,\n            activeChallenge,\n            resetChallenge,\n            experienceToNextLevel,\n            completeChallenge,\n            closeLevelUpModal\n        },\n        children: [\n            children,\n            isLevelUpModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__.LevelUpModal, {}, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/te-meche/src/contexts/ChallengesContext.tsx\",\n                lineNumber: 123,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/te-meche/src/contexts/ChallengesContext.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(ChallengesProvider, \"ni6DB4NzrEm99qxqi0Cidhdt04M=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9hNTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsXCI7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICB0eXBlOiBcImJvZHlcIiB8IFwiZXllXCI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGxldmVsOiBudW1iZXI7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGxldmVsOiBudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7XG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0XG59OiBDaGFsbGVuZ2VQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShcbiAgICByZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDBcbiAgKTtcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoXG4gICAgcmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDBcbiAgKTtcblxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGU8Q2hhbGxlbmdlPigpO1xuICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ29va2llcy5zZXQoXCJsZXZlbFwiLCBTdHJpbmcobGV2ZWwpKTtcbiAgICBDb29raWVzLnNldChcImN1cnJlbnRFeHBlcmllbmNlXCIsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xuICAgIENvb2tpZXMuc2V0KFwiY2hhbGxlbmdlc0NvbXBsZXRlZFwiLCBTdHJpbmcoY2hhbGxlbmdlc0NvbXBsZXRlZCkpO1xuICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkXSk7XG5cbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICAgIHNldElzTGV2ZWxVcE1vZGFsT3Blbih0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xuICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcbiAgICBjb25zdCBjaGFsbGVuZ2U6IENoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdIGFzIENoYWxsZW5nZTtcblxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xuXG4gICAgbmV3IEF1ZGlvKFwiL25vdGlmaWNhdGlvbi5tcDNcIikucGxheSgpO1xuXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpb1wiLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKHVuZGVmaW5lZCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcbiAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XG5cbiAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XG5cbiAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xuICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xuICAgICAgbGV2ZWxVcCgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKHVuZGVmaW5lZCk7XG4gICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcbiAgICAgICAgbGV2ZWxVcCxcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcbiAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWwsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtpc0xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVXBNb2RhbCAvPn1cbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvb2tpZXMiLCJjaGFsbGVuZ2VzIiwiTGV2ZWxVcE1vZGFsIiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwic2V0IiwiU3RyaW5nIiwibGV2ZWxVcCIsImNsb3NlTGV2ZWxVcE1vZGFsIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsInVuZGVmaW5lZCIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n"));

/***/ })

});