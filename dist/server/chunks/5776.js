exports.id = 5776;
exports.ids = [5776];
exports.modules = {

/***/ 87897:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45900));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44666));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13703));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50871));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 74121))

/***/ }),

/***/ 46887:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 25211:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69381))

/***/ }),

/***/ 217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ axiosInstance)
/* harmony export */ });
/* unused harmony export configFormData */
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30425);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40248);


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.create({
    baseURL: "https://vercel.live/link/p-anmani-server-btf0wlhjf-eriegin96.vercel.app?via=deployment-domains-list-commit" ?? 0,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});
const configFormData = {
    headers: {
        "content-type": "multipart/form-data"
    }
};
function authRequestInterceptor(config) {
    return config;
}
const onErrorResponse = async (error)=>{
    if (axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.isAxiosError(error)) {
        return Promise.reject(error);
    }
};
axiosInstance.interceptors.request.use(authRequestInterceptor);
axiosInstance.interceptors.response.use((response)=>response.data, onErrorResponse);


/***/ }),

/***/ 56298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2318);
/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50383);
/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_1___default().loadingWrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__/* .Spin */ .yC, {
            size: "large"
        })
    });
}


/***/ }),

/***/ 69381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2318);
/* harmony import */ var _site_page_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50383);
/* harmony import */ var _site_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_site_page_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80094);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Error({ error, reset }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_site_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().errorWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Typography.Title, {
                level: 2,
                children: "C\xf3 lỗi xảy ra"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
                        type: "primary",
                        onClick: ()=>reset(),
                        children: "Thử lại"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
                        type: "link",
                        onClick: ()=>router.push(_constants_route__WEBPACK_IMPORTED_MODULE_2__/* .ROUTE */ .ln.HOME),
                        children: "Về trang chủ"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 51663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $p: () => (/* reexport safe */ _public_icons_don_lap_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   BZ: () => (/* reexport safe */ _public_icons_bookmark_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Ls: () => (/* reexport safe */ _public_images_tiktok_review_1_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   UE: () => (/* reexport safe */ _public_images_logo_SG_png__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   VW: () => (/* reexport safe */ _public_icons_song_lap_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Wl: () => (/* reexport safe */ _public_icons_trending_up_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Y9: () => (/* reexport safe */ _public_icons_icon_flashSale_svg__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Zg: () => (/* reexport safe */ _public_icons_can_ho_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   bT: () => (/* reexport safe */ _public_icons_shop_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   jB: () => (/* reexport safe */ _public_icons_icons8_collision_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   lZ: () => (/* reexport safe */ _public_images_tiktok_review_2_png__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   pb: () => (/* reexport safe */ _public_icons_icons8_tiktok_svg__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   q6: () => (/* reexport safe */ _public_images_logo_png__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   qc: () => (/* reexport safe */ _public_images_avatar_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   yw: () => (/* reexport safe */ _public_icons_icons8_gmail_svg__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   zA: () => (/* reexport safe */ _public_icons_icons8_youtube_svg__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   zJ: () => (/* reexport safe */ _public_icons_icons8_facebook_svg__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _public_icons_icons8_facebook_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11498);
/* harmony import */ var _public_icons_icons8_messenger_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61228);
/* harmony import */ var _public_icons_icons8_tiktok_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47238);
/* harmony import */ var _public_icons_icons8_zalo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58457);
/* harmony import */ var _public_icons_icons8_youtube_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51200);
/* harmony import */ var _public_icons_icons8_gmail_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3210);
/* harmony import */ var _public_icons_icons8_collision_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44738);
/* harmony import */ var _public_icons_icon_flashSale_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2928);
/* harmony import */ var _public_icons_don_lap_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4499);
/* harmony import */ var _public_icons_song_lap_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34208);
/* harmony import */ var _public_icons_can_ho_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58572);
/* harmony import */ var _public_icons_shop_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26893);
/* harmony import */ var _public_icons_trending_up_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15595);
/* harmony import */ var _public_icons_bookmark_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94214);
/* harmony import */ var _public_images_avatar_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25424);
/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91374);
/* harmony import */ var _public_images_logo_KDI_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40477);
/* harmony import */ var _public_images_logo_SG_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(99065);
/* harmony import */ var _public_images_tiktok_review_1_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72026);
/* harmony import */ var _public_images_tiktok_review_2_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46643);
/* harmony import */ var _public_images_auth_background_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7102);























/***/ }),

/***/ 29132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Button({ children, className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props,
        children: children
    });
}


/***/ }),

/***/ 72102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2318);
/* harmony import */ var _searchBox_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22785);
/* harmony import */ var _searchBox_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_searchBox_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39726);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28313);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function SearchBox({ value, setValue }) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_mock_data__WEBPACK_IMPORTED_MODULE_2__/* .productList */ .Uu.map(({ id, name })=>({
            value: id,
            label: name
        })));
    const handleSearch = (newValue)=>{
        console.log(newValue);
    };
    const handleChange = (newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__/* .Select */ .Ph, {
        suffixIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__/* .IconSearch */ .jVj, {
            size: 20
        }),
        showSearch: true,
        value: value,
        placeholder: "Nhập t\xean bất động sản",
        defaultActiveFirstOption: false,
        filterOption: false,
        onSearch: handleSearch,
        onChange: handleChange,
        notFoundContent: null,
        options: (data || []).map((d)=>({
                value: d.value,
                label: d.label
            })),
        className: (_searchBox_module_scss__WEBPACK_IMPORTED_MODULE_5___default().select)
    });
}


/***/ }),

/***/ 54922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zx: () => (/* reexport */ Button["default"]),
  TF: () => (/* reexport */ ComparisonModalPortal),
  xq: () => (/* reexport */ ConsultForm),
  h4: () => (/* reexport */ Header),
  rp: () => (/* reexport */ ItemsSkeleton),
  vx: () => (/* reexport */ NavigationBar),
  zj: () => (/* reexport */ SaveDialogPortal),
  Rj: () => (/* reexport */ SearchBox["default"]),
  cq: () => (/* reexport */ Voucher)
});

// UNUSED EXPORTS: Footer, NotificationContent, TextEditor

// EXTERNAL MODULE: ./src/components/common/Button/index.tsx
var Button = __webpack_require__(29132);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/components/common/Footer/index.tsx


function Footer() {
    return /*#__PURE__*/ _jsx("footer", {
        className: styles.footer,
        children: "Footer"
    });
}

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs + 5 modules
var dist = __webpack_require__(40465);
// EXTERNAL MODULE: ./node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(39726);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(14889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(45319);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/common/Header/header.module.scss
var header_module = __webpack_require__(55835);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./src/styles/color.module.scss
var color_module = __webpack_require__(15759);
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);
// EXTERNAL MODULE: ./src/constants/route.ts
var route = __webpack_require__(80094);
// EXTERNAL MODULE: ./src/constants/product.ts
var product = __webpack_require__(86756);
;// CONCATENATED MODULE: ./src/components/common/Header/static.tsx





const navLinks = [
    {
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}/?type=${route/* QUERY_PARAMS */.Tx.TYPE.SINGLE}`,
        name: product/* PRODUCT_TYPE */.fY.SINGLE_VILLA,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconHome */.A2c, {
            color: (color_module_default()).primary1
        })
    },
    {
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}/?type=${route/* QUERY_PARAMS */.Tx.TYPE.DOUBLE}`,
        name: product/* PRODUCT_TYPE */.fY.DOUBLE_VILLA,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingFortress */.cx7, {
            color: (color_module_default()).primary2
        })
    },
    {
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}/?type=${route/* QUERY_PARAMS */.Tx.TYPE.SHOPHOUSE}`,
        name: product/* PRODUCT_TYPE */.fY.SHOPHOUSE,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingStore */.DWp, {
            color: (color_module_default()).primary3
        })
    },
    {
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}/?type=${route/* QUERY_PARAMS */.Tx.TYPE.APARTMENT}`,
        name: product/* PRODUCT_TYPE */.fY.APARTMENT,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuilding */.UQw, {
            color: (color_module_default()).red1
        })
    },
    {
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}/?tag=${route/* QUERY_PARAMS */.Tx.TAG.TRANSFER}`,
        name: product/* PRODUCT_TAG */.dW.TRANSFER,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconSpeedboat */.G$G, {
            color: (color_module_default()).red2
        })
    },
    {
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}/?tag=${route/* QUERY_PARAMS */.Tx.TAG.RENT}`,
        name: product/* PRODUCT_TAG */.dW.RENT,
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconHomeCheck */.A_Y, {
            color: (color_module_default()).yellow1
        })
    },
    {
        href: route/* ROUTE */.ln.CONSULT,
        name: "T\xe0i ch\xednh",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconCoins */.qSP, {
            color: (color_module_default()).green2
        })
    },
    {
        href: "/",
        name: "Thị trường BĐS Hồ Ch\xed Minh",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingCommunity */.bWt, {
            color: (color_module_default()).green3
        })
    },
    {
        href: "/",
        name: "Thị trường BĐS Nha Trang",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingCommunity */.bWt, {
            color: (color_module_default()).primary1
        })
    },
    {
        href: "/",
        name: "Thị trường BĐS Ph\xfa Quốc",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingCommunity */.bWt, {
            color: (color_module_default()).primary2
        })
    },
    {
        href: "/",
        name: "Thị trường BĐS Đ\xe0 Nẵng",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingCommunity */.bWt, {
            color: (color_module_default()).primary3
        })
    },
    {
        href: "/",
        name: "Đối t\xe1c Chủ Đầu Tư",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingSkyscraper */.oXJ, {
            color: (color_module_default()).red1
        })
    },
    {
        href: "/",
        name: "K\xfd gửi Bất Động Sản",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingBank */.R0R, {
            color: (color_module_default()).red2
        })
    },
    {
        href: "/",
        name: "Kết nối",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconNetwork */.imm, {
            color: (color_module_default()).yellow1
        })
    }
];

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/index.ts
var assets = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var lib = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-tabs/dist/index.mjs + 1 modules
var react_tabs_dist = __webpack_require__(93608);
// EXTERNAL MODULE: ./src/components/common/NotificationContent/notificationContent.module.scss
var notificationContent_module = __webpack_require__(91025);
var notificationContent_module_default = /*#__PURE__*/__webpack_require__.n(notificationContent_module);
// EXTERNAL MODULE: ./src/constants/notification.ts
var notification = __webpack_require__(15142);
;// CONCATENATED MODULE: ./src/components/common/NotificationContent/static.tsx

const notificationTab = [
    {
        value: notification/* NOTIFICATION_TYPE */.tx.UPDATE,
        title: "Cập nhật tiến độ thanh to\xe1n"
    },
    {
        value: notification/* NOTIFICATION_TYPE */.tx.INFO,
        title: "Khuyến m\xe3i v\xe0 th\xf4ng tin từ CĐT"
    }
];

// EXTERNAL MODULE: ./src/mock/data.tsx
var mock_data = __webpack_require__(28313);
// EXTERNAL MODULE: ./src/providers/AuthProvider.tsx
var AuthProvider = __webpack_require__(44666);
// EXTERNAL MODULE: ./src/hooks/api/notification/index.ts + 4 modules
var api_notification = __webpack_require__(5397);
;// CONCATENATED MODULE: ./src/components/common/NotificationContent/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function NotificationContent() {
    const { userInfo } = (0,AuthProvider.useAuthContext)();
    const { data, isLoading } = (0,api_notification/* useGetNotificationsByUser */._Y)(userInfo);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_tabs_dist/* Root */.fC, {
            defaultValue: notificationTab[0].value,
            className: (notificationContent_module_default()).tabsRoot,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_tabs_dist/* List */.aV, {
                    "aria-label": "Notification",
                    className: (notificationContent_module_default()).tabsList,
                    children: notificationTab.map((tab)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_tabs_dist/* Trigger */.xz, {
                            value: tab.value,
                            className: (notificationContent_module_default()).tabsTrigger,
                            children: [
                                tab.title,
                                data && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (notificationContent_module_default()).notiAmount,
                                    children: mock_data/* notificationList */.d5.filter((noti)=>noti.type === tab.value).length
                                })
                            ]
                        }, tab.value))
                }),
                notificationTab.map((tab)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_tabs_dist/* Content */.VY, {
                        value: tab.value,
                        className: (notificationContent_module_default()).tabsContent,
                        children: [
                            isLoading && /*#__PURE__*/ jsx_runtime_.jsx(lib/* Skeleton */.Od, {
                                active: true,
                                style: {
                                    padding: "10px"
                                }
                            }),
                            !isLoading && data && mock_data/* notificationList */.d5.map((noti)=>{
                                return noti.type === tab.value ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (notificationContent_module_default()).notiWrapper,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Avatar */.qE, {
                                                size: 36,
                                                src: noti.avatar,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (notificationContent_module_default()).notiText,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: noti.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: noti.content
                                                })
                                            ]
                                        })
                                    ]
                                }, noti.id) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
                            }),
                            !isLoading && !data && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (notificationContent_module_default()).noNoti,
                                children: "Chưa c\xf3 th\xf4ng b\xe1o"
                            })
                        ]
                    }, tab.value))
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/providers/LayoutProvider.tsx
var LayoutProvider = __webpack_require__(74121);
// EXTERNAL MODULE: ./src/providers/CartProvider.tsx
var CartProvider = __webpack_require__(13703);
;// CONCATENATED MODULE: ./src/components/common/Header/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


















