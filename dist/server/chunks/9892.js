exports.id = 9892;
exports.ids = [9892];
exports.modules = {

/***/ 75673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66181);
/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_title_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Title({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: (_title_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
        children: children
    });
}


/***/ }),

/***/ 19892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZJ: () => (/* reexport */ AdvancedSearch),
  lr: () => (/* reexport */ Carousel),
  WD: () => (/* reexport */ Category),
  ew: () => (/* reexport */ Connection),
  z5: () => (/* reexport */ Deposit),
  X9: () => (/* reexport */ FlashSale),
  K_: () => (/* reexport */ HowTo),
  jI: () => (/* reexport */ Investor),
  H9: () => (/* reexport */ NavLinks),
  BS: () => (/* reexport */ PersonalInfo),
  Il: () => (/* reexport */ ProductCard),
  Aq: () => (/* reexport */ Reports),
  Az: () => (/* reexport */ TiktokReview),
  $4: () => (/* reexport */ Vouchers)
});

// UNUSED EXPORTS: Title

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(17738);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(62330);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(78217);
// EXTERNAL MODULE: ./src/app/(site)/_components/Carousel/carousel.module.scss
var carousel_module = __webpack_require__(13504);
var carousel_module_default = /*#__PURE__*/__webpack_require__.n(carousel_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/Carousel/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Carousel({ setting, children }) {
    const defaultSetting = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        className: (carousel_module_default()).carousel,
        dots: true,
        lazyload: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dotsClass: (carousel_module_default()).slickDots,
        appendDots: (dots)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: dots
            }),
        customPaging: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (carousel_module_default()).slickDot
            }),
        ...setting
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(lib/* default */.Z, {
        ...defaultSetting,
        children: children
    });
}

// EXTERNAL MODULE: ./src/constants/route.ts
var route = __webpack_require__(80094);
// EXTERNAL MODULE: ./src/app/(site)/_components/Title/index.tsx
var Title = __webpack_require__(75673);
// EXTERNAL MODULE: ./node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(39726);
// EXTERNAL MODULE: ./src/styles/color.module.scss
var color_module = __webpack_require__(15759);
var color_module_default = /*#__PURE__*/__webpack_require__.n(color_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/Reports/static.tsx



const reportList = [
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingBank */.R0R, {
            color: (color_module_default()).primary3
        }),
        title: "Thị trường BĐS Hồ Ch\xed Minh"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconSailboat */.$8F, {
            color: (color_module_default()).green3
        }),
        title: "Thị trường BĐS Nha Trang"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconShip */.XoE, {
            color: (color_module_default()).red1
        }),
        title: "Thị trường BĐS Ph\xfa Quốc"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuildingBridge */.pv5, {
            color: (color_module_default()).purple1
        }),
        title: "Thị trường BĐS Đ\xe0 Nẵng"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconReport */.VUf, {
            color: (color_module_default()).primary3
        }),
        title: "Gi\xe1 BĐS Hồ Ch\xed Minh"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconReport */.VUf, {
            color: (color_module_default()).green3
        }),
        title: "Gi\xe1 BĐS Nha Trang"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconReport */.VUf, {
            color: (color_module_default()).red1
        }),
        title: "Gi\xe1 BĐS Ph\xfa Quốc"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconReport */.VUf, {
            color: (color_module_default()).purple1
        }),
        title: "Gi\xe1 BĐS Đ\xe0 Nẵng"
    }
];

// EXTERNAL MODULE: ./src/app/(site)/_components/Reports/reports.module.scss
var reports_module = __webpack_require__(58837);
var reports_module_default = /*#__PURE__*/__webpack_require__.n(reports_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/Reports/index.tsx





function Reports() {
    // TODO call api and put link in href
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title["default"], {
                children: "B\xe1o c\xe1o thị trường cập nhật thường xuy\xean"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (reports_module_default()).reportList,
                children: reportList.map((report)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (reports_module_default()).reportItem,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: route/* ROUTE */.ln.HOME,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                                report.icon,
                                report.title
                            ]
                        })
                    }, report.title))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(45319);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
