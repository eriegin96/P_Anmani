import {IconBolt} from "@tabler/icons-react";
import styles from "./flashSale.module.scss";
import Carousel from "../Carousel";
import {saleList} from "./data";
import ProductCard from "../ProductCard";

type Props = {};

export default function FlashSale({}: Props) {
	const setting = {
		draggable: false,
		dots: false,
		slidesToShow: 4,
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
	};

	return (
		<div>
			<div className={styles.title}>
				<span>
					F
					<IconBolt />
					ash sale
				</span>
				<div className={styles.clock}>
					<span>07</span>:<span>48</span>:<span>25</span>
				</div>
			</div>

			<Carousel setting={setting}>
				{saleList.map((sale) => (
					<ProductCard key={sale.name} info={sale} />
				))}
			</Carousel>
		</div>
	);
}
