import {TProduct} from "@/types/product.type";
import styles from "./action.module.scss";
import {Button} from "@/components";
import {formatCurrency} from "@/utils/formatCurrency";
import {useModalContext} from "@/providers/ModalProvider";
import {useProductComparisonContext} from "@/providers/ProductComparisonProvider";
import {useCreateCart} from "@/hooks/api/cart";
import {useAuthContext} from "@/providers/AuthProvider";
import {CART_STATUS} from "@/constants/cart";
import {useSWRConfig} from "swr";
import {useEffect} from "react";
import {API_ENDPOINT} from "@/constants/api";
import {useGetVouchersByProduct} from "@/hooks/api/voucher";
import {getParams} from "@/utils/parameters";

type TActionProps = {
	product: TProduct;
};

export default function Action({product}: TActionProps) {
	const {userInfo} = useAuthContext();
	const {data: vouchers} = useGetVouchersByProduct(
		getParams({productType: product.type, projectName: product.projectName})
	);
	const {showBookingModal} = useModalContext();
	const {showDrawer} = useProductComparisonContext();
	const {trigger, data} = useCreateCart();
	const {mutate} = useSWRConfig();

	const handleAddCart = () => {
		trigger({
			userId: userInfo?.key,
			voucherIds: vouchers?.map((voucher) => voucher.key),
			productId: product.key,
			status: CART_STATUS.PENDING,
			price: product.price,
		});
	};

	useEffect(() => {
		if (data)
			mutate(`${API_ENDPOINT.CARTS}?userId=${userInfo?.key}&status=pending`);
	}, [data, userInfo, mutate]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.leftSection}>
				<span className={styles.title}>Giá</span>
				<span className={styles.originalPrice}>
					{formatCurrency(product.originalPrice)}
				</span>
				<span className={styles.price}>{formatCurrency(product.price)}</span>
			</div>

			<div className={styles.rightSection}>
				<Button className={styles.btn} onClick={showBookingModal}>
					Đặt lịch tư vấn
				</Button>
				<Button className={styles.btn} onClick={showDrawer}>
					So sánh
				</Button>
				<Button className={styles.primaryBtn} onClick={handleAddCart}>
					Thêm vào giỏ hàng
				</Button>
			</div>
		</div>
	);
}
