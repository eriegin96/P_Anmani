import {TProduct} from "@/types/product.type";
import styles from "./policy.module.scss";
import clsx from "clsx";

type TPolicyProps = {
	product: TProduct;
};

export default function Policy({product}: TPolicyProps) {
	return (
		<div className={styles.wrapper}>
			<p className={clsx(styles.content, styles.main)}>{product.policy.main}</p>
			<p className={clsx(styles.content, styles.loan)}>
				<span className={styles.subTitle}>Chính sách vay</span>
				{product.policy.loan}
			</p>
			<p className={clsx(styles.content, styles.equity)}>
				<span className={styles.subTitle}>Thanh toán bằng vốn tự có</span>
				{product.policy.equity}
			</p>
		</div>
	);
}
