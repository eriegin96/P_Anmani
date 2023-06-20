"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./carousel.module.scss";
import {ReactElement} from "react";

const carouselList = [
	{
		id: "1",
		src: "https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
	},
	{
		id: "2",
		src: "https://uc0d8c518c736a6b4692a3a53f7c.previews.dropboxusercontent.com/p/thumb/AB-zjgtHkWqpUgT0WfDIAV06kvGnIiqfgFJ8LEO2_2PvsMUCqneWExQg9ui-P_VyAJeKOR52UnQCd8UpSA7jev67F88obUCs4vyeb9n-8zJx0KHUsLBJcY4raWZWALDTQcdKFy4L-4ABCrXdyEGnII1A6f5srhMuX8h0q9S9r058gBTR2id3Hhw4ihT5gwaOJvt3HcE41X7FxpCdNYlLa7s1Hu_JmwH3L066BQ0E7yz2o8i94Rhb-F1XgMFZ7bUK1ibj11C0bt-PkVx_WJPmsXGKtXLDvgZJq29KRAMsMKVwAScPRrIn4EY9hDiKaA9JnangqX1alu10oeZlDk6qZAqgJSXMuSTe2Z1Lrym8Q0tUBmJEbBWU1hGK1wZpar0SPUVDgfRopEpWW1v4F4ADPA5t_WTsIbjQwEQUaaMHl1t4COX_lCG_qFysFMr5kj_g0s5qL6DY1LRngqGPePn9sjEnkZqGF9xhfkDXC2lqDnGr3KJ6VW-k0ttDgZOkd940VSqfyDeCQo5OfRngc52loMA0mBZJfYr_GlVh66wvIqXjixMr9v-0nzv0yIdRGoD6xWQBLt0BHpXnJ4U3KQ5Af6bJD0zwtKZ0rkS61EmysopYUg/p.jpeg",
	},
];

export default function Carousel() {
	const settings = {
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		className: styles.carousel,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		dotsClass: styles.slickDots,
		appendDots: (dots: ReactElement) => <ul>{dots}</ul>,
		customPaging: () => <div className={styles.slickDot} />,
	};

	return (
		<Slider {...settings}>
			{carouselList.map((image) => (
				<div key={image.id} className={styles.imageContainer}>
					<Image src={image.src} alt="" fill />
				</div>
			))}
		</Slider>
	);
}
