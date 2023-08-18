exports.id = 4295;
exports.ids = [4295];
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

/***/ 14295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var lib = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/constants/common.ts
var common = __webpack_require__(89439);
// EXTERNAL MODULE: ./src/constants/selectOptions.ts
var selectOptions = __webpack_require__(68994);
// EXTERNAL MODULE: ./src/app/(protected)/admin/_shared/config.ts
var config = __webpack_require__(74356);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/product/_components/FormBasicInfo/index.tsx





function FormBasicInfo() {
    const onStatusChange = (value)=>{
        console.log(`status ${value}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 24,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "name",
                    label: "T\xean",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Căn hộ Nha Trang"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "status",
                    label: "Trạng th\xe1i BĐS",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Select */.Ph, {
                        placeholder: "Vui l\xf2ng chọn trạng th\xe1i của BĐS",
                        onChange: onStatusChange,
                        allowClear: true,
                        options: selectOptions/* statusOptions */.hm
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "originalPrice",
                    label: "Gi\xe1 gốc",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* InputNumber */.Rn, {
                        step: 1000000,
                        formatter: (value)=>`VND ${value}`.replace(common/* NUMBER_FORMAT */.sj, "."),
                        parser: (value)=>Number(value.replace(/VND\s?|(\.*)/g, ""))
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "price",
                    label: "Gi\xe1 khi giảm",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* InputNumber */.Rn, {
                        step: 1000000,
                        formatter: (value)=>`VND ${value}`.replace(common/* NUMBER_FORMAT */.sj, "."),
                        parser: (value)=>Number(value.replace(/VND\s?|(\.*)/g, ""))
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/(protected)/admin/product/_components/FormCategory/index.tsx




function FormCategory() {
    const onSelectChange = (value)=>{
        console.log(`status ${value}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "tag",
                    label: "H\xecnh thức b\xe1n/cho thu\xea",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Select */.Ph, {
                        placeholder: "Vui l\xf2ng chọn h\xecnh thức b\xe1n/cho thu\xea",
                        onChange: onSelectChange,
                        allowClear: true,
                        options: selectOptions/* tagOptions */.hD
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "type",
                    label: "Loại h\xecnh",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Select */.Ph, {
                        placeholder: "Vui l\xf2ng chọn loại h\xecnh",
                        onChange: onSelectChange,
                        allowClear: true,
                        options: selectOptions/* typeOptions */.mS
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "investor",
                    label: "Chủ đầu tư",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Select */.Ph, {
                        placeholder: "Vui l\xf2ng chọn chủ đầu tư",
                        onChange: onSelectChange,
                        allowClear: true,
                        options: selectOptions/* investorOptions */.Cd
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "location",
                        "main"
                    ],
                    label: "Khu vực",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Select */.Ph, {
                        placeholder: "Vui l\xf2ng chọn khu vực",
                        onChange: onSelectChange,
                        allowClear: true,
                        options: selectOptions/* locationOptions */.Z$
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/(protected)/admin/product/_components/FormInformation/index.tsx



function FormInformation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 10,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "information",
                        "landArea"
                    ],
                    label: "Diện t\xedch đất",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "165m2"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "information",
                        "floorArea"
                    ],
                    label: "Diện t\xedch s\xe0n",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "165m2"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "information",
                        "floor"
                    ],
                    label: "Số tầng",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "5 tầng"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "information",
                        "bedroom"
                    ],
                    label: "Số ph\xf2ng ngủ",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "4 ph\xf2ng ngủ - 2 hồ bơi"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "information",
                        "bathroom"
                    ],
                    label: "Số ph\xf2ng tắm",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "3 ph\xf2ng tắm"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "information",
                        "other"
                    ],
                    label: "Tiện \xedch kh\xe1c",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Đơn gi\xe1"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(39726);
// EXTERNAL MODULE: ./src/app/(protected)/admin/_shared/form.module.scss
var form_module = __webpack_require__(23741);
var form_module_default = /*#__PURE__*/__webpack_require__.n(form_module);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/product/_components/FormLocation/index.tsx





