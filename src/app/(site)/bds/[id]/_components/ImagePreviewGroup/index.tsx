import clsx from "clsx";
import {Image} from "antd";
import {imagePreviews} from "@/mock/data";
import styles from "./imagePreviewGroup.module.scss";

type TImagePreviewGroupProps = {};

export default function ImagePreviewGroup({}: TImagePreviewGroupProps) {
	const lastIndex = imagePreviews.length >= 5 ? 4 : imagePreviews.length - 1;

	return (
		<div className={styles.imageWrapper}>
			<div className={styles.imageMore}>
				<Image.PreviewGroup>
					{imagePreviews.map((img, index) => (
						<div
							key={img.id}
							className={clsx(
								styles.imageItem,
								index > lastIndex && styles.itemHidden
							)}>
							<Image
								src={img.src}
								alt=""
								rootClassName={styles.image}
								preview={{mask: <></>}}
								placeholder={true}
							/>
							{index === lastIndex && (
								<div className={styles.overlay}>Xem tất cả</div>
							)}
						</div>
					))}
				</Image.PreviewGroup>
			</div>
		</div>
	);
}
