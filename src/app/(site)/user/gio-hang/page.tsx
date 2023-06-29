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

const CheckboxGroup = Checkbox.Group;

export type TIem = TCartItem & {checked: boolean | "indeterminate"};

export default function Page() {
	const {cart} = useCartContext();
	const cartList = cart.map((item) => ({
		...item,
		label: <CartItem item={item} />,
	}));
	const checkedListDefault = cart.map((item) => item.value);

	const [checkedList, setCheckedList] =
		useState<CheckboxValueType[]>(checkedListDefault);
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(false);

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
						checked={checkAll}>
						Chọn tất cả
					</Checkbox>
				</div>
			</div>
		</div>
	);
}
