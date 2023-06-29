"use client";

import {TCartItem} from "@/types/user.type";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

type TCartContextDefault = {
	cart?: TCartItem[];
	setCart?: Dispatch<SetStateAction<TCartItem[]>>;
};

type TCartProviderProps = {
	children: ReactNode;
};

const mockData: TCartItem[] = [
	{id: "1", productId: "1", quantity: 1, voucherAdded: ["1", "2"]},
	{id: "2", productId: "2", quantity: 2, voucherAdded: ["3"]},
];

export const CartContext = createContext<TCartContextDefault>({});

export default function CartProvider({children}: TCartProviderProps) {
	const [cart, setCart] = useState<TCartItem[]>(mockData);

	const value = {
		cart,
		setCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