const Header_Button = app_dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 29132)), {
    loadableGenerated: {
        modules: [
            "/home/eriegin/workplace/P_Anmani/src/components/common/Header/index.tsx -> " + "../Button"
        ]
    }
});
function Header() {
    const { userInfo } = (0,AuthProvider.useAuthContext)();
    const { isAtExplorePage } = (0,LayoutProvider.useLayoutContext)();
    const { cart } = (0,CartProvider.useCartContext)();
    const { data } = (0,api_notification/* useGetNotificationsByUser */._Y)(userInfo);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: clsx_default()((header_module_default()).wrapper, isAtExplorePage && (header_module_default()).hidden),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Root */.fC, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* Trigger */.xz, {
                        className: (header_module_default()).triggerBtn,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconMenu2 */._AG, {
                            color: (color_module_default()).white
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Portal */.h_, {
                        className: (header_module_default()).portal,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(dist/* Overlay */.aV, {
                                className: clsx_default()((header_module_default()).overlay, (header_module_default()).animation)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Content */.VY, {
                                className: clsx_default()((header_module_default()).sidebar, (header_module_default()).animation),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Description */.dk, {
                                        className: (header_module_default()).description,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconPhoneFilled */.E8l, {}),
                                            "Hỗ trợ kh\xe1ch h\xe0ng ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "0924627467"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (header_module_default()).links,
                                        children: navLinks.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: link.href,
                                                className: (header_module_default()).link,
                                                children: [
                                                    link.icon,
                                                    link.name
                                                ]
                                            }, link.name))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: route/* ROUTE */.ln.HOME,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: assets/* ImageLogo */.q6,
                    alt: "",
                    width: 50,
                    height: 50
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (header_module_default()).rightSection,
                children: !userInfo ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: route/* ROUTE */.ln.SIGN_IN,
                    className: (header_module_default()).triggerBtn,
                    children: "Đăng nhập"
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Popover */.J2, {
                            content: /*#__PURE__*/ jsx_runtime_.jsx(NotificationContent, {}),
                            placement: "bottomRight",
                            trigger: "click",
                            className: (header_module_default()).popover,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Header_Button, {
                                className: (header_module_default()).triggerBtn,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Badge */.Ct, {
                                    size: "small",
                                    count: data && mock_data/* notificationList */.d5.length,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBell */.YK1, {
                                        color: (color_module_default()).white
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: route/* ROUTE */.ln.CART,
                            className: (header_module_default()).triggerBtn,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Badge */.Ct, {
                                size: "small",
                                count: cart.length,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconShoppingCart */.wkN, {
                                    color: (color_module_default()).white
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./src/components/common/NavigationBar/navigationBar.module.scss
var navigationBar_module = __webpack_require__(1327);
var navigationBar_module_default = /*#__PURE__*/__webpack_require__.n(navigationBar_module);
;// CONCATENATED MODULE: ./src/components/common/NavigationBar/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const NavigationBar_navLinks = [
    {
        href: route/* ROUTE */.ln.HOME,
        name: "Trang chủ",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconPlaneTilt */.Y8j, {})
    },
    {
        href: route/* ROUTE */.ln.MESSAGE,
        name: "Tin nhắn",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconMail */.haR, {})
    },
    {
        href: route/* ROUTE */.ln.EXPLORE,
        name: "Kh\xe1m ph\xe1",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconMovie */.lut, {})
    },
    {
        href: route/* ROUTE */.ln.SAVE,
        name: "Đ\xe3 lưu",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconClipboardText */.Okp, {})
    },
    {
        href: route/* ROUTE */.ln.PROFILE,
        name: "Hồ sơ",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconUser */.f7T, {})
    }
];
function NavigationBar() {
    const pathname = (0,navigation.usePathname)();
    const { isAtExplorePage } = (0,LayoutProvider.useLayoutContext)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: clsx_default()((navigationBar_module_default()).wrapper, isAtExplorePage && (navigationBar_module_default()).revert),
        children: NavigationBar_navLinks.map((link)=>{
            const isActive = pathname === route/* ROUTE */.ln.HOME ? pathname === link.href : pathname.includes(link.href) && link.href !== route/* ROUTE */.ln.HOME;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: link.href,
                className: clsx_default()((navigationBar_module_default()).item, isActive && (navigationBar_module_default()).isActive),
                children: [
                    link.icon,
                    link.name
                ]
            }, link.href);
        })
    });
}

// EXTERNAL MODULE: ./src/components/common/SearchBox/index.tsx
var SearchBox = __webpack_require__(72102);
// EXTERNAL MODULE: ./src/components/common/SaveDialogPortal/saveDialogPortal.module.scss
var saveDialogPortal_module = __webpack_require__(50949);
var saveDialogPortal_module_default = /*#__PURE__*/__webpack_require__.n(saveDialogPortal_module);
;// CONCATENATED MODULE: ./src/components/common/SaveDialogPortal/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function SaveDialogPortal({ value, onChange }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Portal */.h_, {
        className: (saveDialogPortal_module_default()).portal,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dist/* Overlay */.aV, {
                className: clsx_default()((saveDialogPortal_module_default()).overlay, (saveDialogPortal_module_default()).animation)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dist/* Content */.VY, {
                className: clsx_default()((saveDialogPortal_module_default()).sidebar, (saveDialogPortal_module_default()).animation),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Radio */.Y8.Group, {
                    onChange: onChange,
                    value: value,
                    className: (saveDialogPortal_module_default()).buttons,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                            value: product/* PRODUCT_SAVE_VALUE */.jH.LATER,
                            className: (saveDialogPortal_module_default()).button,
                            children: "Để xem sau"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                            value: product/* PRODUCT_SAVE_VALUE */.jH.BUY,
                            className: (saveDialogPortal_module_default()).button,
                            children: "Cần mua"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                            value: product/* PRODUCT_SAVE_VALUE */.jH.RENT,
                            className: (saveDialogPortal_module_default()).button,
                            children: "Cần thu\xea"
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slider/dist/index.mjs + 3 modules
var react_slider_dist = __webpack_require__(21217);
// EXTERNAL MODULE: ./src/components/common/Voucher/voucher.module.scss
var voucher_module = __webpack_require__(78533);
var voucher_module_default = /*#__PURE__*/__webpack_require__.n(voucher_module);
// EXTERNAL MODULE: ./src/constants/common.ts
var common = __webpack_require__(89439);
;// CONCATENATED MODULE: ./src/components/common/Voucher/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Voucher({ voucher, shouldShowBtn = false }) {
    const { discount, condition, expiredDate } = voucher;
    const discountAmount = discount.amount ? discount.amount.toString().replace(common/* NUMBER_FORMAT */.sj, ".") : `${discount.percent}%`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (voucher_module_default()).voucherWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (voucher_module_default()).leftSection,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (voucher_module_default()).leftTopSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (voucher_module_default()).subTitle,
                                children: "Quy đổi giới hạn"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (voucher_module_default()).discount,
                                children: [
                                    "Giảm ",
                                    discountAmount
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (voucher_module_default()).condition,
                                children: condition
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_slider_dist/* Root */.fC, {
                                className: (voucher_module_default()).sliderRoot,
                                defaultValue: [
                                    50
                                ],
                                disabled: true,
                                max: 100,
                                step: 1,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_slider_dist/* Track */.fQ, {
                                    className: (voucher_module_default()).sliderTrack,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_slider_dist/* Range */.e6, {
                                        className: (voucher_module_default()).sliderRange
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (voucher_module_default()).usedText,
                                children: "Đ\xe3 d\xf9ng 50%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (voucher_module_default()).expiredDate,
                        children: [
                            "HSD: ",
                            expiredDate
                        ]
                    })
                ]
            }),
            shouldShowBtn && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button["default"], {
                    className: (voucher_module_default()).useBtn,
                    children: "Sử dụng"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__(48218);
;// CONCATENATED MODULE: ./src/components/common/TextEditor/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ReactQuill = app_dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "/home/eriegin/workplace/P_Anmani/src/components/common/TextEditor/index.tsx -> " + "react-quill"
        ]
    },
    ssr: false
});
const toolbarOptions = [
    [
        {
            header: [
                1,
                2,
                3,
                4,
                5,
                6,
                false
            ]
        }
    ],
    [
        {
            size: []
        }
    ],
    [
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote"
    ],
    [
        {
            list: "ordered"
        },
        {
            list: "bullet"
        }
    ],
    [
        {
            script: "sub"
        },
        {
            script: "super"
        }
    ],
    [
        {
            indent: "-1"
        },
        {
            indent: "+1"
        }
    ],
    [
        {
            color: []
        },
        {
            background: []
        }
    ],
    [
        {
            align: []
        }
    ],
    [
        "link",
        "image"
    ],
    [
        "clean"
    ]
];
function TextEditor({ value, onChange }) {
    return /*#__PURE__*/ _jsx(ReactQuill, {
        theme: "snow",
        modules: {
            toolbar: toolbarOptions
        },
        // value={value}
        // onChange={onChange}
        className: styles.reactQuill
    });
}

// EXTERNAL MODULE: ./src/components/ConsultForm/consultForm.module.scss
var consultForm_module = __webpack_require__(45066);
var consultForm_module_default = /*#__PURE__*/__webpack_require__.n(consultForm_module);
// EXTERNAL MODULE: ./src/hooks/api/cart/mutation/useCreateCart.ts
var useCreateCart = __webpack_require__(73788);
;// CONCATENATED MODULE: ./src/components/ConsultForm/index.tsx







