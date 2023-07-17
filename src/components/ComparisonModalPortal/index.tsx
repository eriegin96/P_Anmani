"use client";

import {Button} from "antd";
import SearchBox from "../common/SearchBox";
import styles from "./comparisonModalPortal.module.scss";
import {useState} from "react";
import {useProductComparisonContext} from "@/providers/ProductComparisonProvider";

export default function ComparisonModalPortal() {
	const {setComparisonProduct, hideComparisonModal} =
		useProductComparisonContext();
	const [searchBoxValue, setSearchBoxValue] = useState<string>("");

	const handleAdd = () => {
		setComparisonProduct(searchBoxValue);
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
