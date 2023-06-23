"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import styles from "./slider.module.scss";
import {NUMBER_FORMAT} from "@/constants/common";

type TSliderProps = {
	min?: number;
	max?: number;
	value: number[];
	handleValueChange?: (value: number[]) => void;
};

export default function Slider({
	min,
	max,
	value,
	handleValueChange,
}: TSliderProps) {
	return (
		<div className={styles.wrapper}>
			<RadixSlider.Root
				min={min}
				max={max}
				value={value}
				className={styles.sliderRoot}
				onValueChange={handleValueChange}>
				<RadixSlider.Track className={styles.sliderTrack}>
					<RadixSlider.Range className={styles.sliderRange} />
				</RadixSlider.Track>
				<RadixSlider.Thumb className={styles.sliderThumb} />
				<RadixSlider.Thumb className={styles.sliderThumb} />
			</RadixSlider.Root>
			<div className={styles.value}>
				<span>{value[0].toString().replace(NUMBER_FORMAT, ".")}</span>-
				<span>{value[1].toString().replace(NUMBER_FORMAT, ".")}</span>
			</div>
		</div>
	);
}
