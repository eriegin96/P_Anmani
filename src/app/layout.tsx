import "./globals.scss";
import {Analytics} from "@vercel/analytics/react";
import AuthProvider from "@/providers/AuthProvider";
import CartProvider from "@/providers/CartProvider";
import ConfigProvider from "@/providers/ConfigProvider";
import {Inter} from "next/font/google";
import {Metadata} from "next";
import LayoutProvider from "@/providers/LayoutProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: {
		template: "%s | Anmani",
		default: "Anmani",
	},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<LayoutProvider>
					<AuthProvider>
						<CartProvider>
							<ConfigProvider>{children}</ConfigProvider>
						</CartProvider>
					</AuthProvider>
				</LayoutProvider>
				<Analytics />
			</body>
		</html>
	);
}
