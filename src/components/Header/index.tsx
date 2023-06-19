"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {IconMenu2, IconPhoneFilled} from "@tabler/icons-react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./header.module.scss";
import {navLinks} from "./data";

const Button = dynamic(() => import("../Button"));

export default function Header() {
	return (
		<header className={styles.wrapper}>
			<Dialog.Root>
				<Dialog.Trigger>
					<Button>
						<IconMenu2 />
					</Button>
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
			<div>
				<Button>Noti</Button>
				<Button>Cart</Button>
			</div>
		</header>
	);
}
