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
import variables from "@/styles/_variables.module.scss";

export const navLinks = [
	{
		href: "/",
		name: "Dinh thự & Biệt thự Nha Trang",
		icon: <IconHome color={variables.colorPrimary1} />,
	},
	{
		href: "/",
		name: "Biệt thự Phú Quốc",
		icon: <IconShip color={variables.colorPrimary2} />,
	},
	{
		href: "/",
		name: "Căn hộ 5 sao Nha Trang",
		icon: <IconFlipFlops color={variables.colorPrimary3} />,
	},
	{
		href: "/",
		name: "Căn hộ Phú Quốc",
		icon: <IconBeach color={variables.colorGreen1} />,
	},
	{
		href: "/",
		name: "BĐS Chuyển nhượng giá tốt",
		icon: <IconSofa color={variables.colorGreen2} />,
	},
	{
		href: "/",
		name: "Nhà phố thương mại - Shophouse Phú Quốc",
		icon: <IconBuildingStore color={variables.colorGreen3} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Nha Trang",
		icon: <IconSpeedboat color={variables.colorYellow1} />,
	},
	{
		href: "/",
		name: "Thị trường BĐS Phú Quốc",
		icon: <IconMountain color={variables.colorRed1} />,
	},
	{
		href: "/",
		name: "Đối tác Chủ Đầu Tư",
		icon: <IconBuilding color={variables.colorRed2} />,
	},
	{
		href: "/",
		name: "Ký gửi Bất Động Sản",
		icon: <IconBuildingBank color={variables.colorOrange1} />,
	},
	{
		href: "/",
		name: "Kết nối",
		icon: <IconNetwork color={variables.colorPurple1} />,
	},
];
