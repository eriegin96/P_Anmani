import {saleList} from "@/mock/data";
import {TProduct} from "@/types/product.type";
import {TCartItem} from "@/types/user.type";
import * as Checkbox from "@radix-ui/react-checkbox";
import {IconCheck} from "@tabler/icons-react";
import styles from "./cartItem.module.scss";
import Image from "next/image";

type TCartItemProps = {
	item: TCartItem;
};

export default function CartItem({item}: TCartItemProps) {
	const product = saleList.find((p) => p.id === item.productId) as TProduct;

	return (
		<div className={styles.checkboxLabel}>
			<div className={styles.imageWrapper}>
				<Image src={product.thumbnail} alt="" fill />
			</div>
			<div className={styles.info}>
				<div>
					<div className={styles.name}>{product.name}</div>
					<div className={styles.type}>{product.type}</div>
				</div>
				<div className={styles.price}>{product.price}</div>
			</div>
		</div>
	);
}
