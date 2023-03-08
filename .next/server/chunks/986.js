"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Bateman)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/images/laugh.png
/* harmony default export */ const laugh = ({"src":"/_next/static/media/laugh.8f58a13e.png","height":468,"width":533,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAnElEQVR42k2OPQvCMBRFb0XQyUFHpYKTg4igOAidpItKhy5OLuLgT++S9DPJ2jPmwuPdvHvyEnVdl1I3Y8xsGIYNfqpYDFZ1Xb/bti0APk3T7K21h6qqFmRzCRGeODwI7865MoTwxWfWmp24lVBn7/2PXtBLoGP8xJYgYwjkX33fXxWLVSnAkzAH+uMvQvSJYvHRJdtygrUQcCJJI71gfIDQaNdBAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./src/store/store.ts
var store = __webpack_require__(743);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/bateman/NavBar/batmanNavbar.tsx







const Navbar = ()=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
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
        className: "h-[10vh] z-[1] w-screen absolute top-0 backdrop-blur flex items-center text-[#e7b200]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo-wrapper fixed left-2 top-full lg:relative w-[20%] lg:w-[8%] lg:h-[100%] flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                    className: "bat-symbol w-[100%] h-[50px] lg:overflow-hidden cursor-pointer",
                    onClick: navTransition,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "bat",
                        src: laugh,
                        className: "w-full"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex text-xs lg:text-sm",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "hover:underline cursor-pointer",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "hover:underline cursor-pointer",
                            children: "Suits"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "hover:underline cursor-pointer",
                            children: "Variations"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "hover:underline cursor-pointer",
                            children: "Vechiles"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const batmanNavbar = (Navbar);

;// CONCATENATED MODULE: ./src/pages/Bateman.tsx



const Home = ()=>{
    const isTransitionActive = (0,external_react_redux_.useSelector)((state)=>state.transition.transition);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(batmanNavbar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: `hero-section  min-w-[100vw] h-[100vh] relative flex items-center justify-center ${isTransitionActive && "activate-glitch"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "character-name text-[#e7b200] left-5 z-[1] text-[50px] lg:text-[100px] font-bold absolute",
                        children: "Batman"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `glitch lg:translate-x-[25%]`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "glitch__img batman-img"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "glitch__img batman-img"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "glitch__img batman-img"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "glitch__img batman-img"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "glitch__img batman-img"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Bateman = (Home);


/***/ })

};
;