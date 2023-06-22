import Link from "next/link";
import Title from "../Title";
import styles from "./deposit.module.scss";

export default function Deposit() {
	return (
		<div>
			<Title>Ký gửi bất động sản</Title>
			<div className={styles.textWrapper}>
				<p>
					1. Quý khách chỉ cần liên hệ hotline 0924.627.467 và để lại thông tin
				</p>
				<p>
					2. Hoặc Quý Khách <Link href="/sign-in">đăng nhập</Link> và điền vào
					thông tin ký gửi
				</p>
			</div>
		</div>
	);
}
