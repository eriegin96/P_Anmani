import {QUERY_PARAMS, ROUTE} from "@/constants/route";
import {
	IconCanHo,
	IconDonLap,
	IconShopHouse,
	IconSongLap,
	IconTrendingUp,
} from "../../assets";
import {PRODUCT_TAG, PRODUCT_TYPE} from "@/constants/product";

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

const locationList = ["Hồ Chí Minh", "Nha Trang", "Phú Quốc", "Đà Nẵng"];

export const categoryList = [
	{
		id: "1",
		value: 1,
		title: PRODUCT_TYPE.SINGLE_VILLA,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${QUERY_PARAMS.TYPE.SINGLE}`,
		icon: IconDonLap,
	},
	{
		id: "2",
		value: 2,
		title: PRODUCT_TYPE.DOUBLE_VILLA,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${QUERY_PARAMS.TYPE.DOUBLE}`,
		icon: IconSongLap,
	},
	{
		id: "3",
		value: 3,
		title: PRODUCT_TYPE.SHOPHOUSE,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${QUERY_PARAMS.TYPE.SHOPHOUSE}`,
		icon: IconCanHo,
	},
	{
		id: "4",
		value: 4,
		title: PRODUCT_TYPE.APARTMENT,
		location: locationList,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${QUERY_PARAMS.TYPE.APARTMENT}`,
		icon: IconShopHouse,
	},
	{
		id: "5",
		value: 5,
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
