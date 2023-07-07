import styles from "./flashSale.module.scss";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import {setting} from "@/constants/carouselSetting";
import {productList} from "../../../../mock/data";
import {IconFlashSale} from "@/assets";
import Image from "next/image";

type Props = {};
const carouselSetting = {...setting, autoplaySpeed: 3500};

export default function FlashSale({}: Props) {
	return (
		<div>
			<div className={styles.title}>
				<div className={styles.flashSale}>
					<span>F</span>
					<Image src={IconFlashSale} alt="" width={20} height={24} />
					<span className={styles.afterIcon}>ash sale</span>
				</div>
				<div className={styles.clock}>
					<span>07</span>:<span>48</span>:<span>25</span>
				</div>
			</div>

			<Carousel setting={carouselSetting}>
				{productList.map((sale) => (
					<div key={sale.name} className={styles.productWrapper}>
						<ProductCard info={sale} isShowView />
					</div>
				))}
			</Carousel>
		</div>
	);
}
