"use strict";
exports.id = 9618;
exports.ids = [9618];
exports.modules = {

/***/ 42204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ve: () => (/* reexport */ useCreateVoucher),
  bg: () => (/* reexport */ useDeleteVoucher),
  GF: () => (/* reexport */ useGetVoucherById/* useGetVoucherById */.G),
  Mz: () => (/* reexport */ useGetVouchers/* useGetVouchers */.M),
  cB: () => (/* reexport */ useUpdateVoucher)
});

// EXTERNAL MODULE: ./src/hooks/api/voucher/query/useGetVouchers.ts
var useGetVouchers = __webpack_require__(50417);
// EXTERNAL MODULE: ./src/hooks/api/voucher/query/useGetVoucherById.ts
var useGetVoucherById = __webpack_require__(71108);
// EXTERNAL MODULE: ./src/api/axios.ts
var axios = __webpack_require__(217);
// EXTERNAL MODULE: ./src/constants/api.ts
var api = __webpack_require__(30425);
// EXTERNAL MODULE: ./node_modules/swr/mutation/dist/index.mjs
var dist = __webpack_require__(77237);
;// CONCATENATED MODULE: ./src/hooks/api/voucher/mutation/useCreateVoucher.ts



const fetcher = (url, { arg })=>axios/* axiosInstance */.b.post(api/* API_ENDPOINT */.QP.VOUCHERS, JSON.stringify(arg)).then((res)=>res);
const useCreateVoucher = ()=>{
    const { data, trigger, isMutating, error } = (0,dist/* default */.Z)(api/* API_KEY */.$h.CREATE_VOUCHER, fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

// EXTERNAL MODULE: ./src/utils/concatHref.ts
var concatHref = __webpack_require__(58308);
;// CONCATENATED MODULE: ./src/hooks/api/voucher/mutation/useUpdateVoucher.ts




const useUpdateVoucher_fetcher = (url, { arg })=>axios/* axiosInstance */.b.patch(url, JSON.stringify(arg)).then((res)=>res);
const useUpdateVoucher = (voucherId)=>{
    const { data, trigger, isMutating, error } = (0,dist/* default */.Z)((0,concatHref/* concatHref */.R)(api/* API_ENDPOINT */.QP.VOUCHERS, voucherId), useUpdateVoucher_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/voucher/mutation/useDeleteVoucher.ts




const useDeleteVoucher_fetcher = (url, { arg })=>axios/* axiosInstance */.b.delete((0,concatHref/* concatHref */.R)(api/* API_ENDPOINT */.QP.VOUCHERS, arg)).then((res)=>res);
const useDeleteVoucher = ()=>{
    const { data, trigger, isMutating, error } = (0,dist/* default */.Z)(api/* API_KEY */.$h.DELETE_VOUCHER, useDeleteVoucher_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/voucher/index.ts







/***/ }),

/***/ 71108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useGetVoucherById)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var _utils_concatHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58308);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53395);




const fetcher = (url)=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(url).then((res)=>res);
const useGetVoucherById = (voucherId)=>{
    return (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_utils_concatHref__WEBPACK_IMPORTED_MODULE_3__/* .concatHref */ .R)(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.VOUCHERS, voucherId), fetcher);
};


/***/ }),

/***/ 50417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;