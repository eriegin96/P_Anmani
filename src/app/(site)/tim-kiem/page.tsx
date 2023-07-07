"use client";

import {SearchBox} from "@/components";
import {Button, Col, Divider, Row, Select, Slider} from "antd";
import {
	areaOptions,
	tagOptions,
	sortOptions,
	investorOptions,
	typeOptions,
} from "@/mock/selectOptions";
import {useSearchParams} from "next/navigation";
import {useMemo} from "react";
import {MAX_PRICE, MIN_PRICE} from "@/constants/common";
import {productList} from "@/mock/data";
import {ProductCard} from "../_components";
import styles from "./timKiem.module.scss";
import {formatCurrency} from "@/utils/formatCurrency";

export default function Page() {
	const searchParams = useSearchParams();
	const formatter = (value?: number) => {
		return formatCurrency(value, true);
	};

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const selectList = useMemo(
		() => [
			{
				placeholder: "Phân loại",
				value: searchParams.get("tag") || null,
				onChange: handleChange,
				options: tagOptions,
			},
			{
				placeholder: "Loại hình",
				value: searchParams.get("type") || null,
				onChange: handleChange,
				options: typeOptions,
			},
			{
				placeholder: "Khu vực",
				value: searchParams.get("area") || null,
				onChange: handleChange,
				options: areaOptions,
			},
			{
				placeholder: "Chủ đầu tư",
				value: searchParams.get("investor") || null,
				onChange: handleChange,
				options: investorOptions,
			},
			{
				placeholder: "Sắp xếp",
				value: null,
				onChange: handleChange,
				options: sortOptions,
			},
		],
		[searchParams]
	);

	return (
		<div className={styles.wrapper}>
			<SearchBox />

			<Row gutter={[16, 16]} className={styles.filterList}>
				{selectList.map(({placeholder, value, onChange, options}) => (
					<Col key={placeholder} xs={24} sm={12} md={8} lg={6} xxl={4}>
						<Select
							placeholder={placeholder}
							defaultValue={value}
							onChange={onChange}
							options={options}
							className={styles.filterItem}
						/>
					</Col>
				))}

				<Col xs={24} sm={12} md={8} lg={6} xxl={4}>
					<Button type="primary" className={styles.filterItem}>
						Áp dụng
					</Button>
				</Col>
			</Row>
			<Slider
				range
				min={MIN_PRICE}
				max={MAX_PRICE}
				marks={{
					[MIN_PRICE]: formatCurrency(MIN_PRICE),
					[MAX_PRICE]: formatCurrency(MAX_PRICE),
				}}
				defaultValue={[MIN_PRICE, MAX_PRICE]}
				step={100_000_000}
				tooltip={{formatter}}
				className={styles.slider}
			/>

			<Divider className={styles.divider} />
			<Row gutter={[16, 16]}>
				{productList.map((product) => (
					<Col xs={24} sm={12} md={8} lg={6} xxl={4} key={product.id}>
						<ProductCard info={product} />
					</Col>
				))}
			</Row>
		</div>
	);
}
