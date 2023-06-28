import {Header, NavigationBar} from "@/components";
import "../globals.scss";
import {Inter} from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import styles from "./page.module.scss";
import {Suspense} from "react";
import Loading from "./loading";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<Header />
					<Suspense fallback={<Loading />}>
						<main className={styles.main}>{children}</main>
					</Suspense>
					<NavigationBar />
				</AuthProvider>
			</body>
		</html>
	);
}
