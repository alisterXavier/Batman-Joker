"use strict";
exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(466);
/* harmony import */ var _hooks_widthHook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Header = ({ characterName , secondName  })=>{
    const mobileSize = (0,_hooks_widthHook__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const TitleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [elementTop, setElementTop] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [clientHeight, setClientHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { scrollY  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)();
    const initial = elementTop - clientHeight;
    const xRange = mobileSize && mobileSize <= 1024 ? [
        0,
        0
    ] : [
        300,
        0
    ];
    const opacityRange = [
        0,
        1
    ];
    const finalX = elementTop + xRange[0];
    const finalOpacity = elementTop + opacityRange[0];
    const xTransform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, [
        initial,
        finalX
    ], xRange);
    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, [
        initial,
        finalOpacity
    ], opacityRange);
    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(xTransform, {
        stiffness: 200,
        damping: 90
    });
    const isTransitionActive = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.transition.jokerTransition);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{
        const element = TitleRef.current;
        const onResize = ()=>{
            if (element) {
                setElementTop(element.getBoundingClientRect().top - 500 + window.scrollY || window.pageYOffset);
                setClientHeight(window.innerHeight);
            }
        };
        onResize();
        window.addEventListener("resize", onResize);
        return ()=>window.removeEventListener("resize", onResize);
    }, [
        TitleRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: `hero-section min-w-[100vw] h-[100vh] bg-black relative flex items-center justify-center ${isTransitionActive && "activate-glitch"} `,
        "data-hero": true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {
                className: `${characterName === "harley" ? " lg:text-[#781312] text-white left-[10%] text-[70px] lg:text-[110px] capitalize" : "left-5 text-[50px] lg:text-[100px]"} z-[1] font-bold absolute`,
                ref: TitleRef,
                style: {
                    x
                },
                children: characterName
            }),
            secondName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {
                className: "character-name text-[#781312] lg:text-white z-[1] top-[50%] left-[40%] lg:left-[20%]    text-[70px] lg:text-[110px] font-bold absolute",
                style: {
                    x
                },
                children: secondName
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                className: `glitch lg:translate-x-[25%]`,
                style: {
                    opacity
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `glitch__img ${characterName.toLowerCase()}-img`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `glitch__img ${characterName.toLowerCase()}-img`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `glitch__img ${characterName.toLowerCase()}-img`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `glitch__img ${characterName.toLowerCase()}-img`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `glitch__img ${characterName.toLowerCase()}-img`
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWidth = ()=>{
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const handleResize = ()=>{
        setState(window.innerWidth);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWidth);


/***/ })

};
;