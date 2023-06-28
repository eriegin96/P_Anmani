import {TProduct, TProductAnchorValue} from "@/types/product.type";
import {
	Description,
	Facilities,
	Location,
	Overview,
	Policy,
	VoucherList,
} from "./_components";
import {ReactElement} from "react";

export const pageAnchorList = (
	product: TProduct
): {anchor: TProductAnchorValue; title: string; component: ReactElement}[] => [
	{
		anchor: "main",
		title: "Tổng quan",
		component: <Overview product={product} />,
	},
	{anchor: "voucher", title: "Voucher", component: <VoucherList />},
	{anchor: "facilities", title: "Tiện ích", component: <Facilities />},
	{
		anchor: "location",
		title: "Vị trí",
		component: <Location product={product} />,
	},
	{
		anchor: "policy",
		title: "Chính sách",
		component: <Policy product={product} />,
	},
	{
		anchor: "description",
		title: "Mô tả",
		component: <Description product={product} />,
	},
];