function ConsultForm() {
    const { trigger } = (0,useCreateCart/* useCreateCart */.m)();
    const { cart } = (0,CartProvider.useCartContext)();
    const [date, setDate] = (0,react_.useState)("");
    const [place, setPlace] = (0,react_.useState)("");
    const [phoneNumber, setPhoneNumber] = (0,react_.useState)("");
    const handleSubmit = ()=>{
        console.log({
            place,
            phoneNumber,
            date
        });
        trigger({
            cartList: cart,
            bookingInfo: {
                userId: "user-1",
                date,
                place,
                phoneNumber
            }
        });
    };
    const onDateChange = (value, dateString)=>{
        console.log("Selected Time: ", value);
        console.log("Formatted Selected Time: ", dateString);
        setDate(dateString);
    };
    const onDateOk = (value)=>{
        console.log("onOk: ", value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (consultForm_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (consultForm_module_default()).section,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Anh/Chị chọn ng\xe0y"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* DatePicker */.Mt, {
                        showTime: true,
                        onChange: onDateChange,
                        onOk: onDateOk,
                        className: (consultForm_module_default()).input
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (consultForm_module_default()).section,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Địa điểm gặp mặt"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        className: (consultForm_module_default()).input,
                        value: place,
                        onChange: (e)=>setPlace(e.target.value)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (consultForm_module_default()).section,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Điện thoại li\xean lạc hoặc zalo của Anh/Chị"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        className: (consultForm_module_default()).input,
                        value: phoneNumber,
                        onChange: (e)=>setPhoneNumber(e.target.value)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button["default"], {
                className: (consultForm_module_default()).btn,
                onClick: handleSubmit,
                children: "Gửi"
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ComparisonModalPortal/comparisonModalPortal.module.scss
var comparisonModalPortal_module = __webpack_require__(22317);
var comparisonModalPortal_module_default = /*#__PURE__*/__webpack_require__.n(comparisonModalPortal_module);
// EXTERNAL MODULE: ./src/providers/ProductComparisonProvider/index.tsx
var ProductComparisonProvider = __webpack_require__(47835);
;// CONCATENATED MODULE: ./src/components/ComparisonModalPortal/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function ComparisonModalPortal() {
    const { setComparisonProduct, hideComparisonModal } = (0,ProductComparisonProvider/* useProductComparisonContext */.zL)();
    const [searchBoxValue, setSearchBoxValue] = (0,react_.useState)("");
    const handleAdd = ()=>{
        setComparisonProduct(searchBoxValue);
        hideComparisonModal();
        setSearchBoxValue("");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (comparisonModalPortal_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchBox["default"], {
                value: searchBoxValue,
                setValue: setSearchBoxValue
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Button */.zx, {
                type: "primary",
                onClick: handleAdd,
                children: "Th\xeam"
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ItemsSkeleton/itemsSkeleton.module.scss
var itemsSkeleton_module = __webpack_require__(55723);
var itemsSkeleton_module_default = /*#__PURE__*/__webpack_require__.n(itemsSkeleton_module);
;// CONCATENATED MODULE: ./src/components/ItemsSkeleton/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ItemsSkeleton() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: [
            16,
            16
        ],
        className: (itemsSkeleton_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                xs: 24,
                md: 12,
                lg: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Skeleton */.Od, {
                    active: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                xs: 24,
                md: 12,
                lg: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Skeleton */.Od, {
                    active: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                xs: 24,
                md: 12,
                lg: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Skeleton */.Od, {
                    active: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                xs: 24,
                md: 12,
                lg: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Skeleton */.Od, {
                    active: true
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/index.ts














/***/ }),

/***/ 30425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $h: () => (/* binding */ API_KEY),
/* harmony export */   QP: () => (/* binding */ API_ENDPOINT)
/* harmony export */ });
/* unused harmony exports BASE_URL, storagePrefix */
const BASE_URL = "https://dummyjson.com";
const storagePrefix = "anmani_";
// TODO: change endpoint
const API_ENDPOINT = {
    MOCK: "",
    GET_ME: "auth/me",
    USER_CARTS: "carts/user",
    CARTS: "carts",
    EXPLORES: "videos",
    NOTIFICATIONS: "notifications",
    PRODUCTS: "products",
    VOUCHERS: "vouchers",
    SIGN_UP: "auth/register",
    SIGN_IN: "auth/login",
    REFRESH_TOKEN: "auth/refresh"
};
const API_KEY = {
    MOCK: "",
    GET_ME: "auth/me",
    USER_CARTS: "carts/user",
    CARTS: "carts",
    EXPLORES: "videos",
    NOTIFICATIONS: "notifications",
    PRODUCTS: "products",
    VOUCHERS: "vouchers",
    CREATE_CART: "create-carts",
    CREATE_EXPLORE: "create-videos",
    CREATE_NOTIFICATION: "create-notifications",
    CREATE_PRODUCT: "create-products",
    CREATE_VOUCHER: "create-vouchers",
    DELETE_CART: "delete-carts",
    DELETE_EXPLORE: "delete-videos",
    DELETE_NOTIFICATION: "delete-notifications",
    DELETE_PRODUCT: "delete-products",
    DELETE_VOUCHER: "delete-vouchers",
    SIGN_UP: "auth/register",
    SIGN_IN: "auth/login",
    REFRESH_TOKEN: "auth/refresh"
};


/***/ }),

/***/ 89439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fX: () => (/* binding */ MIN_PRICE),
/* harmony export */   jw: () => (/* binding */ PLACEHOLDER_EMAIL),
/* harmony export */   sj: () => (/* binding */ NUMBER_FORMAT),
/* harmony export */   uX: () => (/* binding */ PLACEHOLDER_LINK),
/* harmony export */   y2: () => (/* binding */ MAX_PRICE),
/* harmony export */   zT: () => (/* binding */ DATE_FORMAT)
/* harmony export */ });
const MIN_PRICE = 100000000;
const MAX_PRICE = 500000000000;
const NUMBER_FORMAT = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
const DATE_FORMAT = "DD/MM/YYYY";
const PLACEHOLDER_LINK = "https://img.photo.com";
const PLACEHOLDER_EMAIL = "nguyenvana@email.com";


/***/ }),

/***/ 88686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EXPLORE_TYPE)
/* harmony export */ });
const EXPLORE_TYPE = {
    VIDEO: "video",
    IMAGE: "image"
};


/***/ }),

/***/ 15142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bq: () => (/* binding */ NOTIFICATION_TARGET_TYPE),
/* harmony export */   nP: () => (/* binding */ NOTIFICATION_TYPE_LABEL),
/* harmony export */   tx: () => (/* binding */ NOTIFICATION_TYPE)
/* harmony export */ });
const NOTIFICATION_TYPE = {
    UPDATE: "update",
    INFO: "info"
};
const NOTIFICATION_TARGET_TYPE = {
    ALL: "all",
    INDIVIDUAL: "individual"
};
const NOTIFICATION_TYPE_LABEL = {
    [NOTIFICATION_TYPE.UPDATE]: "Cập nhật tiến độ thanh to\xe1n",
    [NOTIFICATION_TYPE.INFO]: "Khuyến m\xe3i v\xe0 th\xf4ng tin từ nh\xe0 đầu tư"
};


/***/ }),

/***/ 86756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _t: () => (/* binding */ PRODUCT_DETAIL_TITLE),
/* harmony export */   dW: () => (/* binding */ PRODUCT_TAG),
/* harmony export */   eI: () => (/* binding */ PRODUCT_DESCRIPTION),
/* harmony export */   eM: () => (/* binding */ PRODUCT_STATUS),
/* harmony export */   fY: () => (/* binding */ PRODUCT_TYPE),
/* harmony export */   jH: () => (/* binding */ PRODUCT_SAVE_VALUE),
/* harmony export */   op: () => (/* binding */ PRODUCT_LOCATION),
/* harmony export */   vP: () => (/* binding */ PRODUCT_FACILITY),
/* harmony export */   xY: () => (/* binding */ PRODUCT_ANCHOR)
/* harmony export */ });
const PRODUCT_STATUS = {
    SOLD: "Đ\xe3 b\xe1n",
    SAVED: "Đang quan t\xe2m",
    IN_STOCK: "C\xf2n h\xe0ng",
    BOOKED: "H\xe0ng đặt"
};
const PRODUCT_SAVE_VALUE = {
    LATER: "later",
    BUY: "buy",
    RENT: "rent"
};
const PRODUCT_TYPE = {
    SINGLE_VILLA: "Dinh thự & Biệt thự đơn lập",
    DOUBLE_VILLA: "Dinh thự & Biệt thự song lập",
    SHOPHOUSE: "Shophouse nh\xe0 phố thương mại",
    APARTMENT: "Căn hộ"
};
const PRODUCT_TAG = {
    INVESTOR: "BĐS Gi\xe1 Chủ đầu tư",
    TRANSFER: "BĐS Gi\xe1 Chuyển nhượng",
    RENT: "Cho thu\xea"
};
const PRODUCT_ANCHOR = {
    MAIN: "main",
    VOUCHER: "voucher",
    FACILITIES: "facilities",
    LOCATION: "location",
    POLICY: "policy",
    DESCRIPTION: "description"
};
const PRODUCT_FACILITY = {
    LAND_AREA: "landArea",
    FLOOR_AREA: "floorArea",
    FLOOR: "floor",
    BEDROOM: "bedroom",
    BATHROOM: "bathroom",
    OTHER: "other"
};
const PRODUCT_LOCATION = {
    NEARBY: "nearby",
    POPULAR: "popular"
};
const PRODUCT_DESCRIPTION = {
    PROS: "pros",
    CONS: "cons"
};
const PRODUCT_DETAIL_TITLE = {
    tag: "H\xecnh thức",
    type: "Loại h\xecnh",
    investor: "Chủ đầu tư",
    information: {
        landArea: "Diện t\xedch đất",
        floor: "Số tầng",
        bedroom: "Số ph\xf2ng ngủ",
        bathroom: "Số ph\xf2ng tắm",
        floorArea: "Diện t\xedch s\xe0n",
        other: "Tiện \xedch kh\xe1c"
    },
    policy: {
        main: "Ch\xednh s\xe1ch chung",
        loan: "Ch\xednh s\xe1ch vay",
        equity: "Ch\xednh s\xe1ch vốn"
    },
    description: {
        pros: "Ưu điểm",
        cons: "Nhược điểm"
    },
    location: {
        detail: "Địa chỉ",
        main: "Khu vực",
        nearby: "Địa điểm l\xe2n cận",
        popular: "Địa điểm phổ biến"
    }
};


/***/ }),

/***/ 80094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tx: () => (/* binding */ QUERY_PARAMS),
/* harmony export */   ln: () => (/* binding */ ROUTE)
/* harmony export */ });
/* unused harmony exports ROUTE_PREFIX_USER, ROUTE_PREFIX_ADMIN */
const ROUTE_PREFIX_USER = "user";
const ROUTE_PREFIX_ADMIN = "admin";
const ROUTE = {
    HOME: "/",
    SIGN_UP: "/dang-ky",
    SIGN_IN: "/dang-nhap",
    EXPLORE: "/kham-pha",
    CHANGE_PASSWORD: `/doi-mat-khau`,
    PRODUCT: "/bds",
    ADVANCED_SEARCH: "/tim-kiem",
    CONSULT: "/tu-van-tai-chinh",
    COMPARISON: "/so-sanh",
    CART: `/${ROUTE_PREFIX_USER}/gio-hang`,
    CART_SUMMARY: `/${ROUTE_PREFIX_USER}/gio-hang/tom-tat`,
    PROFILE: `/${ROUTE_PREFIX_USER}/ho-so`,
    INFO: `/${ROUTE_PREFIX_USER}/ho-so/thong-tin`,
    DOCUMENT: `/${ROUTE_PREFIX_USER}/ho-so/du-an`,
    FEEDBACK: `/${ROUTE_PREFIX_USER}/ho-so/gop-y`,
    SAVE: `/${ROUTE_PREFIX_USER}/luu-tru`,
    MESSAGE: `/${ROUTE_PREFIX_USER}/tin-nhan`,
    ADMIN: "/admin",
    ADMIN_DASHBOARD: `/${ROUTE_PREFIX_ADMIN}/dashboard`,
    ADMIN_PRODUCT: `/${ROUTE_PREFIX_ADMIN}/product`,
    ADMIN_PRODUCT_CREATE: `/${ROUTE_PREFIX_ADMIN}/product/create`,
    ADMIN_VOUCHER: `/${ROUTE_PREFIX_ADMIN}/voucher`,
    ADMIN_VOUCHER_CREATE: `/${ROUTE_PREFIX_ADMIN}/voucher/create`,
    ADMIN_EXPLORE: `/${ROUTE_PREFIX_ADMIN}/explore`,
    ADMIN_EXPLORE_CREATE: `/${ROUTE_PREFIX_ADMIN}/explore/create`,
    ADMIN_MESSAGE: `/${ROUTE_PREFIX_ADMIN}/message`,
    ADMIN_USER: `/${ROUTE_PREFIX_ADMIN}/user`,
    ADMIN_USER_NOTIFICATION: `/${ROUTE_PREFIX_ADMIN}/user/notification`,
    ADMIN_USER_NOTIFICATION_CREATE: `/${ROUTE_PREFIX_ADMIN}/user/notification/create`,
    ADMIN_USER_DEPOSIT: `/${ROUTE_PREFIX_ADMIN}/user/deposit`,
    ADMIN_USER_CART: `/${ROUTE_PREFIX_ADMIN}/user/cart`
};
const QUERY_PARAMS = {
    STATUS: {
        SOLD: "sold",
        IN_STOCK: "in-stock"
    },
    TAG: {
        INVESTOR: "investor",
        TRANSFER: "transfer",
        RENT: "rent"
    },
    TYPE: {
        SINGLE: "single",
        DOUBLE: "double",
        SHOPHOUSE: "shophouse",
        APARTMENT: "apartment"
    },
    LOCATION: {
        HCM: "hcm",
        NHA_TRANG: "nha-trang",
        PHU_QUOC: "phu-quoc",
        DA_NANG: "da-nang"
    },
    SORT: {
        PRICE_ASCENDING: "price-asceding",
        PRICE_DESCENDING: "price-descending"
    }
};


/***/ }),

/***/ 10792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r0: () => (/* reexport */ useDeleteCart),
  KL: () => (/* reexport */ useGetCartByUser),
  qf: () => (/* reexport */ useGetCarts/* useGetCarts */.q),
  rA: () => (/* reexport */ useUpdateCart)
});

// UNUSED EXPORTS: useCreateCart, useGetCartById

// EXTERNAL MODULE: ./src/hooks/api/cart/query/useGetCarts.ts
var useGetCarts = __webpack_require__(22536);
// EXTERNAL MODULE: ./src/hooks/api/cart/query/useGetCartById.ts
var useGetCartById = __webpack_require__(60300);
// EXTERNAL MODULE: ./src/api/axios.ts
var axios = __webpack_require__(217);
// EXTERNAL MODULE: ./src/constants/api.ts
var api = __webpack_require__(30425);
// EXTERNAL MODULE: ./src/utils/concatHref.ts
var concatHref = __webpack_require__(58308);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs
var dist = __webpack_require__(53395);
;// CONCATENATED MODULE: ./src/hooks/api/cart/query/useGetCartByUser.ts




const fetcher = (url)=>axios/* axiosInstance */.b.get(url).then((res)=>res);
const useGetCartByUser = (userInfo)=>{
    return (0,dist/* default */.ZP)(userInfo ? (0,concatHref/* concatHref */.R)(api/* API_ENDPOINT */.QP.USER_CARTS, userInfo.id) : null, fetcher);
};

// EXTERNAL MODULE: ./src/hooks/api/cart/mutation/useCreateCart.ts
var useCreateCart = __webpack_require__(73788);
// EXTERNAL MODULE: ./node_modules/swr/mutation/dist/index.mjs
var mutation_dist = __webpack_require__(77237);
;// CONCATENATED MODULE: ./src/hooks/api/cart/mutation/useUpdateCart.ts



