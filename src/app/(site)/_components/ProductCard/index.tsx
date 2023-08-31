"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import styles from "./productCard.module.scss";
import {TProduct} from "@/types/product.type";
import Image from "next/image";
import {SaveDialogPortal} from "@/components";
import {IconBookmark, IconBookmarkFilled} from "@tabler/icons-react";
import {PRODUCT_STATUS} from "@/constants/product";
import {useEffect, useMemo} from "react";
import {RadioChangeEvent} from "antd";
import {ROUTE} from "@/constants/route";
import {formatCurrency} from "@/utils/formatCurrency";
import {concatHref} from "@/utils/concatHref";
import {INVESTOR} from "@/constants/investor";
import {useAuthContext} from "@/providers/AuthProvider";
import {
	useCreateBookmark,
	useGetBookmarksByUserProduct,
	useUpdateBookmark,
} from "@/hooks/api/bookmark";
import {getParams} from "@/utils/parameters";
import {API_ENDPOINT} from "@/constants/api";
import {useSWRConfig} from "swr";

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
	} = info;
	const discountPercent = Math.round(
		((originalPrice - price) / originalPrice) * 100
	);
	const {userInfo} = useAuthContext();
	const paramsObject = useMemo(
		() => ({userId: userInfo?.key, productId: key}),
		[userInfo, key]
	);
	const {data: bookmark} = useGetBookmarksByUserProduct(
		getParams(paramsObject)
	);
	const thisBookmark = bookmark?.[0];
	const {trigger: createBookmark, data: createBookmarkData} =
		useCreateBookmark();
	const {trigger: updateBookmark, data: updateBookmarkData} = useUpdateBookmark(
		thisBookmark?.key
	);
	const {mutate} = useSWRConfig();

	const handleSave = (e: RadioChangeEvent) => {
		if (!userInfo?.key) return;
		const payload = {
			userId: userInfo?.key,
			productId: key,
			type: e.target.value,
		};
		thisBookmark ? updateBookmark(payload) : createBookmark(payload);
	};

	useEffect(() => {
		if (createBookmarkData || updateBookmarkData)
			mutate(API_ENDPOINT.BOOKMARKS + "?" + getParams(paramsObject));
	}, [createBookmarkData, updateBookmarkData, paramsObject, mutate]);

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
							<span className={styles.discount}>
								Tiết kiệm {discountPercent}%
							</span>
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
					{thisBookmark ? (
						<IconBookmarkFilled size={30} />
					) : (
						<IconBookmark size={30} />
					)}
				</Dialog.Trigger>
				<SaveDialogPortal value={thisBookmark?.type} onChange={handleSave} />
			</Dialog.Root>
		</div>
	);
}
