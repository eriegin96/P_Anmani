"use client";

import {Button, Layout, Menu} from "antd";

import styles from "./(protected).module.scss";
import {useState} from "react";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import clsx from "clsx";
import {IconChevronLeft} from "@tabler/icons-react";
import {ImageLogo} from "@/assets";
import Image from "next/image";
import {menuNavList} from "./static";

const {Sider, Header, Content} = Layout;

export default function RootLayout({children}: {children: React.ReactNode}) {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout className={styles.layoutWrapper}>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				collapsedWidth={80}
				width={260}
				className={styles.sider}
			>
				<div className={styles.siderLogo}>
					<Link href={ROUTE.ADMIN}>
						<Image src={ImageLogo} alt="Anmani" width={48} height={48} />
						<span>Anmani</span>
					</Link>
					<Button
						shape="circle"
						className={clsx(
							styles.collapseButton,
							collapsed && styles.collapsed
						)}
						onClick={() => setCollapsed(!collapsed)}
					>
						<IconChevronLeft />
					</Button>
				</div>
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={["dashboard"]}
					items={menuNavList}
					className={styles.menu}
				/>
			</Sider>
			<Layout>
				<Header className={styles.header}>Anmani Admin Page</Header>
				<Content>{children}</Content>
			</Layout>
		</Layout>
	);
}
