import dynamic from "next/dynamic";
import {voucherList} from "./data";
import Carousel from "../Carousel";
import {setting} from "@/constants/carouselSetting";
import {Voucher} from "@/components";
import Link from "next/link";
import styles from "./vouchers.module.scss";

const Title = dynamic(() => import("../Title"));

export default function Vouchers() {
	return (
		<>
			<Title>Trung tâm voucher</Title>
			<Carousel setting={setting}>
				{voucherList.map((voucher) => (
					<Link
						key={voucher.id}
						href={`bds/${voucher.productId}`}
						className={styles.link}>
						<Voucher voucher={voucher} />
					</Link>
				))}
			</Carousel>
		</>
	);
}
