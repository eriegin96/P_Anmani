import {IconBolt} from "@tabler/icons-react";
import styles from "./flashSale.module.scss";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import {setting} from "@/constants/carouselSetting";
import {saleList} from "../../../../mock/data";

type Props = {};
const carouselSetting = {...setting, autoplaySpeed: 3500};

export default function FlashSale({}: Props) {
	return (
		<>
			<div className={styles.title}>
				<span>
					F<IconBolt />
					ash sale
				</span>
				<div className={styles.clock}>
					<span>07</span>:<span>48</span>:<span>25</span>
				</div>
			</div>

			<Carousel setting={carouselSetting}>
				{saleList.map((sale) => (
					<ProductCard key={sale.name} info={sale} isShowView />
				))}
			</Carousel>
		</>
	);
}
