"use strict";
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;