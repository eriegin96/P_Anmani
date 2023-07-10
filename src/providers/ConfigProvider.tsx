"use client";

import {ConfigProvider as AntdConfig} from "antd";
import {Suspense} from "react";
import Loading from "@/app/(site)/loading";
import {Header} from "@/components";
import {Inter} from "next/font/google";
import styles from "@/app/(site)/page.module.scss";

const inter = Inter({subsets: ["latin"]});

export default function ConfigProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AntdConfig theme={{token: {fontFamily: inter.style.fontFamily}}}>
			<Header />
			<Suspense fallback={<Loading />}>
				<main className={styles.main}>{children}</main>
			</Suspense>
		</AntdConfig>
	);
}
