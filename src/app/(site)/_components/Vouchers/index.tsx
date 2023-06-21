"use client";

import {voucherList} from "./data";
import Link from "next/link";
import Carousel from "react-slick";
import * as Slider from "@radix-ui/react-slider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./vouchers.module.scss";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("../Title"));

export default function Vouchers() {
	const settings = {
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		className: styles.carousel,
		draggable: false,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
		speed: 500,
	};

	return (
		<>
			<Title>Trung tâm voucher</Title>
			<Carousel {...settings}>
				{voucherList.map((voucher) => (
					<div key={voucher.id}>
						<Link href={voucher.href} className={styles.voucherWrapper}>
							<div className={styles.leftSection}>
								<div className={styles.leftTopSection}>
									<p className={styles.subTitle}>Quy đổi giới hạn</p>
									<p className={styles.discount}>
										Giảm {voucher.discountAmount}
									</p>
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
					</div>
				))}
			</Carousel>
		</>
	);
}
