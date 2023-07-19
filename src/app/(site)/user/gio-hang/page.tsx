"use client";

import {useCartContext} from "@/providers/CartProvider";
import {useState} from "react";
import CartItem from "./_components/CartItem";
import styles from "./gioHang.module.scss";
import clsx from "clsx";
import {TCartItem} from "@/types/user.type";
import {Checkbox, Divider} from "antd";
import type {CheckboxChangeEvent} from "antd/es/checkbox";
import type {CheckboxValueType} from "antd/es/checkbox/Group";
import {formatCurrency} from "@/utils/formatCurrency";
import Link from "next/link";
import {ROUTE} from "@/constants/route";

const CheckboxGroup = Checkbox.Group;

export type TIem = TCartItem & {checked: boolean | "indeterminate"};

export default function Page() {
	const {cart, checkedListDefault, checkedList, setCheckedList, totalPrice} =
		useCartContext();
	const cartList = cart.map((item) => ({
		...item,
		label: <CartItem item={item} />,
	}));
	const [indeterminate, setIndeterminate] = useState(
		!!checkedList.length && checkedList.length < checkedListDefault.length
	);
	const [checkAll, setCheckAll] = useState(
		checkedList.length === checkedListDefault.length
	);

	const onChange = (list: CheckboxValueType[]) => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < checkedListDefault.length);
		setCheckAll(list.length === checkedListDefault.length);
	};

	const onCheckAllChange = (e: CheckboxChangeEvent) => {
		setCheckedList(e.target.checked ? checkedListDefault : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Giỏ hàng ({cart?.length})</h3>

			<CheckboxGroup
				options={cartList}
				value={checkedList}
				onChange={onChange}
				className={clsx(styles.layout, styles.checkboxGroup)}
			/>

			<Divider />

			<div className={styles.layout}>
				<div className={styles.cartAction}>
					<Checkbox
						indeterminate={indeterminate}
						onChange={onCheckAllChange}
						checked={checkAll}
						className={styles.checkboxAll}
					>
						Chọn tất cả
					</Checkbox>
					<div>
						<span className={styles.totalPrice}>
							{formatCurrency(totalPrice)}
						</span>
						<Link href={ROUTE.CART_SUMMARY} className={styles.btn}>
							Tính nháp sau khi chiết khấu
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
