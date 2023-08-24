"use client";

import {useDeleteCart, useUpdateCart, useGetCartByUser} from "@/hooks/api/cart";
import {TRequestCart, TResponseCart} from "@/types/user.type";
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
	addToCart: (item: TRequestCart) => void;
	removeFromCart: (productId: string) => void;
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
	addToCart: () => {},
	removeFromCart: () => {},
});

export default function CartProvider({children}: TCartProviderProps) {
	const {data: cart} = useGetCartByUser();
	const {trigger: addCartItem} = useUpdateCart();
	const {trigger: deleteCartItem} = useDeleteCart();
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

	const addToCart = (item: TRequestCart) => {
		// addCartItem(item);
	};

	const removeFromCart = (productId: string) => {
		// deleteCartItem(productId);
	};

	const value = {
		cart: cart ?? [],
		checkedListDefault,
		checkedList,
		setCheckedList,
		totalPrice,
		addToCart,
		removeFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
