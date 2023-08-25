"use client";

import {useDeleteCart, useUpdateCart, useGetCartByUser} from "@/hooks/api/cart";
import {TCartResponse} from "@/types/user.type";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useMemo,
	useState,
} from "react";

type TCartContextDefault = {
	cart: TCartResponse[];
	checkedListDefault: CheckboxValueType[];
	checkedList: CheckboxValueType[];
	setCheckedList: Dispatch<SetStateAction<CheckboxValueType[]>>;
	totalPrice: number;
	discountAmount: number;
	selectedProducts: TCartResponse[];
};

type TCartProviderProps = {
	children: ReactNode;
};

export const CartContext = createContext<TCartContextDefault>({
	cart: [],
	checkedListDefault: [],
	checkedList: [],
	setCheckedList: () => {},
	totalPrice: 0,
	discountAmount: 0,
	selectedProducts: [],
});

export default function CartProvider({children}: TCartProviderProps) {
	const {data: cart} = useGetCartByUser();
	const checkedListDefault = cart?.map((item) => item.key) ?? [];
	const [checkedList, setCheckedList] =
		useState<CheckboxValueType[]>(checkedListDefault);

	const totalPrice = useMemo(
		() =>
			cart?.reduce((prev, current) => {
				const checkedPrice = checkedList.includes(current.key)
					? current.product.price
					: 0;
				return prev + checkedPrice;
			}, 0) ?? 0,
		[cart, checkedList]
	);

	const selectedProducts = useMemo(
		() => cart?.filter((p) => checkedList.includes(p.key)) ?? [],
		[cart, checkedList]
	);

	const discountAmount = useMemo(
		() =>
			selectedProducts.reduce((prevAmount, currentProduct) => {
				const totalVoucherDiscount = currentProduct.vouchers.reduce(
					(voucherDiscount, voucher) => {
						const amount =
							voucher?.amount ??
							(currentProduct.price * voucher.percentage) / 100;
						return voucherDiscount + amount;
					},
					0
				);
				return prevAmount + totalVoucherDiscount;
			}, 0),
		[selectedProducts]
	);

	const value = {
		cart: cart ?? [],
		checkedListDefault,
		checkedList,
		setCheckedList,
		selectedProducts,
		totalPrice,
		discountAmount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
