import {isObjectEmpty} from "./isObjectEmpty";

export const getParams = <
	T extends Record<string, string | number | string[] | boolean | undefined>
>(
	params: T
): string => {
	if (isObjectEmpty(params)) return "";
	return Object.entries(params).reduce((prev, [key, value], currentIndex) => {
		if (value == undefined) return prev;

		let paramsValue;
		if (Array.isArray(value)) {
			paramsValue = value.join(`&${key}=`);
		} else if (typeof value === "boolean") {
			paramsValue = value.toString();
		} else {
			paramsValue = value;
		}

		return currentIndex
			? `${prev}&${key}=${paramsValue}`
			: `${prev}${key}=${paramsValue}`;
	}, "");
};
