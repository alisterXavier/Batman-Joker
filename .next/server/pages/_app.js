(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,743];
exports.modules = {

/***/ 957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_glitch_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/* harmony import */ var _styles_glitch_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_glitch_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(743);






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
        store: _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "main-wrapper relative w-screen min-h-screen overflow-hidden",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "st": () => (/* binding */ ActivateTransition)
/* harmony export */ });
/* unused harmony exports transitionSlice, store */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const transitionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "Transition",
    initialState: {
        transition: false
    },
    reducers: {
        ActivateTransition: (state, action)=>{
            const value = action.payload;
            state.transition = value;
        }
    }
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        transition: transitionSlice.reducer
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);
const { ActivateTransition  } = transitionSlice.actions;


/***/ }),

/***/ 197:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 267:
/***/ (() => {



/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(957));
module.exports = __webpack_exports__;

})();