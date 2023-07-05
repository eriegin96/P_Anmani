"use client";

import {Input} from "antd";
import styles from "./gopY.module.scss";
import {Button} from "@/components";

const {TextArea} = Input;

export default function Page() {
	return (
		<div>
			<p className={styles.text}>
				Anmani muốn lắng nghe câu hỏi và ý kiến đóng góp từ bạn
			</p>
			<TextArea
				placeholder="Nội dung góp ý"
				autoSize={{minRows: 4}}
				className={styles.textarea}
			/>
			<Button className={styles.button}>Gửi</Button>
		</div>
	);
}
