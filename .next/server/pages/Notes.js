"use strict";
(() => {
var exports = {};
exports.id = 984;
exports.ids = [984,198];
exports.modules = {

/***/ 6947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Note({ notes  }) {
    return /*#__PURE__*/ _jsx("div", {});
};


/***/ }),

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

/***/ }),

/***/ 8614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6947);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4198);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7089);
/* harmony import */ var _mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9272);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4613);
/* harmony import */ var _mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Context_Context__WEBPACK_IMPORTED_MODULE_3__]);
_Context_Context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















function Index({ notes  }) {
    let { authtoken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: notes.map((note)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_6___default()), {
                    sx: {
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    sx: {
                                        flex: "1 0 auto"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            component: "div",
                                            variant: "h5",
                                            children: note.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            variant: "subtitle1",
                                            color: "text.secondary",
                                            component: "div",
                                            children: "Mac Miller"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        pl: 1,
                                        pb: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            "aria-label": "previous",
                                            children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_13___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_11___default()), {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            "aria-label": "play/pause",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                sx: {
                                                    height: 38,
                                                    width: 38
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            "aria-label": "next",
                                            children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_11___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_13___default()), {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8___default()), {
                            component: "img",
                            sx: {
                                width: 151
                            },
                            image: "",
                            alt: "Live from space album cover"
                        })
                    ]
                })
            }, note.note_id);
        })
    });
};
async function getServerSideProps({ req , res  }) {
    var cookie = __webpack_require__(4802);
    var cookies = cookie.parse(req.headers.cookie || "");
    const response = await fetch("https://my-notebook-my-notebook.herokuapp.com/api/v1/GetUserNotes/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookies.access
        }
    });
    let data = await response.json();
    return {
        props: {
            notes: data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9272:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PlayArrow");

/***/ }),

/***/ 4613:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SkipNext");

/***/ }),

/***/ 7089:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SkipPrevious");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8614));
module.exports = __webpack_exports__;

})();