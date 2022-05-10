(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/logo.webp
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.9c0a2fae.webp","height":288,"width":288,"blurDataURL":"data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAQAwCdASoIAAgAAkA4JbACdLoA1AD9QLNVII8rTbrpLwAA+/QbT33uKo5fz/X0C30/G6X39IJFsNonP4K4huPaXXGAC8fU/+JUKB2xn7trU4IfqdMg/zbrkSMv59Lqbdeik7noXlZv9JY51xAAAA=="});
;// CONCATENATED MODULE: ./Components/Header.js






function Header() {
    const { /*#__PURE__*/ 0: navstate , 1: setnavstate  } = (0,external_react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "7c73114435c9d0a4",
                children: "#Navbar.jsx-7c73114435c9d0a4 a.jsx-7c73114435c9d0a4{margin:auto 10px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:8px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:all;-moz-transition:all;-o-transition:all;transition:all;-webkit-transition-duration:.3s;-moz-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s}#Navbar.jsx-7c73114435c9d0a4 a.jsx-7c73114435c9d0a4:hover{-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9);transform:scale(.9)}"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-7c73114435c9d0a4" + " " + "grid-cols-[100px_auto_200px] py-2 hidden lg:grid border-b-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "",
                        className: "jsx-7c73114435c9d0a4" + " " + "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "",
                            href: "#",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-7c73114435c9d0a4" + " " + "decoration-transparent block mx-2 my-auto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: " rounded-full",
                                    src: logo,
                                    alt: "",
                                    width: "50",
                                    height: "50",
                                    layout: "responsive",
                                    quality: 100,
                                    blurDataURL: true,
                                    srcSet: true
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        id: "Navbar",
                        className: "jsx-7c73114435c9d0a4" + " " + "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "jsx-7c73114435c9d0a4" + " " + "flex h-full my-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "",
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-900 hover:text-gray-700 decoration-transparent ",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "",
                                    href: "/auth/Login",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-900 hover:text-gray-700 decoration-transparent ",
                                        children: "Login"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "",
                                    href: "/auth/Signup",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-900 hover:text-gray-700 decoration-transparent ",
                                        children: "Signup"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "",
                                    href: "/Notes",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-900 hover:text-gray-700 decoration-transparent ",
                                        children: "Your Notes"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "",
                                    href: "/Settings",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-900 hover:text-gray-700 decoration-transparent ",
                                        children: "Settings"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "userdetails",
                        className: "jsx-7c73114435c9d0a4" + " " + "text-center my-auto",
                        children: "Guest"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "jsx-7c73114435c9d0a4" + " " + "navbar navbar-light   lg:hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-7c73114435c9d0a4" + " " + "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "",
                            className: "jsx-7c73114435c9d0a4" + " " + "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "",
                                href: "#",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-7c73114435c9d0a4" + " " + "decoration-transparent flex mx-2 my-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: " rounded-full",
                                        src: logo,
                                        alt: "",
                                        width: "50",
                                        height: "50"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            "data-bs-toggle": "offcanvas",
                            "data-bs-target": "#offcanvasNavbar",
                            "aria-controls": "offcanvasNavbar",
                            className: "jsx-7c73114435c9d0a4" + " " + "navbar-toggler p-1 rounded-lg focus:ring-[5px] focus:ring-black focus:ring-opacity-50 m-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-7c73114435c9d0a4" + " " + "navbar-toggler-icon h-5 w-5"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            tabIndex: "-1",
                            id: "offcanvasNavbar",
                            "aria-labelledby": "offcanvasNavbarLabel",
                            className: "jsx-7c73114435c9d0a4" + " " + "offcanvas offcanvas-end h-fit bg-gradient-to-br rounded-bl-md  from-emerald-500 to-indigo-500",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-7c73114435c9d0a4" + " " + "offcanvas-header",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            id: "offcanvasNavbarLabel",
                                            className: "jsx-7c73114435c9d0a4" + " " + "offcanvas-title text-white",
                                            children: "My NoteBook"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            "data-bs-dismiss": "offcanvas",
                                            "aria-label": "Close",
                                            className: "jsx-7c73114435c9d0a4" + " " + "btn-close text-reset"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-7c73114435c9d0a4" + " " + "offcanvas-body",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        id: "Navbar",
                                        className: "jsx-7c73114435c9d0a4" + " " + "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "jsx-7c73114435c9d0a4" + " " + "h-full my-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "",
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-50 hover:text-gray-300 decoration-transparent ",
                                                        children: "Home"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "",
                                                    href: "/auth/Login",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-50 hover:text-gray-300 decoration-transparent ",
                                                        children: "Login"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "",
                                                    href: "/auth/Signup",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-50 hover:text-gray-300 decoration-transparent ",
                                                        children: "Signup"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "",
                                                    href: "/Notes",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-50 hover:text-gray-300 decoration-transparent ",
                                                        children: "Your Notes"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "",
                                                    href: "/Settings",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-7c73114435c9d0a4" + " " + "text-gray-50 hover:text-gray-300 decoration-transparent ",
                                                        children: "Settings"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "jsx-7c73114435c9d0a4" + " " + "m-0 p-0"
            })
        ]
    });
};


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1047);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4198);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Context_Context__WEBPACK_IMPORTED_MODULE_2__]);
_Context_Context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7661, 23));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Context_Context__WEBPACK_IMPORTED_MODULE_2__/* .ContextProvider */ .H, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 7661:
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,675,198], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();