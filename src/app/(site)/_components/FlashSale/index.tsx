"use client";

import styles from "./flashSale.module.scss";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import {setting} from "@/constants/carouselSetting";

import {useGetProducts} from "@/hooks/api/product/query/useGetProducts";
import {ItemsSkeleton} from "@/components";
import FlashSaleCountdown from "../FlashSaleCountdown";

const carouselSetting = {...setting, autoplaySpeed: 3500};

export default function FlashSale() {
	const {data, isLoading} = useGetProducts();

	return (
		<div>
			<div className={styles.title}>
				<FlashSaleCountdown />
			</div>

			{isLoading && <ItemsSkeleton />}

			{data && (
				<Carousel setting={carouselSetting}>
					{data.map((sale) => (
						<div key={sale.name} className={styles.productWrapper}>
							<ProductCard info={sale} isShowView />
						</div>
					))}
				</Carousel>
			)}
		</div>
	);
}
