exports.id = 2735;
exports.ids = [2735];
exports.modules = {

/***/ 3035:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 459))

/***/ }),

/***/ 459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var lib = __webpack_require__(2318);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/constants/route.ts
var route = __webpack_require__(80094);
// EXTERNAL MODULE: ./node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(39726);
// EXTERNAL MODULE: ./src/assets/index.ts
var assets = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/(protected)/static.tsx




const menuNavList = [
    {
        label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: route/* ROUTE */.ln.ADMIN_DASHBOARD,
            children: "Bảng điều khiển"
        }),
        key: "dashboard",
        url: route/* ROUTE */.ln.ADMIN_DASHBOARD,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconDashboard */.mF4, {})
    },
    {
        label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: route/* ROUTE */.ln.ADMIN_PRODUCT,
            children: "Sản phẩm"
        }),
        key: "product",
        url: route/* ROUTE */.ln.ADMIN_PRODUCT,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuilding */.UQw, {})
    },
    {
        label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: route/* ROUTE */.ln.ADMIN_VOUCHER,
            children: "Voucher"
        }),
        key: "voucher",
        url: route/* ROUTE */.ln.ADMIN_VOUCHER,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconTicket */.PMF, {})
    },
    {
        label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: route/* ROUTE */.ln.ADMIN_EXPLORE,
            children: "Kh\xe1m ph\xe1"
        }),
        key: "explore",
        url: route/* ROUTE */.ln.ADMIN_EXPLORE,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconMovie */.lut, {})
    },
    {
        label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: route/* ROUTE */.ln.ADMIN_MESSAGE,
            children: "Tin nhắn"
        }),
        key: "message",
        url: route/* ROUTE */.ln.ADMIN_MESSAGE,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconMessage */.fu1, {})
    },
    {
        label: "Người d\xf9ng",
        key: "user",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconUser */.f7T, {}),
        children: [
            {
                label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: route/* ROUTE */.ln.ADMIN_USER_NOTIFICATION,
                    children: "Th\xf4ng b\xe1o"
                }),
                key: "user.noti",
                url: route/* ROUTE */.ln.ADMIN_USER_NOTIFICATION
            },
            {
                label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: route/* ROUTE */.ln.ADMIN_USER_DEPOSIT,
                    children: "K\xfd gửi"
                }),
                key: "user.deposit",
                url: route/* ROUTE */.ln.ADMIN_USER_DEPOSIT
            },
            {
                label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: route/* ROUTE */.ln.ADMIN_USER_CART,
                    children: "Đơn h\xe0ng"
                }),
                key: "user.cart",
                url: route/* ROUTE */.ln.ADMIN_USER_CART
            }
        ]
    }
];

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(14889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./src/app/(protected)/(protected).module.scss
var _protected_module = __webpack_require__(51371);
var _protected_module_default = /*#__PURE__*/__webpack_require__.n(_protected_module);
// EXTERNAL MODULE: ./src/providers/AuthProvider.tsx
var AuthProvider = __webpack_require__(44666);
// EXTERNAL MODULE: ./src/app/(site)/loading.tsx
var loading = __webpack_require__(56298);
;// CONCATENATED MODULE: ./src/app/(protected)/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













const { Sider, Header, Content } = lib.Layout;
const sidebarNavFlat = menuNavList.reduce((result, current)=>result.concat(current.children && current.children.length > 0 ? current.children : current), []);
function RootLayout({ children }) {
    const [collapsed, setCollapsed] = (0,react_.useState)(false);
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const { userInfo } = (0,AuthProvider.useAuthContext)();
    const currentMenuItem = sidebarNavFlat.find(({ url })=>url && pathname.includes(url));
    const defaultSelectedKeys = currentMenuItem ? [
        currentMenuItem.key
    ] : [];
    const openedSubmenu = menuNavList.find(({ children })=>children?.some(({ url })=>url === pathname));
    const defaultOpenKeys = openedSubmenu ? [
        openedSubmenu.key
    ] : [];
    (0,react_.useEffect)(()=>{
        if (userInfo?.role && userInfo?.role.name !== "admin") router.push(route/* ROUTE */.ln.HOME);
    }, [
        userInfo,
        router
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: userInfo?.role.name === "admin" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib.Layout, {
            className: (_protected_module_default()).layoutWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sider, {
                    trigger: null,
                    collapsible: true,
                    collapsed: collapsed,
                    collapsedWidth: 80,
                    width: 260,
                    className: (_protected_module_default()).sider,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (_protected_module_default()).siderLogo,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: route/* ROUTE */.ln.ADMIN,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: assets/* ImageLogo */.q6,
                                            alt: "Anmani",
                                            width: 48,
                                            height: 48
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Anmani"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Button */.zx, {
                                    shape: "circle",
                                    className: clsx_default()((_protected_module_default()).collapseButton, collapsed && (_protected_module_default()).collapsed),
                                    onClick: ()=>setCollapsed(!collapsed),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconChevronLeft */.ed9, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Menu */.v2, {
                            theme: "light",
                            mode: "inline",
                            defaultSelectedKeys: defaultSelectedKeys,
                            defaultOpenKeys: defaultOpenKeys,
                            items: menuNavList,
                            className: (_protected_module_default()).menu
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib.Layout, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                            className: (_protected_module_default()).header,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Button */.zx, {
                                    type: "link",
                                    shape: "circle",
                                    onClick: ()=>router.back(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconChevronLeft */.ed9, {})
                                }),
                                "Anmani Admin Page"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                            className: (_protected_module_default()).content,
                            children: children
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(loading["default"], {})
    });
}


/***/ }),

/***/ 51371:
/***/ ((module) => {

// Exports
module.exports = {
	"layoutWrapper": "_protected__layoutWrapper__gDQfl",
	"sider": "_protected__sider__KkDQl",
	"siderLogo": "_protected__siderLogo___VoE5",
	"collapseButton": "_protected__collapseButton__o1QHe",
	"collapsed": "_protected__collapsed__2Vhn9",
	"menu": "_protected__menu__LT1Wt",
	"active": "_protected__active__zOlCi",
	"header": "_protected__header__dDgdm",
	"content": "_protected__content__87c3Q",
	"overlayShow": "_protected__overlayShow__Fnlpi",
	"overlayHide": "_protected__overlayHide__76wZv"
};


/***/ }),

/***/ 13249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/eriegin/workplace/P_Anmani/src/app/(protected)/layout.tsx`)

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