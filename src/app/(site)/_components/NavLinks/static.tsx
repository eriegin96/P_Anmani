import {PRODUCT_TAG} from "@/constants/product";
import {ROUTE} from "@/constants/route";
import {
	IconBuilding,
	IconHome2,
	IconReceiptTax,
	IconTopologyComplex,
} from "@tabler/icons-react";

export const navLinkList = [
	{
		icon: <IconReceiptTax />,
		title: "Tài chính",
		href: ROUTE.CONSULT,
		tag: "Hot",
	},
	{
		icon: <IconBuilding />,
		title: PRODUCT_TAG.investor.label,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${PRODUCT_TAG.investor.value}`,
	},
	{
		icon: <IconHome2 />,
		title: PRODUCT_TAG.transfer.label,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${PRODUCT_TAG.transfer.value}`,
	},
	{
		icon: <IconTopologyComplex />,
		title: PRODUCT_TAG.rent.label,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${PRODUCT_TAG.rent.value}`,
	},
];
