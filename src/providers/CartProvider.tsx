"use client";

import {productList} from "@/mock/data";
import {TCartItem} from "@/types/user.type";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type TCartContextDefault = {
	cart: TCartItem[];
	setCart: Dispatch<SetStateAction<TCartItem[]>>;
	checkedListDefault: CheckboxValueType[];
	checkedList: CheckboxValueType[];
	setCheckedList: Dispatch<SetStateAction<CheckboxValueType[]>>;
	totalPrice: number;
	setTotalPrice: Dispatch<SetStateAction<number>>;
};

type TCartProviderProps = {
	children: ReactNode;
};

const mockData: TCartItem[] = [
	{id: "1", productId: "1", quantity: 1, voucherAdded: ["1", "2"], value: "1"},
	{id: "2", productId: "2", quantity: 2, voucherAdded: ["3"], value: "2"},
];

export const CartContext = createContext<TCartContextDefault>({
	cart: [],
	setCart: () => {},
	checkedListDefault: [],
	checkedList: [],
	setCheckedList: () => {},
	totalPrice: 0,
	setTotalPrice: () => {},
});

export default function CartProvider({children}: TCartProviderProps) {
	const [cart, setCart] = useState<TCartItem[]>(mockData);
	const checkedListDefault = cart.map((item) => item.value);
	const [checkedList, setCheckedList] =
		useState<CheckboxValueType[]>(checkedListDefault);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setTotalPrice(
			cart.reduce((prev, current) => {
				return (
					prev +
					(productList.find(() => checkedList.includes(current.productId))
						?.originalPrice || 0)
				);
			}, 0)
		);
	}, [cart, checkedList]);

	const value = {
		cart,
		setCart,
		checkedListDefault,
		checkedList,
		setCheckedList,
		totalPrice,
		setTotalPrice,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