const useUpdateCart_fetcher = (url, { arg })=>axios/* axiosInstance */.b.patch(url, JSON.stringify(arg)).then((res)=>res);
const useUpdateCart = ()=>{
    const { data, trigger, isMutating, error } = (0,mutation_dist/* default */.Z)(api/* API_ENDPOINT */.QP.USER_CARTS, useUpdateCart_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/cart/mutation/useDeleteCart.ts



const useDeleteCart_fetcher = (url, { arg })=>axios/* axiosInstance */.b.patch(api/* API_ENDPOINT */.QP.CARTS, arg).then((res)=>res);
const useDeleteCart = ()=>{
    const { data, trigger, isMutating, error } = (0,mutation_dist/* default */.Z)(api/* API_KEY */.$h.DELETE_CART, useDeleteCart_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/cart/index.ts








/***/ }),

/***/ 73788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useCreateCart)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var swr_mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77237);



const fetcher = (url, { arg })=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.post(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.CARTS, JSON.stringify(arg)).then((res)=>res);
const useCreateCart = ()=>{
    const { data, trigger, isMutating, error } = (0,swr_mutation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_KEY */ .$h.CREATE_CART, fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};


/***/ }),

/***/ 60300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useGetCartById)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var _utils_concatHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58308);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53395);




const fetcher = (url)=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(url).then((res)=>res);
const useGetCartById = (userCartId)=>{
    return (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_utils_concatHref__WEBPACK_IMPORTED_MODULE_3__/* .concatHref */ .R)(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.CARTS, userCartId), fetcher);
};


/***/ }),

/***/ 22536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ useGetCarts)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53395);



const fetcher = (url)=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(url).then((res)=>res);
const useGetCarts = ()=>{
    return (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.CARTS, fetcher);
};


/***/ }),

/***/ 5397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r4: () => (/* reexport */ useCreateNotification),
  dt: () => (/* reexport */ useDeleteNotification),
  $v: () => (/* reexport */ useGetNotificationById/* useGetNotificationById */.$),
  _Y: () => (/* reexport */ useGetNotificationsByUser),
  dc: () => (/* reexport */ useUpdateNotification)
});

// UNUSED EXPORTS: useGetNotifications

// EXTERNAL MODULE: ./src/hooks/api/notification/query/useGetNotifications.ts
var useGetNotifications = __webpack_require__(23159);
// EXTERNAL MODULE: ./src/hooks/api/notification/query/useGetNotificationById.ts
var useGetNotificationById = __webpack_require__(44583);
// EXTERNAL MODULE: ./src/api/axios.ts
var axios = __webpack_require__(217);
// EXTERNAL MODULE: ./src/constants/api.ts
var api = __webpack_require__(30425);
// EXTERNAL MODULE: ./src/utils/concatHref.ts
var concatHref = __webpack_require__(58308);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs
var dist = __webpack_require__(53395);
;// CONCATENATED MODULE: ./src/hooks/api/notification/query/useGetNotificationsByUser.ts




const fetcher = (url)=>axios/* axiosInstance */.b.get(url).then((res)=>res);
const useGetNotificationsByUser = (userInfo)=>{
    return (0,dist/* default */.ZP)(userInfo ? (0,concatHref/* concatHref */.R)(api/* API_ENDPOINT */.QP.NOTIFICATIONS, userInfo.id) : null, fetcher);
};

// EXTERNAL MODULE: ./node_modules/swr/mutation/dist/index.mjs
var mutation_dist = __webpack_require__(77237);
;// CONCATENATED MODULE: ./src/hooks/api/notification/mutation/useCreateNotification.ts



const useCreateNotification_fetcher = (url, { arg })=>axios/* axiosInstance */.b.post(api/* API_ENDPOINT */.QP.NOTIFICATIONS, JSON.stringify(arg)).then((res)=>res);
const useCreateNotification = ()=>{
    const { data, trigger, isMutating, error } = (0,mutation_dist/* default */.Z)(api/* API_KEY */.$h.CREATE_NOTIFICATION, useCreateNotification_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/notification/mutation/useUpdateNotification.ts




const useUpdateNotification_fetcher = (url, { arg })=>axios/* axiosInstance */.b.patch(url, JSON.stringify(arg)).then((res)=>res);
const useUpdateNotification = (notificationId)=>{
    const { data, trigger, isMutating, error } = (0,mutation_dist/* default */.Z)((0,concatHref/* concatHref */.R)(api/* API_ENDPOINT */.QP.NOTIFICATIONS, notificationId), useUpdateNotification_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/notification/mutation/useDeleteNotification.ts




const useDeleteNotification_fetcher = (url, { arg })=>axios/* axiosInstance */.b.delete((0,concatHref/* concatHref */.R)(api/* API_ENDPOINT */.QP.NOTIFICATIONS, arg)).then((res)=>res);
const useDeleteNotification = ()=>{
    const { data, trigger, isMutating, error } = (0,mutation_dist/* default */.Z)(api/* API_KEY */.$h.DELETE_NOTIFICATION, useDeleteNotification_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/notification/index.ts








/***/ }),

/***/ 44583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useGetNotificationById)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var _utils_concatHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58308);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53395);




const fetcher = (url)=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(url).then((res)=>res);
const useGetNotificationById = (notificationId)=>{
    return (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_utils_concatHref__WEBPACK_IMPORTED_MODULE_3__/* .concatHref */ .R)(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.NOTIFICATIONS, notificationId), fetcher);
};


/***/ }),

/***/ 23159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useGetNotifications)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53395);



const fetcher = (url)=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(url).then((res)=>res);
const useGetNotifications = (userInfo)=>{
    return (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(userInfo ? _constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.NOTIFICATIONS : null, fetcher);
};


/***/ }),

/***/ 28313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Co: () => (/* binding */ voucherList),
/* harmony export */   Lh: () => (/* binding */ userList),
/* harmony export */   Tq: () => (/* binding */ exploreVideoList),
/* harmony export */   Uu: () => (/* binding */ productList),
/* harmony export */   d5: () => (/* binding */ notificationList),
/* harmony export */   gI: () => (/* binding */ userCartList),
/* harmony export */   nV: () => (/* binding */ saveList),
/* harmony export */   sP: () => (/* binding */ imagePreviews)
/* harmony export */ });
/* unused harmony exports productInformation, productPolicy, productDescription, documentList, exploreVideoStories */
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51663);
/* harmony import */ var _constants_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86756);
/* harmony import */ var _constants_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15142);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80094);
/* harmony import */ var _constants_explore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88686);





