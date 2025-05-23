"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./navigationBar.module.scss";
import clsx from "clsx";
import {
	IconClipboardText,
	IconMovie,
	IconPlaneTilt,
	IconUser,
	IconClipboardData,
} from "@tabler/icons-react";
import {ROUTE} from "@/constants/route";
import {useLayoutContext} from "@/providers/LayoutProvider";

const navLinks = [
	{href: ROUTE.HOME, label: "Trang chủ", icon: <IconPlaneTilt />},
	{href: ROUTE.EXPLORE, label: "Khám phá", icon: <IconMovie />},
	{href: ROUTE.CART, label: "Tài sản của tôi", icon: <IconClipboardData />},
	{href: ROUTE.SAVE, label: "Đã lưu", icon: <IconClipboardText />},
	{href: ROUTE.PROFILE, label: "Hồ sơ", icon: <IconUser />},
];

export default function NavigationBar() {
	const pathname = usePathname();
	const {isAtExplorePage, isAtGiaVangPage} = useLayoutContext();

	return (
		<div
			className={clsx(
				styles.wrapper,
				isAtExplorePage && styles.revert,
				isAtGiaVangPage && styles.none
			)}
		>
			{navLinks.map((link) => {
				const isActive =
					pathname === ROUTE.HOME
						? pathname === link.href
						: pathname.includes(link.href) && link.href !== ROUTE.HOME;

				return (
					<Link
						key={link.href}
						href={link.href}
						className={clsx(styles.item, isActive && styles.isActive)}
					>
						{link.icon}
						{link.label}
					</Link>
				);
			})}
		</div>
	);
}