function FormLocation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "location",
                        "sub"
                    ],
                    label: "Phường / Quận",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Phường Vĩnh Hải / Quận 1"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "location",
                        "detail"
                    ],
                    label: "Vị tr\xed",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Số nh\xe0, đường, phường"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "location",
                        "lng"
                    ],
                    label: "Kinh độ",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "106.724992"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "location",
                        "lat"
                    ],
                    label: "Vĩ độ",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "10.729886"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.List, {
                    name: [
                        "location",
                        "nearby"
                    ],
                    rules: [
                        {
                            validator: async (_, names)=>{
                                if (!names || names.length < 1) {
                                    return Promise.reject(new Error("\xcdt nhất 1 địa điểm l\xe2n cận"));
                                }
                            }
                        }
                    ],
                    children: (fields, { add, remove }, { errors })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                            label: "Địa điểm l\xe2n cận",
                            children: [
                                fields.map(({ key, name, ...restField })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                                        required: false,
                                        className: (form_module_default()).formListItem,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                ...restField,
                                                name: [
                                                    name,
                                                    "name"
                                                ],
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập t\xean địa điểm"
                                                    }
                                                ],
                                                noStyle: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: "T\xean địa điểm"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                ...restField,
                                                name: [
                                                    name,
                                                    "distance"
                                                ],
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập khoảng c\xe1ch"
                                                    }
                                                ],
                                                noStyle: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: "Khoảng c\xe1ch"
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
                                    children: "Th\xeam địa điểm l\xe2n cận"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.ErrorList, {
                                    errors: errors
                                })
                            ]
                        })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.List, {
                    name: [
                        "location",
                        "popular"
                    ],
                    rules: [
                        {
                            validator: async (_, names)=>{
                                if (!names || names.length < 1) {
                                    return Promise.reject(new Error("\xcdt nhất 1 địa điểm phổ biến"));
                                }
                            }
                        }
                    ],
                    children: (fields, { add, remove }, { errors })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                            label: "Địa điểm phổ biến",
                            children: [
                                fields.map(({ key, name, ...restField })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                                        required: false,
                                        className: (form_module_default()).formListItem,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                ...restField,
                                                name: [
                                                    name,
                                                    "name"
                                                ],
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập t\xean địa điểm"
                                                    }
                                                ],
                                                noStyle: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: "T\xean địa điểm"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                ...restField,
                                                name: [
                                                    name,
                                                    "distance"
                                                ],
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập khoảng c\xe1ch"
                                                    }
                                                ],
                                                noStyle: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: "Khoảng c\xe1ch"
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
                                    children: "Th\xeam địa điểm phổ biến"
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

;// CONCATENATED MODULE: ./src/app/(protected)/admin/product/_components/FormPolicy/index.tsx


