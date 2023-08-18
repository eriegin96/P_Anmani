exports.id = 380;
exports.ids = [380];
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

/***/ 30380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExploreForm)
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
// EXTERNAL MODULE: ./src/app/(protected)/admin/_shared/form.module.scss
var form_module = __webpack_require__(23741);
var form_module_default = /*#__PURE__*/__webpack_require__.n(form_module);
// EXTERNAL MODULE: ./src/app/(protected)/admin/_shared/config.ts
var config = __webpack_require__(74356);
// EXTERNAL MODULE: ./src/constants/common.ts
var common = __webpack_require__(89439);
// EXTERNAL MODULE: ./node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(39726);
// EXTERNAL MODULE: ./src/constants/explore.ts
var explore = __webpack_require__(88686);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/explore/_components/FormExploreInfo/index.tsx







function FormExploreInfo() {
    const onSelectChange = (value)=>{
        console.log(`status ${value}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "title",
                    label: "Ti\xeau đề kh\xe1m ph\xe1",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Cập nhật th\xf4ng tin từ chủ đầu tư"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "url",
                    label: "Link thumbnail",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: common/* PLACEHOLDER_LINK */.uX
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 24,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.List, {
                    name: "stories",
                    rules: [
                        {
                            validator: async (_, names)=>{
                                if (!names || names.length < 1) {
                                    return Promise.reject(new Error("\xcdt nhất 1 link"));
                                }
                            }
                        }
                    ],
                    children: (fields, { add, remove }, { errors })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                            label: "Danh s\xe1ch link story",
                            required: true,
                            children: [
                                fields.map(({ key, name, ...restField })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (form_module_default()).formListItemDiv,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                ...restField,
                                                name: [
                                                    name,
                                                    "title"
                                                ],
                                                label: "Ti\xeau đề story",
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập ti\xeau đề story"
                                                    }
                                                ],
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: "Ti\xeau đề"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                ...restField,
                                                name: [
                                                    name,
                                                    "url"
                                                ],
                                                label: "Link",
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập link story"
                                                    }
                                                ],
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: common/* PLACEHOLDER_LINK */.uX
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                ...restField,
                                                name: [
                                                    name,
                                                    "type"
                                                ],
                                                label: "Loại",
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập loại story"
                                                    }
                                                ],
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Radio */.Y8.Group, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                                                            value: explore/* EXPLORE_TYPE */.z.VIDEO,
                                                            children: "Video"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                                                            value: explore/* EXPLORE_TYPE */.z.IMAGE,
                                                            children: "H\xecnh ảnh"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Button */.zx, {
                                                shape: "circle",
                                                danger: true,
                                                onClick: ()=>remove(name),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconMinus */.UrD, {})
                                            })
                                        ]
                                    }, key)),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Button */.zx, {
                                    type: "dashed",
                                    onClick: ()=>add(),
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconPlus */.SC9, {}),
                                    className: (form_module_default()).addListItemBtn,
                                    children: "Th\xeam link story"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.ErrorList, {
                                    errors: errors
                                })
                            ]
                        })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/hooks/api/explore/index.ts + 3 modules
var api_explore = __webpack_require__(87331);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/explore/_components/ExploreForm/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function ExploreForm({ isEditing = false }) {
    const [form] = lib/* Form */.l0.useForm();
    const router = (0,navigation.useRouter)();
    const { id } = (0,navigation.useParams)();
    const { data } = (0,api_explore/* useGetExploreById */.jb)(id);
    const { trigger: createExplore, isMutating: isCreating } = (0,api_explore/* useCreateExplore */.lj)();
    const { trigger: updateExplore, isMutating: isUpdating } = (0,api_explore/* useUpdateExplore */.$A)(id);
    const handleSubmit = (values)=>{
        console.log({
            ...values
        });
        isEditing ? updateExplore(values) : createExplore(values);
    };
    (0,react_.useEffect)(()=>{
        const fieldsValue = data && mock_data/* exploreVideoList */.Tq.find((noti)=>noti.id === id);
        form.setFieldsValue({
            ...fieldsValue
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
                    " Kh\xe1m ph\xe1"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Th\xf4ng tin chung"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormExploreInfo, {}),
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
                            " Kh\xe1m ph\xe1"
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