import {PRODUCT_TAG} from "@/constants/product";
import {QUERY_PARAMS, ROUTE} from "@/constants/route";
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
		title: PRODUCT_TAG.INVESTOR,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${QUERY_PARAMS.TAG.INVESTOR}`,
	},
	{
		icon: <IconHome2 />,
		title: PRODUCT_TAG.TRANSFER,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${QUERY_PARAMS.TAG.TRANSFER}`,
	},
	{
		icon: <IconTopologyComplex />,
		title: PRODUCT_TAG.RENT,
		href: `${ROUTE.ADVANCED_SEARCH}?tag=${QUERY_PARAMS.TAG.RENT}`,
	},
];
