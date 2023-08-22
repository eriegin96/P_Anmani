"use client";

import {Select} from "antd";
import styles from "./searchBox.module.scss";
import {IconSearch} from "@tabler/icons-react";
import {Dispatch, SetStateAction, useState} from "react";
import type {SelectProps} from "antd";
import {useGetProducts} from "@/hooks/api/product";

type TSearchBoxProps = {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

export default function SearchBox({value, setValue}: TSearchBoxProps) {
	const {data: productList} = useGetProducts();
	const [data, setData] = useState<SelectProps["options"]>(
		productList?.map(({key, name}) => ({value: key, label: name}))
	);

	const handleSearch = (newValue: string) => {
		console.log(newValue);
	};

	const handleChange = (newValue: string) => {
		setValue(newValue);
	};

	return (
		<Select
			suffixIcon={<IconSearch size={20} />}
			showSearch
			value={value}
			placeholder="Nhập tên bất động sản"
			defaultActiveFirstOption={false}
			filterOption={false}
			onSearch={handleSearch}
			onChange={handleChange}
			notFoundContent={null}
			options={(data || []).map((d) => ({
				value: d.value,
				label: d.label,
			}))}
			className={styles.select}
		/>
	);
}
