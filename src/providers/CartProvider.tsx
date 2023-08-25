"use client";

import {useDeleteCart, useUpdateCart, useGetCartByUser} from "@/hooks/api/cart";
import {TResponseCart} from "@/types/user.type";
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
	cart: TResponseCart[];
	checkedListDefault: CheckboxValueType[];
	checkedList: CheckboxValueType[];
	setCheckedList: Dispatch<SetStateAction<CheckboxValueType[]>>;
	totalPrice: number;
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

	const value = {
		cart: cart ?? [],
		checkedListDefault,
		checkedList,
		setCheckedList,
		totalPrice,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
