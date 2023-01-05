(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 387:
/***/ ((module) => {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer___gnnr",
	"challengeNotActive": "ChallengeBox_challengeNotActive__CBcqF",
	"challengeActive": "ChallengeBox_challengeActive___i_Ew",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__T_kEK",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__wlRYM"
};


/***/ }),

/***/ 118:
/***/ ((module) => {

// Exports
module.exports = {
	"completedChallengesContainer": "CompletedChallenges_completedChallengesContainer__WQf24"
};


/***/ }),

/***/ 477:
/***/ ((module) => {

// Exports
module.exports = {
	"countdownContainer": "Countdown_countdownContainer__2AmIm",
	"countdownButton": "Countdown_countdownButton__Dv6Na",
	"countdownButtonDisabled": "Countdown_countdownButtonDisabled__8MJJg"
};


/***/ }),

/***/ 452:
/***/ ((module) => {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__bdk1M",
	"currentExperience": "ExperienceBar_currentExperience__gSLAF"
};


/***/ }),

/***/ 186:
/***/ ((module) => {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay___2WqV",
	"container": "LevelUpModal_container__IrQN2"
};


/***/ }),

/***/ 595:
/***/ ((module) => {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__pSJlF"
};


/***/ }),

/***/ 712:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__vpUDj",
	"input": "Home_input__Y_NRT"
};


/***/ }),

