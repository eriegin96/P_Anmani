"use client";

import {Suspense} from "react";
import Loading from "@/app/(site)/loading";
import {Header, NavigationBar} from "@/components";
import styles from "./page.module.scss";
import clsx from "clsx";
import {useLayoutContext} from "@/providers/LayoutProvider";

export default function SiteLayout({children}: {children: React.ReactNode}) {
	const {isAtExplorePage} = useLayoutContext();

	return (
		<>
			<Header />
			<Suspense fallback={<Loading />}>
				<main className={clsx(!isAtExplorePage && styles.main)}>
					{children}
				</main>
			</Suspense>
			<NavigationBar />
		</>
	);
}
