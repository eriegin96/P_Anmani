import {PRODUCT_FACILITY} from "@/constants/product";
import {
	IconBath,
	IconBed,
	IconStairs,
	IconTag,
	IconTrees,
	IconWall,
} from "@tabler/icons-react";

export const facilityList = [
	{
		value: PRODUCT_FACILITY.LAND_AREA,
		icon: <IconTrees />,
		title: "Tổng diện tích đất",
	},
	{
		value: PRODUCT_FACILITY.FLOOR_AREA,
		icon: <IconWall />,
		title: "Diện tích sàn tầng 1",
	},
	{value: PRODUCT_FACILITY.FLOOR, icon: <IconStairs />, title: "Số tầng"},
	{value: PRODUCT_FACILITY.BEDROOM, icon: <IconBed />, title: "Số phòng ngủ"},
	{value: PRODUCT_FACILITY.BATHROOM, icon: <IconBath />, title: "Số phòng tắm"},
	{value: PRODUCT_FACILITY.OTHER, icon: <IconTag />, title: "Khác"},
];
