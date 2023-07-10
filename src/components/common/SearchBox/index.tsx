"use client";

import {Select} from "antd";
import styles from "./searchBox.module.scss";
import {IconSearch} from "@tabler/icons-react";
import {useState} from "react";
import type {SelectProps} from "antd";

type TSearchBoxProps = {};

export default function SearchBox({}: TSearchBoxProps) {
	const [data, setData] = useState<SelectProps["options"]>([]);
	const [value, setValue] = useState<string>();

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
			placeholder="Nhập tên dự án"
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
