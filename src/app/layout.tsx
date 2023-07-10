import "./globals.scss";
import AuthProvider from "@/providers/AuthProvider";
import CartProvider from "@/providers/CartProvider";
import ConfigProvider from "@/providers/ConfigProvider";
import {Inter} from "next/font/google";
import {Metadata} from "next";

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
				<AuthProvider>
					<CartProvider>
						<ConfigProvider>{children}</ConfigProvider>
					</CartProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
