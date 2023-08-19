import {Voucher} from "@/components";
import {TVoucher} from "@/types/voucher.type";
import {useParams} from "next/navigation";
import styles from "./voucherList.module.scss";
import {useGetVouchers} from "@/hooks/api/voucher";

export default function VoucherList() {
	const {id} = useParams();
	const {data: voucherList} = useGetVouchers();
	const vouchers = voucherList?.filter(
		(voucher) => voucher.key !== id
	) as TVoucher[];

	return (
		<>
			<p className={styles.description}>
				Hãy áp dụng ngay mã giảm giá trước khi hết hạn
			</p>
			<div className={styles.list}>
				{vouchers?.map((voucher) => (
					<Voucher key={voucher.key} voucher={voucher} shouldShowBtn />
				))}
			</div>
		</>
	);
}