function FormPolicy() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 24,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "policy",
                        "main"
                    ],
                    label: "Ch\xednh s\xe1ch chung",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input.TextArea, {
                        autoSize: {
                            minRows: 3
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "policy",
                        "loan"
                    ],
                    label: "Ch\xednh s\xe1ch vay",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input.TextArea, {
                        autoSize: {
                            minRows: 3
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "policy",
                        "equity"
                    ],
                    label: "Ch\xednh s\xe1ch vốn",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input.TextArea, {
                        autoSize: {
                            minRows: 3
                        }
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/(protected)/admin/product/_components/FormDescription/index.tsx



function FormDescription() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "description",
                        "pros"
                    ],
                    label: "Ưu điểm",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input.TextArea, {
                        autoSize: {
                            minRows: 3
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "description",
                        "cons"
                    ],
                    label: "Nhược điểm",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input.TextArea, {
                        autoSize: {
                            minRows: 3
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "description",
                        "juridice"
                    ],
                    label: "Ph\xe1p l\xfd",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Sở hữu l\xe2u d\xe0i"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "description",
                        "delivery",
                        "date"
                    ],
                    label: "Ng\xe0y b\xe0n giao",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Dự kiến 2025"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "description",
                        "delivery",
                        "info"
                    ],
                    label: "B\xe0n giao",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "B\xe0n giao th\xf4 ho\xe0n thiện ngo\xe0i"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/(protected)/admin/product/_components/FormImage/index.tsx






function FormImage() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 24,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: [
                        "image",
                        "thumbnail"
                    ],
                    label: "H\xecnh ảnh ch\xednh",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: common/* PLACEHOLDER_LINK */.uX
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.List, {
                    name: [
                        "image",
                        "main"
                    ],
                    rules: [
                        {
                            validator: async (_, names)=>{
                                if (!names || names.length < 1) {
                                    return Promise.reject(new Error("\xcdt nhất 1 h\xecnh ảnh"));
                                }
                            }
                        }
                    ],
                    children: (fields, { add, remove }, { errors })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                            label: "H\xecnh ảnh của Chủ đầu tư",
                            required: true,
                            children: [
                                fields.map(({ key, name })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                                        className: (form_module_default()).formListItem,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                required: false,
                                                name: name,
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập link h\xecnh ảnh"
                                                    }
                                                ],
                                                style: {
                                                    flex: 1
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: common/* PLACEHOLDER_LINK */.uX
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
                                    children: "Th\xeam h\xecnh ảnh của Chủ đầu tư"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.ErrorList, {
                                    errors: errors
                                })
                            ]
                        })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.List, {
                    name: [
                        "image",
                        "reality"
                    ],
                    rules: [
                        {
                            validator: async (_, names)=>{
                                if (!names || names.length < 1) {
                                    return Promise.reject(new Error("\xcdt nhất 1 h\xecnh ảnh"));
                                }
                            }
                        }
                    ],
                    children: (fields, { add, remove }, { errors })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                            label: "H\xecnh ảnh thực tế",
                            children: [
                                fields.map(({ key, name })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                                        className: (form_module_default()).formListItem,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                required: false,
                                                name: name,
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập link h\xecnh ảnh"
                                                    }
                                                ],
                                                style: {
                                                    flex: 1
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: common/* PLACEHOLDER_LINK */.uX
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
                                    children: "Th\xeam h\xecnh ảnh thực tế"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.ErrorList, {
                                    errors: errors
                                })
                            ]
                        })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.List, {
                    name: [
                        "image",
                        "area"
                    ],
                    children: (fields, { add, remove }, { errors })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                            label: "H\xecnh ảnh mặt bằng v\xe0 nội thất b\xe0n giao",
                            required: true,
                            children: [
                                fields.map(({ key, name })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Form */.l0.Item, {
                                        className: (form_module_default()).formListItem,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                                                required: false,
                                                name: name,
                                                validateTrigger: [
                                                    "onChange",
                                                    "onBlur"
                                                ],
                                                rules: [
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Vui l\xf2ng nhập link h\xecnh ảnh"
                                                    }
                                                ],
                                                style: {
                                                    flex: 1
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                                                    placeholder: common/* PLACEHOLDER_LINK */.uX
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
                                    children: "Th\xeam h\xecnh ảnh mặt bằng v\xe0 nội thất b\xe0n giao"
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

// EXTERNAL MODULE: ./src/hooks/api/product/index.ts + 3 modules
var product = __webpack_require__(44401);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/product/_components/ProductForm/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












function ProductForm({ isEditing = false }) {
    const [form] = lib/* Form */.l0.useForm();
    const router = (0,navigation.useRouter)();
    const { id } = (0,navigation.useParams)();
    const { data } = (0,product/* useGetProductById */.eA)(id);
    const { trigger: createProduct, isMutating: isCreating } = (0,product/* useCreateProduct */.gl)();
    const { trigger: updateProduct, isMutating: isUpdating } = (0,product/* useUpdateProduct */.vO)(id);
    const handleSubmit = (values)=>{
        const lat = Number(values.location.lat);
        const lng = Number(values.location.lng);
        const newValues = {
            ...values,
            location: {
                ...values.location,
                lat,
                lng
            }
        };
        console.log(newValues);
        isEditing ? updateProduct(newValues) : createProduct(newValues);
    };
    (0,react_.useEffect)(()=>{
        form.setFieldsValue({
            ...data
        });
    }, [
        data
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
                    " bất động sản"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Th\xf4ng tin chung"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormBasicInfo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Ph\xe2n loại BĐS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormCategory, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Th\xf4ng tin tiện \xedch"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormInformation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Địa điểm"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormLocation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Ch\xednh s\xe1ch"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormPolicy, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "M\xf4 tả"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormDescription, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "H\xecnh ảnh"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormImage, {}),
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
                            " bất động sản"
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