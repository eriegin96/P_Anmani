"use client";

// import Image from "next/image";
import {Image} from "antd";
import styles from "./[id].module.scss";
import {useState} from "react";

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

const data = [
	{id: "1", src: "https://picsum.photos/id/25/1600/900"},
	{id: "2", src: "https://picsum.photos/id/25/1600/900"},
	{id: "3", src: "https://picsum.photos/id/25/1600/900"},
	{id: "4", src: "https://picsum.photos/id/25/1600/900"},
	{id: "5", src: "https://picsum.photos/id/25/1600/900"},
];

export default function ProductPage({params}: TProductPageProps) {
	const [visible, setVisible] = useState(false);
	const lastIndex = data.length >= 5 ? 4 : data.length - 1;
	console.log(params);

	return (
		<div>
			<div className={styles.imageWrapper}>
				<div className={styles.imageMore}>
					{data.map((img, index) => (
						<div
							key={img.id}
							className={styles.imageItem}
							onClick={() => setVisible(true)}>
							<Image preview={{visible: false}} src={img.src} alt="" />
							{index === lastIndex && (
								<div className={styles.overlay}>Xem tất cả</div>
							)}
						</div>
					))}
				</div>
				<div className={styles.previewGroup}>
					<Image.PreviewGroup
						preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
						{data.map((img) => (
							<Image key={img.id} src={img.src} alt="" />
						))}
					</Image.PreviewGroup>
				</div>
			</div>
		</div>
	);
}