;// CONCATENATED MODULE: ./src/constants/carouselSetting.ts
const setting = {
    draggable: false,
    dots: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

// EXTERNAL MODULE: ./src/components/index.ts + 12 modules
var components = __webpack_require__(54922);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/app/(site)/_components/Vouchers/vouchers.module.scss
var vouchers_module = __webpack_require__(79364);
var vouchers_module_default = /*#__PURE__*/__webpack_require__.n(vouchers_module);
// EXTERNAL MODULE: ./src/mock/data.tsx
var mock_data = __webpack_require__(28313);
// EXTERNAL MODULE: ./src/hooks/api/voucher/query/useGetVouchers.ts
var useGetVouchers = __webpack_require__(50417);
;// CONCATENATED MODULE: ./src/app/(site)/_components/Vouchers/index.tsx










const Vouchers_Title = app_dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 75673)), {
    loadableGenerated: {
        modules: [
            "/home/eriegin/workplace/P_Anmani/src/app/(site)/_components/Vouchers/index.tsx -> " + "../Title"
        ]
    }
});
function Vouchers() {
    const { data, isLoading } = (0,useGetVouchers/* useGetVouchers */.M)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Vouchers_Title, {
                children: "Trung t\xe2m voucher"
            }),
            isLoading && /*#__PURE__*/ jsx_runtime_.jsx(components/* ItemsSkeleton */.rp, {}),
            data && /*#__PURE__*/ jsx_runtime_.jsx(Carousel, {
                setting: setting,
                children: mock_data/* voucherList */.Co.map((voucher)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `${route/* ROUTE */.ln.PRODUCT}/${voucher.productId}`,
                        className: (vouchers_module_default()).link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components/* Voucher */.cq, {
                            voucher: voucher,
                            shouldShowBtn: true
                        })
                    }, voucher.id))
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/(site)/_components/FlashSale/flashSale.module.scss
var flashSale_module = __webpack_require__(71055);
var flashSale_module_default = /*#__PURE__*/__webpack_require__.n(flashSale_module);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs + 5 modules
var dist = __webpack_require__(40465);
// EXTERNAL MODULE: ./src/app/(site)/_components/ProductCard/productCard.module.scss
var productCard_module = __webpack_require__(87725);
var productCard_module_default = /*#__PURE__*/__webpack_require__.n(productCard_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/constants/product.ts
var product = __webpack_require__(86756);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/utils/formatCurrency.ts
var formatCurrency = __webpack_require__(28970);
;// CONCATENATED MODULE: ./src/app/(site)/_components/ProductCard/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










function ProductCard({ info, isShowView = false }) {
    const { key, name, price, originalPrice, information, view, image: { thumbnail }, logo, location, status } = info;
    const [value, setValue] = (0,react_.useState)(product/* PRODUCT_SAVE_VALUE */.jH.LATER);
    const handleSave = (e)=>{
        console.log(e.target.value);
        setValue(e.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (productCard_module_default()).itemWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (productCard_module_default()).linkWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `${route/* ROUTE */.ln.PRODUCT}/${key}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (productCard_module_default()).cardContent,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (productCard_module_default()).imageWrapper,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: thumbnail,
                                            alt: "",
                                            fill: true,
                                            className: (productCard_module_default()).thumbnail
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (productCard_module_default()).location,
                                            children: location.sub
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (productCard_module_default()).logoWrapper,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: logo,
                                                alt: "",
                                                width: 24,
                                                height: 24,
                                                className: (productCard_module_default()).logo
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (productCard_module_default()).discount,
                                            children: [
                                                "Tiết kiệm ",
                                                32,
                                                "%"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (productCard_module_default()).descriptionWrapper,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (productCard_module_default()).leftSection,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (productCard_module_default()).name,
                                                    children: name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (productCard_module_default()).priceWrapper,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (productCard_module_default()).originalPrice,
                                                            children: (0,formatCurrency/* formatCurrency */.x)(originalPrice)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (productCard_module_default()).price,
                                                            children: (0,formatCurrency/* formatCurrency */.x)(price)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (productCard_module_default()).rightSection,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: information.landArea
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: information.floorArea
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: information.floor
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }, name),
                    info.status === route/* QUERY_PARAMS */.Tx.STATUS.SOLD && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (productCard_module_default()).overlay,
                        children: "- Đ\xe3 b\xe1n -"
                    })
                ]
            }),
            isShowView && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (productCard_module_default()).view,
                children: [
                    "Đ\xc3 XEM ",
                    view
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Root */.fC, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* Trigger */.xz, {
                        className: (productCard_module_default()).save,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBookmark */.BZM, {
                            size: 30
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* SaveDialogPortal */.zj, {
                        value: value,
                        onChange: handleSave
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/assets/index.ts
var assets = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var antd_lib = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(43598);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/duration.js
var duration = __webpack_require__(23166);
var duration_default = /*#__PURE__*/__webpack_require__.n(duration);
// EXTERNAL MODULE: ./src/hooks/api/product/query/useGetProducts.ts
var useGetProducts = __webpack_require__(19189);
;// CONCATENATED MODULE: ./src/app/(site)/_components/FlashSale/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












dayjs_min_default().extend((duration_default()));
const { Countdown } = antd_lib.Statistic;
const carouselSetting = {
    ...setting,
    autoplaySpeed: 3500
};
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2; // Dayjs is also OK;
function FlashSale() {
    const { data, isLoading } = (0,useGetProducts/* useGetProducts */.i)();
    const [countDown, setCountDown] = (0,react_.useState)({
        day: "",
        hour: "",
        minute: "",
        second: ""
    });
    const handleChange = (value)=>{
        if (typeof value === "number") {
            setCountDown({
                day: dayjs_min_default().duration(value).format("DD"),
                hour: dayjs_min_default().duration(value).format("HH"),
                minute: dayjs_min_default().duration(value).format("mm"),
                second: dayjs_min_default().duration(value).format("ss")
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (flashSale_module_default()).title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (flashSale_module_default()).flashSale,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "F"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: assets/* IconFlashSale */.Y9,
                                alt: "",
                                width: 20,
                                height: 24
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (flashSale_module_default()).afterIcon,
                                children: "ash sale"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (flashSale_module_default()).clock,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Countdown, {
                                value: deadline,
                                onChange: handleChange,
                                style: {
                                    display: "none"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: countDown.day
                            }),
                            ":",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: countDown.hour
                            }),
                            ":",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: countDown.minute
                            }),
                            ":",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: countDown.second
                            })
                        ]
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ jsx_runtime_.jsx(components/* ItemsSkeleton */.rp, {}),
            data && /*#__PURE__*/ jsx_runtime_.jsx(Carousel, {
                setting: carouselSetting,
                children: data.map((sale)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (flashSale_module_default()).productWrapper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard, {
                            info: sale,
                            isShowView: true
                        })
                    }, sale.name))
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/(site)/_components/Category/category.module.scss
var category_module = __webpack_require__(95173);
var category_module_default = /*#__PURE__*/__webpack_require__.n(category_module);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-tabs/dist/index.mjs + 1 modules
var react_tabs_dist = __webpack_require__(93608);
;// CONCATENATED MODULE: ./src/app/(site)/_components/Category/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










function Category({ category }) {
    const { title, location, href, icon, type } = category;
    const { data, isLoading } = (0,useGetProducts/* useGetProducts */.i)();
    const categoryList = data?.filter((product)=>product.type === type);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (category_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (category_module_default()).titleWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: (category_module_default()).title,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: icon,
                                alt: "",
                                width: 36,
                                height: 36
                            }),
                            title
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: href,
                        className: (category_module_default()).more,
                        children: [
                            "Xem th\xeam ",
                            /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconChevronRight */.VG8, {
                                size: 18
                            })
                        ]
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ jsx_runtime_.jsx(components/* ItemsSkeleton */.rp, {}),
            categoryList && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_tabs_dist/* Root */.fC, {
                defaultValue: location[0].value,
                className: (category_module_default()).tabsRoot,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_tabs_dist/* List */.aV, {
                        "aria-label": "Category",
                        className: (category_module_default()).tabsList,
                        children: location.map(({ value, name })=>/*#__PURE__*/ jsx_runtime_.jsx(react_tabs_dist/* Trigger */.xz, {
                                value: value,
                                className: (category_module_default()).tabsTrigger,
                                children: name
                            }, value))
                    }),
                    location.map(({ value, name })=>/*#__PURE__*/ jsx_runtime_.jsx(react_tabs_dist/* Content */.VY, {
                            value: value,
                            className: (category_module_default()).tabsContent,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Carousel, {
                                setting: setting,
                                children: categoryList.filter((product)=>product.location.main === value).map((saleItem)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (category_module_default()).productWrapper,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard, {
                                            info: saleItem
                                        })
                                    }, saleItem.name))
                            })
                        }, value))
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/(site)/_components/Investor/investor.module.scss
var investor_module = __webpack_require__(87737);
var investor_module_default = /*#__PURE__*/__webpack_require__.n(investor_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/Investor/index.tsx



function Investor({ investor }) {
    const { title, src } = investor;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: (investor_module_default()).title,
                children: [
                    "Đối t\xe1c chủ đầu tư ",
                    title
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (investor_module_default()).wrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: src,
                    alt: "",
                    fill: true
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/(site)/_components/HowTo/static.ts
const stepList = [
    {
        title: "Bước 1:",
        content: "Lựa chọn sản phẩm ưng \xfd tr\xean websie"
    },
    {
        title: "Bước 2:",
        content: "Th\xeam v\xe0o giỏ h\xe0ng v\xe0 trừ chiết khấu để xem gi\xe1 b\xe1n cuối c\xf9ng hoặc chụp m\xe0n h\xecnh điện thoại"
    },
    {
        title: "Bước 3:",
        content: "Li\xean hệ trực tiếp tới số điện thoại 0924627467 hoặc Li\xean hệ tư vấn online"
    }
];

// EXTERNAL MODULE: ./src/app/(site)/_components/HowTo/howTo.module.scss
var howTo_module = __webpack_require__(12223);
var howTo_module_default = /*#__PURE__*/__webpack_require__.n(howTo_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/HowTo/index.tsx




function HowTo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (howTo_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title["default"], {
                children: "C\xe1ch thức mua h\xe0ng"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (howTo_module_default()).textWrapper,
                children: stepList.map((step)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (howTo_module_default()).stepBlock,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: step.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: step.content
                            })
                        ]
                    }, step.title))
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/(site)/_components/TiktokReview/tiktokReview.module.scss
var tiktokReview_module = __webpack_require__(27889);
var tiktokReview_module_default = /*#__PURE__*/__webpack_require__.n(tiktokReview_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/TiktokReview/index.tsx





function TiktokReview() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title["default"], {
                children: "K\xeanh TikTok Review bất động sản"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (tiktokReview_module_default()).imageWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.tiktok.com/@tahualucnhu",
                        target: "_blank",
                        rel: "noreferer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: assets/* ImageTikTokReview1 */.Ls,
                            alt: "",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.tiktok.com/@tahualucnhu",
                        target: "_blank",
                        rel: "noreferer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: assets/* ImageTikTokReview2 */.lZ,
                            alt: "",
                            fill: true
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/(site)/_components/Deposit/deposit.module.scss
var deposit_module = __webpack_require__(18749);
var deposit_module_default = /*#__PURE__*/__webpack_require__.n(deposit_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/Deposit/index.tsx





function Deposit() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title["default"], {
                children: "K\xfd gửi bất động sản"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (deposit_module_default()).textWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "1. Qu\xfd kh\xe1ch chỉ cần li\xean hệ hotline 0924.627.467 v\xe0 để lại th\xf4ng tin"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "2. Hoặc Qu\xfd Kh\xe1ch",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: route/* ROUTE */.ln.SIGN_IN,
                                className: (deposit_module_default()).link,
                                children: "đăng nhập"
                            }),
                            " ",
                            "v\xe0 điền v\xe0o th\xf4ng tin k\xfd gửi"
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/(site)/_components/PersonalInfo/personalInfo.module.scss
var personalInfo_module = __webpack_require__(46583);
var personalInfo_module_default = /*#__PURE__*/__webpack_require__.n(personalInfo_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/PersonalInfo/static.tsx
const personalInfo = [
    {
        id: "1",
        name: "T\xean",
        value: "Tạ Hứa Lục Như",
        icon: ""
    },
    {
        id: "2",
        name: "Sinh năm",
        value: "29/06/1996",
        icon: ""
    },
    {
        id: "3",
        name: "Nguy\xean qu\xe1n",
        value: "An Giang",
        icon: ""
    },
    {
        id: "4",
        name: "Tr\xecnh độ",
        value: "Cử nh\xe2n Kế to\xe1n Doanh nghiệp - Đại học T\xe0i Ch\xednh - Marketing",
        icon: ""
    }
];
const soldProjects = [
    {
        id: "0",
        name: "Dự \xe1n đ\xe3 b\xe1n",
        value: "",
        icon: ""
    },
    {
        id: "1",
        name: "2020-2021",
        value: "Dự \xe1n Stella Mega City, B\xecnh Thủy Cần Thơ",
        icon: ""
    },
    {
        id: "2",
        name: "2021-2022",
        value: "Dự \xe1n Beverly Vinhomes Grand Park Quận 9",
        icon: ""
    },
    {
        id: "3",
        name: "",
        value: "Dự \xe1n Grand World Ph\xfa Quốc",
        icon: ""
    },
    {
        id: "4",
        name: "",
        value: "Dự \xe1n Hillside Residence Ph\xfa Quốc",
        icon: ""
    },
    {
        id: "5",
        name: "",
        value: "Dự \xe1n The Center Ph\xfa Quốc",
        icon: ""
    }
];

;// CONCATENATED MODULE: ./src/app/(site)/_components/PersonalInfo/index.tsx






function PersonalInfo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title["default"], {
                children: "Th\xf4ng tin c\xe1 nh\xe2n"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (personalInfo_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: assets/* ImageAvatar */.qc,
                        alt: "avatar",
                        width: 200,
                        height: 300
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (personalInfo_module_default()).infoList,
                        children: [
                            personalInfo.map((info)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (personalInfo_module_default()).info,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: info.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: info.value
                                        })
                                    ]
                                }, info.id)),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            soldProjects.map((info)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (personalInfo_module_default()).info,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: info.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: info.value
                                        })
                                    ]
                                }, info.id))
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/(site)/_components/Connection/connection.module.scss
var connection_module = __webpack_require__(28377);
var connection_module_default = /*#__PURE__*/__webpack_require__.n(connection_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/AdvancedSearch/static.tsx

const socialNetworks = [
    {
        icon: assets/* IconGmail */.yw,
        href: "mailto:tahualucnhu@gmail.com"
    },
    {
        icon: assets/* IconTiktok */.pb,
        href: "https://www.tiktok.com/@tahualucnhu"
    },
    {
        icon: assets/* IconFacebook */.zJ,
        href: "https://www.facebook.com/luca.nhu"
    },
    {
        icon: assets/* IconYoutube */.zA,
        href: "https://bit.ly/3A2k5gQ"
    }
];

;// CONCATENATED MODULE: ./src/app/(site)/_components/Connection/index.tsx






function Connection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (connection_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title["default"], {
                children: "Kết nối"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (connection_module_default()).networkList,
                        children: socialNetworks.map((network)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: network.href,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: network.icon,
                                        alt: "",
                                        width: 40,
                                        height: 40
                                    })
                                })
                            }, network.href))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (connection_module_default()).newsletter,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Nhận bản tin"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (connection_module_default()).inputBlock,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        placeholder: "Vui l\xf2ng nhập email của bạn"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Button */.zx, {
                                        children: "Gửi"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/(site)/_components/AdvancedSearch/advancedSearch.module.scss
var advancedSearch_module = __webpack_require__(39865);
var advancedSearch_module_default = /*#__PURE__*/__webpack_require__.n(advancedSearch_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/AdvancedSearch/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const SearchBox = app_dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 72102)), {
    loadableGenerated: {
        modules: [
            "/home/eriegin/workplace/P_Anmani/src/app/(site)/_components/AdvancedSearch/index.tsx -> " + "../../../../components/common/SearchBox"
        ]
    }
});
function AdvancedSearch() {
    const [searchBoxValue, setSearchBoxValue] = (0,react_.useState)("");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (advancedSearch_module_default()).wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (advancedSearch_module_default()).searchBar,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SearchBox, {
                    value: searchBoxValue,
                    setValue: setSearchBoxValue
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(antd_lib/* Button */.zx, {
                    children: "T\xecm kiếm"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (advancedSearch_module_default()).networkList,
                    children: socialNetworks.map((network)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: network.href,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: network.icon,
                                    alt: "",
                                    width: 30,
                                    height: 30
                                })
                            })
                        }, network.href))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/(site)/_components/NavLinks/static.tsx




const navLinkList = [
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconReceiptTax */.JrN, {}),
        title: "T\xe0i ch\xednh",
        href: route/* ROUTE */.ln.CONSULT,
        tag: "Hot"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBuilding */.UQw, {}),
        title: product/* PRODUCT_TAG */.dW.INVESTOR,
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}?tag=${route/* QUERY_PARAMS */.Tx.TAG.INVESTOR}`
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconHome2 */.JOP, {}),
        title: product/* PRODUCT_TAG */.dW.TRANSFER,
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}?tag=${route/* QUERY_PARAMS */.Tx.TAG.TRANSFER}`
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconTopologyComplex */.Kwg, {}),
        title: product/* PRODUCT_TAG */.dW.RENT,
        href: `${route/* ROUTE */.ln.ADVANCED_SEARCH}?tag=${route/* QUERY_PARAMS */.Tx.TAG.RENT}`
    }
];

// EXTERNAL MODULE: ./src/app/(site)/_components/NavLinks/navLinks.module.scss
var navLinks_module = __webpack_require__(5679);
var navLinks_module_default = /*#__PURE__*/__webpack_require__.n(navLinks_module);
;// CONCATENATED MODULE: ./src/app/(site)/_components/NavLinks/index.tsx






function NavLinks() {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (navLinks_module_default()).list,
        children: navLinkList.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: (navLinks_module_default()).listItem,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: link.href,
                        className: (navLinks_module_default()).link,
                        children: [
                            link.icon,
                            link.title
                        ]
                    }),
                    link.tag && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (navLinks_module_default()).tag,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: assets/* IconCollision */.jB,
                                alt: "",
                                width: 36,
                                height: 36
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: link.tag
                            })
                        ]
                    })
                ]
            }, link.title))
    });
}

;// CONCATENATED MODULE: ./src/app/(site)/_components/index.ts

















/***/ }),

/***/ 19189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useGetProducts)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53395);



const fetcher = (url)=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(url).then((res)=>res);
const useGetProducts = ()=>{
    return (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.PRODUCTS, fetcher);
};


/***/ }),

/***/ 50417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useGetVouchers)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53395);



const fetcher = (url)=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(url).then((res)=>res);
const useGetVouchers = ()=>{
    return (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.VOUCHERS, fetcher);
};


/***/ }),

/***/ 28970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ formatCurrency)
/* harmony export */ });
const formatCurrency = (price, noUnit = false, toFixed = false)=>{
    if (!price) return noUnit ? "0" : `0 VNĐ`;
    const result = // Nine Zeroes for Billions
    Math.abs(price) >= 1.0e9 ? (Math.abs(price) / 1.0e9).toFixed(toFixed ? 2 : 0) + " tỷ" : Math.abs(price) >= 1.0e6 ? (Math.abs(price) / 1.0e6).toFixed(toFixed ? 2 : 0) + " triệu" : Math.abs(price) >= 1.0e3 ? (Math.abs(price) / 1.0e3).toFixed(toFixed ? 2 : 0) + " ngh\xecn" : Math.abs(price);
    return noUnit ? `${result}` : `${result} VNĐ`;
};


/***/ }),

/***/ 39865:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "advancedSearch_wrapper__fEidN",
	"searchBar": "advancedSearch_searchBar__cRAlP",
	"networkList": "advancedSearch_networkList__tUQsb",
	"searchBtn": "advancedSearch_searchBtn__8_slq",
	"overlayShow": "advancedSearch_overlayShow__Niayz",
	"overlayHide": "advancedSearch_overlayHide__hxgUO"
};


/***/ }),

/***/ 13504:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel": "carousel_carousel__ceL0b",
	"slickDots": "carousel_slickDots__7ozcg",
	"slickDot": "carousel_slickDot__V_bbb",
	"overlayShow": "carousel_overlayShow__XYUwT",
	"overlayHide": "carousel_overlayHide__Xm8Ov"
};


/***/ }),

/***/ 95173:
/***/ ((module) => {

// Exports
module.exports = {
	"titleWrapper": "category_titleWrapper__WzsYG",
	"title": "category_title__SOAqh",
	"more": "category_more__EIVlx",
	"tabsRoot": "category_tabsRoot__EKp9q",
	"tabsList": "category_tabsList__727bK",
	"tabsTrigger": "category_tabsTrigger__Tn0cB",
	"tabsContent": "category_tabsContent__U_KEp",
	"productWrapper": "category_productWrapper__MSDHm",
	"overlayShow": "category_overlayShow__XzNGK",
	"overlayHide": "category_overlayHide__UHEW2"
};


/***/ }),

/***/ 28377:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "connection_wrapper__SOxHG",
	"networkList": "connection_networkList__TOtx0",
	"newsletter": "connection_newsletter__fPpQw",
	"inputBlock": "connection_inputBlock__6RzK_",
	"overlayShow": "connection_overlayShow__JTNEw",
	"overlayHide": "connection_overlayHide__z_Prl"
};


/***/ }),

/***/ 18749:
/***/ ((module) => {

// Exports
module.exports = {
	"textWrapper": "deposit_textWrapper__iQpkE",
	"link": "deposit_link__tApCd",
	"overlayShow": "deposit_overlayShow__0CI7x",
	"overlayHide": "deposit_overlayHide__D2LbF"
};


/***/ }),

/***/ 71055:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "flashSale_title__qU4MW",
	"clock": "flashSale_clock__hgSKH",
	"productWrapper": "flashSale_productWrapper__j1YSW",
	"flashSale": "flashSale_flashSale__ukQw9",
	"afterIcon": "flashSale_afterIcon__Do8zS",
	"overlayShow": "flashSale_overlayShow__bFsxZ",
	"overlayHide": "flashSale_overlayHide__zjR_r"
};


/***/ }),

/***/ 12223:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "howTo_wrapper__dmXGZ",
	"textWrapper": "howTo_textWrapper__9_1wu",
	"stepBlock": "howTo_stepBlock__Kqi6J",
	"overlayShow": "howTo_overlayShow__pY9IX",
	"overlayHide": "howTo_overlayHide__hcx26"
};


/***/ }),

/***/ 87737:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "investor_wrapper__Ydl9q",
	"title": "investor_title__su3We",
	"overlayShow": "investor_overlayShow__fyRGs",
	"overlayHide": "investor_overlayHide__V2bJF"
};


/***/ }),

/***/ 5679:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "navLinks_list__YfyBQ",
	"listItem": "navLinks_listItem__O33l4",
	"link": "navLinks_link__l_Bz4",
	"tag": "navLinks_tag__mV71_",
	"overlayShow": "navLinks_overlayShow__BZkEa",
	"overlayHide": "navLinks_overlayHide__sjLTX"
};


/***/ }),

/***/ 46583:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "personalInfo_wrapper__xyf_d",
	"info": "personalInfo_info__z4P33",
	"overlayShow": "personalInfo_overlayShow__0MwUS",
	"overlayHide": "personalInfo_overlayHide__eb1m3"
};


/***/ }),

/***/ 87725:
/***/ ((module) => {

// Exports
module.exports = {
	"itemWrapper": "productCard_itemWrapper__q22L7",
	"cardContent": "productCard_cardContent__sZL_r",
	"linkWrapper": "productCard_linkWrapper__QgGNL",
	"overlay": "productCard_overlay__KzYag",
	"imageWrapper": "productCard_imageWrapper__0yHMM",
	"thumbnail": "productCard_thumbnail__gmrWX",
	"logoWrapper": "productCard_logoWrapper__8LN_N",
	"logo": "productCard_logo__lnZJt",
	"location": "productCard_location__ZSz17",
	"save": "productCard_save__GlYg6",
	"discount": "productCard_discount__HiGIW",
	"descriptionWrapper": "productCard_descriptionWrapper__ICWlR",
	"leftSection": "productCard_leftSection___nLex",
	"rightSection": "productCard_rightSection__rgpSW",
	"name": "productCard_name__bYzx2",
	"priceWrapper": "productCard_priceWrapper__n4Wcc",
	"originalPrice": "productCard_originalPrice__y81Ua",
	"price": "productCard_price__kBEC3",
	"view": "productCard_view__0EBOK",
	"overlayShow": "productCard_overlayShow__qqpRq",
	"overlayHide": "productCard_overlayHide__kP1ir"
};


/***/ }),

/***/ 58837:
/***/ ((module) => {

// Exports
module.exports = {
	"reportList": "reports_reportList__lfIvc",
	"reportItem": "reports_reportItem__SVBvs",
	"overlayShow": "reports_overlayShow__jymTC",
	"overlayHide": "reports_overlayHide__dxcA7"
};


/***/ }),

/***/ 27889:
/***/ ((module) => {

// Exports
module.exports = {
	"imageWrapper": "tiktokReview_imageWrapper__kirHk",
	"overlayShow": "tiktokReview_overlayShow__YOBNe",
	"overlayHide": "tiktokReview_overlayHide__cNfo2"
};


/***/ }),

/***/ 66181:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "title_title__Bm_Yg",
	"overlayShow": "title_overlayShow__Mxl_3",
	"overlayHide": "title_overlayHide__MROjO"
};


/***/ }),

/***/ 79364:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "vouchers_link__620L_",
	"overlayShow": "vouchers_overlayShow__dJGXr",
	"overlayHide": "vouchers_overlayHide__IwiyS"
};


/***/ })

};
;