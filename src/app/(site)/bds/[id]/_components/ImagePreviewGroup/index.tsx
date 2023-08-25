import clsx from "clsx";
import {Image} from "antd";
import styles from "./imagePreviewGroup.module.scss";
import {TImage} from "@/types/product.type";

type TImagePreviewGroupProps = {
	image: TImage;
};

export default function ImagePreviewGroup({
	image: {area, main, reality},
}: TImagePreviewGroupProps) {
	const imagePreviews = [...main, ...area, ...reality];
	const lastIndex = imagePreviews.length >= 5 ? 4 : imagePreviews.length - 1;

	return (
		<div className={styles.imageWrapper}>
			<div className={styles.imageMore}>
				<Image.PreviewGroup>
					{imagePreviews.map((img, index) => (
						<div
							key={index}
							className={clsx(
								styles.imageItem,
								index > lastIndex && styles.itemHidden
							)}
						>
							<Image
								src={img}
								alt="Thumbnail"
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
