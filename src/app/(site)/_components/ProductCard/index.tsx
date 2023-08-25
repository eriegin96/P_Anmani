"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import styles from "./productCard.module.scss";
import {TProduct} from "@/types/product.type";
import Image from "next/image";
import {SaveDialogPortal} from "@/components";
import {IconBookmark, IconBookmarkFilled} from "@tabler/icons-react";
import {
	PRODUCT_SAVE_VALUE,
	PRODUCT_STATUS,
	TProductSaveValue,
} from "@/constants/product";
import {useState} from "react";
import {RadioChangeEvent} from "antd";
import {ROUTE} from "@/constants/route";
import {formatCurrency} from "@/utils/formatCurrency";
import {concatHref} from "@/utils/concatHref";
import {INVESTOR} from "@/constants/investor";

type TProductCardProps = {
	info: TProduct;
	isShowView?: boolean;
};

export default function ProductCard({
	info,
	isShowView = false,
}: TProductCardProps) {
	const {
		key,
		name,
		price,
		originalPrice,
		information,
		view,
		image: {thumbnail},
		investor: {logo, name: investorName},
		location,
		status,
	} = info;
	const [value, setValue] = useState<TProductSaveValue>(
		PRODUCT_SAVE_VALUE.LATER
	);

	const handleSave = (e: RadioChangeEvent) => {
		console.log(e.target.value);
		setValue(e.target.value);
	};

	return (
		<div className={styles.itemWrapper}>
			<div className={styles.linkWrapper}>
				<Link href={concatHref(ROUTE.PRODUCT, key)} key={name}>
					<div className={styles.cardContent}>
						<div className={styles.imageWrapper}>
							<Image
								src={thumbnail}
								alt={name}
								fill
								className={styles.thumbnail}
							/>
							<span className={styles.location}>{location.sub}</span>
							<div className={styles.logoWrapper}>
								<Image
									src={logo}
									alt={INVESTOR[investorName]?.label}
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
									<div className={styles.originalPrice}>
										{formatCurrency(originalPrice)}
									</div>
									<div className={styles.price}>{formatCurrency(price)}</div>
								</div>
							</div>
							<div className={styles.rightSection}>
								<span>{information.landArea}</span>
								<span>{information.floorArea}</span>
								<span>{information.floor}</span>
							</div>
						</div>
					</div>
				</Link>
				{info.status === PRODUCT_STATUS.sold.value && (
					<div className={styles.overlay}>- Đã bán -</div>
				)}
			</div>
			{isShowView && <div className={styles.view}>ĐÃ XEM {view}</div>}

			<Dialog.Root>
				<Dialog.Trigger className={styles.save}>
					{/* {status === PRODUCT_STATUS.SAVED ? (
						<IconBookmarkFilled size={30} />
					) : ( */}
					<IconBookmark size={30} />
					{/* )} */}
				</Dialog.Trigger>
				<SaveDialogPortal value={value} onChange={handleSave} />
			</Dialog.Root>
		</div>
	);
}
