"use client";

import {ConfigProvider as AntdConfig} from "antd";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function ConfigProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AntdConfig theme={{token: {fontFamily: inter.style.fontFamily}}}>
			{children}
		</AntdConfig>
	);
}
