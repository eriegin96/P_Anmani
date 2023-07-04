"use client";

import {useRouter, useSelectedLayoutSegment} from "next/navigation";
import React, {ReactNode} from "react";
import {pageName} from "./static";
import styles from "./hoSo.module.scss";
import {Button} from "@/components";
import {IconChevronLeft} from "@tabler/icons-react";

type TLayoutProps = {
	children: ReactNode;
};

export default function Layout({children}: TLayoutProps) {
	const router = useRouter();
	const segment = useSelectedLayoutSegment();

	return (
		<>
			{segment ? (
				<>
					<div className={styles.titleWrapper}>
						<Button onClick={router.back}>
							<IconChevronLeft />
						</Button>
						<h3 className={styles.layoutTitle}>{pageName[segment]}</h3>
					</div>
					<div className={styles.contentWrapper}>{children}</div>
				</>
			) : (
				<>{children}</>
			)}
		</>
	);
}
