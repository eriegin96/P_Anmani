import {Suspense} from "react";
import Loading from "@/app/(site)/loading";
import {Header, NavigationBar} from "@/components";
import styles from "./page.module.scss";

export default function SiteLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<Header />
			<Suspense fallback={<Loading />}>
				<main className={styles.main}>{children}</main>
			</Suspense>
			<NavigationBar />
		</>
	);
}
