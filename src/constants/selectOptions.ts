import {INVESTOR} from "./investor";
import {LOCATION, TLocationObject} from "./location";
import {PRODUCT_STATUS, PRODUCT_TAG, PRODUCT_TYPE} from "./product";
import {QUERY_PARAMS} from "./route";

export const statusOptions = [
	{value: PRODUCT_STATUS.sold.value, label: PRODUCT_STATUS.sold.label},
	{value: PRODUCT_STATUS.in_stock.value, label: PRODUCT_STATUS.in_stock.label},
];

export const tagOptions = [
	{value: PRODUCT_TAG.investor.value, label: PRODUCT_TAG.investor.label},
	{value: PRODUCT_TAG.transfer.value, label: PRODUCT_TAG.transfer.label},
	{value: PRODUCT_TAG.rent.value, label: PRODUCT_TAG.rent.label},
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
