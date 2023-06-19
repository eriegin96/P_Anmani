"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./navigationBar.module.scss";
import clsx from "clsx";
import {
	IconClipboardText,
	IconLayoutDashboard,
	IconMail,
	IconPlaneTilt,
	IconUser,
} from "@tabler/icons-react";

const navLinks = [
	{href: "/", name: "Trang chủ", icon: <IconPlaneTilt />},
	{href: "/tin-nhan", name: "Tin nhắn", icon: <IconMail />},
	{href: "/kham-pha", name: "Khám phá", icon: <IconLayoutDashboard />},
	{href: "/luu-tru", name: "Đã lưu", icon: <IconClipboardText />},
	{href: "/ho-so", name: "Hồ sơ", icon: <IconUser />},
];

export default function NavigationBar() {
	const pathname = usePathname();

	return (
		<div className={styles.wrapper}>
			{navLinks.map((link) => {
				const isActive = pathname === link.href;

				return (
					<Link
						key={link.href}
						href={link.href}
						className={clsx(styles.item, isActive && styles.isActive)}>
						{link.icon}
						{link.name}
					</Link>
				);
			})}
		</div>
	);
}
