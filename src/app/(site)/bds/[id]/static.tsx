import {TProduct} from "@/types/product.type";
import {
	Description,
	Utility,
	Information,
	Location,
	MoreImage,
	Overview,
	Policy,
	VoucherList,
} from "./_components";
import {ReactElement} from "react";
import {PRODUCT_ANCHOR, TProductAnchorValue} from "@/constants/product";

export const pageAnchorList = (
	product: TProduct
): {anchor: TProductAnchorValue; title: string; component: ReactElement}[] => [
	{
		anchor: PRODUCT_ANCHOR.main.value,
		title: PRODUCT_ANCHOR.main.label,
		component: <Overview product={product} />,
	},
	{
		anchor: PRODUCT_ANCHOR.voucher.value,
		title: PRODUCT_ANCHOR.voucher.label,
		component: <VoucherList />,
	},
	{
		anchor: PRODUCT_ANCHOR.information.value,
		title: PRODUCT_ANCHOR.information.label,
		component: <Information product={product} />,
	},
	{
		anchor: PRODUCT_ANCHOR.utility.value,
		title: PRODUCT_ANCHOR.utility.label,
		component: <Utility product={product} />,
	},
	{
		anchor: PRODUCT_ANCHOR.location.value,
		title: PRODUCT_ANCHOR.location.label,
		component: <Location location={product.location} />,
	},
	{
		anchor: PRODUCT_ANCHOR.policy.value,
		title: PRODUCT_ANCHOR.policy.label,
		component: <Policy product={product} />,
	},
	{
		anchor: PRODUCT_ANCHOR.description.value,
		title: PRODUCT_ANCHOR.description.label,
		component: <Description description={product.description} />,
	},
	{
		anchor: PRODUCT_ANCHOR.image.value,
		title: PRODUCT_ANCHOR.image.label,
		component: <MoreImage product={product} />,
	},
];
