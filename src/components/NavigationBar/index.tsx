"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./navigationBar.module.scss";
import clsx from "clsx";

const navLinks = [
	{href: "/", name: "Trang chủ"},
	{href: "/tin-nhan", name: "Tin nhắn"},
	{href: "/kham-pha", name: "Khám phá"},
	{href: "/luu-tru", name: "Đã lưu"},
	{href: "/ho-so", name: "Hồ sơ"},
];

export default function NavigationBar() {
	const pathname = usePathname();

	return (
		<div className={styles.wrapper}>
			{navLinks.map((link) => {
				const isActive = pathname.startsWith(link.href);

				return (
					<Link
						key={link.href}
						href={link.href}
						className={clsx(styles.item, isActive && styles.isActive)}>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
}
