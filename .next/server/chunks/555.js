exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const Header = ()=>{
    const isTransitionActive = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.transition.transition);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: `hero-section  min-w-[100vw] h-[100vh] relative flex items-center justify-center ${isTransitionActive && "activate-glitch"}`,
        "data-hero": true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "character-name text-[#e7b200] left-5 z-[1] text-[50px] lg:text-[100px] font-bold absolute",
                children: "Batman"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `glitch lg:translate-x-[25%]`,
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


/***/ }),

/***/ 824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ batmanNavbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/images/laugh.png
/* harmony default export */ const laugh = ({"src":"/_next/static/media/laugh.8f58a13e.png","height":468,"width":533,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAnElEQVR42k2OPQvCMBRFb0XQyUFHpYKTg4igOAidpItKhy5OLuLgT++S9DPJ2jPmwuPdvHvyEnVdl1I3Y8xsGIYNfqpYDFZ1Xb/bti0APk3T7K21h6qqFmRzCRGeODwI7865MoTwxWfWmp24lVBn7/2PXtBLoGP8xJYgYwjkX33fXxWLVSnAkzAH+uMvQvSJYvHRJdtygrUQcCJJI71gfIDQaNdBAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./src/store/store.ts
var store = __webpack_require__(743);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/bateman/NavBar/batmanNavbar.tsx







const Navbar = ()=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleNavClick = (e)=>{
        document.querySelector(`[data-${e.currentTarget.id}]`)?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const navTransition = ()=>{
        dispatch((0,store/* ActivateTransition */.st)(true));
        setTimeout(()=>{
            router.push("/Joker");
        }, 2000);
    };
    (0,external_react_.useEffect)(()=>{
        dispatch((0,store/* ActivateTransition */.st)(false));
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "h-[10vh] z-[2] w-screen fixed top-0 backdrop-blur flex items-center text-[#e7b200] justify-center lg:justify-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo-wrapper fixed left-2 top-full lg:top-0 lg:left-0 lg:relative w-[20%] lg:w-[8%] lg:h-[100%] flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                    className: "bat-symbol w-[100%] lg:overflow-hidden cursor-pointer",
                    onClick: navTransition,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "bat",
                        src: laugh,
                        className: "w-full"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex text-xs lg:text-2xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-3 lg:p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "hover:underline cursor-pointer",
                            id: "hero",
                            onClick: (e)=>handleNavClick(e),
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-3 lg:p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "hover:underline cursor-pointer",
                            id: "variants",
                            onClick: (e)=>handleNavClick(e),
                            children: "Variants"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-3 lg:p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "hover:underline cursor-pointer",
                            id: "vechiles",
                            onClick: (e)=>handleNavClick(e),
                            children: "Vehicles"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const batmanNavbar = (Navbar);


/***/ }),

/***/ 158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(675);
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
        className: "suits-wrapper w-screen h-screen text-[#e7b200] flex items-center justify-center",
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
                                                src: "/assets/images/suits/original/bg.png",
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
                                            alt: "bg",
                                            src: "/assets/images/suits/original/variant.png",
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
                                                src: "/assets/images/suits/beyond/bg.png",
                                                quality: 100,
                                                className: "absolute ",
                                                fill: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-lg lg:text-[100px] text-red-600 absolute top-[5%] left-[5%]",
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
                                                alt: "bg",
                                                src: "/assets/images/suits/beyond/variant.png",
                                                quality: 100,
                                                className: "beyond-suit",
                                                fill: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-lg lg:text-[100px] text-red-600 absolute top-[55%] right-[10%]",
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
                                                src: "/assets/images/suits/wholaughs/bg.png",
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
                                                alt: "bg",
                                                src: "/assets/images/suits/wholaughs/variant.png",
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

/***/ 555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_bateman_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(696);
/* harmony import */ var _components_bateman_NavBar_batmanNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(824);
/* harmony import */ var _components_bateman_Variants_variants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_bateman_Variants_variants__WEBPACK_IMPORTED_MODULE_3__]);
_components_bateman_Variants_variants__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Home = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bateman_NavBar_batmanNavbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bateman_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bateman_Variants_variants__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 996:
/***/ (() => {



/***/ }),

/***/ 722:
/***/ (() => {



/***/ })

};
;