"use client";

import {ConfigProvider as AntdConfig, Spin, message} from "antd";
import {Inter} from "next/font/google";
import ModalProvider from "./ModalProvider";
import ProductComparisonProvider from "./ProductComparisonProvider";
import {SWRConfig} from "swr";
import {useRouter} from "next/navigation";
import {HANDLER} from "@/constants/handler";
import {useGetMe} from "@/hooks/api/auth/query/useGetMe";
import Loading from "@/app/(site)/loading";

const inter = Inter({subsets: ["latin"]});

export default function ConfigProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const [messageApi, contextHolder] = message.useMessage();
	const {isLoading} = useGetMe();

	if (isLoading) return <Loading />;

	return (
		<AntdConfig theme={{token: {fontFamily: inter.style.fontFamily}}}>
			<SWRConfig
				value={{
					onSuccess: (data, key, config) => {
						if (HANDLER[key]) {
							messageApi.success(HANDLER[key].MESSAGE);
							HANDLER[key]?.ROUTE && router.push(HANDLER[key]?.ROUTE as string);
						}
					},
					onError: (error, key) => {
						console.log({error});
						messageApi.error(error?.response?.data?.message);
					},
				}}
			>
				{contextHolder}
				<ModalProvider>
					<ProductComparisonProvider>{children}</ProductComparisonProvider>
				</ModalProvider>
			</SWRConfig>
		</AntdConfig>
	);
}
