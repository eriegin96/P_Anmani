import {
	IconBuildingBank,
	IconBuildingBridge,
	IconReport,
	IconSailboat,
	IconShip,
} from "@tabler/icons-react";
import color from "@/styles/color.module.scss";

export const reportList = [
	{
		icon: <IconBuildingBank color={color.primary3} />,
		title: "Thị trường BĐS Hồ Chí Minh",
	},
	{
		icon: <IconSailboat color={color.green3} />,
		title: "Thị trường BĐS Nha Trang",
	},
	{
		icon: <IconShip color={color.red1} />,
		title: "Thị trường BĐS Phú Quốc",
	},
	{
		icon: <IconBuildingBridge color={color.purple1} />,
		title: "Thị trường BĐS Đà Nẵng",
	},
	{
		icon: <IconReport color={color.primary3} />,
		title: "Giá BĐS Hồ Chí Minh",
	},
	{
		icon: <IconReport color={color.green3} />,
		title: "Giá BĐS Nha Trang",
	},
	{
		icon: <IconReport color={color.red1} />,
		title: "Giá BĐS Phú Quốc",
	},
	{
		icon: <IconReport color={color.purple1} />,
		title: "Giá BĐS Đà Nẵng",
	},
];
