import {TProduct} from "@/types/product.type";
import styles from "./action.module.scss";
import {Button} from "@/components";
import {formatCurrency} from "@/utils/formatCurrency";
import {useModalContext} from "@/providers/ModalProvider";
import {useProductComparisonContext} from "@/providers/ProductComparisonProvider";

type TActionProps = {
	product: TProduct;
};

export default function Action({product}: TActionProps) {
	const {showBookingModal} = useModalContext();
	const {showDrawer} = useProductComparisonContext();

	return (
		<div className={styles.wrapper}>
			<div className={styles.leftSection}>
				<span className={styles.title}>Giá</span>
				<span className={styles.originalPrice}>
					{formatCurrency(product.originalPrice)}
				</span>
				<span className={styles.price}>{formatCurrency(product.price)}</span>
			</div>

			<div className={styles.rightSection}>
				<Button className={styles.btn} onClick={showBookingModal}>
					Đặt lịch tư vấn
				</Button>
				<Button className={styles.btn} onClick={showDrawer}>
					So sánh
				</Button>
				<Button className={styles.primaryBtn}>Thêm vào giỏ hàng</Button>
			</div>
		</div>
	);
}
