import {PRODUCT_TAG, PRODUCT_TYPE} from "@/constants/product";
import {QUERY_PARAMS} from "@/constants/route";

export const tagOptions = [
	{value: QUERY_PARAMS.TAG.INVESTOR, label: PRODUCT_TAG.INVESTOR},
	{value: QUERY_PARAMS.TAG.TRANSFER, label: PRODUCT_TAG.TRANSFER},
	{value: QUERY_PARAMS.TAG.RENT, label: PRODUCT_TAG.RENT},
];

export const typeOptions = [
	{value: QUERY_PARAMS.TYPE.SINGLE, label: PRODUCT_TYPE.SINGLE_VILLA},
	{value: QUERY_PARAMS.TYPE.DOUBLE, label: PRODUCT_TYPE.DOUBLE_VILLA},
	{value: QUERY_PARAMS.TYPE.SHOPHOUSE, label: PRODUCT_TYPE.SHOPHOUSE},
	{value: QUERY_PARAMS.TYPE.APARTMENT, label: PRODUCT_TYPE.APARTMENT},
];

export const areaOptions = [
	{value: QUERY_PARAMS.AREA.PHU_QUOC, label: "Phú Quốc"},
	{value: QUERY_PARAMS.AREA.NHA_TRANG, label: "Nha Trang"},
	{value: QUERY_PARAMS.AREA.DA_NANG, label: "Đà Nẵng"},
	{value: QUERY_PARAMS.AREA.HCM, label: "TP.Hồ Chí Minh"},
];

export const investorOptions = [
	{value: "1", label: "Sun Property - Sun Group"},
	{value: "2", label: "Vega City - KDI Holdings"},
	{value: "3", label: "Masterise Home"},
];

export const sortOptions = [
	{value: QUERY_PARAMS.SORT.PRICE_ASCENDING, label: "Giá thấp đến cao"},
	{value: QUERY_PARAMS.SORT.PRICE_DESCENDING, label: "Giá cao đến thấp"},
];
