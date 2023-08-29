"use client";

import React from "react";
import * as Slider from "@radix-ui/react-slider";
import styles from "./voucher.module.scss";
import {TVoucher} from "@/types/voucher.type";
import {NUMBER_FORMAT} from "@/constants/common";
import Button from "../Button";
import {formatDate} from "@/utils/formatDate";

type TVoucherProps = {
	voucher: TVoucher;
	shouldShowBtn?: boolean;
};

export default function Voucher({
	voucher,
	shouldShowBtn = false,
}: TVoucherProps) {
	const {amount, percentage, condition, expire} = voucher;
	const discountAmount = amount
		? amount.toString().replace(NUMBER_FORMAT, ".")
		: `${percentage}%`;

	return (
		<div className={styles.voucherWrapper}>
			<div className={styles.leftSection}>
				<div className={styles.leftTopSection}>
					<p className={styles.subTitle}>Quy đổi giới hạn</p>
					<p className={styles.discount}>Giảm {discountAmount}</p>
					<p className={styles.condition}>{condition}</p>
				</div>
				<div>
					<Slider.Root
						className={styles.sliderRoot}
						defaultValue={[50]}
						disabled
						max={100}
						step={1}
					>
						<Slider.Track className={styles.sliderTrack}>
							<Slider.Range className={styles.sliderRange} />
						</Slider.Track>
					</Slider.Root>
					<span className={styles.usedText}>Đã dùng 50%</span>
				</div>
				<span className={styles.expire}>HSD: {formatDate(expire)}</span>
			</div>
			{shouldShowBtn && (
				<div>
					<Button
						onClick={() => {
							console.log("add to cart");
						}}
						className={styles.useBtn}
					>
						Sử dụng
					</Button>
				</div>
			)}
		</div>
	);
}
