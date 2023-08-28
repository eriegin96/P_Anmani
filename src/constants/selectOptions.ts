import {INVESTOR} from "./investor";
import {LOCATION, TLocationObject} from "./location";
import {PRODUCT_STATUS, PRODUCT_TAG, PRODUCT_TYPE} from "./product";
import {PROJECT} from "./project";
import {QUERY_PARAMS} from "./route";

export const statusOptions = [
	{value: PRODUCT_STATUS.sold.value, label: PRODUCT_STATUS.sold.label},
	{
		value: PRODUCT_STATUS["in-stock"].value,
		label: PRODUCT_STATUS["in-stock"].label,
	},
];

export const tagOptions = [
	{value: PRODUCT_TAG.investor.value, label: PRODUCT_TAG.investor.label},
	{value: PRODUCT_TAG.transfer.value, label: PRODUCT_TAG.transfer.label},
	{value: PRODUCT_TAG.rent.value, label: PRODUCT_TAG.rent.label},
];

export const projectOptions = [
	{value: PROJECT["1"].value, label: PROJECT["1"].label},
	{value: PROJECT["2"].value, label: PROJECT["2"].label},
	{value: PROJECT["3"].value, label: PROJECT["3"].label},
	{value: PROJECT["4"].value, label: PROJECT["4"].label},
	{value: PROJECT["5"].value, label: PROJECT["5"].label},
	{value: PROJECT["6"].value, label: PROJECT["6"].label},
	{value: PROJECT["7"].value, label: PROJECT["7"].label},
	{value: PROJECT["8"].value, label: PROJECT["8"].label},
	{value: PROJECT["9"].value, label: PROJECT["9"].label},
	{value: PROJECT["10"].value, label: PROJECT["10"].label},
	{value: PROJECT["11"].value, label: PROJECT["11"].label},
];

export const typeOptions = [
	{value: PRODUCT_TYPE.single.value, label: PRODUCT_TYPE.single.label},
	{value: PRODUCT_TYPE.double.value, label: PRODUCT_TYPE.double.label},
	{value: PRODUCT_TYPE.shophouse.value, label: PRODUCT_TYPE.shophouse.label},
	{value: PRODUCT_TYPE.apartment.value, label: PRODUCT_TYPE.apartment.label},
];

export const locationOptions: TLocationObject[] = [
	{value: LOCATION["phu-quoc"].value, label: LOCATION["phu-quoc"].label},
	{value: LOCATION["nha-trang"].value, label: LOCATION["nha-trang"].label},
	{value: LOCATION["da-nang"].value, label: LOCATION["da-nang"].label},
	{value: LOCATION["hcm"].value, label: LOCATION["hcm"].label},
];

export const investorOptions = [
	{value: INVESTOR["1"].value, label: INVESTOR["1"].label},
	{value: INVESTOR["2"].value, label: INVESTOR["2"].label},
	{value: INVESTOR["3"].value, label: INVESTOR["3"].label},
];

export const sortOptions = [
	{value: QUERY_PARAMS.SORT.PRICE_ASCENDING, label: "Giá thấp đến cao"},
	{value: QUERY_PARAMS.SORT.PRICE_DESCENDING, label: "Giá cao đến thấp"},
];
