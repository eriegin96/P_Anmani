import {ROUTE} from "@/constants/route";
import {
	IconBuilding,
	IconDashboard,
	IconMovie,
	IconTicket,
	IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

export const menuNavList = [
	{
		label: <Link href={ROUTE.ADMIN}>Bảng điều khiển</Link>,
		key: "dashboard",
		icon: <IconDashboard />,
	},
	{
		label: <Link href={ROUTE.ADMIN_PRODUCT}>Sản phẩm</Link>,
		key: "product",
		icon: <IconBuilding />,
	},
	{
		label: <Link href={ROUTE.ADMIN_VOUCHER}>Voucher</Link>,
		key: "voucher",
		icon: <IconTicket />,
	},
	{
		label: <Link href={ROUTE.ADMIN_EXPLORE}>Khám phá</Link>,
		key: "explore",
		icon: <IconMovie />,
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
