"use client";

import {Button, Col, Divider, Input, Row, Select, Slider} from "antd";
import {
	locationOptions,
	tagOptions,
	sortOptions,
	investorOptions,
	typeOptions,
} from "@/constants/selectOptions";
import {useSearchParams} from "next/navigation";
import {ChangeEvent, useMemo, useState} from "react";
import {MAX_PRICE, MIN_PRICE} from "@/constants/common";
import {ProductCard} from "../_components";
import styles from "./timKiem.module.scss";
import {formatCurrency} from "@/utils/formatCurrency";
import {useGetSearchProducts} from "@/hooks/api/product/query/useGetProducts";
import {parseURLSearchParams} from "@/utils/parseURLSearchParams";
import {getParams} from "@/utils/parameters";

export default function Page() {
	const searchParams = useSearchParams();
	const [params, setParams] = useState(
		parseURLSearchParams(searchParams.toString())
	);
	const [searchBoxValue, setSearchBoxValue] = useState<string>("");
	const {data: productList, trigger} = useGetSearchProducts();

	const formatter = (value?: number) => {
		return formatCurrency(value, true);
	};

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchBoxValue(e.target.value);
	};

	const handleSearchBlur = () => {
		setParams((prev) => ({...prev, name: searchBoxValue}));
	};

	const handleChange = (type: string, value: string) => {
		setParams((prev) => ({...prev, [type]: value}));
	};

	const handleSliderChange = (value: [number, number] | null) => {
		if (value == null) return;
		setParams((prev) => ({...prev, price: JSON.stringify(value)}));
	};

	const handleSearch = () => {
		trigger(getParams(params));
	};

	const selectList = useMemo(
		() => [
			{
				placeholder: "Phân loại",
				value: searchParams.get("tag") || null,
				onChange: (value: string) => handleChange("tag", value),
				options: tagOptions,
			},
			{
				placeholder: "Loại hình",
				value: searchParams.get("type") || null,
				onChange: (value: string) => handleChange("type", value),
				options: typeOptions,
			},
			{
				placeholder: "Khu vực",
				value: searchParams.get("location") || null,
				onChange: (value: string) => handleChange("location", value),
				options: locationOptions,
			},
			{
				placeholder: "Chủ đầu tư",
				value: searchParams.get("investor") || null,
				onChange: (value: string) => handleChange("investor", value),
				options: investorOptions,
			},
			{
				placeholder: "Sắp xếp",
				value: null,
				onChange: (value: string) => handleChange("sort", value),
				options: sortOptions,
			},
		],
		[searchParams]
	);

	return (
		<div className={styles.wrapper}>
			<Input
				value={searchBoxValue}
				onChange={handleSearchChange}
				onBlur={handleSearchBlur}
			/>

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
					<Button
						type="primary"
						className={styles.filterItem}
						onClick={handleSearch}
					>
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
				onChange={handleSliderChange}
			/>

			<Divider className={styles.divider} />
			{productList?.length === 0 ? (
				<div>Không tìm thấy sản phẩm</div>
			) : (
				<Row gutter={[16, 16]}>
					{productList?.map((product) => (
						<Col xs={24} sm={12} md={8} lg={6} xxl={4} key={product.key}>
							<ProductCard info={product} />
						</Col>
					))}
				</Row>
			)}
		</div>
	);
}
