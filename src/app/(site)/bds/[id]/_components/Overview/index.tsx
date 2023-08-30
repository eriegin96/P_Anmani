import ImagePreviewGroup from "../ImagePreviewGroup";
import {TProduct} from "@/types/product.type";
import styles from "./overview.module.scss";
import {IconMapPin, IconStarFilled} from "@tabler/icons-react";
import {PRODUCT_TYPE} from "@/constants/product";
import {LOCATION} from "@/constants/location";
import {CountdownProps, Statistic} from "antd";
import dayjs from "dayjs";
import {useProductComparisonContext} from "@/providers/ProductComparisonProvider";
import {Button} from "@/components";
import {useState} from "react";

type TOverViewProps = {
	product: TProduct;
};

const {Countdown} = Statistic;

export default function OverView({product}: TOverViewProps) {
	const {setComparisonProduct, showDrawer} = useProductComparisonContext();
	const stars = Array.from(Array(product.star ?? 5).keys());
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

	const handleAddComparison = () => {
		setComparisonProduct(product);
		showDrawer();
	};

	return (
		<>
			<ImagePreviewGroup image={product.image} />
			<div className={styles.wrapper}>
				<h3 className={styles.title}>{product?.name}</h3>
				<div className={styles.typeWrapper}>
					<span className={styles.type}>
						{PRODUCT_TYPE[product?.type].label}
					</span>
					<span className={styles.star}>
						{stars.map((star) => (
							<IconStarFilled key={star} />
						))}
					</span>
				</div>
				<span className={styles.location}>
					<IconMapPin size={20} />
					<p>
						{product?.location.sub}, {LOCATION[product?.location.main].label}
					</p>
				</span>
				<div className={styles.countdownWrapper}>
					<span className={styles.countdownText}>Giờ vàng giảm giá </span>
					<Countdown
						value={product.discountEndDate}
						onChange={handleChange}
						style={{display: "none"}}
					/>
					{dayjs().isAfter(product.discountStartDate) && (
						<span className={styles.countdown}>
							{countDown.day}:{countDown.hour}:{countDown.minute}:
							{countDown.second}
						</span>
					)}
				</div>
				<div className={styles.subTypeWrapper}>
					<span>{product.view} người dùng đã xem</span>
					<Button className={styles.btn} onClick={handleAddComparison}>
						So sánh
					</Button>
				</div>
			</div>
		</>
	);
}
