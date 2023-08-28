import {NUMBER_FORMAT} from "@/constants/common";

export const formatCurrency = (
	price: number | undefined,
	noUnit: boolean = false,
	toFixed: boolean = false
) => {
	if (!price) return noUnit ? "0" : `0 VNĐ`;

	const result = price.toString().replace(NUMBER_FORMAT, ".");

	// const result =
	// 	// Nine Zeroes for Billions
	// 	Math.abs(price) >= 1.0e9
	// 		? (price / 1.0e9).toFixed(toFixed ? 2 : 0) + " tỷ"
	// 		: // Six Zeroes for Millions
	// 		Math.abs(price) >= 1.0e6
	// 		? (price / 1.0e6).toFixed(toFixed ? 2 : 0) + " triệu"
	// 		: // Three Zeroes for Thousands
	// 		Math.abs(price) >= 1.0e3
	// 		? (price / 1.0e3).toFixed(toFixed ? 2 : 0) + " nghìn"
	// 		: price;

	return noUnit ? `${result}` : `${result} VNĐ`;
};
