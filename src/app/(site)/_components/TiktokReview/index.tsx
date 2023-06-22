import Image from "next/image";
import Title from "../Title";
import styles from "./tiktokReview.module.scss";

export default function TiktokReview() {
	return (
		<div>
			<Title>Kênh TikTok Review bất động sản</Title>
			<div className={styles.imageWrapper}>
				<a href="" target="_blank" rel="noreferer">
					<Image
						src="https://picsum.photos/id/16/200/300"
						alt=""
						width={200}
						height={300}
					/>
				</a>
				<a href="" target="_blank" rel="noreferer">
					<Image
						src="https://picsum.photos/id/17/200/300"
						alt=""
						width={200}
						height={300}
					/>
				</a>
			</div>
		</div>
	);
}
