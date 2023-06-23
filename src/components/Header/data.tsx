import {
	IconBuilding,
	IconBuildingBank,
	IconBuildingFortress,
	IconBuildingSkyscraper,
	IconBuildingStore,
	IconHome,
	IconNetwork,
	IconShip,
	IconSpeedboat,
} from "@tabler/icons-react";
import color from "@/styles/color.module.scss";

export const navLinks = [
	{
		href: "/",
		name: "Dinh thự & Biệt thự Đơn lập",
		icon: <IconHome color={color.primary1} />,
	},
	{
		href: "/",
		name: "Dinh thự & Biệt thự Đơn lập",
		icon: <IconBuildingFortress color={color.green3} />,
	},
	{
		href: "/",
		name: "Shophouse",
		icon: <IconBuildingStore color={color.yellow1} />,
	},
	{
		href: "/",
		name: "Căn hộ",
		icon: <IconBuilding color={color.red2} />,
	},

	{
		href: "/",
		name: "Thị trường BĐS Nha Trang",
		icon: <IconSpeedboat color={color.primary2} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Phú Quốc",
		icon: <IconShip color={color.green2} />,
	},

	{
		href: "/",
		name: "Đối tác Chủ Đầu Tư",
		icon: <IconBuildingSkyscraper color={color.red2} />,
	},
	{
		href: "/",
		name: "Ký gửi Bất Động Sản",
		icon: <IconBuildingBank color={color.pink2} />,
	},
	{
		href: "/",
		name: "Kết nối",
		icon: <IconNetwork color={color.purple1} />,
	},
];
