import {IconFlashSale} from "@/assets";
import {CountdownProps, Statistic} from "antd";
import Image from "next/image";
import {useState} from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import styles from "./flashSaleCountdown.module.scss";

dayjs.extend(duration);

const {Countdown} = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2; // Dayjs is also OK;

export default function FlashSaleCountdown() {
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
		<>
			<div className={styles.flashSale}>
				<span>F</span>
				<Image src={IconFlashSale} alt="l" width={20} height={24} />
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
		</>
	);
}
