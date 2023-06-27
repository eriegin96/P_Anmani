"use client";

import Link from "next/link";
import React from "react";
import * as Slider from "@radix-ui/react-slider";
import styles from "./voucher.module.scss";

type TVoucherProps = {
	voucher: any;
};

export default function Voucher({voucher}: TVoucherProps) {
	return (
		<Link href={voucher.href} className={styles.voucherWrapper}>
			<div className={styles.leftSection}>
				<div className={styles.leftTopSection}>
					<p className={styles.subTitle}>Quy đổi giới hạn</p>
					<p className={styles.discount}>Giảm {voucher.discountAmount}</p>
					<p className={styles.condition}>{voucher.condition}</p>
				</div>
				<div>
					<Slider.Root
						className={styles.sliderRoot}
						defaultValue={[50]}
						disabled
						max={100}
						step={1}>
						<Slider.Track className={styles.sliderTrack}>
							<Slider.Range className={styles.sliderRange} />
						</Slider.Track>
					</Slider.Root>
					<span className={styles.usedText}>Đã dùng 50%</span>
				</div>
			</div>
			<div>
				<span className={styles.useBtn}>Sử dụng</span>
			</div>
		</Link>
	);
}