/***/ 690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ChallengeBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(387);
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(777);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__, _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__]);
([_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__, _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ChallengeBox() {
    const { activeChallenge , resetChallenge , completeChallenge  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__/* .ChallengesContext */ .w);
    const { resetCountdown  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__/* .CountdownContext */ .u);
    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }
    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeBoxContainer),
        children: activeChallenge ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeActive),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    children: [
                        "Ganhe ",
                        activeChallenge.amount,
                        " xp"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `icons/${activeChallenge.type}.svg`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Novo desafio "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: activeChallenge.description
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeFailedButton),
                            onClick: handleChallengeFailed,
                            children: "Falhei"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeSucceededButton),
                            onClick: handleChallengeSucceeded,
                            children: "Completei"
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeNotActive),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    children: "Finalize um ciclo para receber um desafio"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "icons/level-up.svg",
                            alt: "Level up"
                        }),
                        "Avance de level, completando desafios."
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ CompletedChallenges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function CompletedChallenges() {
    const { challengesCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__/* .ChallengesContext */ .w);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default().completedChallengesContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Desafios completos"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: challengesCompleted
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Countdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(914);
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(477);
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Countdown() {
    const { minutes , seconds , hasFinished , isActive , resetCountdown , startCountdown  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__/* .CountdownContext */ .u);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: minuteLeft
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: minuteRight
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: ":"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: secondLeft
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: secondRight
                            })
                        ]
                    })
                ]
            }),
            hasFinished ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: true,
                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton),
                children: "Ciclo encerrado"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: isActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: `${(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton)} ${(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButtonDisabled)}`,
                    onClick: resetCountdown,
                    children: "Abandonar ciclo"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton),
                    onClick: startCountdown,
                    children: "Iniciar um ciclo"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ExperienceBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(452);
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ExperienceBar() {
    const { currentExperience , experienceToNextLevel  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__/* .ChallengesContext */ .w);
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().experienceBar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "0 xp"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: `${percentToNextLevel}%`
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().currentExperience),
                        style: {
                            left: `${percentToNextLevel}%`
                        },
                        children: [
                            currentExperience,
                            " xp"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    experienceToNextLevel,
                    " xp"
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 727:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ LevelUpModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(777);
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function LevelUpModal() {
    const { level , closeLevelUpModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__/* .ChallengesContext */ .w);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                    children: level
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    children: "Parab\xe9ns"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Alcan\xe7ou um novo level"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    onClick: closeLevelUpModal,
                    children: "X"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(777);
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(595);
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Profile() {
    const { level  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__/* .ChallengesContext */ .w);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "https://avatars.githubusercontent.com/u/48692830?v=4",
                alt: "MInha imagem"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "Meu nome"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "icons/level-up.svg",
                                alt: "Level"
                            }),
                            "Level ",
                            level
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ChallengesProvider),
/* harmony export */   "w": () => (/* binding */ ChallengesContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(915);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(727);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function ChallengesProvider({ children , ...rest }) {
    const [level, setLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        Notification.requestPermission();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("level", String(level));
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("currentExperience", String(currentExperience));
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("challengesCompleted", String(challengesCompleted));
    }, [
        level,
        currentExperience,
        challengesCompleted
    ]);
    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }
    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
    }
    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);
        const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];
        setActiveChallenge(challenge);
        new Audio("/notification.mp3").play();
        if (Notification.permission === "granted") {
            new Notification("Novo desafio", {
                body: `Valendo ${challenge.amount}`
            });
        }
    }
    function resetChallenge() {
        setActiveChallenge(undefined);
    }
    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }
        const { amount  } = activeChallenge;
        let finalExperience = currentExperience + amount;
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
        setCurrentExperience(finalExperience);
        setActiveChallenge(undefined);
        setChallengesCompleted(challengesCompleted + 1);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChallengesContext.Provider, {
        value: {
            startNewChallenge,
            level,
            challengesCompleted,
            currentExperience,
            levelUp,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge,
            closeLevelUpModal
        },
        children: [
            children,
            isLevelUpModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__/* .LevelUpModal */ .g, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ CountdownProvider),
/* harmony export */   "u": () => (/* binding */ CountdownContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(777);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(712);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _ChallengesContext__WEBPACK_IMPORTED_MODULE_3__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _ChallengesContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const CountdownContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
let countdownTimeout;
function CountdownProvider({ children , userTime  }) {
    const { startNewChallenge  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__/* .ChallengesContext */ .w);
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((userTime || 25) * 60);
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [hasFinished, setHasFinished] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    function startCountdown() {
        setIsActive(true);
    }
    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.05 * 60);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(()=>{
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [
        isActive,
        time
    ]);
    function handleChange({ key , target  }) {
        if (key === "Enter") {
            setTime(target.value * 60);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("time", String(time));
    }, [
        time
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CountdownContext.Provider, {
        value: {
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
                type: "number",
                onKeyDown: handleChange
            }),
            children
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(735);
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(355);
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(627);
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608);
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(690);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(712);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(914);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__, _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__, _components_Profile__WEBPACK_IMPORTED_MODULE_4__, _components_Countdown__WEBPACK_IMPORTED_MODULE_5__, _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__, _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_7__, _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_8__]);
([_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__, _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__, _components_Profile__WEBPACK_IMPORTED_MODULE_4__, _components_Countdown__WEBPACK_IMPORTED_MODULE_5__, _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__, _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_7__, _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Home({ level , currentExperience , challengesCompleted , time  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_8__/* .ChallengesProvider */ .q, {
        level: level,
        currentExperience: currentExperience,
        challengesCompleted: challengesCompleted,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "In\xedcio | te-meche"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__/* .ExperienceBar */ .E, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_7__/* .CountdownProvider */ .M, {
                        userTime: time,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_4__/* .Profile */ .N, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__/* .CompletedChallenges */ .h, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Countdown__WEBPACK_IMPORTED_MODULE_5__/* .Countdown */ .I, {})
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__/* .ChallengeBox */ .u, {})
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async (context)=>{
    const { level , currentExperience , challengesCompleted , time  } = context.req.cookies;
    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
            time: Number(time)
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 207:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"type":"body","description":"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.","amount":80},{"type":"body","description":"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.","amount":60},{"type":"body","description":"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.","amount":70},{"type":"body","description":"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.","amount":60},{"type":"body","description":"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.","amount":100},{"type":"body","description":"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.","amount":80},{"type":"body","description":"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.","amount":50},{"type":"body","description":"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.","amount":80},{"type":"eye","description":"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.","amount":90},{"type":"eye","description":"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.","amount":140},{"type":"eye","description":"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.","amount":70},{"type":"body","description":"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.","amount":90}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(970));
module.exports = __webpack_exports__;

})();