"use client";

import {
	categoryList,
	investorList,
	locationList,
	socialNetworks,
} from "../../../../mock/data";
import styles from "./advancedSearch.module.scss";
import Image from "next/image";
import Slider from "@/components/Slider";
import dynamic from "next/dynamic";
import {Button} from "@/components";
import {useState} from "react";
import {MAX_PRICE, MIN_PRICE} from "@/constants/common";

const SearchBox = dynamic(() => import("../../../../components/SearchBox"));
const Select = dynamic(() => import("../../../../components/Select"));

export default function AdvancedSearch() {
	const [priceValue, setPriceValue] = useState<number[]>([
		MIN_PRICE,
		MAX_PRICE,
	]);

	const handleValueChange = (value: number[]) => {
		setPriceValue(value);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.searchBar}>
				<SearchBox />
				<ul className={styles.networkList}>
					{socialNetworks.map((network) => (
						<li key={network.href}>
							<a href={network.href} target="_blank" rel="noreferrer">
								<Image src={network.icon} alt="" width={30} height={30} />
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className={styles.advancedSearch}>
				<Select placeholder="Vị trí" items={locationList} />
				<Select placeholder="Phân loại" items={categoryList} />
				<Select placeholder="Chủ đầu tư" items={investorList} />
				<Slider
					min={MIN_PRICE}
					max={MAX_PRICE}
					handleValueChange={handleValueChange}
					value={priceValue}
				/>
				<Button className={styles.searchBtn}>Tìm kiếm</Button>
			</div>
		</div>
	);
}
