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
import {ROUTE} from "@/constants/route";
import {PRODUCT_TAG, PRODUCT_TYPE} from "@/constants/product";
import {REPORT} from "@/constants/report";

export const navLinks = [
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?type=${PRODUCT_TYPE.single.value}`,
		label: PRODUCT_TYPE.single.label,
		icon: <IconHome color={color.primary1} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?type=${PRODUCT_TYPE.double.value}`,
		label: PRODUCT_TYPE.double.label,
		icon: <IconBuildingFortress color={color.primary2} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?type=${PRODUCT_TYPE.shophouse.value}`,
		label: PRODUCT_TYPE.shophouse.label,
		icon: <IconBuildingStore color={color.primary3} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?type=${PRODUCT_TYPE.apartment.value}`,
		label: PRODUCT_TYPE.apartment.label,
		icon: <IconBuilding color={color.red1} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?tag=${PRODUCT_TAG.transfer.value}`,
		label: PRODUCT_TAG.transfer.label,
		icon: <IconSpeedboat color={color.red2} />,
	},
	{
		href: `${ROUTE.ADVANCED_SEARCH}/?tag=${PRODUCT_TAG.rent.value}`,
		label: PRODUCT_TAG.rent.label,
		icon: <IconHomeCheck color={color.yellow1} />,
	},
	{
		href: ROUTE.CONSULT,
		label: "Tài chính",
		icon: <IconCoins color={color.green2} />,
	},
	{
		href: "/",
		label: REPORT["market-hcm"].label,
		icon: <IconBuildingCommunity color={color.green3} />,
	},
	{
		href: "/",
		label: REPORT["market-nhatrang"].label,
		icon: <IconBuildingCommunity color={color.primary1} />,
	},
	{
		href: "/",
		label: REPORT["market-phuquoc"].label,
		icon: <IconBuildingCommunity color={color.primary2} />,
	},
	{
		href: "/",
		label: REPORT["market-danang"].label,
		icon: <IconBuildingCommunity color={color.primary3} />,
	},
	{
		href: "/",
		label: "Đối tác Chủ Đầu Tư",
		icon: <IconBuildingSkyscraper color={color.red1} />,
	},
	{
		href: "/",
		label: "Ký gửi Bất Động Sản",
		icon: <IconBuildingBank color={color.red2} />,
	},
	{
		href: "/",
		label: "Kết nối",
		icon: <IconNetwork color={color.yellow1} />,
	},
];
