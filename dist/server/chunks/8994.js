"use strict";
exports.id = 8994;
exports.ids = [8994];
exports.modules = {

/***/ 68994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cd: () => (/* binding */ investorOptions),
/* harmony export */   Fo: () => (/* binding */ sortOptions),
/* harmony export */   Z$: () => (/* binding */ locationOptions),
/* harmony export */   hD: () => (/* binding */ tagOptions),
/* harmony export */   hm: () => (/* binding */ statusOptions),
/* harmony export */   mS: () => (/* binding */ typeOptions)
/* harmony export */ });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86756);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80094);


const statusOptions = [
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.STATUS.SOLD,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_STATUS */ .eM.SOLD
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.STATUS.IN_STOCK,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_STATUS */ .eM.IN_STOCK
    }
];
const tagOptions = [
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.TAG.INVESTOR,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_TAG */ .dW.INVESTOR
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.TAG.TRANSFER,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_TAG */ .dW.TRANSFER
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.TAG.RENT,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_TAG */ .dW.RENT
    }
];
const typeOptions = [
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.TYPE.SINGLE,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_TYPE */ .fY.SINGLE_VILLA
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.TYPE.DOUBLE,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_TYPE */ .fY.DOUBLE_VILLA
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.TYPE.SHOPHOUSE,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_TYPE */ .fY.SHOPHOUSE
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.TYPE.APARTMENT,
        label: _product__WEBPACK_IMPORTED_MODULE_0__/* .PRODUCT_TYPE */ .fY.APARTMENT
    }
];
const locationOptions = [
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.LOCATION.PHU_QUOC,
        label: "Ph\xfa Quốc"
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.LOCATION.NHA_TRANG,
        label: "Nha Trang"
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.LOCATION.DA_NANG,
        label: "Đ\xe0 Nẵng"
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.LOCATION.HCM,
        label: "TP.Hồ Ch\xed Minh"
    }
];
const investorOptions = [
    {
        value: "1",
        label: "Sun Property - Sun Group"
    },
    {
        value: "2",
        label: "Vega City - KDI Holdings"
    },
    {
        value: "3",
        label: "Masterise Home"
    }
];
const sortOptions = [
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.SORT.PRICE_ASCENDING,
        label: "Gi\xe1 thấp đến cao"
    },
    {
        value: _route__WEBPACK_IMPORTED_MODULE_1__/* .QUERY_PARAMS */ .Tx.SORT.PRICE_DESCENDING,
        label: "Gi\xe1 cao đến thấp"
    }
];


/***/ })

};
;