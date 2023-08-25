import Image from "next/image";
import Title from "../Title";
import styles from "./tiktokReview.module.scss";
import {ImageTikTokReview1, ImageTikTokReview2} from "@/assets";

export default function TiktokReview() {
	return (
		<div>
			<Title>Kênh TikTok Review bất động sản</Title>
			<div className={styles.imageWrapper}>
				<a
					href="https://www.tiktok.com/@tahualucnhu"
					target="_blank"
					rel="noreferer"
				>
					<Image
						src={ImageTikTokReview1}
						alt="https://www.tiktok.com/@tahualucnhu"
						fill
					/>
				</a>
				<a
					href="https://www.tiktok.com/@tahualucnhu"
					target="_blank"
					rel="noreferer"
				>
					<Image
						src={ImageTikTokReview2}
						alt="https://www.tiktok.com/@tahualucnhu"
						fill
					/>
				</a>
			</div>
		</div>
	);
}
