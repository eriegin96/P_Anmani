import clsx from "clsx";
import {Drawer, Image as AntdImage} from "antd";
import styles from "./imagePreviewGroup.module.scss";
import {TImage, TImageMainKey} from "@/types/product.type";
import {useState} from "react";
import Image from "next/image";
import {mainImageStatic} from "./static";

type TImagePreviewGroupProps = {
	image: TImage;
};

export default function ImagePreviewGroup({
	image: {main},
}: TImagePreviewGroupProps) {
	const [open, setOpen] = useState(false);
	const imagePreviews = Object.values(main).reduce(
		(prev, current) => [...prev, ...current],
		[]
	);
	const lastIndex = imagePreviews.length >= 5 ? 4 : imagePreviews.length - 1;

	const showDrawer = () => {
		setOpen(true);
	};

	const closeDrawer = () => {
		setOpen(false);
	};

	return (
		<div className={styles.imageWrapper}>
			<div className={styles.imageMore}>
				{imagePreviews.map((img, index) => (
					<div
						key={index}
						className={clsx(
							styles.imageItem,
							index > lastIndex && styles.itemHidden
						)}
						onClick={showDrawer}
					>
						<Image src={img} alt="Thumbnail" fill />
						{index === lastIndex && (
							<div className={styles.overlay}>Xem tất cả</div>
						)}
					</div>
				))}
			</div>
			<Drawer
				title="Tất cả hình ảnh"
				placement="right"
				onClose={closeDrawer}
				open={open}
				rootClassName={styles.drawer}
			>
				{(Object.keys(main) as TImageMainKey[]).map((key) => (
					<div key={key} className={styles.mainImageWrapper}>
						<div className={styles.mainImageLabel}>
							{mainImageStatic[key].label} ({main[key].length})
						</div>
						<div className={styles.mainImageGroup}>
							<AntdImage.PreviewGroup>
								{main[key].map((img, index) => (
									<div
										key={index}
										className={styles.mainImageItem}
										onClick={showDrawer}
									>
										<AntdImage
											src={img}
											alt="Thumbnail"
											rootClassName={styles.mainImage}
											preview={{mask: <></>}}
											placeholder={true}
										/>
									</div>
								))}
							</AntdImage.PreviewGroup>
						</div>
					</div>
				))}
			</Drawer>
		</div>
	);
}