const voucherList = [
    {
        id: "voucher-1",
        key: "voucher-1",
        discountOption: "amount",
        discount: {
            amount: 300000000
        },
        productId: "product-1",
        condition: "Alibaba",
        expiredDate: "31/12/2023"
    },
    {
        id: "voucher-2",
        key: "voucher-2",
        discountOption: "percent",
        discount: {
            percent: 7.5
        },
        productId: "product-2",
        condition: "kh\xf4ng vay",
        expiredDate: "31/12/2023"
    },
    {
        id: "voucher-3",
        key: "voucher-3",
        discountOption: "percent",
        discount: {
            percent: 1.5
        },
        productId: "product-3",
        condition: "k\xfd HĐMB sớm",
        expiredDate: "31/12/2023"
    },
    {
        id: "voucher-4",
        key: "voucher-4",
        discountOption: "percent",
        discount: {
            percent: 15
        },
        productId: "product-4",
        condition: "thanh to\xe1n sớm 95% trong v\xf2ng 3 th\xe1ng",
        expiredDate: "31/12/2023"
    },
    {
        id: "voucher-5",
        key: "voucher-5",
        discountOption: "percent",
        discount: {
            percent: 1
        },
        productId: "product-5",
        condition: "mua 2 căn trở l\xean",
        expiredDate: "31/12/2023"
    },
    {
        id: "voucher-6",
        key: "voucher-6",
        discountOption: "percent",
        discount: {
            percent: 9
        },
        productId: "product-1",
        condition: "tr\xean số tiền v\xe0 số ng\xe0y thanh to\xe1n trước hạn của từng đợt",
        expiredDate: "31/12/2023"
    }
];
const productInformation = {
    landArea: "Diện t\xedch đất 150m2",
    floorArea: "Diện t\xedch s\xe0n 8x12m",
    floor: "5 tầng",
    bedroom: "4 ph\xf2ng ngủ - 2 hồ bơi",
    bathroom: "4 ph\xf2ng tắm",
    other: "Đơn gi\xe1"
};
const productPolicy = {
    main: `  - Bàn Giao đầy đủ nội thất cao cấp
  - Nội thất tùy biến tôn vinh chủ nhân với các module đa dạng: thư phòng, nhà hát tại gia, home spa & gym, wine & cigar lounge
  - Chủ nhân được sử dụng 30 đêm nghỉ/năm trong vòng 10 năm khi tham gia CTCT
  - Chủ nhân có thể mua ở và không tham gia CTCT
  - Dinh thự được quản lý theo tiêu chuẩn	6 sao của Gran Meliá đầu tiên tại Châu Á
  - Tặng 2 thẻ Melia Platinum 
  - Miễn phí dịch vụ quản lý vận hành 10 năm đối với Khách hàng mua ở
  - 10 vé xem Show the Đó/năm
  - 10 vé lặn ngắm san hô/năm
  - 1 bữa tiệc tại gia cho 6 người/năm
  - Spa Thổ Nhĩ Kì 2 người/năm
  - 1 chuyến du thuyền cho 6-10 người/năm
  - Dịch vụ đưa đón bằng xe riêng cùng quản gia riêng`,
    loan: `  - Thanh toán giãn 30% đến khi nhận nhà Quý I/2024
  - Lãi suất 0% kể từ ngày giải ngân đầu tiên đến 31/12/2024 cho khoản vay 65%
  - Ân hạn nợ gốc lên tới 36 tháng
  - Thời hạn vay lên tới 30 năm 
  - Miễn phí trả nợ trước hạn trong thời gian hỗ trợ lãi suất`,
    equity: `  - Chia 10 lần thanh toán: mỗi lần là 10% cách nhau 3 tháng
  - Ký HĐMB: sau 2 tháng kể từ ngày đặt cọc
  - Thanh toán đủ 45% là nhận nhà 15/2/2024
  - Theo thông báo nhận sổ hồng thanh toán 5%`
};
const productDescription = {
    pros: `  - Giá cho thuê cao nhất : 160 triệu/đêm
  - Lợi nhuận khách hàng nhận dự kiến 714 triệu/tháng - tỷ suất sinh lời 3,5%/năm
  - Được thiết kế riêng bởi nhà thiết kế Roberto Cavalli 82 tuổi và gần 50 năm kinh nghiệm từ giường ngủ, thảm, sofa, bàn ăn, giấy dán tường, các loại bát đĩa, lọ hoa, đèn bàn đều theo trường phái Avant Garde, ký phiên bản độc quyền 2 căn duy nhất trên toàn thế giới.
  - Đã có sổ đất riêng ra full diện tích đất
  - Đơn giá thấp bằng 1/3 giá đường Trần Phú Nha Trang
  - Vị trí mặt biển duy nhất còn lại của Vịnh Nha Trang, được sở du lich đánh giá là trung tâm hàng đầu của Nha Trang và khách du lịch quốc tế khi có 4 thương hiệu hàng đầu Gran Meliá, Melia, Newworld, Accor`,
    cons: ``,
    juridice: "Sở hữu l\xe2u d\xe0i",
    delivery: {
        date: "Dự kiến qu\xed IV/2025",
        info: "B\xe0n giao th\xf4 ho\xe0n thiện ngo\xe0i"
    }
};
const productList = [
    {
        id: "product-1",
        key: "product-1",
        type: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TYPE.SINGLE,
        tag: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TAG.INVESTOR,
        investor: {
            name: "1",
            logo: "http://google.com"
        },
        location: {
            detail: "6 T\xe2n Tr\xe0o, P.T\xe2n Ph\xfa, Q.7",
            main: "Nha Trang",
            sub: "Phường Bến Ngh\xe9",
            lng: 106,
            lat: 10,
            nearby: [
                {
                    name: "Vịnh Nha Trang",
                    distance: "0m"
                },
                {
                    name: "San h\xf4",
                    distance: "60m"
                },
                {
                    name: "N\xfai c\xf4 Ti\xean",
                    distance: "100m"
                },
                {
                    name: "Bến du thuyền",
                    distance: "500m"
                },
                {
                    name: "B\xe3i tắm vega",
                    distance: "500m"
                }
            ],
            popular: [
                {
                    name: "Chợ đ\xeam Trần Ph\xfa Nha Trang",
                    distance: "10 ph\xfat"
                },
                {
                    name: "Th\xe1p PoNagar",
                    distance: "8 ph\xfat"
                },
                {
                    name: "Ga Nha Trang",
                    distance: "15 ph\xfat"
                },
                {
                    name: "Cảng Nha Trang",
                    distance: "20 ph\xfat"
                }
            ]
        },
        policy: productPolicy,
        description: productDescription,
        view: 110,
        information: productInformation,
        name: "M\xe3 căn M110",
        image: {
            main: [
                "https://picsum.photos/id/200/1600/900"
            ],
            reality: [
                "https://picsum.photos/id/200/1600/900"
            ],
            area: [
                "https://picsum.photos/id/200/1600/900"
            ],
            thumbnail: "https://picsum.photos/id/200/1600/900"
        },
        logo: _assets__WEBPACK_IMPORTED_MODULE_0__/* .ImageLogoSG */ .UE,
        originalPrice: 13500000000,
        price: 13000000000,
        status: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.STATUS.SOLD
    },
    {
        id: "product-2",
        key: "product-2",
        type: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TYPE.DOUBLE,
        tag: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TAG.INVESTOR,
        investor: {
            name: "1",
            logo: "http://google.com"
        },
        location: {
            detail: "6 T\xe2n Tr\xe0o, P.T\xe2n Ph\xfa, Q.7",
            main: "Nha Trang",
            sub: "Phường Bến Ngh\xe9",
            lng: 106,
            lat: 10,
            nearby: [
                {
                    name: "Vịnh Nha Trang",
                    distance: "0m"
                },
                {
                    name: "San h\xf4",
                    distance: "60m"
                },
                {
                    name: "N\xfai c\xf4 Ti\xean",
                    distance: "100m"
                },
                {
                    name: "Bến du thuyền",
                    distance: "500m"
                },
                {
                    name: "B\xe3i tắm vega",
                    distance: "500m"
                }
            ],
            popular: [
                {
                    name: "Chợ đ\xeam Trần Ph\xfa Nha Trang",
                    distance: "10 ph\xfat"
                },
                {
                    name: "Th\xe1p PoNagar",
                    distance: "8 ph\xfat"
                },
                {
                    name: "Ga Nha Trang",
                    distance: "15 ph\xfat"
                },
                {
                    name: "Cảng Nha Trang",
                    distance: "20 ph\xfat"
                }
            ]
        },
        policy: productPolicy,
        description: productDescription,
        view: 12,
        information: productInformation,
        name: "M\xe3 căn W616",
        image: {
            main: [
                "https://picsum.photos/id/201/1600/900"
            ],
            reality: [
                "https://picsum.photos/id/201/1600/900"
            ],
            area: [
                "https://picsum.photos/id/201/1600/900"
            ],
            thumbnail: "https://picsum.photos/id/201/1600/900"
        },
        logo: _assets__WEBPACK_IMPORTED_MODULE_0__/* .ImageLogoSG */ .UE,
        originalPrice: 13500000000,
        price: 13000000000,
        status: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.STATUS.IN_STOCK
    },
    {
        id: "product-3",
        key: "product-3",
        type: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TYPE.SHOPHOUSE,
        tag: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TAG.INVESTOR,
        investor: {
            name: "1",
            logo: "http://google.com"
        },
        location: {
            detail: "6 T\xe2n Tr\xe0o, P.T\xe2n Ph\xfa, Q.7",
            main: "Nha Trang",
            sub: "Phường Bến Ngh\xe9",
            lng: 106,
            lat: 10,
            nearby: [
                {
                    name: "Vịnh Nha Trang",
                    distance: "0m"
                },
                {
                    name: "San h\xf4",
                    distance: "60m"
                },
                {
                    name: "N\xfai c\xf4 Ti\xean",
                    distance: "100m"
                },
                {
                    name: "Bến du thuyền",
                    distance: "500m"
                },
                {
                    name: "B\xe3i tắm vega",
                    distance: "500m"
                }
            ],
            popular: [
                {
                    name: "Chợ đ\xeam Trần Ph\xfa Nha Trang",
                    distance: "10 ph\xfat"
                },
                {
                    name: "Th\xe1p PoNagar",
                    distance: "8 ph\xfat"
                },
                {
                    name: "Ga Nha Trang",
                    distance: "15 ph\xfat"
                },
                {
                    name: "Cảng Nha Trang",
                    distance: "20 ph\xfat"
                }
            ]
        },
        policy: productPolicy,
        description: productDescription,
        view: 45,
        information: productInformation,
        name: "M\xe3 căn Sf30",
        image: {
            main: [
                "https://picsum.photos/id/202/1600/900"
            ],
            reality: [
                "https://picsum.photos/id/202/1600/900"
            ],
            area: [
                "https://picsum.photos/id/202/1600/900"
            ],
            thumbnail: "https://picsum.photos/id/202/1600/900"
        },
        logo: _assets__WEBPACK_IMPORTED_MODULE_0__/* .ImageLogoSG */ .UE,
        originalPrice: 13500000000,
        price: 13000000000,
        status: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.STATUS.IN_STOCK
    },
    {
        id: "product-4",
        key: "product-4",
        type: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TYPE.APARTMENT,
        tag: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TAG.INVESTOR,
        investor: {
            name: "1",
            logo: "http://google.com"
        },
        location: {
            detail: "6 T\xe2n Tr\xe0o, P.T\xe2n Ph\xfa, Q.7",
            main: "Nha Trang",
            sub: "Phường Bến Ngh\xe9",
            lng: 106,
            lat: 10,
            nearby: [
                {
                    name: "Vịnh Nha Trang",
                    distance: "0m"
                },
                {
                    name: "San h\xf4",
                    distance: "60m"
                },
                {
                    name: "N\xfai c\xf4 Ti\xean",
                    distance: "100m"
                },
                {
                    name: "Bến du thuyền",
                    distance: "500m"
                },
                {
                    name: "B\xe3i tắm vega",
                    distance: "500m"
                }
            ],
            popular: [
                {
                    name: "Chợ đ\xeam Trần Ph\xfa Nha Trang",
                    distance: "10 ph\xfat"
                },
                {
                    name: "Th\xe1p PoNagar",
                    distance: "8 ph\xfat"
                },
                {
                    name: "Ga Nha Trang",
                    distance: "15 ph\xfat"
                },
                {
                    name: "Cảng Nha Trang",
                    distance: "20 ph\xfat"
                }
            ]
        },
        policy: productPolicy,
        description: productDescription,
        view: 110,
        information: productInformation,
        name: "M\xe3 căn ND2",
        image: {
            main: [
                "https://picsum.photos/id/203/1600/900"
            ],
            reality: [
                "https://picsum.photos/id/203/1600/900"
            ],
            area: [
                "https://picsum.photos/id/203/1600/900"
            ],
            thumbnail: "https://picsum.photos/id/203/1600/900"
        },
        logo: _assets__WEBPACK_IMPORTED_MODULE_0__/* .ImageLogoSG */ .UE,
        originalPrice: 13500000000,
        price: 13000000000,
        status: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.STATUS.SOLD
    },
    {
        id: "product-5",
        key: "product-5",
        type: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TYPE.SINGLE,
        tag: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.TAG.INVESTOR,
        investor: {
            name: "1",
            logo: "http://google.com"
        },
        location: {
            detail: "6 T\xe2n Tr\xe0o, P.T\xe2n Ph\xfa, Q.7",
            main: "Nha Trang",
            sub: "Phường Bến Ngh\xe9",
            lng: 106,
            lat: 10,
            nearby: [
                {
                    name: "Vịnh Nha Trang",
                    distance: "0m"
                },
                {
                    name: "San h\xf4",
                    distance: "60m"
                },
                {
                    name: "N\xfai c\xf4 Ti\xean",
                    distance: "100m"
                },
                {
                    name: "Bến du thuyền",
                    distance: "500m"
                },
                {
                    name: "B\xe3i tắm vega",
                    distance: "500m"
                }
            ],
            popular: [
                {
                    name: "Chợ đ\xeam Trần Ph\xfa Nha Trang",
                    distance: "10 ph\xfat"
                },
                {
                    name: "Th\xe1p PoNagar",
                    distance: "8 ph\xfat"
                },
                {
                    name: "Ga Nha Trang",
                    distance: "15 ph\xfat"
                },
                {
                    name: "Cảng Nha Trang",
                    distance: "20 ph\xfat"
                }
            ]
        },
        policy: productPolicy,
        description: productDescription,
        view: 110,
        information: productInformation,
        name: "M\xe3 căn 2412",
        image: {
            main: [
                "https://picsum.photos/id/204/1600/900"
            ],
            reality: [
                "https://picsum.photos/id/204/1600/900"
            ],
            area: [
                "https://picsum.photos/id/204/1600/900"
            ],
            thumbnail: "https://picsum.photos/id/204/1600/900"
        },
        logo: _assets__WEBPACK_IMPORTED_MODULE_0__/* .ImageLogoSG */ .UE,
        originalPrice: 13500000000,
        price: 13000000000,
        status: _constants_route__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_PARAMS */ .Tx.STATUS.IN_STOCK
    }
];
const imagePreviews = [
    {
        id: "1",
        src: "https://picsum.photos/id/25/1600/900"
    },
    {
        id: "2",
        src: "https://picsum.photos/id/26/1600/900"
    },
    {
        id: "3",
        src: "https://picsum.photos/id/27/1600/900"
    },
    {
        id: "4",
        src: "https://picsum.photos/id/29/1600/900"
    },
    {
        id: "5",
        src: "https://picsum.photos/id/30/1600/900"
    },
    {
        id: "6",
        src: "https://picsum.photos/id/31/1600/900"
    },
    {
        id: "7",
        src: "https://picsum.photos/id/32/1600/900"
    }
];
const notificationList = [
    {
        id: "noti-1",
        key: "noti-1",
        type: _constants_notification__WEBPACK_IMPORTED_MODULE_2__/* .NOTIFICATION_TYPE */ .tx.UPDATE,
        avatar: "https://picsum.photos/id/40/300/300",
        title: "Title 1",
        date: "01/07/2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
        target: [
            "user-1",
            "user-2"
        ]
    },
    {
        id: "noti-2",
        key: "noti-2",
        type: _constants_notification__WEBPACK_IMPORTED_MODULE_2__/* .NOTIFICATION_TYPE */ .tx.UPDATE,
        avatar: "https://picsum.photos/id/41/300/300",
        title: "Title 2",
        date: "01/07/2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
        target: [
            "user-1"
        ]
    },
    {
        id: "noti-3",
        key: "noti-3",
        type: _constants_notification__WEBPACK_IMPORTED_MODULE_2__/* .NOTIFICATION_TYPE */ .tx.UPDATE,
        avatar: "https://picsum.photos/id/42/300/300",
        title: "Title 3",
        date: "01/07/2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
        target: []
    },
    {
        id: "noti-4",
        key: "noti-4",
        type: _constants_notification__WEBPACK_IMPORTED_MODULE_2__/* .NOTIFICATION_TYPE */ .tx.UPDATE,
        avatar: "https://picsum.photos/id/43/300/300",
        title: "Title 4",
        date: "01/07/2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
        target: []
    },
    {
        id: "noti-5",
        key: "noti-5",
        type: _constants_notification__WEBPACK_IMPORTED_MODULE_2__/* .NOTIFICATION_TYPE */ .tx.UPDATE,
        avatar: "https://picsum.photos/id/44/300/300",
        title: "Title 5",
        date: "01/07/2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
        target: []
    },
    {
        id: "noti-6",
        key: "noti-6",
        type: _constants_notification__WEBPACK_IMPORTED_MODULE_2__/* .NOTIFICATION_TYPE */ .tx.INFO,
        avatar: "https://picsum.photos/id/45/300/300",
        title: "Title 6",
        date: "01/07/2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
        target: []
    },
    {
        id: "noti-7",
        key: "noti-7",
        type: _constants_notification__WEBPACK_IMPORTED_MODULE_2__/* .NOTIFICATION_TYPE */ .tx.INFO,
        avatar: "https://picsum.photos/id/46/300/300",
        title: "Title 7",
        date: "01/07/2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
        target: []
    },
    {
        id: "noti-8",
        key: "noti-8",
        type: _constants_notification__WEBPACK_IMPORTED_MODULE_2__/* .NOTIFICATION_TYPE */ .tx.INFO,
        avatar: "https://picsum.photos/id/47/300/300",
        title: "Title 8",
        date: "01/07/2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
        target: []
    }
];
const saveList = [
    {
        ...productList[0],
        type: _constants_product__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCT_SAVE_VALUE */ .jH.LATER
    },
    {
        ...productList[1],
        type: _constants_product__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCT_SAVE_VALUE */ .jH.BUY
    },
    {
        ...productList[2],
        type: _constants_product__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCT_SAVE_VALUE */ .jH.BUY
    },
    {
        ...productList[3],
        type: _constants_product__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCT_SAVE_VALUE */ .jH.LATER
    },
    {
        ...productList[4],
        type: _constants_product__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCT_SAVE_VALUE */ .jH.LATER
    }
];
const documentList = [
    {
        id: "document-1",
        title: "Title 1",
        href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf"
    },
    {
        id: "document-2",
        title: "Title 2",
        href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf"
    },
    {
        id: "document-3",
        title: "Title 3",
        href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf"
    },
    {
        id: "document-4",
        title: "Title 4",
        href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf"
    },
    {
        id: "document-5",
        title: "Title 5",
        href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf"
    }
];
const exploreVideoStories = [
    {
        id: "story-1",
        title: "Title 1",
        url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
        type: _constants_explore__WEBPACK_IMPORTED_MODULE_4__/* .EXPLORE_TYPE */ .z.VIDEO
    },
    {
        id: "story-2",
        title: "Title 2",
        url: "https://picsum.photos/id/100/900/1600",
        type: _constants_explore__WEBPACK_IMPORTED_MODULE_4__/* .EXPLORE_TYPE */ .z.IMAGE
    },
    {
        id: "story-3",
        title: "Title 3",
        url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
        type: _constants_explore__WEBPACK_IMPORTED_MODULE_4__/* .EXPLORE_TYPE */ .z.VIDEO
    },
    {
        id: "story-4",
        title: "Title 4",
        url: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4",
        type: _constants_explore__WEBPACK_IMPORTED_MODULE_4__/* .EXPLORE_TYPE */ .z.VIDEO
    }
];
const exploreVideoList = [
    {
        id: "video-1",
        key: "video-1",
        title: "Title 1",
        url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-2",
        key: "video-2",
        title: "Title 2",
        url: "https://assets.mixkit.co/videos/preview/mixkit-boyfriends-taking-selfies-3200-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-3",
        key: "video-3",
        title: "Title 3",
        url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-4",
        key: "video-4",
        title: "Title 4",
        url: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-5",
        key: "video-5",
        title: "Title 5",
        url: "https://assets.mixkit.co/videos/preview/mixkit-girl-looking-proudly-at-a-homemade-valentines-day-card-47441-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-6",
        key: "video-6",
        title: "Title 6",
        url: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-cold-and-pale-appearance-39877-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-7",
        key: "video-7",
        title: "Title 7",
        url: "https://assets.mixkit.co/videos/preview/mixkit-girl-with-roller-skates-standing-in-the-middle-of-a-34545-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-8",
        key: "video-8",
        title: "Title 8",
        url: "https://assets.mixkit.co/videos/preview/mixkit-two-avenues-with-many-cars-traveling-at-night-34562-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-9",
        key: "video-9",
        title: "Title 9",
        url: "https://assets.mixkit.co/videos/preview/mixkit-avenue-with-trees-buildings-and-fast-cars-at-dusk-34563-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-10",
        key: "video-10",
        title: "Title 10",
        url: "https://assets.mixkit.co/videos/preview/mixkit-decorated-christmas-tree-in-close-up-shot-39750-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-11",
        key: "video-11",
        title: "Title 11",
        url: "https://assets.mixkit.co/videos/preview/mixkit-friends-chatting-while-sitting-at-a-party-48119-large.mp4",
        stories: exploreVideoStories
    },
    {
        id: "video-12",
        key: "video-12",
        title: "Title 12",
        url: "https://assets.mixkit.co/videos/preview/mixkit-man-runs-past-ground-level-shot-32809-large.mp4",
        stories: exploreVideoStories
    }
];
const userList = [
    {
        email: "user1@email.com",
        name: "User 1",
        role: {
            key: "user-1",
            name: "user"
        },
        id: "user-1",
        gender: "male",
        dateOfBirth: "",
        phoneNumber: ""
    },
    {
        email: "user2@email.com",
        name: "User 2",
        role: {
            key: "user-2",
            name: "user"
        },
        id: "user-2",
        gender: "female",
        dateOfBirth: "",
        phoneNumber: ""
    },
    {
        email: "admin1@email.com",
        name: "Admin 1",
        role: {
            key: "admin-1",
            name: "admin"
        },
        id: "admin-1",
        gender: "male",
        dateOfBirth: "",
        phoneNumber: ""
    }
];
const userCartList = [
    {
        id: "userCart-1",
        key: "userCart-1",
        bookingInfo: {
            userId: "user-1",
            date: "31/07/2023",
            place: "6 Tan Trao, P.Tan Phu",
            phoneNumber: "0123456789"
        },
        cartList: [
            {
                id: "cart-1",
                productId: "product-1",
                quantity: 1,
                voucherAdded: [
                    "voucher-1",
                    "voucher-2"
                ],
                value: "product-1"
            },
            {
                id: "cart-2",
                productId: "product-2",
                quantity: 2,
                voucherAdded: [
                    "voucher-3"
                ],
                value: "product-2"
            }
        ]
    }
];


