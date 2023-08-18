"use strict";
exports.id = 4401;
exports.ids = [4401];
exports.modules = {

/***/ 44401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gl: () => (/* reexport */ useCreateProduct),
  HF: () => (/* reexport */ useDeleteProduct),
  eA: () => (/* reexport */ useGetProductById/* useGetProductById */.e),
  iu: () => (/* reexport */ useGetProducts/* useGetProducts */.i),
  vO: () => (/* reexport */ useUpdateProduct)
});

// EXTERNAL MODULE: ./src/hooks/api/product/query/useGetProducts.ts
var useGetProducts = __webpack_require__(19189);
// EXTERNAL MODULE: ./src/hooks/api/product/query/useGetProductById.ts
var useGetProductById = __webpack_require__(24190);
// EXTERNAL MODULE: ./src/api/axios.ts
var axios = __webpack_require__(217);
// EXTERNAL MODULE: ./src/constants/api.ts
var api = __webpack_require__(30425);
// EXTERNAL MODULE: ./node_modules/swr/mutation/dist/index.mjs
var dist = __webpack_require__(77237);
;// CONCATENATED MODULE: ./src/hooks/api/product/mutation/useCreateProduct.ts



const fetcher = (url, { arg })=>axios/* axiosInstance */.b.post(api/* API_ENDPOINT */.QP.PRODUCTS, JSON.stringify(arg)).then((res)=>res);
const useCreateProduct = ()=>{
    const { data, trigger, isMutating, error } = (0,dist/* default */.Z)(api/* API_KEY */.$h.CREATE_PRODUCT, fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

// EXTERNAL MODULE: ./src/utils/concatHref.ts
var concatHref = __webpack_require__(58308);
;// CONCATENATED MODULE: ./src/hooks/api/product/mutation/useUpdateProduct.ts




const useUpdateProduct_fetcher = (url, { arg })=>axios/* axiosInstance */.b.patch(url, JSON.stringify(arg)).then((res)=>res);
const useUpdateProduct = (productId)=>{
    const { data, trigger, isMutating, error } = (0,dist/* default */.Z)((0,concatHref/* concatHref */.R)(api/* API_ENDPOINT */.QP.PRODUCTS, productId), useUpdateProduct_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/product/mutation/useDeleteProduct.ts




const useDeleteProduct_fetcher = (url, { arg })=>axios/* axiosInstance */.b.delete((0,concatHref/* concatHref */.R)(api/* API_ENDPOINT */.QP.PRODUCTS, arg)).then((res)=>res);
const useDeleteProduct = ()=>{
    const { data, trigger, isMutating, error } = (0,dist/* default */.Z)(api/* API_KEY */.$h.DELETE_PRODUCT, useDeleteProduct_fetcher);
    return {
        trigger,
        isMutating,
        error
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/product/index.ts







/***/ }),

/***/ 24190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useGetProductById)
/* harmony export */ });
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30425);
/* harmony import */ var _utils_concatHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58308);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53395);




const fetcher = (url)=>_api_axios__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(url).then((res)=>res);
const useGetProductById = (productId)=>{
    return (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(productId ? (0,_utils_concatHref__WEBPACK_IMPORTED_MODULE_3__/* .concatHref */ .R)(_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINT */ .QP.PRODUCTS, productId) : null, fetcher);
};


/***/ }),

/***/ 19189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;