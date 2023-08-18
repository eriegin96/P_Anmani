exports.id = 2613;
exports.ids = [2613];
exports.modules = {

/***/ 74356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ defaultFormConfig)
/* harmony export */ });
const defaultFormConfig = {
    rules: [
        {
            required: true,
            message: "Trường n\xe0y kh\xf4ng được để trống"
        }
    ]
};


/***/ }),

/***/ 52613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ VoucherForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var lib = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/mock/data.tsx
var mock_data = __webpack_require__(28313);
// EXTERNAL MODULE: ./src/app/(protected)/admin/_shared/config.ts
var config = __webpack_require__(74356);
// EXTERNAL MODULE: ./src/constants/common.ts
var common = __webpack_require__(89439);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/voucher/_components/FormVoucherInfo/index.tsx





function FormVoucherInfo() {
    const form = lib/* Form */.l0.useFormInstance();
    const discountOption = lib/* Form */.l0.useWatch("discountOption", form);
    const productOptions = mock_data/* productList */.Uu.map((product)=>({
            value: product.id,
            label: product.name
        }));
    const onSelectChange = (value)=>{
        console.log(`status ${value}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "productId",
                    label: "Voucher n\xe0y thuộc về sản phẩm",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Select */.Ph, {
                        placeholder: "Vui l\xf2ng chọn sản phẩm",
                        onChange: onSelectChange,
                        allowClear: true,
                        options: productOptions
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "expiredDate",
                    label: "Ng\xe0y hết hạn",
                    rules: [
                        {
                            type: "object",
                            required: true,
                            message: "Trường n\xe0y kh\xf4ng được để trống"
                        }
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* DatePicker */.Mt, {
                        placement: "bottomLeft",
                        format: common/* DATE_FORMAT */.zT
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 24,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "condition",
                    label: "Điều kiện",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Điều kiện giảm gi\xe1"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "discountOption",
                    label: "Giảm gi\xe1",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Radio */.Y8.Group, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                                value: "amount",
                                children: "Số tiền"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                                value: "percent",
                                children: "Phần trăm"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: discountOption === "amount" ? /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "discount",
                        "amount"
                    ],
                    label: "Số tiền giảm gi\xe1",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* InputNumber */.Rn, {
                        step: 1000000,
                        formatter: (value)=>`VND ${value}`.replace(common/* NUMBER_FORMAT */.sj, "."),
                        parser: (value)=>Number(value.replace(/VND\s?|(\.*)/g, ""))
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "discount",
                        "percent"
                    ],
                    label: "Phần trăm giảm gi\xe1",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* InputNumber */.Rn, {
                        step: 1,
                        formatter: (value)=>`${value}%`,
                        parser: (value)=>Number(value.replace("%", ""))
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(43598);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/app/(protected)/admin/_shared/form.module.scss
var form_module = __webpack_require__(23741);
var form_module_default = /*#__PURE__*/__webpack_require__.n(form_module);
// EXTERNAL MODULE: ./src/hooks/api/voucher/index.ts + 3 modules
var voucher = __webpack_require__(42204);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/voucher/_components/VoucherForm/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









function VoucherForm({ isEditing = false }) {
    const [form] = lib/* Form */.l0.useForm();
    const router = (0,navigation.useRouter)();
    const { id } = (0,navigation.useParams)();
    const { data } = (0,voucher/* useGetVoucherById */.GF)(id);
    const { trigger: createVoucher, isMutating: isCreating } = (0,voucher/* useCreateVoucher */.ve)();
    const { trigger: updateVoucher, isMutating: isUpdating } = (0,voucher/* useUpdateVoucher */.cB)(id);
    const handleSubmit = (values)=>{
        const expiredDate = values.expiredDate.format(common/* DATE_FORMAT */.zT);
        const dataBody = {
            ...values,
            expiredDate
        };
        console.log(dataBody);
        isEditing ? updateVoucher(dataBody) : createVoucher(dataBody);
    };
    (0,react_.useEffect)(()=>{
        const fieldsValue = data && mock_data/* voucherList */.Co.find((voucher)=>voucher.id === id);
        form.setFieldsValue({
            ...fieldsValue,
            discountOption: fieldsValue?.discountOption ?? "amount",
            expiredDate: fieldsValue?.["expiredDate"] ? dayjs_min_default()(fieldsValue?.["expiredDate"], common/* DATE_FORMAT */.zT) : dayjs_min_default()(new Date())
        });
        console.log(fieldsValue);
    }, [
        data,
        id,
        form
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0, {
        layout: "vertical",
        requiredMark: "optional",
        form: form,
        onFinish: handleSubmit,
        className: (form_module_default()).form,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: (form_module_default()).formTitle,
                children: [
                    id ? "Sửa th\xf4ng tin" : "Tạo",
                    " Voucher"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Th\xf4ng tin chung"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormVoucherInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (form_module_default()).actionWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* Button */.zx, {
                        danger: true,
                        onClick: ()=>router.back(),
                        children: "Hủy"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Button */.zx, {
                        type: "primary",
                        htmlType: "submit",
                        loading: isEditing ? isUpdating : isCreating,
                        children: [
                            isEditing ? "Sửa" : "Tạo",
                            " Voucher"
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 23741:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "form_form___uL8A",
	"formTitle": "form_formTitle__uNNDT",
	"addListItemBtn": "form_addListItemBtn__4otIN",
	"formListItem": "form_formListItem__ulczd",
	"formListItemDiv": "form_formListItemDiv__yGsTN",
	"actionWrapper": "form_actionWrapper__VjW65",
	"overlayShow": "form_overlayShow__Kgy1e",
	"overlayHide": "form_overlayHide__7ob_K"
};


/***/ })

};
;