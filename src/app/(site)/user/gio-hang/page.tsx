"use client";

import {useCartContext} from "@/providers/CartProvider";
import styles from "./gioHang.module.scss";

export default function Page() {
	const {cart} = useCartContext();

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Giỏ hàng ({cart?.length})</h3>
		</div>
	);
}
