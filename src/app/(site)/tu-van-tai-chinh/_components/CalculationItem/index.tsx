"use client";

import {InputNumber, Slider} from "antd";
import {Dispatch, SetStateAction} from "react";
import styles from "./calculationItem.module.scss";
import {formatCurrency} from "@/utils/formatCurrency";
import {NUMBER_FORMAT} from "@/constants/common";

type TCalculationItemProps = {
	name: string;
	title: string;
	defaultSet: {
		min: number;
		max: number;
		step: number;
		minText: string;
		maxText: string;
	};
	calculationValue: Map<string, number>;
	setCalculationValue: Dispatch<SetStateAction<Map<string, number>>>;
};

export default function CalculationItem({
	name,
	title,
	defaultSet: {min, max, step, minText, maxText},
	calculationValue,
	setCalculationValue,
}: TCalculationItemProps) {
	const onChange = (newValue: number | null) => {
		if (newValue == null) return;
		const newCalculationValue = new Map(calculationValue);
		newCalculationValue.set(name, newValue);
		setCalculationValue(newCalculationValue);
	};

	const formatter = (value?: number) => {
		return formatCurrency(value, true, true);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.topSection}>
				<span>{title}</span>
				<InputNumber
					min={min}
					max={max}
					step={step}
					formatter={(value) => `${value}`.replace(NUMBER_FORMAT, ".")}
					parser={(value) => Number(value!.replace(/\$\s?|(,*)/g, ""))}
					value={calculationValue.get(name)}
					onChange={onChange}
				/>
			</div>

			<Slider
				min={min}
				max={max}
				step={step}
				marks={{[min]: minText, [max]: maxText}}
				tooltip={{formatter}}
				onChange={onChange}
				value={
					typeof calculationValue.get(name) === "number"
						? calculationValue.get(name)
						: 0
				}
				className={styles.slider}
			/>
		</div>
	);
}
