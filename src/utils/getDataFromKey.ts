import {
	investorOptions,
	tagOptions,
	typeOptions,
} from "@/constants/selectOptions";

const getDataFromKeyList = (
	item: {[key: string]: any},
	list: string[]
): any => {
	const [key, ...newList] = list;

	if (!(key in item)) return undefined;
	if (newList.length === 0) return item[key];

	return getDataFromKeyList(item[key], newList);
};

export const getDataFromKey = (item: {[key: string]: any}, key: string) => {
	const keyList = key.split(".");
	if (item?.name) {
		if (key === "tag")
			return tagOptions.find((tag) => tag.value === item[key])?.label;
		if (key === "type")
			return typeOptions.find((tag) => tag.value === item[key])?.label;
		if (key === "investor")
			return investorOptions.find((tag) => tag.value === item[key])?.label;
	}

	return getDataFromKeyList(item, keyList);
};
