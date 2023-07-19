"use client";

import {useGetTempCarts} from "@/hooks/api/cart/query/useGetTempCarts";
import {productList, userCartList} from "@/mock/data";
import {TCartItem} from "@/types/user.type";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

type TCartContextDefault = {
	cart: TCartItem[];
	setCart: Dispatch<SetStateAction<TCartItem[]>>;
	checkedListDefault: CheckboxValueType[];
	checkedList: CheckboxValueType[];
	setCheckedList: Dispatch<SetStateAction<CheckboxValueType[]>>;
	totalPrice: number;
	addToCart: () => void;
	removeFromCart: () => void;
};

type TCartProviderProps = {
	children: ReactNode;
};

const mockData: TCartItem[] = userCartList[0].cartList;

export const CartContext = createContext<TCartContextDefault>({
	cart: [],
	setCart: () => {},
	checkedListDefault: [],
	checkedList: [],
	setCheckedList: () => {},
	totalPrice: 0,
	addToCart: () => {},
	removeFromCart: () => {},
});

export default function CartProvider({children}: TCartProviderProps) {
	const {data} = useGetTempCarts();
	const [cart, setCart] = useState<TCartItem[]>(mockData);
	const checkedListDefault = cart.map((item) => item.value);
	const [checkedList, setCheckedList] =
		useState<CheckboxValueType[]>(checkedListDefault);

	const totalPrice = useMemo(
		() =>
			cart.reduce((prev, current) => {
				return (
					prev +
					(productList.find(() => checkedList.includes(current.productId))
						?.price || 0)
				);
			}, 0),
		[cart, checkedList]
	);

	const addToCart = () => {};
	const removeFromCart = () => {};

	const value = {
		cart,
		setCart,
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
