"use client";

import {saleList} from "../../data";
import styles from "./[id].module.scss";
import {ImagePreviewGroup, VoucherList} from "./_components";

type TProductPageProps = {
	params: {id: string};
};

// export const dynamicParams = true // true | false,

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
// const posts = await fetch("https://.../posts").then((res) => res.json());
// return posts.map((post) => ({
// 	slug: post.slug,
// }));
// }

export default function ProductPage({params}: TProductPageProps) {
	const product = saleList.find((item) => item.id === params.id);
	console.log(product);

	return (
		<div>
			<ImagePreviewGroup />
			<div>
				<h3>{product?.name}</h3>
				<span>{product?.type}</span>
				<span>
					{product?.location.sub}, {product?.location.main}
				</span>
			</div>
			<VoucherList />
		</div>
	);
}
