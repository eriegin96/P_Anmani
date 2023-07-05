import {CALCULATION_ITEM} from "@/constants/calculation";
import {formatCurrency} from "@/utils/formatCurrency";

const {HOUSE_VALUE, EQUITY, LOAN_DURATION, LOAN_RATE, RENT_PRICE, SAVE_RATE} =
	CALCULATION_ITEM;

export const calculationBuyList = [
	{
		name: HOUSE_VALUE,
		title: "Giá trị căn nhà",
		defaultSet: {
			min: 800_000_000,
			max: 20_000_000_000,
			step: 100_000_000,
			minText: formatCurrency(800_000_000),
			maxText: formatCurrency(20_000_000_000),
		},
	},
	{
		name: EQUITY,
		title: "Vốn tự có",
		defaultSet: {
			min: 0,
			max: 20_000_000_000,
			step: 100_000_000,
			minText: formatCurrency(0),
			maxText: formatCurrency(20_000_000_000),
		},
	},
	{
		name: LOAN_DURATION,
		title: "Thời gian vay vốn (tháng)",
		defaultSet: {
			min: 12,
			max: 240,
			step: 1,
			minText: "12 tháng",
			maxText: "240 tháng",
		},
	},
	{
		name: LOAN_RATE,
		title: "Lãi suất vay vốn (%/năm)",
		defaultSet: {
			min: 5,
			max: 20,
			step: 0.1,
			minText: "5%",
			maxText: "20%",
		},
	},
];

export const calculationRentList = [
	{
		name: RENT_PRICE,
		title: "Giá thuê nhà/tháng",
		defaultSet: {
			min: 1_000_000,
			max: 100_000_000,
			step: 500_000,
			minText: formatCurrency(1_000_000),
			maxText: formatCurrency(100_000_000),
		},
	},
	{
		name: SAVE_RATE,
		title: "Lãi suất tiết kiệm (%/năm)",
		defaultSet: {
			min: 5,
			max: 20,
			step: 0.1,
			minText: "5%",
			maxText: "20%",
		},
	},
];

export const calculationDefaultValue = new Map([
	[HOUSE_VALUE, 800_000_000],
	[EQUITY, 0],
	[LOAN_DURATION, 12],
	[LOAN_RATE, 5],
	[RENT_PRICE, 1_000_000],
	[SAVE_RATE, 5],
]);
