import {PRODUCT_LOCATION} from "@/constants/product";
import {IconMapPinFilled, IconStarFilled} from "@tabler/icons-react";

export const locationTabList = [
	{
		value: PRODUCT_LOCATION.NEARBY,
		icon: <IconMapPinFilled size={20} />,
		title: "Địa điểm lân cận",
	},
	{
		value: PRODUCT_LOCATION.POPULAR,
		icon: <IconStarFilled size={20} />,
		title: "Phổ biến trong khu vực",
	},
];
