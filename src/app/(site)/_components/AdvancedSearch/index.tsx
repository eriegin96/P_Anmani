"use client";

import styles from "./advancedSearch.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import {socialNetworks} from "./static";
import {Button} from "antd";

const SearchBox = dynamic(
	() => import("../../../../components/common/SearchBox")
);

export default function AdvancedSearch() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.searchBar}>
				<SearchBox />
				<Button>Tìm kiếm</Button>

				<ul className={styles.networkList}>
					{socialNetworks.map((network) => (
						<li key={network.href}>
							<a href={network.href} target="_blank" rel="noreferrer">
								<Image src={network.icon} alt="" width={30} height={30} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
