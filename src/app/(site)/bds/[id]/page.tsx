"use client";

import clsx from "clsx";
import {productList} from "../../../../mock/data";
import styles from "./[id].module.scss";
import {Action, PageNav} from "./_components";
import {pageAnchorList} from "./static";
import {TProduct} from "@/types/product.type";
import {Element} from "react-scroll";
import {PRODUCT_ANCHOR} from "@/constants/product";
import {useProduct} from "@/hooks/api/query/useProduct";
import {Skeleton} from "antd";
import {useEffect} from "react";

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
	const product = productList.find((item) => item.id === params.id) as TProduct;
	const anchorList = pageAnchorList(product);
	const {data, isLoading, error} = useProduct(params.id);

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
								item.anchor !== PRODUCT_ANCHOR.MAIN && styles.block
							)}
						>
							{item.anchor !== PRODUCT_ANCHOR.MAIN && (
								<h3 className={styles.title}>{item.title}</h3>
							)}
							{item.component}
						</Element>
					))}

					<Action product={product} />
				</>
			)}
		</>
	);
}
