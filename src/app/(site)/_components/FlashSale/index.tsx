"use client";

import styles from "./flashSale.module.scss";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import {setting} from "@/constants/carouselSetting";
import {productList} from "../../../../mock/data";
import {IconFlashSale} from "@/assets";
import Image from "next/image";
import {CountdownProps, Statistic} from "antd";
import dayjs from "dayjs";
import {useState} from "react";
import duration from "dayjs/plugin/duration";
import {useProducts} from "@/hooks/api/query/useProducts";
import {ItemsSkeleton} from "@/components";

dayjs.extend(duration);

const {Countdown} = Statistic;
const carouselSetting = {...setting, autoplaySpeed: 3500};
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2; // Dayjs is also OK;

export default function FlashSale() {
	const {data, isLoading} = useProducts();
	const [countDown, setCountDown] = useState({
		day: "",
		hour: "",
		minute: "",
		second: "",
	});

	const handleChange: CountdownProps["onChange"] = (value) => {
		if (typeof value === "number") {
			setCountDown({
				day: dayjs.duration(value).format("DD"),
				hour: dayjs.duration(value).format("HH"),
				minute: dayjs.duration(value).format("mm"),
				second: dayjs.duration(value).format("ss"),
			});
		}
	};

	return (
		<div>
			<div className={styles.title}>
				<div className={styles.flashSale}>
					<span>F</span>
					<Image src={IconFlashSale} alt="" width={20} height={24} />
					<span className={styles.afterIcon}>ash sale</span>
				</div>
				<div className={styles.clock}>
					{/* Hide antd countdown */}
					<Countdown
						value={deadline}
						onChange={handleChange}
						style={{display: "none"}}
					/>
					<span>{countDown.day}</span>:<span>{countDown.hour}</span>:
					<span>{countDown.minute}</span>:<span>{countDown.second}</span>
				</div>
			</div>

			{isLoading && <ItemsSkeleton />}

			{data && (
				<Carousel setting={carouselSetting}>
					{productList.map((sale) => (
						<div key={sale.name} className={styles.productWrapper}>
							<ProductCard info={sale} isShowView />
						</div>
					))}
				</Carousel>
			)}
		</div>
	);
}
