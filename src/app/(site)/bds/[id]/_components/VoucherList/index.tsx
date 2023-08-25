import {Voucher} from "@/components";
import {useParams} from "next/navigation";
import styles from "./voucherList.module.scss";
import {useGetVouchersByProductId} from "@/hooks/api/voucher";

export default function VoucherList() {
	const {id} = useParams();
	const {data: voucherList} = useGetVouchersByProductId(id);

	return (
		<>
			{voucherList?.length ? (
				<>
					<p className={styles.description}>
						Hãy áp dụng ngay mã giảm giá trước khi hết hạn
					</p>
					<div className={styles.list}>
						{voucherList?.map((voucher) => (
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
