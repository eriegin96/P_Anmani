"use client";

import {useDeleteCart, useUpdateCart, useGetCartByUser} from "@/hooks/api/cart";
import {productList, userCartList} from "@/mock/data";
import {TCartItem, TCartItemForm} from "@/types/user.type";
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
import {useAuthContext} from "./AuthProvider";

type TCartContextDefault = {
	cart: TCartItem[];
	setCart: Dispatch<SetStateAction<TCartItem[]>>;
	checkedListDefault: CheckboxValueType[];
	checkedList: CheckboxValueType[];
	setCheckedList: Dispatch<SetStateAction<CheckboxValueType[]>>;
	totalPrice: number;
	addToCart: (item: TCartItemForm) => void;
	removeFromCart: (productId: string) => void;
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
	const {userInfo} = useAuthContext();
	const {data: cartData} = useGetCartByUser(userInfo);
	const {trigger: addCartItem} = useUpdateCart();
	const {trigger: deleteCartItem} = useDeleteCart();
	const [cart, setCart] = useState<TCartItem[]>(cartData ?? []);
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

	const addToCart = (item: TCartItemForm) => {
		addCartItem(item);
	};

	const removeFromCart = (productId: string) => {
		deleteCartItem(productId);
	};

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
