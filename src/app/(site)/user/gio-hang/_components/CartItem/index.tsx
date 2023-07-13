import {productList, voucherList} from "@/mock/data";
import {TProduct} from "@/types/product.type";
import {TCartItem} from "@/types/user.type";
import * as Checkbox from "@radix-ui/react-checkbox";
import {IconCheck, IconGiftCard} from "@tabler/icons-react";
import styles from "./cartItem.module.scss";
import Image from "next/image";
import {formatCurrency} from "@/utils/formatCurrency";
import {Voucher} from "@/components";
import {TVoucher} from "@/types/voucher.type";

type TCartItemProps = {
	item: TCartItem;
	shouldShowVoucher?: boolean;
};

export default function CartItem({
	item,
	shouldShowVoucher = false,
}: TCartItemProps) {
	const product = productList.find((p) => p.id === item.productId) as TProduct;

	return (
		<div className={styles.wrapper}>
			<div className={styles.checkboxLabel}>
				<div className={styles.imageWrapper}>
					<Image src={product.thumbnail} alt="" fill />
				</div>
				<div className={styles.info}>
					<div>
						<div className={styles.name}>{product.name}</div>
						<div className={styles.type}>{product.type}</div>
					</div>
					<div className={styles.price}>{formatCurrency(product.price)}</div>
				</div>
			</div>
			{shouldShowVoucher && (
				<div className={styles.voucherWrapper}>
					<h4 className={styles.voucherTitle}>
						<IconGiftCard size={30} />
						Chiết khấu của sản phẩm
					</h4>
					{item.voucherAdded.map((voucherId) => {
						const voucher = voucherList.find(
							(item) => item.id === voucherId
						) as TVoucher;

						return <Voucher key={voucherId} voucher={voucher} />;
					})}
				</div>
			)}
		</div>
	);
}
