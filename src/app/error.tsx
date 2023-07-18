"use client";

import {Button, Typography} from "antd";
import styles from "./(site)/page.module.scss";
import {useRouter} from "next/navigation";
import {ROUTE} from "@/constants/route";

export default function Error({
	error,
	reset,
}: {
	error: Error & {digest?: string};
	reset: () => void;
}) {
	const router = useRouter();

	return (
		<div className={styles.errorWrapper}>
			<Typography.Title level={2}>Có lỗi xảy ra</Typography.Title>
			<div>
				<Button type="primary" onClick={() => reset()}>
					Thử lại
				</Button>

				<Button type="link" onClick={() => router.push(ROUTE.HOME)}>
					Về trang chủ
				</Button>
			</div>
		</div>
	);
}
