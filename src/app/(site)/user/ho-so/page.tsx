"use client";

import Link from "next/link";
import styles from "./hoSo.module.scss";
import {Button} from "@/components";
import {profilePageList} from "./static";
import {IconChevronRight, IconLogout} from "@tabler/icons-react";
import {Avatar} from "antd";

export default function Page() {
	return (
		<div>
			<div className={styles.header}>
				<div>
					<p>Ta Hua Luc Nhu</p>
					<p>tahualucnhu@gmail.com</p>
				</div>
				<Avatar src="" size={48} />
			</div>

			<div className={styles.actionWrapper}>
				{profilePageList.map((link) => (
					<Link key={link.href} href={link.href} className={styles.linkItem}>
						{link.icon}
						<span>{link.title}</span>
						<IconChevronRight />
					</Link>
				))}
				<Button className={styles.linkItem}>
					<IconLogout />
					<span>Đăng xuất</span>
				</Button>
			</div>
		</div>
	);
}
