import {TResponseCart} from "@/types/user.type";
import {IconGiftCard} from "@tabler/icons-react";
import styles from "./cartItem.module.scss";
import Image from "next/image";
import {formatCurrency} from "@/utils/formatCurrency";
import {Voucher} from "@/components";
import {IconX} from "@tabler/icons-react";
import {useCartContext} from "@/providers/CartProvider";
import {useDeleteCart} from "@/hooks/api/cart";
import {useEffect} from "react";
import {mutate} from "swr";
import {API_ENDPOINT} from "@/constants/api";
import {useAuthContext} from "@/providers/AuthProvider";

type TCartItemProps = {
	item: TResponseCart;
	shouldShowDeleteButton?: boolean;
	shouldShowVoucher?: boolean;
};

export default function CartItem({
	item,
	shouldShowDeleteButton = false,
	shouldShowVoucher = false,
}: TCartItemProps) {
	const {product} = item;
	const {userInfo} = useAuthContext();
	const {trigger, data} = useDeleteCart();
	const handleDeleteCart = () => {
		trigger(item.key);
	};

	useEffect(() => {
		if (data)
			mutate(`${API_ENDPOINT.CARTS}?userId=${userInfo?.key}&status=pending`);
	}, [data, userInfo]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.checkboxLabel}>
				<div className={styles.imageWrapper}>
					<Image src={product.image.thumbnail} alt={product.name} fill />
				</div>
				<div className={styles.info}>
					<div>
						<div className={styles.name}>{product.name}</div>
						<div className={styles.type}>{product.type}</div>
					</div>
					<div className={styles.price}>{formatCurrency(product.price)}</div>
				</div>

				{shouldShowDeleteButton && (
					<button className={styles.btn} onClick={handleDeleteCart}>
						<IconX />
					</button>
				)}
			</div>

			{shouldShowVoucher && (
				<div className={styles.voucherWrapper}>
					<h4 className={styles.voucherTitle}>
						<IconGiftCard size={30} />
						Chiết khấu của sản phẩm
					</h4>
					{item.vouchers.map((voucher) => {
						return <Voucher key={voucher.key} voucher={voucher} />;
					})}
				</div>
			)}
		</div>
	);
}