/***/ }),

/***/ 44666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthContext: () => (/* binding */ AuthContext),
/* harmony export */   "default": () => (/* binding */ AuthProvider),
/* harmony export */   useAuthContext: () => (/* binding */ useAuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ AuthContext,default,useAuthContext auto */ 

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    userInfo: null,
    setUserInfo: ()=>{}
});
function AuthProvider({ children }) {
    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const value = {
        userInfo,
        setUserInfo
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: value,
        children: children
    });
}
const useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);


/***/ }),

/***/ 13703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartContext: () => (/* binding */ CartContext),
/* harmony export */   "default": () => (/* binding */ CartProvider),
/* harmony export */   useCartContext: () => (/* binding */ useCartContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_api_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10792);
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28313);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44666);
/* __next_internal_client_entry_do_not_use__ CartContext,default,useCartContext auto */ 




const mockData = _mock_data__WEBPACK_IMPORTED_MODULE_2__/* .userCartList */ .gI[0].cartList;
const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({
    cart: [],
    setCart: ()=>{},
    checkedListDefault: [],
    checkedList: [],
    setCheckedList: ()=>{},
    totalPrice: 0,
    addToCart: ()=>{},
    removeFromCart: ()=>{}
});
function CartProvider({ children }) {
    const { userInfo } = (0,_AuthProvider__WEBPACK_IMPORTED_MODULE_4__.useAuthContext)();
    const { data: cartData } = (0,_hooks_api_cart__WEBPACK_IMPORTED_MODULE_1__/* .useGetCartByUser */ .KL)(userInfo);
    const { trigger: addCartItem } = (0,_hooks_api_cart__WEBPACK_IMPORTED_MODULE_1__/* .useUpdateCart */ .rA)();
    const { trigger: deleteCartItem } = (0,_hooks_api_cart__WEBPACK_IMPORTED_MODULE_1__/* .useDeleteCart */ .r0)();
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(cartData ?? []);
    const checkedListDefault = cart.map((item)=>item.value);
    const [checkedList, setCheckedList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(checkedListDefault);
    const totalPrice = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>cart.reduce((prev, current)=>{
            return prev + (_mock_data__WEBPACK_IMPORTED_MODULE_2__/* .productList */ .Uu.find(()=>checkedList.includes(current.productId))?.price || 0);
        }, 0), [
        cart,
        checkedList
    ]);
    const addToCart = (item)=>{
        addCartItem(item);
    };
    const removeFromCart = (productId)=>{
        deleteCartItem(productId);
    };
    const value = {
        cart,
        setCart,
        checkedListDefault,
        checkedList,
        setCheckedList,
        totalPrice,
        addToCart,
        removeFromCart
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: value,
        children: children
    });
}
const useCartContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(CartContext);


/***/ }),

/***/ 50871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ConfigProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/providers/ConfigProvider.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var ConfigProvider_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(14719);
var ConfigProvider_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(ConfigProvider_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var lib = __webpack_require__(2318);
// EXTERNAL MODULE: ./src/providers/ModalProvider.tsx
var ModalProvider = __webpack_require__(17942);
// EXTERNAL MODULE: ./src/providers/ProductComparisonProvider/index.tsx
var ProductComparisonProvider = __webpack_require__(47835);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs
var dist = __webpack_require__(53395);
// EXTERNAL MODULE: ./src/constants/api.ts
var api = __webpack_require__(30425);
// EXTERNAL MODULE: ./src/constants/route.ts
var route = __webpack_require__(80094);
;// CONCATENATED MODULE: ./src/constants/handler.ts


const HANDLER = {
    [api/* API_KEY */.$h.SIGN_IN]: {
        MESSAGE: "Đăng nhập th\xe0nh c\xf4ng"
    },
    [api/* API_KEY */.$h.SIGN_UP]: {
        MESSAGE: "Đăng k\xfd th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.SIGN_IN
    },
    [api/* API_KEY */.$h.CREATE_PRODUCT]: {
        MESSAGE: "Tạo sản phẩm th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.ADMIN_PRODUCT
    },
    [api/* API_KEY */.$h.CREATE_VOUCHER]: {
        MESSAGE: "Tạo voucher th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.ADMIN_VOUCHER
    },
    [api/* API_KEY */.$h.CREATE_EXPLORE]: {
        MESSAGE: "Tạo kh\xe1m ph\xe1 th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.ADMIN_EXPLORE
    },
    [api/* API_KEY */.$h.CREATE_NOTIFICATION]: {
        MESSAGE: "Tạo th\xf4ng b\xe1o th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.ADMIN_USER_NOTIFICATION
    },
    [api/* API_KEY */.$h.CREATE_CART]: {
        MESSAGE: "Tạo tư vấn đơn h\xe0ng th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.CART
    },
    [api/* API_KEY */.$h.DELETE_PRODUCT]: {
        MESSAGE: "X\xf3a sản phẩm th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.ADMIN_PRODUCT
    },
    [api/* API_KEY */.$h.DELETE_VOUCHER]: {
        MESSAGE: "X\xf3a voucher th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.ADMIN_VOUCHER
    },
    [api/* API_KEY */.$h.DELETE_EXPLORE]: {
        MESSAGE: "X\xf3a kh\xe1m ph\xe1 th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.ADMIN_EXPLORE
    },
    [api/* API_KEY */.$h.DELETE_NOTIFICATION]: {
        MESSAGE: "X\xf3a th\xf4ng b\xe1o th\xe0nh c\xf4ng",
        ROUTE: route/* ROUTE */.ln.ADMIN_USER_NOTIFICATION
    }
};

// EXTERNAL MODULE: ./src/api/axios.ts
var axios = __webpack_require__(217);
// EXTERNAL MODULE: ./src/providers/AuthProvider.tsx
var AuthProvider = __webpack_require__(44666);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/swr/immutable/dist/index.mjs
var immutable_dist = __webpack_require__(59394);
;// CONCATENATED MODULE: ./src/hooks/api/auth/query/useGetMe.ts





const fetcher = (url)=>axios/* axiosInstance */.b.get(url).then((res)=>res);
const useGetMe = ()=>{
    const { data, isLoading, error } = (0,immutable_dist/* default */.Z)(api/* API_ENDPOINT */.QP.GET_ME, fetcher);
    const { setUserInfo } = (0,AuthProvider.useAuthContext)();
    (0,react_.useEffect)(()=>{
        if (!data) return;
        const { email, name, gender, role, key, phoneNumber, dateOfBirth } = data;
        setUserInfo({
            email,
            name,
            gender,
            role,
            id: key,
            phoneNumber,
            dateOfBirth
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        data
    ]);
    return {
        data,
        isLoading,
        error
    };
};

// EXTERNAL MODULE: ./src/app/(site)/loading.tsx
var loading = __webpack_require__(56298);
;// CONCATENATED MODULE: ./src/providers/ConfigProvider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function ConfigProvider({ children }) {
    const [messageApi, contextHolder] = lib/* message */.yw.useMessage();
    const { isLoading } = useGetMe();
    if (isLoading) return /*#__PURE__*/ jsx_runtime_.jsx(loading["default"], {});
    return /*#__PURE__*/ jsx_runtime_.jsx(lib/* ConfigProvider */.iV, {
        theme: {
            token: {
                fontFamily: (ConfigProvider_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).style.fontFamily
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* SWRConfig */.J$, {
            value: {
                onSuccess: (data, key, config)=>{
                    if (HANDLER[key]) {
                        messageApi.success(HANDLER[key].MESSAGE);
                    }
                },
                onError: (error, key)=>{
                    console.log({
                        error
                    });
                    messageApi.error(error?.response?.data?.message);
                }
            },
            children: [
                contextHolder,
                /*#__PURE__*/ jsx_runtime_.jsx(ModalProvider/* default */.ZP, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProductComparisonProvider/* default */.ZP, {
                        children: children
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 74121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutContext: () => (/* binding */ LayoutContext),
/* harmony export */   "default": () => (/* binding */ LayoutProvider),
/* harmony export */   useLayoutContext: () => (/* binding */ useLayoutContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80094);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ LayoutContext,default,useLayoutContext auto */ 



const LayoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({
    isAtExplorePage: false
});
function LayoutProvider({ children }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const [isAtExplorePage, setIsAtExplorePage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setIsAtExplorePage(Boolean(pathname.includes(_constants_route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE */ .ln.EXPLORE) && id));
    }, [
        pathname,
        id
    ]);
    const value = {
        isAtExplorePage
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutContext.Provider, {
        value: value,
        children: children
    });
}
const useLayoutContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(LayoutContext);


/***/ }),

/***/ 17942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ ModalProvider),
/* harmony export */   vR: () => (/* binding */ useModalContext)
/* harmony export */ });
/* unused harmony export ModalContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54922);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2318);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ ModalContext,default,useModalContext auto */ 



const ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    showBookingModal: ()=>{},
    hideBookingModal: ()=>{},
    showMDeleteConfirmationModal: ()=>{},
    hideDeleteConfirmationModal: ()=>{}
});
function ModalProvider({ children }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [handler, setHandler] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        trigger: ()=>{},
        id: ""
    });
    // Booking Modal
    const showBookingModal = ()=>{
        setIsBookingModalOpen(true);
    };
    const hideBookingModal = ()=>{
        setIsBookingModalOpen(false);
    };
    // Delete Confirmation Modal
    const showMDeleteConfirmationModal = ({ trigger, id })=>{
        setIsDeleteConfirmationModalOpen(true);
        setHandler({
            trigger,
            id
        });
    };
    const hideDeleteConfirmationModal = ()=>{
        setIsDeleteConfirmationModalOpen(false);
    };
    const confirmDeleteConfirmationModal = ()=>{
        handler.trigger?.(handler.id);
        hideDeleteConfirmationModal();
    };
    const value = {
        showBookingModal,
        hideBookingModal,
        showMDeleteConfirmationModal,
        hideDeleteConfirmationModal
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContext.Provider, {
        value: value,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u_, {
                    title: "Đặt lịch",
                    open: isBookingModalOpen,
                    onOk: hideBookingModal,
                    onCancel: hideBookingModal,
                    footer: [],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .ConsultForm */ .xq, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u_, {
                    title: "X\xf3a item",
                    open: isDeleteConfirmationModalOpen,
                    onOk: confirmDeleteConfirmationModal,
                    onCancel: hideDeleteConfirmationModal,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Bạn c\xf3 muốn x\xf3a ",
                            handler.id,
                            "?"
                        ]
                    })
                })
            ]
        })
    });
}
const useModalContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ModalContext);


