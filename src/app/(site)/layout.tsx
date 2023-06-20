import {Header, NavigationBar} from "@/components";
import "../globals.scss";
import {Inter} from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<Header />
					{children}
					<NavigationBar />
				</AuthProvider>
			</body>
		</html>
	);
}
