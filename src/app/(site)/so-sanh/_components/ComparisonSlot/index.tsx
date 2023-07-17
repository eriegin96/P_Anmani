import {TProduct, TSlotId} from "@/types/product.type";
import Image from "next/image";
import styles from "./comparisonSlot.module.scss";
import {formatCurrency} from "@/utils/formatCurrency";
import {useProductComparisonContext} from "@/providers/ProductComparisonProvider";
import {IconX} from "@tabler/icons-react";

type TComparisonSlotProps = {
	product: TProduct;
	slotId: TSlotId;
};

export default function ComparisonSlot({
	slotId,
	product: {thumbnail, name, originalPrice, price},
}: TComparisonSlotProps) {
	const {removeComparisonProduct} = useProductComparisonContext();

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.btn}
				onClick={() => removeComparisonProduct(slotId)}
			>
				<IconX />
			</button>
			<div className={styles.imageWrapper}>
				<Image src={thumbnail} alt="" fill />
			</div>
			<div className={styles.infoWrapper}>
				<span>{name}</span>
				<span className={styles.originalPrice}>
					{formatCurrency(originalPrice)}
				</span>
				<span className={styles.price}>{formatCurrency(price)}</span>
			</div>
		</div>
	);
}