/***/ }),

/***/ 47835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ ProductComparisonProvider),
/* harmony export */   zL: () => (/* binding */ useProductComparisonContext)
/* harmony export */ });
/* unused harmony export ProductComparisonContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2318);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62929);
/* harmony import */ var _productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39726);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54922);
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28313);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80094);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* __next_internal_client_entry_do_not_use__ ProductComparisonContext,default,useProductComparisonContext auto */ 










const ProductComparisonContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    showDrawer: ()=>{},
    showComparisonModal: ()=>{},
    hideComparisonModal: ()=>{},
    setComparisonProduct: ()=>{},
    removeComparisonProduct: ()=>{},
    selectedProducts: new Map([])
});
function ProductComparisonProvider({ children }) {
    const [isComparisonOpen, setIsComparisonOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isComparisonModalOpen, setIsComparisonModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [slotId, setSlotId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1");
    const [selectedProducts, setSelectedProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Map([
        [
            "1",
            _mock_data__WEBPACK_IMPORTED_MODULE_3__/* .productList */ .Uu[0]
        ],
        [
            "2",
            _mock_data__WEBPACK_IMPORTED_MODULE_3__/* .productList */ .Uu[1]
        ],
        [
            "3",
            null
        ]
    ]));
    const showDrawer = ()=>{
        setIsComparisonOpen(true);
    };
    const hideDrawer = ()=>{
        setIsComparisonOpen(false);
    };
    const showComparisonModal = (slotId)=>{
        setIsComparisonModalOpen(true);
        setSlotId(slotId);
    };
    const hideComparisonModal = ()=>{
        setIsComparisonModalOpen(false);
    };
    const setComparisonProduct = (productId)=>{
        const product = _mock_data__WEBPACK_IMPORTED_MODULE_3__/* .productList */ .Uu.find((product)=>product.id === productId) ?? null;
        const newSelectedProducts = new Map(selectedProducts);
        newSelectedProducts.set(slotId, product);
        setSelectedProducts(newSelectedProducts);
    };
    const removeComparisonProduct = (slotId)=>{
        const newSelectedProducts = new Map(selectedProducts);
        newSelectedProducts.set(slotId, null);
        setSelectedProducts(newSelectedProducts);
    };
    const value = {
        showDrawer,
        showComparisonModal,
        hideComparisonModal,
        setComparisonProduct,
        selectedProducts,
        removeComparisonProduct
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductComparisonContext.Provider, {
        value: value,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                children,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* .Drawer */ .dy, {
                    placement: "bottom",
                    onClose: hideDrawer,
                    open: isComparisonOpen,
                    rootClassName: (_productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().drawer),
                    headerStyle: {
                        display: "none"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .X2, {
                            children: Array.from(selectedProducts, ([id, product])=>({
                                    id,
                                    product
                                })).map(({ id, product }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__/* .Col */ .JX, {
                                    span: 8,
                                    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()((_productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().col), index !== selectedProducts.size - 1 && (_productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().colBorder)),
                                    children: product ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                                onClick: ()=>removeComparisonProduct(id),
                                                className: (_productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().removeBtn),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__/* .IconX */ .kLi, {
                                                    size: 20
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    src: product.image.thumbnail,
                                                    alt: "",
                                                    fill: true
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__.Typography.Text, {
                                                children: product.name
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        onClick: ()=>showComparisonModal(id),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__/* .IconPlus */ .SC9, {})
                                            }),
                                            "Th\xeam bất động sản"
                                        ]
                                    })
                                }, id))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .X2, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__/* .Col */ .JX, {
                                    span: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx, {
                                        type: "default",
                                        className: (_productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().btn),
                                        children: "Thu gọn"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__/* .Col */ .JX, {
                                    span: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        href: _constants_route__WEBPACK_IMPORTED_MODULE_6__/* .ROUTE */ .ln.COMPARISON,
                                        className: (_productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().comparisonLink),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx, {
                                            type: "primary",
                                            className: (_productComparisonProvider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().btn),
                                            onClick: hideDrawer,
                                            children: "So s\xe1nh ngay"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__/* .Modal */ .u_, {
                    title: "T\xecm sản phẩm",
                    open: isComparisonModalOpen,
                    onOk: hideComparisonModal,
                    onCancel: hideComparisonModal,
                    footer: [],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ComparisonModalPortal */ .TF, {})
                })
            ]
        })
    });
}
const useProductComparisonContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductComparisonContext);


/***/ }),

/***/ 58308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ concatHref)
/* harmony export */ });
const concatHref = (...params)=>{
    return params.join("/");
};


/***/ }),

/***/ 50383:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "page_main__hRe3N",
	"imageContainer": "page_imageContainer__XtS6j",
	"blockWrapper": "page_blockWrapper___upS7",
	"loadingWrapper": "page_loadingWrapper__AK75l",
	"errorWrapper": "page_errorWrapper__mLT31",
	"overlayShow": "page_overlayShow__lBbb8",
	"overlayHide": "page_overlayHide__DO7Bx"
};


/***/ }),

/***/ 22317:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "comparisonModalPortal_wrapper__a_EVp",
	"overlayShow": "comparisonModalPortal_overlayShow__Y0dgk",
	"overlayHide": "comparisonModalPortal_overlayHide__odkko"
};


/***/ }),

/***/ 45066:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "consultForm_wrapper__pRnji",
	"section": "consultForm_section__XPDg0",
	"input": "consultForm_input___9z_w",
	"btn": "consultForm_btn__s3FUJ",
	"overlayShow": "consultForm_overlayShow__nzEIY",
	"overlayHide": "consultForm_overlayHide__Oo38O"
};


/***/ }),

/***/ 55723:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "itemsSkeleton_wrapper__mRHxh",
	"overlayShow": "itemsSkeleton_overlayShow__WO_Ax",
	"overlayHide": "itemsSkeleton_overlayHide__T64Jg"
};


/***/ }),

/***/ 55835:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "header_wrapper__jz7Un",
	"rightSection": "header_rightSection__JBhmI",
	"triggerBtn": "header_triggerBtn__gXGn1",
	"overlay": "header_overlay__WmMg2",
	"overlayShow": "header_overlayShow__X0GUG",
	"overlayHide": "header_overlayHide__89GP9",
	"sidebar": "header_sidebar__4_e06",
	"contentShow": "header_contentShow__64fHy",
	"contentHide": "header_contentHide__YAUgu",
	"animation": "header_animation__NhOkc",
	"description": "header_description__YiOZD",
	"links": "header_links__jCfQu",
	"link": "header_link__0olM_",
	"hidden": "header_hidden__jzyJQ"
};


/***/ }),

/***/ 1327:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "navigationBar_wrapper__M_7cd",
	"item": "navigationBar_item__HDN86",
	"isActive": "navigationBar_isActive__Dz_3d",
	"revert": "navigationBar_revert__zQHdv",
	"overlayShow": "navigationBar_overlayShow__U5EWz",
	"overlayHide": "navigationBar_overlayHide__oOSBL"
};


/***/ }),

/***/ 91025:
/***/ ((module) => {

// Exports
module.exports = {
	"tabsRoot": "notificationContent_tabsRoot__quisL",
	"tabsList": "notificationContent_tabsList__rh3lS",
	"tabsTrigger": "notificationContent_tabsTrigger__DkqOp",
	"tabsContent": "notificationContent_tabsContent__bjv5y",
	"notiAmount": "notificationContent_notiAmount__azJzC",
	"notiWrapper": "notificationContent_notiWrapper__wdAeL",
	"notiText": "notificationContent_notiText__jTRXz",
	"noNoti": "notificationContent_noNoti__5tzKD",
	"overlayShow": "notificationContent_overlayShow__K02U7",
	"overlayHide": "notificationContent_overlayHide__2Q3np"
};


/***/ }),

/***/ 50949:
/***/ ((module) => {

// Exports
module.exports = {
	"overlay": "saveDialogPortal_overlay__pxupH",
	"overlayShow": "saveDialogPortal_overlayShow__9okxP",
	"overlayHide": "saveDialogPortal_overlayHide__Wbk_d",
	"sidebar": "saveDialogPortal_sidebar__WdxSO",
	"contentShow": "saveDialogPortal_contentShow__DAwpM",
	"contentHide": "saveDialogPortal_contentHide__2t2m5",
	"animation": "saveDialogPortal_animation__dkx8y",
	"buttons": "saveDialogPortal_buttons__bq6fl",
	"button": "saveDialogPortal_button__ijY24"
};


/***/ }),

/***/ 22785:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "searchBox_wrapper__jaJoU",
	"icon": "searchBox_icon__t6m3X",
	"input": "searchBox_input__jRtSQ",
	"select": "searchBox_select__dQarZ",
	"overlayShow": "searchBox_overlayShow__RlO0_",
	"overlayHide": "searchBox_overlayHide__gkQma"
};


/***/ }),

/***/ 78533:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "voucher_wrapper__fDYCU",
	"voucherWrapper": "voucher_voucherWrapper__Jzxkb",
	"leftSection": "voucher_leftSection__oT9FT",
	"subTitle": "voucher_subTitle__p_a1z",
	"discount": "voucher_discount__TNZ2B",
	"condition": "voucher_condition__EthvL",
	"useBtn": "voucher_useBtn__AP4Gt",
	"sliderRoot": "voucher_sliderRoot__1CFhQ",
	"sliderTrack": "voucher_sliderTrack__DJl_z",
	"sliderRange": "voucher_sliderRange__5BWdz",
	"usedText": "voucher_usedText__A041f",
	"expiredDate": "voucher_expiredDate__BbKak",
	"overlayShow": "voucher_overlayShow__aNAOa",
	"overlayHide": "voucher_overlayHide__xq5qm"
};


/***/ }),

/***/ 62929:
/***/ ((module) => {

// Exports
module.exports = {
	"drawer": "productComparisonProvider_drawer__Cg3m3",
	"col": "productComparisonProvider_col__u0zg2",
	"removeBtn": "productComparisonProvider_removeBtn__6YLUV",
	"colBorder": "productComparisonProvider_colBorder__yg9kT",
	"btn": "productComparisonProvider_btn__ICZay",
	"comparisonLink": "productComparisonProvider_comparisonLink__17zUT",
	"overlayShow": "productComparisonProvider_overlayShow__EasDv",
	"overlayHide": "productComparisonProvider_overlayHide__DN5rG"
};


/***/ }),

