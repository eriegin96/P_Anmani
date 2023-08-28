import {PRODUCT_INFORMATION} from "@/constants/product";
import {
	IconBath,
	IconBed,
	IconStairs,
	IconTag,
	IconTrees,
	IconWall,
} from "@tabler/icons-react";

export const informationList = [
	{
		value: PRODUCT_INFORMATION.LAND_AREA,
		icon: <IconTrees />,
		title: "Tổng diện tích đất",
	},
	{
		value: PRODUCT_INFORMATION.FLOOR_AREA,
		icon: <IconWall />,
		title: "Diện tích sàn tầng 1",
	},
	{value: PRODUCT_INFORMATION.FLOOR, icon: <IconStairs />, title: "Số tầng"},
	{
		value: PRODUCT_INFORMATION.BEDROOM,
		icon: <IconBed />,
		title: "Số phòng ngủ",
	},
	{
		value: PRODUCT_INFORMATION.BATHROOM,
		icon: <IconBath />,
		title: "Số phòng tắm",
	},
	{value: PRODUCT_INFORMATION.OTHER, icon: <IconTag />, title: "Khác"},
];
