"use client";

import {Button} from "antd";
import SearchBox from "../common/SearchBox";
import styles from "./comparisonModalPortal.module.scss";
import {useState} from "react";
import {useProductComparisonContext} from "@/providers/ProductComparisonProvider";
import {useGetProductById} from "@/hooks/api/product";

export default function ComparisonModalPortal() {
	const {setComparisonProduct, hideComparisonModal} =
		useProductComparisonContext();
	const [searchBoxValue, setSearchBoxValue] = useState<string>("");
	const {data: product} = useGetProductById(searchBoxValue);

	const handleAdd = () => {
		if (!product) return;
		setComparisonProduct(product);
		hideComparisonModal();
		setSearchBoxValue("");
	};

	return (
		<div className={styles.wrapper}>
			<SearchBox value={searchBoxValue} setValue={setSearchBoxValue} />
			<Button type="primary" onClick={handleAdd}>
				Thêm
			</Button>
		</div>
	);
}
