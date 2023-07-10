"use client";

import Link from "next/link";
import {useParams, usePathname} from "next/navigation";
import styles from "./navigationBar.module.scss";
import clsx from "clsx";
import {
	IconClipboardText,
	IconMovie,
	IconMail,
	IconPlaneTilt,
	IconUser,
} from "@tabler/icons-react";
import {ROUTE} from "@/constants/route";

const navLinks = [
	{href: ROUTE.HOME, name: "Trang chủ", icon: <IconPlaneTilt />},
	{href: ROUTE.MESSAGE, name: "Tin nhắn", icon: <IconMail />},
	{href: ROUTE.EXPLORE, name: "Khám phá", icon: <IconMovie />},
	{href: ROUTE.SAVE, name: "Đã lưu", icon: <IconClipboardText />},
	{href: ROUTE.PROFILE, name: "Hồ sơ", icon: <IconUser />},
];

export default function NavigationBar() {
	const pathname = usePathname();
	const {id} = useParams();
	const isAtExplorePage = pathname.includes(ROUTE.EXPLORE) && id;

	return (
		<div className={clsx(styles.wrapper, isAtExplorePage && styles.revert)}>
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
						{link.name}
					</Link>
				);
			})}
		</div>
	);
}
