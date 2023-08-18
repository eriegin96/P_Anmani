exports.id = 9152;
exports.ids = [9152];
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

/***/ 22381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotificationForm)
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
// EXTERNAL MODULE: ./src/constants/notification.ts
var notification = __webpack_require__(15142);
// EXTERNAL MODULE: ./src/constants/common.ts
var common = __webpack_require__(89439);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/user/_components/FormNotificationInfo/index.tsx






function FormNotificationInfo() {
    const formInstance = lib/* Form */.l0.useFormInstance();
    const targetType = lib/* Form */.l0.useWatch("targetType", formInstance);
    const onSelectChange = (value)=>{
        console.log(`status ${value}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Row */.X2, {
        gutter: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "avatar",
                    label: "Ảnh avatar",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: common/* PLACEHOLDER_LINK */.uX
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "title",
                    label: "Ti\xeau đề th\xf4ng b\xe1o",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Input, {
                        placeholder: "Cập nhật th\xf4ng tin từ chủ đầu tư"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "type",
                    label: "Loại th\xf4ng b\xe1o",
                    ...config/* defaultFormConfig */.A,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Radio */.Y8.Group, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                                value: notification/* NOTIFICATION_TYPE */.tx.UPDATE,
                                children: "Tiến độ thanh to\xe1n"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                                value: notification/* NOTIFICATION_TYPE */.tx.INFO,
                                children: "Khuyến m\xe3i từ nh\xe0 đầu tư"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Col */.JX, {
                span: 12,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                        name: "targetType",
                        label: "Đối tượng nhận th\xf4ng b\xe1o",
                        ...config/* defaultFormConfig */.A,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Radio */.Y8.Group, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                                    value: notification/* NOTIFICATION_TARGET_TYPE */.bq.ALL,
                                    children: "Tất cả"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Radio */.Y8, {
                                    value: notification/* NOTIFICATION_TARGET_TYPE */.bq.INDIVIDUAL,
                                    children: "Lựa chọn kh\xe1ch"
                                })
                            ]
                        })
                    }),
                    targetType === notification/* NOTIFICATION_TARGET_TYPE */.bq.INDIVIDUAL && /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                        name: "target",
                        label: "T\xean người d\xf9ng",
                        ...config/* defaultFormConfig */.A,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Select */.Ph, {
                            mode: "multiple",
                            placeholder: "Vui l\xf2ng chọn người d\xf9ng nhận th\xf4ng b\xe1o",
                            allowClear: true,
                            onChange: onSelectChange,
                            options: mock_data/* userList */.Lh.map(({ id, name })=>({
                                    label: name,
                                    value: id
                                }))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Col */.JX, {
                span: 24,
                children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Form */.l0.Item, {
                    name: "content",
                    label: "Nội dung th\xf4ng b\xe1o",
                    ...config/* defaultFormConfig */.A,
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

// EXTERNAL MODULE: ./src/app/(protected)/admin/_shared/form.module.scss
var form_module = __webpack_require__(23741);
var form_module_default = /*#__PURE__*/__webpack_require__.n(form_module);
// EXTERNAL MODULE: ./src/hooks/api/notification/index.ts + 4 modules
var api_notification = __webpack_require__(5397);
;// CONCATENATED MODULE: ./src/app/(protected)/admin/user/_components/NotificationForm/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function NotificationForm({ isEditing = false }) {
    const [form] = lib/* Form */.l0.useForm();
    const router = (0,navigation.useRouter)();
    const { id } = (0,navigation.useParams)();
    const { data } = (0,api_notification/* useGetNotificationById */.$v)(id);
    const { trigger: createNotification, isMutating: isCreating } = (0,api_notification/* useCreateNotification */.r4)();
    const { trigger: updateNotification, isMutating: isUpdating } = (0,api_notification/* useUpdateNotification */.dc)(id);
    const handleSubmit = (values)=>{
        const { targetType, ...rest } = values;
        const target = targetType === notification/* NOTIFICATION_TARGET_TYPE */.bq.ALL ? [] : values.target;
        console.log({
            ...rest,
            target
        });
        isEditing ? updateNotification({
            ...rest,
            target
        }) : createNotification({
            ...rest,
            target
        });
    };
    (0,react_.useEffect)(()=>{
        const fieldsValue = data && mock_data/* notificationList */.d5.find((noti)=>noti.id === id);
        form.setFieldsValue({
            ...fieldsValue,
            targetType: fieldsValue?.target.length ? "individual" : "all"
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
                    " Th\xf4ng b\xe1o ",
                    !id && "chung"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Th\xf4ng tin chung"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormNotificationInfo, {}),
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
                            " Th\xf4ng b\xe1o ",
                            !id && "chung"
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