"use client";

import Link from "next/link";
import styles from "./productCard.module.scss";
import {TProduct} from "@/types/product.type";
import Image from "next/image";
import color from "@/styles/color.module.scss";
import {Button} from "@/components";
import {IconBookmark} from "@tabler/icons-react";
import {ImageLogoSG} from "@/assets";

type TProductCardProps = {
	info: TProduct;
	isShowView?: boolean;
};

export default function ProductCard({
	info,
	isShowView = false,
}: TProductCardProps) {
	const {
		id,
		name,
		price,
		salePrice,
		information,
		view,
		thumbnail,
		logo,
		location,
		status,
	} = info;
	const bgColor =
		status === "Đang quan tâm"
			? color.primary3
			: status === "Còn hàng"
			? color.green3
			: status === "Hàng đặt"
			? color.pink2
			: color.orange2;

	const handleSave = () => {
		console.log("save");
	};

	return (
		<div className={styles.itemWrapper}>
			<Link href={`/bds/${id}`} key={name}>
				<div className={styles.cardContent}>
					<div className={styles.overlay} />
					<div className={styles.imageWrapper}>
						<Image src={thumbnail} alt="" fill className={styles.thumbnail} />
						<span className={styles.location}>{location.sub}</span>
						<div className={styles.logoWrapper}>
							<Image
								src={logo}
								alt=""
								width={24}
								height={24}
								className={styles.logo}
							/>
						</div>
						<span className={styles.discount}>Tiết kiệm {32}%</span>
					</div>

					<div className={styles.descriptionWrapper}>
						<div className={styles.leftSection}>
							<span className={styles.name}>{name}</span>

							<div className={styles.priceWrapper}>
								<div className={styles.price}>{price}</div>
								<div className={styles.salePrice}>{salePrice}</div>
							</div>
						</div>
						<div className={styles.rightSection}>
							<div>
								<span>{information.landArea}</span>
								<span>{information.floorArea}</span>
								<span>{information.floor}</span>
							</div>
						</div>
					</div>
				</div>

				{isShowView ? (
					<div className={styles.view}>ĐÃ XEM {view}</div>
				) : (
					<div style={{backgroundColor: bgColor}} className={styles.view}>
						{status}
					</div>
				)}
			</Link>

			<Button className={styles.save} onClick={handleSave}>
				<IconBookmark size={30} />
			</Button>
		</div>
	);
}
