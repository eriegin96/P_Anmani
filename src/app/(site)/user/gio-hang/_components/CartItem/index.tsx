import {productList, voucherList} from "@/mock/data";
import {TProduct} from "@/types/product.type";
import {TCartItem} from "@/types/user.type";
import {IconGiftCard} from "@tabler/icons-react";
import styles from "./cartItem.module.scss";
import Image from "next/image";
import {formatCurrency} from "@/utils/formatCurrency";
import {Voucher} from "@/components";
import {TVoucher} from "@/types/voucher.type";
import {IconX} from "@tabler/icons-react";
import {useCartContext} from "@/providers/CartProvider";

type TCartItemProps = {
	item: TCartItem;
	shouldShowDeleteButton?: boolean;
	shouldShowVoucher?: boolean;
};

export default function CartItem({
	item,
	shouldShowDeleteButton = false,
	shouldShowVoucher = false,
}: TCartItemProps) {
	const {removeFromCart} = useCartContext();
	const product = productList.find((p) => p.key === item.productId) as TProduct;

	return (
		<div className={styles.wrapper}>
			<div className={styles.checkboxLabel}>
				<div className={styles.imageWrapper}>
					<Image src={product.image.thumbnail} alt="" fill />
				</div>
				<div className={styles.info}>
					<div>
						<div className={styles.name}>{product.name}</div>
						<div className={styles.type}>{product.type}</div>
					</div>
					<div className={styles.price}>{formatCurrency(product.price)}</div>
				</div>

				{shouldShowDeleteButton && (
					<button
						className={styles.btn}
						onClick={() => removeFromCart(item.productId)}
					>
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
					{item.voucherAdded.map((voucherId) => {
						const voucher = voucherList.find(
							(item) => item.key === voucherId
						) as TVoucher;

						return <Voucher key={voucherId} voucher={voucher} />;
					})}
				</div>
			)}
		</div>
	);
}
