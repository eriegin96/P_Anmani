import {
	IconBeach,
	IconBuilding,
	IconBuildingBank,
	IconBuildingStore,
	IconFlipFlops,
	IconHome,
	IconMountain,
	IconNetwork,
	IconShip,
	IconSofa,
	IconSpeedboat,
} from "@tabler/icons-react";
import color from "@/styles/color.module.scss";

export const navLinks = [
	{
		href: "/",
		name: "Dinh thự & Biệt thự Nha Trang",
		icon: <IconHome color={color.primary1} />,
	},
	{
		href: "/",
		name: "Biệt thự Phú Quốc",
		icon: <IconShip color={color.primary2} />,
	},
	{
		href: "/",
		name: "Căn hộ 5 sao Nha Trang",
		icon: <IconFlipFlops color={color.primary3} />,
	},
	{
		href: "/",
		name: "Căn hộ Phú Quốc",
		icon: <IconBeach color={color.green1} />,
	},
	{
		href: "/",
		name: "BĐS Chuyển nhượng giá tốt",
		icon: <IconSofa color={color.green2} />,
	},
	{
		href: "/",
		name: "Nhà phố thương mại - Shophouse Phú Quốc",
		icon: <IconBuildingStore color={color.green3} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Nha Trang",
		icon: <IconSpeedboat color={color.yellow1} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Phú Quốc",
		icon: <IconMountain color={color.red1} />,
	},
	{
		href: "/",
		name: "Đối tác Chủ Đầu Tư",
		icon: <IconBuilding color={color.red2} />,
	},
	{
		href: "/",
		name: "Ký gửi Bất Động Sản",
		icon: <IconBuildingBank color={color.orange1} />,
	},
	{
		href: "/",
		name: "Kết nối",
		icon: <IconNetwork color={color.purple1} />,
	},
];
