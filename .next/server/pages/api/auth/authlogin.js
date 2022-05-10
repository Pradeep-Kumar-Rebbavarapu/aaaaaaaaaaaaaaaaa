"use strict";
(() => {
var exports = {};
exports.id = 203;
exports.ids = [203];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

;// CONCATENATED MODULE: external "react-toastify"
const external_react_toastify_namespaceObject = require("react-toastify");
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
;// CONCATENATED MODULE: ./pages/api/auth/authlogin.js


async function login(req, res) {
    const { username , password , email  } = req.body;
    try {
        console.log("res inside", res);
        let response1 = await fetch("https://my-notebook-my-notebook.herokuapp.com/api/v1/Login/", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email
            })
        });
        let data1 = await response1.json();
        if (response1.status === 200) {
            var cookie1 = __webpack_require__(4802);
            res.setHeader("Set-Cookie", [
                cookie1.serialize("access", data1.data.access, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 60 * 30,
                    sameSite: "strict",
                    path: "/"
                }),
                cookie1.serialize("refresh", data1.data.refresh, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 60 * 30 * 24,
                    sameSite: "strict",
                    path: "/"
                })
            ]);
            res.status(200).json(data1);
        } else {
            res.status(401).json({
                "message": "login unsuccesful"
            });
            (0,external_react_toastify_namespaceObject.toast)("Log In Unsuccesfully Please Recheck Your Credentials", {
                position: external_react_toastify_namespaceObject.toast.POSITION.TOP_LEFT
            });
            console.log(data1);
        }
    } catch (e) {
        (0,external_react_toastify_namespaceObject.toast)("Log In Unsuccesfully Please Recheck Your Credentials", {
            position: external_react_toastify_namespaceObject.toast.POSITION.TOP_LEFT
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9459));
module.exports = __webpack_exports__;

})();