"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 4198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);
const ContextProvider = ({ children  })=>{
    let { 0: loading , 1: setloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: authtoken , 1: setauthtoken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("access") ? {
        "access": js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("access"),
        "refresh": js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("refresh")
    } : null);
    const ContextData = {
        hello: "hello",
        authtoken: authtoken,
        setauthtoken: setauthtoken,
        loading: loading,
        setloading: setloading
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: ContextData,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;