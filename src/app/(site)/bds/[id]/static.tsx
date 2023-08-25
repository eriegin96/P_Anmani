import {TProduct} from "@/types/product.type";
import {
	Description,
	Facility,
	Location,
	Overview,
	Policy,
	VoucherList,
} from "./_components";
import {ReactElement} from "react";
import {TProductAnchorValue} from "@/constants/product";

export const pageAnchorList = (
	product: TProduct
): {anchor: TProductAnchorValue; title: string; component: ReactElement}[] => [
	{
		anchor: "main",
		title: "Tổng quan",
		component: <Overview product={product} />,
	},
	{anchor: "voucher", title: "Voucher", component: <VoucherList />},
	{
		anchor: "facilities",
		title: "Tiện ích",
		component: <Facility product={product} />,
	},
	{
		anchor: "location",
		title: "Vị trí",
		component: <Location location={product.location} />,
	},
	{
		anchor: "policy",
		title: "Chính sách",
		component: <Policy product={product} />,
	},
	{
		anchor: "description",
		title: "Mô tả",
		component: <Description description={product.description} />,
	},
];
