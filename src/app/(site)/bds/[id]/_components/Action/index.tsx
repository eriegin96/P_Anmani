import {TProduct} from "@/types/product.type";
import styles from "./action.module.scss";
import {Button} from "@/components";

type TActionProps = {
	product: TProduct;
};

export default function Action({product}: TActionProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.leftSection}>
				<span className={styles.title}>Giá</span>
				<span className={styles.price}>{product.price}</span>
				<span className={styles.salePrice}>{product.salePrice}</span>
			</div>

			<Button className={styles.btn}>Thêm vào giỏ hàng</Button>
		</div>
	);
}
