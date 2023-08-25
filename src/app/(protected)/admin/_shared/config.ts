import {Rule} from "antd/es/form";

export const defaultFormConfig = {
	rules: [{required: true, message: "Trường này không được để trống"}],
};

export const urlFormValidation = {
	rules: [
		{required: true, message: "Trường này không được để trống"},
		{type: "url", message: "Trường này phải có định dạng https://..."},
	] as Rule[],
};
