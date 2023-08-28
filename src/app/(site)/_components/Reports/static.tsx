import {
	IconBuildingBank,
	IconBuildingBridge,
	IconReport,
	IconSailboat,
	IconShip,
} from "@tabler/icons-react";
import color from "@/styles/color.module.scss";
import {REPORT} from "@/constants/report";

export const reportList = [
	{
		icon: <IconBuildingBank color={color.primary3} />,
		title: REPORT["market-hcm"].label,
	},
	{
		icon: <IconSailboat color={color.green3} />,
		title: REPORT["market-nhatrang"].label,
	},
	{
		icon: <IconShip color={color.red1} />,
		title: REPORT["market-phuquoc"].label,
	},
	{
		icon: <IconBuildingBridge color={color.purple1} />,
		title: REPORT["market-danang"].label,
	},
	{
		icon: <IconReport color={color.primary3} />,
		title: REPORT["price-hcm"].label,
	},
	{
		icon: <IconReport color={color.green3} />,
		title: REPORT["price-nhatrang"].label,
	},
	{
		icon: <IconReport color={color.red1} />,
		title: REPORT["price-phuquoc"].label,
	},
	{
		icon: <IconReport color={color.purple1} />,
		title: REPORT["price-danang"].label,
	},
];
