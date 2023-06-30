import {Voucher} from "@/components";
import {TVoucher} from "@/types/voucher.type";
import {useParams} from "next/navigation";
import styles from "./voucherList.module.scss";
import {voucherList} from "@/mock/data";

export default function VoucherList() {
	const {id} = useParams();
	const vouchers = voucherList.filter(
		(voucher) => voucher.id !== id
	) as TVoucher[];

	return (
		<>
			<p className={styles.description}>
				Hãy áp dụng ngay mã giảm giá trước khi hết hạn
			</p>
			<div className={styles.list}>
				{vouchers?.map((voucher) => (
					<Voucher key={voucher.id} voucher={voucher} shouldShowBtn />
				))}
			</div>
		</>
	);
}
