"use client";

import clsx from "clsx";
import styles from "./[id].module.scss";
import {Action, PageNav} from "./_components";
import {pageAnchorList} from "./static";
import {Element} from "react-scroll";
import {PRODUCT_ANCHOR} from "@/constants/product";
import {useGetProductById} from "@/hooks/api/product/query/useGetProductById";
import {Skeleton} from "antd";

type TProductPageProps = {
	params: {id: string};
};
export type TItemsRef = {[key: string]: HTMLDivElement | null};

// export const dynamicParams = true // true | false,

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
// const posts = await fetch("https://.../posts").then((res) => res.json());
// return posts.map((post) => ({
// 	slug: post.slug,
// }));
// }

export default function ProductPage({params}: TProductPageProps) {
	const {data, isLoading, error} = useGetProductById(params.id);
	const anchorList = data ? pageAnchorList(data) : [];

	return (
		<>
			{(isLoading || error) && (
				<Skeleton active paragraph={{rows: 10}} style={{padding: "20px "}} />
			)}

			{data && (
				<>
					<PageNav anchorList={anchorList} />

					{anchorList.map((item) => (
						<Element
							key={item.title}
							name={item.anchor}
							id={item.anchor}
							className={clsx(
								item.anchor !== PRODUCT_ANCHOR.main.value && styles.block
							)}
						>
							{item.anchor !== PRODUCT_ANCHOR.main.value && (
								<h3 className={styles.title}>{item.title}</h3>
							)}
							{item.component}
						</Element>
					))}

					<Action product={data} />
				</>
			)}
		</>
	);
}
