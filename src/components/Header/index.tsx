"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {IconBell, IconMenu2, IconPhoneFilled} from "@tabler/icons-react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./header.module.scss";
import {navLinks} from "./data";
import color from "@/styles/color.module.scss";
import {useAuthContext} from "@/providers/AuthProvider";

const Button = dynamic(() => import("../Button"));

export default function Header() {
	const {userInfo} = useAuthContext();

	return (
		<header className={styles.wrapper}>
			<Dialog.Root>
				<Dialog.Trigger className={styles.triggerBtn}>
					<IconMenu2 color={color.white} />
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className={clsx(styles.overlay, styles.animation)} />
					<Dialog.Content className={clsx(styles.sidebar, styles.animation)}>
						<Dialog.Description className={styles.description}>
							<IconPhoneFilled />
							Hỗ trợ khách hàng <strong>0924627467</strong>
						</Dialog.Description>
						<div className={styles.links}>
							{navLinks.map((link) => (
								<Link key={link.name} href={link.href} className={styles.link}>
									{link.icon}
									{link.name}
								</Link>
							))}
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
			<span>Logo</span>
			<div className={styles.rightSection}>
				{!userInfo ? (
					<Button className={styles.triggerBtn}>Sign in</Button>
				) : (
					<>
						<Button className={styles.triggerBtn}>
							<IconBell color={color.white} />
						</Button>
						{userInfo?.role === "user" && (
							<Button className={styles.triggerBtn}>Cart</Button>
						)}
					</>
				)}
			</div>
		</header>
	);
}
