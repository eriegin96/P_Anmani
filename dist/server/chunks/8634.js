exports.id = 8634;
exports.ids = [8634];
exports.modules = {

/***/ 92122:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84927))

/***/ }),

/***/ 84927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1083);
/* harmony import */ var _hoSo_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62123);
/* harmony import */ var _hoSo_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hoSo_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54922);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39726);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Layout({ children }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const segment = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSelectedLayoutSegment)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: segment ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_hoSo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().titleWrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
                            onClick: router.back,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__/* .IconChevronLeft */ .ed9, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_hoSo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutTitle),
                            children: _static__WEBPACK_IMPORTED_MODULE_3__/* .pageName */ .j[segment]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_hoSo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contentWrapper),
                    children: children
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        })
    });
}


/***/ }),

/***/ 1083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ profilePageList),
/* harmony export */   j: () => (/* binding */ pageName)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80094);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39726);



const pageName = {
    "thong-tin": "Th\xf4ng tin c\xe1 nh\xe2n",
    "du-an": "Dự \xe1n",
    "gop-y": "G\xf3p \xfd"
};
const profilePageList = [
    {
        href: _constants_route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE */ .ln.INFO,
        title: "Th\xf4ng tin cơ bản",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconUserCog */ .x_O, {})
    },
    {
        href: _constants_route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE */ .ln.DOCUMENT,
        title: "Quản l\xfd hồ sơ dự \xe1n",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconBook2 */ .HH9, {})
    },
    {
        href: _constants_route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE */ .ln.FEEDBACK,
        title: "G\xf3p \xfd",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconHelpSquareRounded */ .tNu, {})
    },
    {
        href: _constants_route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE */ .ln.CHANGE_PASSWORD,
        title: "Đổi mật khẩu",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .IconKey */ .Ol, {})
    }
];


/***/ }),

/***/ 62123:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "hoSo_header__aD2JC",
	"actionWrapper": "hoSo_actionWrapper__uI4Ib",
	"linkItem": "hoSo_linkItem__2gg4X",
	"titleWrapper": "hoSo_titleWrapper__ajBGw",
	"contentWrapper": "hoSo_contentWrapper__bf0jK",
	"overlayShow": "hoSo_overlayShow__3wit1",
	"overlayHide": "hoSo_overlayHide__eMSRa"
};


/***/ }),

/***/ 54297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/eriegin/workplace/P_Anmani/src/app/(site)/user/ho-so/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;