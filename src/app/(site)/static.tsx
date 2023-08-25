import {ROUTE} from "@/constants/route";
import {
	IconCanHo,
	IconDonLap,
	IconShopHouse,
	IconSongLap,
	IconTrendingUp,
} from "../../assets";
import {PRODUCT_TAG, PRODUCT_TYPE} from "@/constants/product";
import {TCategory} from "@/types/category.type";
import {locationOptions} from "@/constants/selectOptions";

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

export const categoryList: TCategory[] = [
	{
		id: "1",
		tag: PRODUCT_TAG.investor.value,
		type: PRODUCT_TYPE.single.value,
		title: PRODUCT_TYPE.single.label,
		location: locationOptions,
		href: `${ROUTE.ADVANCED_SEARCH}?type=${PRODUCT_TYPE.single.value}`,
		icon: IconDonLap,
	},
	{
		id: "2",
		tag: PRODUCT_TAG.investor.value,
		type: PRODUCT_TYPE.double.value,
		title: PRODUCT_TYPE.double.label,
		location: locationOptions,
		href: `${ROUTE.ADVANCED_SEARCH}?type=${PRODUCT_TYPE.double.value}`,
		icon: IconSongLap,
	},
	{
		id: "3",
		tag: PRODUCT_TAG.investor.value,
		type: PRODUCT_TYPE.shophouse.value,
		title: PRODUCT_TYPE.shophouse.label,
		location: locationOptions,
		href: `${ROUTE.ADVANCED_SEARCH}?type=${PRODUCT_TYPE.shophouse.value}`,
		icon: IconCanHo,
	},
	{
		id: "4",
		tag: PRODUCT_TAG.investor.value,
		type: PRODUCT_TYPE.apartment.value,
		title: PRODUCT_TYPE.apartment.label,
		location: locationOptions,
		href: `${ROUTE.ADVANCED_SEARCH}?type=${PRODUCT_TYPE.apartment.value}`,
		icon: IconShopHouse,
	},
	{
		id: "5",
		tag: PRODUCT_TAG.transfer.value,
		title: PRODUCT_TAG.transfer.label,
		location: locationOptions,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${PRODUCT_TAG.transfer.value}`,
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
