import {Button} from "@/components";
import Title from "../Title";
import styles from "./connection.module.scss";

export default function Connection() {
	return (
		<div className={styles.wrapper}>
			<Title>Kết nối</Title>
			<div>
				<p>0924627467</p>
				<a href="mailto:tahualucnhu@gmail.com" target="_blank" rel="noreferrer">
					tahualucnhu@gmail.com
				</a>
				<div>
					<span>Nhận bản tin</span>
					<input type="text" placeholder="Vui lòng nhập email của bạn" />
					<Button>Gửi</Button>
				</div>
			</div>
		</div>
	);
}
