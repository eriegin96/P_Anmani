import {ROUTE} from "@/constants/route";
import {
	IconBook2,
	IconHelpSquareRounded,
	IconKey,
	IconUserCog,
} from "@tabler/icons-react";

export const profilePageList = [
	{
		href: ROUTE.INFO,
		title: "Thông tin cơ bản",
		icon: <IconUserCog />,
	},
	{
		href: ROUTE.DOCUMENT,
		title: "Quản lý hồ sơ dự án",
		icon: <IconBook2 />,
	},
	{
		href: ROUTE.FEEDBACK,
		title: "Góp ý",
		icon: <IconHelpSquareRounded />,
	},
	{
		href: ROUTE.CHANGE_PASSWORD,
		title: "Đổi mật khẩu",
		icon: <IconKey />,
	},
];