/***/ 15759:
/***/ ((module) => {

// Exports
module.exports = {
	"primary1": "#007ce8",
	"primary2": "#1ba0e2",
	"primary3": "#30c5f7",
	"primary4": "#67e8f9",
	"textPrimary": "#0194f3",
	"textBlack": "#03121a",
	"white": "#fff",
	"black": "#000",
	"gray1": "#687176",
	"gray2": "#f2f3f3",
	"gray3": "#d1d5db",
	"green1": "#6dd3ce",
	"green2": "#087e8b",
	"green3": "#20bf55",
	"blue1": "#235d9f",
	"red1": "#ec3a3e",
	"red2": "#ff6d6a",
	"orange1": "#ff5e1f",
	"orange2": "#f96d01",
	"orange3": "#f6eeeb",
	"purple1": "#931682",
	"yellow1": "#ffdc00",
	"pink1": "#fdf1f3",
	"pink2": "#f9355c",
	"brown1": "#72362e",
	"rgbaWhite5": "rgba(255,255,255,.5)",
	"rgbaBlack5": "rgba(0,0,0,.5)",
	"rgbaBlack3": "rgba(0,0,0,.3)",
	"rgbaBlack2": "rgba(0,0,0,.2)",
	"overlayShow": "color_overlayShow___2BVi",
	"overlayHide": "color_overlayHide__KGKHl"
};


/***/ }),

/***/ 87393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/eriegin/workplace/P_Anmani/src/app/error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 71057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(59077);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(39675);
// EXTERNAL MODULE: ./node_modules/@vercel/analytics/dist/react/index.js
var react = __webpack_require__(84372);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./src/providers/AuthProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/eriegin/workplace/P_Anmani/src/providers/AuthProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["AuthContext"];


/* harmony default export */ const AuthProvider = (__default__);
const e1 = proxy["useAuthContext"];

;// CONCATENATED MODULE: ./src/providers/CartProvider.tsx

const CartProvider_proxy = (0,module_proxy.createProxy)(String.raw`/home/eriegin/workplace/P_Anmani/src/providers/CartProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: CartProvider_esModule, $$typeof: CartProvider_$$typeof } = CartProvider_proxy;
const CartProvider_default_ = CartProvider_proxy.default;

const CartProvider_e0 = CartProvider_proxy["CartContext"];


/* harmony default export */ const CartProvider = (CartProvider_default_);
const CartProvider_e1 = CartProvider_proxy["useCartContext"];

;// CONCATENATED MODULE: ./src/providers/ConfigProvider.tsx

const ConfigProvider_proxy = (0,module_proxy.createProxy)(String.raw`/home/eriegin/workplace/P_Anmani/src/providers/ConfigProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ConfigProvider_esModule, $$typeof: ConfigProvider_$$typeof } = ConfigProvider_proxy;
const ConfigProvider_default_ = ConfigProvider_proxy.default;


/* harmony default export */ const ConfigProvider = (ConfigProvider_default_);
;// CONCATENATED MODULE: ./src/providers/LayoutProvider.tsx

const LayoutProvider_proxy = (0,module_proxy.createProxy)(String.raw`/home/eriegin/workplace/P_Anmani/src/providers/LayoutProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: LayoutProvider_esModule, $$typeof: LayoutProvider_$$typeof } = LayoutProvider_proxy;
const LayoutProvider_default_ = LayoutProvider_proxy.default;

const LayoutProvider_e0 = LayoutProvider_proxy["LayoutContext"];


/* harmony default export */ const LayoutProvider = (LayoutProvider_default_);
const LayoutProvider_e1 = LayoutProvider_proxy["useLayoutContext"];

;// CONCATENATED MODULE: ./src/app/layout.tsx








const metadata = {
    title: {
        template: "%s | Anmani",
        default: "Anmani"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(LayoutProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CartProvider, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ConfigProvider, {
                                children: children
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react/* Analytics */.cp, {})
            ]
        })
    });
}


/***/ }),

/***/ 94214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bookmark.710cfdec.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mNABg/+/2d7CMQg9q/dDNL/zzOwgNiMIGL/08dNex48vL/nwYMH+549q3u83dB157o0IQYQ2Pn08YS9N27+v1hf9P9iXdH/vTdu/N/1+l0DAxhs/c908PWbW7svXP1/rd/2982Jdr93X7z6/9DL5/ev7d3OwvD9kK/QpRd33u++eu3/MxGzP0/FzX7vuXr1//6XL+7u3LadjQEELj8+PWPPtev/j61Y9f/IitX/9167+v/oy8e9SO7/z7jzwf2eva9f3t3z6uX9fU8eNf8/wcDNAANBM8rZwcoWLGG5vnAJG0z8yJOHjADukYUpTZvuJwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 58572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/can-ho.76b672f8.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42i3FPUoDURSG4e/ce+7cGRNGkBHBBdgoKAiC9m7BDegOdAkWYuEmxB0Ilomgha1gkSoiqBHGoEkck7k/J1PkhYeXrnux/TaYXroghdE0XCvM6cmm+cMiuv2Q1aeXSb+axVaWqProsF283vUvOOED78OYhxb/1upfZtUyCqMCiD0X94XCTu0CVOf8vvvZeS7qrxI2z/Q6UBPRqIGGU0uM3cF7nWyVjzgen+XS3XhY4XLbiwZBmCHifGpUTj9Ynl4RkO0xOSegQACYCEYLEMAAoSmFCBkQmgt4Uvmb78rrIJFgAUTnrOKYktbEBnNOLmOwCEaBNgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/don-lap.233b9c3b.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AeJwmQHs2dz/9/T6ADrDkQN8RmclYLqZ2Oh5kgAGCAgCAeR3mQDj4OMi+OTtIedGRIX9Bf0tJfjnWvmF0MUIShjsAQBGXgzWITjW/RQLHZNMUwAP7/AAZq6vAPQgEs8xe1ozAQBSniOLdk3UAwEBCBYVDP3g7PcCAf/+ARL89/g/+9orAQpAfS5oiHPMAf3/BUEgCP/d6/cA1vkHARr48PdJ5LIuAVlutoVHMQx6A/r5/RdDMQP47fEA8tLg/vX+BALv/wRtAWN6t5kpGA5mA/38/vwWEAIB+fwABPH0/vgBBAIXGQKmAcjFvxjsARsh/gIE/gPv8QD/BgQA/QsMAAj/+AIfDfvqMZ95w40rFcgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon-flashSale.6f1ecd28.svg","height":16,"width":16,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 44738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icons8-collision.4c0a9871.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6klEQVR42mN46S3JyAAFL4K0xZ6H6gvC+S5iTGDGq0BJ4RcMSpKvXcT93rhIJLxkUFF85STHAZZ8GS7M+4xBSvh9pvyWr4tNHn1dbv7zfZ7iuZcOUtovPASUGZ5ZKKu+CROd82291ae/79f9//dt2/9v25z+vokRXPJUV1MWbMobP8HJX7fY/v//d+fX/793/f261v7/G0PhcrDkc3Mh1VcBEmUfqhTOf91s9//bDqf/H3s13r5kEFFiQAavnKQy3gQLr33jyV31Ol64+kUwXxJCMkCcC0Q/1jITeO6lLQ9iPzPg03tmL8AMABd6X+9Nci6nAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 11498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icons8-facebook.9a162c0a.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icons8-gmail.2b5f2c02.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 61228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icons8-messenger.fcf3fc74.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 47238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icons8-tiktok.a0d0e15e.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 51200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icons8-youtube.67113cd3.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 58457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icons8-zalo.540bba66.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 26893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/shop.490a4759.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6ElEQVR42mMAgX8MWvz/GNREgFgIhEFskBgDCPxucuX+V6R76V+67vt/WXovQBjEBomB5Bj+X2AI+D+T4f//LiDuh+Juhv8gMZAcw699KQmP10z5/2zL7D9A/O/ppln/nm6e/QckBpJj2Hfjte65e0/+NO3+8T9i+ee/aRu+/J108td/kBhIjuH81Wuml2/d/V+w/vN/zZnv/7ss+fC/ed/X/yAxkBzDtkMn9A+cvviy/dDXVxFrP78MWf3pZeuBL69AYiA5huopC1mmrtgkXL3rs7Dfis/C4Ws/Czfs+yw8BShWM2UhCwAECp3k+2nApwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 34208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/song-lap.a8566d02.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEX9war8waoAAAC8nJm7m5rQnpnPnpiodYavf4uvf4uocYW+hIzHlpXVnJjVnJfsu6jTmpbUmJXUl5XPm5fcpJvdo5vsvKjsvKnbqJ/UopvfrKDtvKnruqjruqfeppzgnpjfnpjjpZzipZzZpJzkrqHvvantsKHxwKv7ybD5yK/u4VENAAAAKHRSTlMAAAAMDCQkKjg6PU55k5OVmJiZnKOjqarGy9HS0tLY4+Pp6enq7PHyNAy7XQAAAEdJREFUeNoFQIURgCAAfLsblFAMev8FPaRJOU0FUuTb5f25ZRgeY625R1D3CvE5ij1qxnQ8IAOfZx4kiOrXpVcEXVs1ddV2P8N8BXGot4ROAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 15595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/trending-up.78837554.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAklEQVR42mMIbN7CyAAELp4dTEEtWwVBbL+K1Zxhkw7qM4BA6aprYAURE/ZnRU48MCUyqZ8jtGe3S9jUI4sYYCBwwv4wm469biB26OTDXUETD5QwwMDsphmsggxtSpvWbfPfvXNfOwODoUhG/TrD6O1XFoWs3y7OsMm9VfGBQsqhPWs2T995+OzBp9MYFh+ZVtbjdujx4/ydW5UZDju0KLwyynxwaO2mKTuPXdz6YSHDngtzi6ZbH3l2o+rIbnmGCTZ1elcNc3avmb28a+XmQ4tuTGRYtL27pNNuy43d8RPm6jGomZQLM1jUiTAwpEoyMDiKMzB0AXGFpCMDg4gFT7EwAGQsZbej4MS1AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/auth-background.4ca47c6e.jpg","height":1280,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAuAU//8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDBAARQf/aAAgBAQABPwDJWu/MbUYKPFUdc//EABURAQEAAAAAAAAAAAAAAAAAAAAx/9oACAECAQE/AK//xAAVEQEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAwEBPwCP/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 25424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar.51db1367.png","height":4096,"width":2731,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAiUlEQVR42mOwdvBUN7KRUNaxtne3sHNn4NOzrU+Jnl6aySalYefszcCgYb6qqfjiwgl+Nhb61q4M3LrWvZmxlxf0+NqY61u5MhiY2Uc4WiyoyTTW0rGwsGOwt7I30DUQkdOwNrWyMDJjsDS1NNE3dLSwtjKxMNQ1ZDAxMLEyMbc1tzLQ1tfR1AEAW8gfWGBI/p4AAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ 40477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-KDI.ca5aa105.png","height":469,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAXElEQVR42mO4tcWAAYjlbm3Ry7q11dIRiF3B7C2GcgwgcGmtCdPd7foMQGxxZ6tRw51tRo0g9pX1xgxAzMSQEe8LwgIMDImCDQU+SlU5vmoMDElCBam+PAwMDAwAIPEkQbt0HBsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 99065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-SG.0eeda780.png","height":514,"width":412,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAeklEQVR42mP4d5CXgwEI/h3iTQCyy0BsIM3OABXUBnL+gzCQ7cQAlfUH4hVAnPHvIF8skN4IxIEMUJXpQOwMxLZAnATE80ESM4A4BYgdgNgCiJOB+D9IwguI14EtP8SXBmSvBuJgmD3GQPwfii1gghxQOgmISyFsPg4AP91ZwDtHqUAAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ 91374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.b9d4fcfa.png","height":5209,"width":4168,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAk0lEQVR42mMAgbmLljIyQMGGLTsg7Gmz54EZ23fvY2VABg8eP2MC0Zu378w8dvJ0Joh97cYtJrBkYWW19cp1Gx/u3Hvw4fI1m2zBgtt27gMbtf/Q0cw1G7flwI169votU2x6pmZb3yTny9eu223avsespW86F8PBY8eZskvKJPunzZK9efuu7MZtu2Uau6eyMuACACajPMJNfcYhAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ 72026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/tiktok-review-1.c37967bb.png","height":2431,"width":1284,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAAb0lEQVR42mP4////25fP3rx8CmQwAPHLl89ePn8C4vz+8ePjuYuf37//8/cvSObn5y8/f/wAyRzet33zxlVLF8yfM3sGQ2FpTGOlQ3WeXUGkEsPhs7dWr9kzqX/21GkzGM5de7B27Y6J3VOnTpsKAM7YSmZkEOQeAAAAAElFTkSuQmCC","blurWidth":4,"blurHeight":8});

/***/ }),

/***/ 46643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/tiktok-review-2.6d46afa4.png","height":2532,"width":1284,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAAc0lEQVR42gFoAJf/AFip8Vqn8FWk8GGp8QBYt/lUtfpWtfpat/kArdLwudbgt9TfqtHuAKHA3KbB1ae/06q81ACttbp2jJltgISIjn0AhHxlbmxLcW9XgYJwAH93bmx3aW12ZnV4awBJVU04TkU4T0hQW1W4oTdEMXxUdAAAAABJRU5ErkJggg==","blurWidth":4,"blurHeight":8});

/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 39675:
/***/ (() => {



/***/ })

};
;