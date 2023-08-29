import {Voucher} from "@/components";
import styles from "./voucherList.module.scss";
import {TProduct} from "@/types/product.type";

type TVoucherListProps = {
	product: TProduct;
};

export default function VoucherList({product: {vouchers}}: TVoucherListProps) {
	return (
		<>
			{vouchers?.length ? (
				<>
					<p className={styles.description}>
						Hãy áp dụng ngay mã giảm giá trước khi hết hạn
					</p>
					<div className={styles.list}>
						{vouchers?.map((voucher) => (
							<Voucher key={voucher.key} voucher={voucher} />
						))}
					</div>
				</>
			) : (
				<div className={styles.noData}>Hiện chưa có voucher nào</div>
			)}
		</>
	);
}
