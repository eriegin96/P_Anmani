"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./carousel.module.scss";
import {ReactElement, ReactNode} from "react";

type TCarouselProps = {
	setting?: any;
	children: ReactNode;
};

export default function Carousel({setting, children}: TCarouselProps) {
	const defaultSetting = {
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
		...setting,
	};

	return <Slider {...defaultSetting}>{children}</Slider>;
}
