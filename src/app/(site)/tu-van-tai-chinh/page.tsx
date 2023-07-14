"use client";

import {ROUTE} from "@/constants/route";
import {IconChevronLeft} from "@tabler/icons-react";
import Link from "next/link";
import styles from "./tuVanTaiChinh.module.scss";
import {
	calculationBuyList,
	calculationDefaultValue,
	calculationRentList,
} from "./static";
import {ComparisonTable, CalculationItem} from "./_components";
import {useMemo, useState} from "react";
import {CALCULATION_ITEM, TABLE_ROW_KEY} from "@/constants/calculation";
import {formatCurrency} from "@/utils/formatCurrency";

const {HOUSE_VALUE, EQUITY, LOAN_DURATION, LOAN_RATE, RENT_PRICE, SAVE_RATE} =
	CALCULATION_ITEM;
const {
	MONTHLY_COST,
	TIME,
	EQUITY: EQUITY_TABLE,
	PROFIT_FROM_EQUITY,
	LOAN,
	INTEREST_COST,
	RENT_COST,
	DIFFERENCE,
	RETURN,
} = TABLE_ROW_KEY;

export default function Page() {
	const [calculationValue, setCalculationValue] = useState(
		calculationDefaultValue
	);

	const tableData = useMemo(() => {
		const houseValue = calculationValue.get(HOUSE_VALUE)!;
		const equity = calculationValue.get(EQUITY)!;
		const loanDuration = calculationValue.get(LOAN_DURATION)!;
		const loanRate = calculationValue.get(LOAN_RATE)!;
		const rentPrice = calculationValue.get(RENT_PRICE)!;
		const saveRate = calculationValue.get(SAVE_RATE)!;
		const loanAmount = houseValue - equity;
		const monthlyCost = Math.round(
			(loanAmount * loanRate * 10) / 100 / loanDuration
		);
		const profitFromEquity = ((equity * saveRate) / 100 / 12) * loanDuration;
		const interestCost = monthlyCost * loanDuration - loanAmount;
		const rentCost = rentPrice * loanDuration;
		const difference = (monthlyCost - rentPrice) * loanDuration;
		const returnValue = equity + profitFromEquity + difference;

		return [
			{
				key: MONTHLY_COST,
				name: "Chi phí trả hàng tháng",
				buy: `${formatCurrency(monthlyCost, true, true)}`,
				rent: `-${formatCurrency(rentPrice, true)}`,
			},
			{
				key: TIME,
				name: "Thời gian",
				buy: `${loanDuration} tháng`,
				rent: `${loanDuration} tháng`,
			},
			{
				key: EQUITY_TABLE,
				name: "Giá trị Vốn tự có",
				buy: `-${formatCurrency(houseValue, true)}`,
				rent: `${formatCurrency(equity, true, true)}`,
			},
			{
				key: PROFIT_FROM_EQUITY,
				name: "Giá trị Lợi nhuận từ Vốn tự có",
				sup: "(1)",
				buy: "0",
				rent: `${formatCurrency(profitFromEquity, true, true)}`,
			},
			{
				key: LOAN,
				name: "Giá trị Vốn vay",
				buy: `-${formatCurrency(loanAmount, true, true)}`,
				rent: "0",
			},
			{
				key: INTEREST_COST,
				name: "Chi phí lãi vay",
				sup: "(2)",
				buy: `${formatCurrency(interestCost, true)}`,
				rent: "0",
			},
			{
				key: RENT_COST,
				name: "Chi phí thuê nhà",
				sup: "(3)",
				buy: "0",
				rent: `${formatCurrency(rentCost, true)}`,
			},
			{
				key: DIFFERENCE,
				name: `Chênh lệch Mua - Thuê sau ${loanDuration} tháng`,
				sup: "(4)",
				buy: "0",
				rent: `${formatCurrency(difference, true, true)}`,
			},
			{
				key: RETURN,
				name: "Giá trị nhận về",
				buy: "1 căn nhà",
				rent: `${formatCurrency(returnValue, true, true)}`,
			},
		];
	}, [calculationValue]);

	return (
		<div>
			<div className={styles.titleWrapper}>
				<Link href={ROUTE.HOME}>
					<IconChevronLeft />
				</Link>
				<h3 className={styles.layoutTitle}>Tư vấn tài chính</h3>
			</div>

			<div className={styles.contentWrapper}>
				<p>
					Bạn phân vân giữa việc nên mua hay thuê nhà. Vui lòng nhập thông tin,
					hệ thống sẽ gợi ý phương án phù hợp
				</p>

				<h5 className={styles.sectionTitle}>Thông tin mua nhà</h5>
				<div className={styles.inputWrapper}>
					{calculationBuyList.map(({name, title, defaultSet}) => (
						<CalculationItem
							key={name}
							name={name}
							title={title}
							defaultSet={defaultSet}
							calculationValue={calculationValue}
							setCalculationValue={setCalculationValue}
						/>
					))}
				</div>

				<h5 className={styles.sectionTitle}>Thông tin thuê nhà</h5>
				<div className={styles.inputWrapper}>
					{calculationRentList.map(({name, title, defaultSet}) => (
						<CalculationItem
							key={name}
							name={name}
							title={title}
							defaultSet={defaultSet}
							calculationValue={calculationValue}
							setCalculationValue={setCalculationValue}
						/>
					))}
				</div>

				<ComparisonTable data={tableData} />
			</div>
		</div>
	);
}
