"use client";

import {Button} from "@/components";
import {useCartContext} from "@/providers/CartProvider";
import {IconChevronLeft, IconReceipt} from "@tabler/icons-react";
import {useRouter} from "next/navigation";
import styles from "./tomTat.module.scss";
import CartItem from "../_components/CartItem";
import {formatCurrency} from "@/utils/formatCurrency";
import clsx from "clsx";
import {useModalContext} from "@/providers/ModalProvider";

export default function Page() {
	const router = useRouter();
	const {cart, checkedList, totalPrice} = useCartContext();
	const {showBookingModal} = useModalContext();
	const products = cart.filter((p) => checkedList.includes(p.productId));
	const discountAmount = 500_000_000;

	return (
		<div className={styles.pageWrapper}>
			<div className={clsx(styles.wrapper, styles.titleWrapper)}>
				<Button onClick={router.back}>
					<IconChevronLeft />
				</Button>
				<h3>Tóm tắt yêu cầu</h3>
			</div>

			<div className={clsx(styles.wrapper, styles.productList)}>
				{products.map((item) => (
					<CartItem key={item.id} item={item} shouldShowVoucher={true} />
				))}
			</div>

			<div className={styles.wrapper}>
				<h4 className={styles.calculationTitle}>
					<IconReceipt size={30} /> Tóm tắt thanh toán
				</h4>
				<div className={clsx(styles.calculationLine, styles.originalPrice)}>
					<span>Giá chưa chiết khấu</span>
					<span>{formatCurrency(totalPrice)}</span>
				</div>
				<div className={clsx(styles.calculationLine, styles.discountAmount)}>
					<span>Giá discount voucher</span>
					<span>{formatCurrency(discountAmount)}</span>
				</div>
				<div className={clsx(styles.calculationLine, styles.finalPrice)}>
					<span>Tổng thanh toán</span>
					<span>{formatCurrency(totalPrice - discountAmount)}</span>
				</div>
			</div>

			<div className={styles.wrapper}>
				<div className={styles.summaryWrapper}>
					<span>Tổng ({products.length} sản phẩm)</span>
					<div>
						<span>{formatCurrency(totalPrice - discountAmount)}</span>
						<span>Bạn đã tiết kiệm được {formatCurrency(discountAmount)}</span>
					</div>
				</div>
				<div className={styles.action}>
					<Button onClick={showBookingModal}>Đặt lịch tư vấn</Button>
					<Button>Gọi nhận hỗ trợ</Button>
				</div>
			</div>
		</div>
	);
}
