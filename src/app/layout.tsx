import {Header, NavigationBar} from "@/components";
import "./globals.scss";
import {Inter} from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import styles from "./(site)/page.module.scss";
import {Suspense} from "react";
import Loading from "./(site)/loading";
import CartProvider from "@/providers/CartProvider";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<CartProvider>
						<Header />
						<Suspense fallback={<Loading />}>
							<main className={styles.main}>{children}</main>
						</Suspense>
					</CartProvider>
					<NavigationBar />
				</AuthProvider>
			</body>
		</html>
	);
}
