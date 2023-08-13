"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import styles from "./productCard.module.scss";
import {TProduct, TProductSaveValue} from "@/types/product.type";
import Image from "next/image";
import {SaveDialogPortal} from "@/components";
import {IconBookmark, IconBookmarkFilled} from "@tabler/icons-react";
import {PRODUCT_SAVE_VALUE, PRODUCT_STATUS} from "@/constants/product";
import {useState} from "react";
import {RadioChangeEvent} from "antd";
import {QUERY_PARAMS, ROUTE} from "@/constants/route";
import {formatCurrency} from "@/utils/formatCurrency";

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
		thumbnail,
		logo,
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
				<Link href={`${ROUTE.PRODUCT}/${key}`} key={name}>
					<div className={styles.cardContent}>
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
									<div className={styles.originalPrice}>
										{formatCurrency(originalPrice)}
									</div>
									<div className={styles.price}>{formatCurrency(price)}</div>
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
				</Link>
				{info.status === QUERY_PARAMS.STATUS.SOLD && (
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
