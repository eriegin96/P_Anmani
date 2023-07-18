"use client";

import {exploreVideoList} from "@/mock/data";
import styles from "./khamPha.module.scss";
import Masonry from "react-masonry-css";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {useExplores} from "@/hooks/api/query/useExplores";
import {Skeleton} from "antd";

export default function Page() {
	const {data, isLoading} = useExplores();

	return (
		<div className={styles.wrapper}>
			<Masonry
				breakpointCols={{default: 4, 992: 3, 480: 2}}
				className={styles.masonry}
				columnClassName={styles.masonryColumn}
			>
				{isLoading &&
					[1, 2, 3, 4].map((item) => <Skeleton key={item} active />)}

				{data &&
					exploreVideoList.map((video) => (
						<Link key={video.id} href={`${ROUTE.EXPLORE}/${video.id}`}>
							<video src={video.url} autoPlay muted loop />
						</Link>
					))}
			</Masonry>
		</div>
	);
}
