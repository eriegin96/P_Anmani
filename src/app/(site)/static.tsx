import {QUERY_PARAMS, ROUTE} from "@/constants/route";
import {
	IconCanHo,
	IconDonLap,
	IconShopHouse,
	IconSongLap,
	IconTrendingUp,
} from "../../assets";
import {PRODUCT_TAG, PRODUCT_TYPE} from "@/constants/product";
import {TCategory} from "@/types/category.type";

export const carouselList = [
	{
		id: "1",
		src: "https://picsum.photos/id/208/1600/900",
	},
	{
		id: "2",
		src: "https://picsum.photos/id/206/1600/900",
	},
];

const locationList = [
	{value: QUERY_PARAMS.LOCATION.HCM, name: "Hồ Chí Minh"},
	{value: QUERY_PARAMS.LOCATION.NHA_TRANG, name: "Nha Trang"},
	{value: QUERY_PARAMS.LOCATION.PHU_QUOC, name: "Phú Quốc"},
	{value: QUERY_PARAMS.LOCATION.DA_NANG, name: "Đà Nẵng"},
];

export const categoryList: TCategory[] = [
	{
		id: "1",
		tag: QUERY_PARAMS.TAG.INVESTOR,
		type: QUERY_PARAMS.TYPE.SINGLE,
		title: PRODUCT_TYPE.single,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?type=${QUERY_PARAMS.TYPE.SINGLE}`,
		icon: IconDonLap,
	},
	{
		id: "2",
		tag: QUERY_PARAMS.TAG.INVESTOR,
		type: QUERY_PARAMS.TYPE.DOUBLE,
		title: PRODUCT_TYPE.double,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?type=${QUERY_PARAMS.TYPE.DOUBLE}`,
		icon: IconSongLap,
	},
	{
		id: "3",
		tag: QUERY_PARAMS.TAG.INVESTOR,
		type: QUERY_PARAMS.TYPE.SHOPHOUSE,
		title: PRODUCT_TYPE.shophouse,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?type=${QUERY_PARAMS.TYPE.SHOPHOUSE}`,
		icon: IconCanHo,
	},
	{
		id: "4",
		tag: QUERY_PARAMS.TAG.INVESTOR,
		type: QUERY_PARAMS.TYPE.APARTMENT,
		title: PRODUCT_TYPE.apartment,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?type=${QUERY_PARAMS.TYPE.APARTMENT}`,
		icon: IconShopHouse,
	},
	{
		id: "5",
		tag: QUERY_PARAMS.TAG.TRANSFER,
		title: PRODUCT_TAG.TRANSFER,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${QUERY_PARAMS.TAG.TRANSFER}`,
		icon: IconTrendingUp,
	},
];

export const investorList = [
	{
		id: "1",
		value: "KDI Holding",
		title: "KDI Holding",
		src: "https://picsum.photos/id/201/1600/900",
	},
	{
		id: "2",
		value: "Sun Property",
		title: "Sun Property",
		src: "https://picsum.photos/id/201/1600/900",
	},
];
