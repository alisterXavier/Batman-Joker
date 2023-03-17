exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Transition": () => (/* binding */ Transition),
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./src/styles/styles.sass
var styles = __webpack_require__(267);
// EXTERNAL MODULE: ./src/styles/glitch.css
var glitch = __webpack_require__(197);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx




const Navbar = ()=>{
    const router = (0,router_.useRouter)();
    const { activateTransition , setActivateTransition  } = (0,external_react_.useContext)(Transition);
    const handleNavClick = (e)=>{
        document.querySelector(`[data-${e.currentTarget.id}]`)?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const navTransition = (e)=>{
        const { id  } = e.currentTarget;
        document.querySelector(`[data-hero]`)?.scrollIntoView({
            behavior: "smooth"
        });
        document.querySelector(`[data-${id}]`)?.scrollIntoView({
            behavior: "smooth"
        });
        // if (id === "Harley") dispatch(HarleyTransition(true));
        // else if (id === "Catwoman") dispatch(CatTransition(true));
        // else
        setActivateTransition(true);
        setTimeout(()=>{
            router.push(`/${id}`);
        }, 2000);
    };
    (0,external_react_.useEffect)(()=>{
        // if (router.pathname === "/Harley") dispatch(HarleyTransition(false));
        // else if (router.pathname === "/Catwoman") dispatch(CatTransition(false));
        // else
        setActivateTransition(false);
    }, [
        router
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `h-[10vh] z-10 w-screen fixed top-0 backdrop-blur flex items-center justify-center lg:justify-start ${router.pathname === "/Joker" ? "text-[#0dd859] joker text-xs lg:text-2xl" : router.pathname === "/Harley" ? "text-[#781312] harley text-2xl lg:text-3xl" : router.pathname === "/Catwoman" ? "text-gray-600 catwoman text-xs lg:text-2xl" : "text-[#e7b200] batman text-xs lg:text-2xl"}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-2 lg:p-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hover:underline cursor-pointer",
                        id: "hero",
                        onClick: (e)=>handleNavClick(e),
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-2 lg:p-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hover:underline cursor-pointer",
                        id: "variants",
                        onClick: (e)=>handleNavClick(e),
                        children: "Variants"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-2 lg:p-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hover:underline cursor-pointer",
                        id: "vechiles",
                        onClick: (e)=>handleNavClick(e),
                        children: "Vehicles"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-2 lg:p-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "character-selection hover:underline cursor-pointer",
                            children: "Characters"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `character-list absolute z-[1] w-full flex flex-wrap top-[100%] left-[0%] ${router.pathname === "/Harley" ? "text-md" : "text-sm"}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "m-3 hover:underline cursor-pointer",
                                    onClick: (e)=>{
                                        navTransition(e);
                                    },
                                    id: "",
                                    children: "Batman"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "m-3 hover:underline cursor-pointer",
                                    onClick: (e)=>{
                                        navTransition(e);
                                    },
                                    id: "Joker",
                                    children: "Joker"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "m-3 hover:underline cursor-pointer",
                                    onClick: (e)=>{
                                        navTransition(e);
                                    },
                                    id: "Harley",
                                    children: "Harley"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "m-3 hover:underline cursor-pointer",
                                    onClick: (e)=>{
                                        navTransition(e);
                                    },
                                    id: "Catwoman",
                                    children: "Catwoman"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/pages/_app.tsx






const Transition = /*#__PURE__*/ (0,external_react_.createContext)({});
function App({ Component , pageProps  }) {
    const [activateTransition, setActivateTransition] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(Transition.Provider, {
        value: {
            activateTransition,
            setActivateTransition
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "main-wrapper relative z-1 w-screen min-h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}


/***/ }),

/***/ 197:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 267:
/***/ (() => {



/***/ })

};
;