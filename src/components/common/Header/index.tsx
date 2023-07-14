"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
	IconBell,
	IconMenu2,
	IconPhoneFilled,
	IconShoppingCart,
} from "@tabler/icons-react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./header.module.scss";
import {navLinks} from "./static";
import color from "@/styles/color.module.scss";
import Image from "next/image";
import {ImageLogo} from "@/assets";
import {Badge, Popover} from "antd";
import {ROUTE} from "@/constants/route";
import NotificationContent from "../NotificationContent";
import {useLayoutContext} from "@/providers/LayoutProvider";

const Button = dynamic(() => import("../Button"));

export default function Header() {
	const {isAtExplorePage} = useLayoutContext();

	return (
		<header className={clsx(styles.wrapper, isAtExplorePage && styles.hidden)}>
			<Dialog.Root>
				<Dialog.Trigger className={styles.triggerBtn}>
					<IconMenu2 color={color.white} />
				</Dialog.Trigger>
				<Dialog.Portal className={styles.portal}>
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
			<Link href={ROUTE.HOME}>
				<Image src={ImageLogo} alt="" width={50} height={50} />
			</Link>
			<div className={styles.rightSection}>
				{/* {!userInfo ? (
					<Link href={ROUTE.SIGN_IN} className={styles.triggerBtn}>
						Login
					</Link>
				) : (
					<>
						<Button className={styles.triggerBtn}>
							<IconBell color={color.white} />
						</Button>
						{userInfo?.role === "user" && (
							<Button className={styles.triggerBtn}>Cart</Button>
						)}
					</>
				)} */}

				<>
					<Popover
						content={<NotificationContent />}
						placement="bottomRight"
						trigger="click"
						className={styles.popover}
					>
						<Button className={styles.triggerBtn}>
							<Badge size="small" count={5}>
								<IconBell color={color.white} />
							</Badge>
						</Button>
					</Popover>
					<Link href={ROUTE.CART} className={styles.triggerBtn}>
						<Badge size="small" count={5}>
							<IconShoppingCart color={color.white} />
						</Badge>
					</Link>
				</>
			</div>
		</header>
	);
}
