"use client";

import styles from "./khamPha.module.scss";
import Masonry from "react-masonry-css";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {useGetExplores} from "@/hooks/api/explore/query/useGetExplores";
import {Skeleton} from "antd";

export default function Page() {
	const {data: exploreVideoList, isLoading} = useGetExplores();

	return (
		<div className={styles.wrapper}>
			<Masonry
				breakpointCols={{default: 4, 992: 3, 480: 2}}
				className={styles.masonry}
				columnClassName={styles.masonryColumn}
			>
				{isLoading &&
					[1, 2, 3, 4].map((item) => <Skeleton key={item} active />)}

				{exploreVideoList?.map((video) => (
					<Link key={video.key} href={`${ROUTE.EXPLORE}/${video.key}`}>
						<video src={video.url} autoPlay muted loop />
					</Link>
				))}
			</Masonry>
		</div>
	);
}
