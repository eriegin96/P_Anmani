import Title from "../Title";
import styles from "./howTo.module.scss";

export default function HowTo() {
	return (
		<div className={styles.wrapper}>
			<Title>Cách thức mua hàng</Title>
			<div className={styles.textWrapper}>
				<p>Bước 1: Lựa chọn sản phẩm ưng ý trên websie</p>
				<p>
					Bước 2: Thêm vào giỏ hàng và trừ chiết khấu để xem giá bán cuối cùng
					hoặc chụp màn hình điện thoại
				</p>
				<p>
					Bước 3: Liên hệ trực tiếp tới số điện thoại 0924627467 hoặc Liên hệ tư
					vấn online
				</p>
			</div>
		</div>
	);
}
