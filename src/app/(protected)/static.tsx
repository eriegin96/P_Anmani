import {ROUTE} from "@/constants/route";
import {
	IconBuilding,
	IconDashboard,
	IconMessage,
	IconMovie,
	IconTicket,
	IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

export const menuNavList = [
	{
		label: <Link href={ROUTE.ADMIN}>Bảng điều khiển</Link>,
		key: "dashboard",
		url: ROUTE.ADMIN,
		icon: <IconDashboard />,
	},
	{
		label: <Link href={ROUTE.ADMIN_PRODUCT}>Sản phẩm</Link>,
		key: "product",
		url: ROUTE.ADMIN_PRODUCT,
		icon: <IconBuilding />,
	},
	{
		label: <Link href={ROUTE.ADMIN_VOUCHER}>Voucher</Link>,
		key: "voucher",
		url: ROUTE.ADMIN_VOUCHER,
		icon: <IconTicket />,
	},
	{
		label: <Link href={ROUTE.ADMIN_EXPLORE}>Khám phá</Link>,
		key: "explore",
		url: ROUTE.ADMIN_EXPLORE,
		icon: <IconMovie />,
	},
	{
		label: <Link href={ROUTE.ADMIN_MESSAGE}>Tin nhắn</Link>,
		key: "message",
		url: ROUTE.ADMIN_MESSAGE,
		icon: <IconMessage />,
	},
	{
		label: "Người dùng",
		key: "user",
		icon: <IconUser />,
		children: [
			{
				label: <Link href={ROUTE.ADMIN_USER}>Quản lý</Link>,
				key: "main",
				url: ROUTE.ADMIN_USER,
			},
			{
				label: <Link href={ROUTE.ADMIN_USER_DEPOSIT}>Ký gửi</Link>,
				key: "deposit",
				url: ROUTE.ADMIN_USER_DEPOSIT,
			},
			{
				label: <Link href={ROUTE.ADMIN_USER_CART}>Đơn hàng</Link>,
				key: "cart",
				url: ROUTE.ADMIN_USER_CART,
			},
		],
	},
];
