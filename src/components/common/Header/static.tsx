import {
	IconBuilding,
	IconBuildingBank,
	IconBuildingCommunity,
	IconBuildingFortress,
	IconBuildingSkyscraper,
	IconBuildingStore,
	IconCoins,
	IconHome,
	IconHomeCheck,
	IconNetwork,
	IconSpeedboat,
} from "@tabler/icons-react";
import color from "@/styles/color.module.scss";
import {QUERY_PARAMS, ROUTE} from "@/constants/route";
import {PRODUCT_TAG, PRODUCT_TYPE} from "@/constants/product";

export const navLinks = [
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?type=${QUERY_PARAMS.TYPE.SINGLE}`,
		name: PRODUCT_TYPE.single,
		icon: <IconHome color={color.primary1} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?type=${QUERY_PARAMS.TYPE.DOUBLE}`,
		name: PRODUCT_TYPE.double,
		icon: <IconBuildingFortress color={color.primary2} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?type=${QUERY_PARAMS.TYPE.SHOPHOUSE}`,
		name: PRODUCT_TYPE.shophouse,
		icon: <IconBuildingStore color={color.primary3} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?type=${QUERY_PARAMS.TYPE.APARTMENT}`,
		name: PRODUCT_TYPE.apartment,
		icon: <IconBuilding color={color.red1} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?tag=${QUERY_PARAMS.TAG.TRANSFER}`,
		name: PRODUCT_TAG.TRANSFER,
		icon: <IconSpeedboat color={color.red2} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?tag=${QUERY_PARAMS.TAG.RENT}`,
		name: PRODUCT_TAG.RENT,
		icon: <IconHomeCheck color={color.yellow1} />,
	},
	{
		href: ROUTE.CONSULT,
		name: "Tài chính",
		icon: <IconCoins color={color.green2} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Hồ Chí Minh",
		icon: <IconBuildingCommunity color={color.green3} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Nha Trang",
		icon: <IconBuildingCommunity color={color.primary1} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Phú Quốc",
		icon: <IconBuildingCommunity color={color.primary2} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Đà Nẵng",
		icon: <IconBuildingCommunity color={color.primary3} />,
	},
	{
		href: "/",
		name: "Đối tác Chủ Đầu Tư",
		icon: <IconBuildingSkyscraper color={color.red1} />,
	},
	{
		href: "/",
		name: "Ký gửi Bất Động Sản",
		icon: <IconBuildingBank color={color.red2} />,
	},
	{
		href: "/",
		name: "Kết nối",
		icon: <IconNetwork color={color.yellow1} />,
	},
];
