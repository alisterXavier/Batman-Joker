"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 9696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _hooks_widthHook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Header = ()=>{
    const mobileSize = (0,_hooks_widthHook__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const batmanTitleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [elementTop, setElementTop] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [clientHeight, setClientHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { scrollY  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)();
    const initial = elementTop - clientHeight;
    const yRange = mobileSize && mobileSize <= 1024 ? [
        -200,
        0
    ] : [
        0,
        0
    ];
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
    const finalY = elementTop + yRange[0];
    const finalX = elementTop + xRange[0];
    const finalOpacity = elementTop + opacityRange[0];
    const yTransform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, [
        initial,
        finalY
    ], yRange);
    const xTransform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, [
        initial,
        finalX
    ], xRange);
    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, [
        initial,
        finalOpacity
    ], opacityRange);
    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(yTransform, {
        stiffness: 200,
        damping: 90
    });
    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(xTransform, {
        stiffness: 200,
        damping: 90
    });
    const isTransitionActive = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.transition.jokerTransition);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{
        const element = batmanTitleRef.current;
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
        batmanTitleRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: `hero-section min-w-[100vw] h-[100vh] bg-black relative flex items-center justify-center ${isTransitionActive && "activate-glitch"} `,
        "data-hero": true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {
                className: "character-name text-[#e7b200] left-5 z-[1] text-[50px] lg:text-[100px] font-bold absolute",
                ref: batmanTitleRef,
                style: {
                    y,
                    x
                },
                children: "Batman"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                className: `glitch lg:translate-x-[25%]`,
                style: {
                    opacity
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "glitch__img batman-img"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "glitch__img batman-img"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "glitch__img batman-img"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "glitch__img batman-img"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "glitch__img batman-img"
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

/***/ 158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Variants = ()=>{
    const sliderList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const parallex = (e)=>{
        const { pageX , pageY  } = e;
        const x = (pageX - 1000) * -1 / 200;
        const y = (pageY - 300) * -1 / 200;
        sliderList.current?.map((item)=>{
            item.style.setProperty("--x", `${x}px`);
            item.style.setProperty("--y", `${y}px`);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "suits-wrapper w-screen h-screen bg-black text-[#e7b200] flex items-center justify-center relative",
        "data-variants": true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
            className: "w-full h-full",
            pagination: {
                clickable: true,
                enabled: true
            },
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
            ],
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    className: "lg:w-full lg:h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center items-center w-full h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "img-container relative w-[80%] h-[20%] lg:w-[70%] lg:h-[70%] flex justify-center",
                            onMouseMove: parallex,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "absolute left-0 top-0 w-full h-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                alt: "bg",
                                                src: "/assets/images/batman_variants/original/bg.png",
                                                quality: 100,
                                                className: "absolute",
                                                fill: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "lg:text-[60px] text-sm text-[#e7b200] rotate-[-54deg] absolute top-[40%]",
                                                children: "THE BATMAN"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "character-img relative w-[85%] h-[100%] translate-x-[9%]",
                                        ref: (e)=>{
                                            sliderList.current[0] = e;
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            alt: "variant",
                                            src: "/assets/images/batman_variants/original/variant.png",
                                            quality: 100,
                                            className: "bat",
                                            fill: true
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    className: "w-full h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center items-center w-full h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "img-container relative w-[80%] h-[20%] lg:w-[70%] lg:h-[70%]",
                            onMouseMove: parallex,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                alt: "bg",
                                                src: "/assets/images/batman_variants/beyond/bg.png",
                                                quality: 100,
                                                className: "absolute",
                                                fill: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-lg lg:text-[60px] text-red-600 absolute top-[5%] left-[5%]",
                                                children: "BATMAN"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "character-img relative w-full h-full",
                                        ref: (e)=>{
                                            sliderList.current[1] = e;
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                alt: "variant",
                                                src: "/assets/images/batman_variants/beyond/variant.png",
                                                quality: 100,
                                                className: "beyond-suit",
                                                fill: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-lg lg:text-[60px] text-red-600 absolute top-[55%] right-[10%]",
                                                children: "BEYOND"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    className: "w-full h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center items-center w-full h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "img-container relative w-[80%] h-[20%] lg:w-[70%] lg:h-[70%] flex justify-center",
                            onMouseMove: parallex,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "absolute left-0 top-0 w-full h-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                alt: "bg",
                                                src: "/assets/images/batman_variants/wholaughs/bg.png",
                                                quality: 100,
                                                className: "absolute",
                                                fill: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-sm lg:text-[60px] text-[#506877] absolute top-[5%] left-[10%]",
                                                children: "THE BATMAN"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "character-img relative translate-x-[-10px] w-[75%] h-[100%]",
                                        ref: (e)=>{
                                            sliderList.current[2] = e;
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                alt: "variant",
                                                src: "/assets/images/batman_variants/wholaughs/variant.png",
                                                quality: 100,
                                                className: "bat",
                                                fill: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-sm lg:text-[60px] text-[#630e0f] absolute right-[10%] top-[70%] lg:right-[-100px]",
                                                children: "Who Laughs"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Variants);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Catch = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "quote relative z-[1] h-[300vh] text-2xl lg:text-7xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-0 z-[1] overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed z-[1] overflow-hidden w-[65%]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-[#e7b200]",
                        children: "I am vengeance."
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "quote-container w-screen h-screen bg-[#e7b200] flex items-center justify-center absolute top-[100vh] z-[2] overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed z-[2] top-[50%] overflow-hidden translate-y-[-49%] w-[65%]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-black",
                        children: "I am the night."
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-[200vh] z-[3] overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed z-[3] top-[50%] overflow-hidden translate-y-[-49%] text-center w-[800px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-[#e7b200]",
                        children: "I am"
                    })
                })
            })
        ]
    });
};
{
/* He's the hero Gotham deserves, but not the one it needs right now. 
  We all wear masks. */ }/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catch);


/***/ }),

/***/ 2655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
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


/***/ }),

/***/ 7555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_bateman_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9696);
/* harmony import */ var _components_bateman_Variants_variants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158);
/* harmony import */ var _components_bateman_catchphrase_Catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_bateman_Header_Header__WEBPACK_IMPORTED_MODULE_1__, _components_bateman_Variants_variants__WEBPACK_IMPORTED_MODULE_2__]);
([_components_bateman_Header_Header__WEBPACK_IMPORTED_MODULE_1__, _components_bateman_Variants_variants__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Home = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "batman",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bateman_catchphrase_Catch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bateman_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bateman_Variants_variants__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;