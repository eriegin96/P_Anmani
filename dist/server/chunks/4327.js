exports.id = 4327;
exports.ids = [4327];
exports.modules = {

/***/ 84327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CartItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28313);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39726);
/* harmony import */ var _cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70004);
/* harmony import */ var _cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_formatCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28970);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54922);
/* harmony import */ var _providers_CartProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13703);









function CartItem({ item, shouldShowDeleteButton = false, shouldShowVoucher = false }) {
    const { removeFromCart } = (0,_providers_CartProvider__WEBPACK_IMPORTED_MODULE_4__.useCartContext)();
    const product = _mock_data__WEBPACK_IMPORTED_MODULE_1__/* .productList */ .Uu.find((p)=>p.id === item.productId);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkboxLabel),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().imageWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: product.image.thumbnail,
                            alt: "",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().info),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().name),
                                        children: product.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().type),
                                        children: product.type
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().price),
                                children: (0,_utils_formatCurrency__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .x)(product.price)
                            })
                        ]
                    }),
                    shouldShowDeleteButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btn),
                        onClick: ()=>removeFromCart(item.productId),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__/* .IconX */ .kLi, {})
                    })
                ]
            }),
            shouldShowVoucher && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().voucherWrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        className: (_cartItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().voucherTitle),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__/* .IconGiftCard */ .xA8, {
                                size: 30
                            }),
                            "Chiết khấu của sản phẩm"
                        ]
                    }),
                    item.voucherAdded.map((voucherId)=>{
                        const voucher = _mock_data__WEBPACK_IMPORTED_MODULE_1__/* .voucherList */ .Co.find((item)=>item.id === voucherId);
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Voucher */ .cq, {
                            voucher: voucher
                        }, voucherId);
                    })
                ]
            })
        ]
    });
}


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

/***/ 70004:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "cartItem_wrapper__JKU3K",
	"cartItem": "cartItem_cartItem__mEOL0",
	"checkboxRoot": "cartItem_checkboxRoot__F69C2",
	"checkboxLabel": "cartItem_checkboxLabel__tCW5V",
	"checkboxIndicator": "cartItem_checkboxIndicator__DS7bc",
	"imageWrapper": "cartItem_imageWrapper__3GfHV",
	"info": "cartItem_info__1rYs5",
	"name": "cartItem_name__MHksC",
	"type": "cartItem_type__zZVPR",
	"price": "cartItem_price__H0joy",
	"btn": "cartItem_btn__Mh0x_",
	"voucherWrapper": "cartItem_voucherWrapper__Ca_uN",
	"voucherTitle": "cartItem_voucherTitle__ew4I_",
	"overlayShow": "cartItem_overlayShow__f7YVb",
	"overlayHide": "cartItem_overlayHide__nbYJG"
};


/***/ })

};
;