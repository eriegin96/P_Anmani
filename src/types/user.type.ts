import {CART_STATUS} from "@/constants/cart";
import {TProduct} from "./product.type";
import {TVoucher} from "./voucher.type";

export type TUser = {
	key: string;
	name: string;
	gender: "male" | "female";
	phoneNumber: string;
	role: {key: string; name: string};
	dateOfBirth: string;
	email: string;
};

type TCartProducts = {
	productId: string;
	voucherIds?: string[];
	status: TCartStatusValue;
	date?: string;
	meetingLocation?: string;
	phoneNumber?: string;
	price: number;
};

export type TRequestCart = {
	userId?: string;
	products: TCartProducts[];
};

export type TResponseCart = {
	key: string;
	createdAt: string;
	date: string;
	meetingLocation: string;
	phoneNumber: string;
	price: number;
	product: TProduct;
	productId: string;
	status: TCartStatusValue;
	user: TUser;
	userId: string;
	vouchers: TVoucher[];
};

export type TCartStatusKey = keyof typeof CART_STATUS;
export type TCartStatusValue = (typeof CART_STATUS)[TCartStatusKey];
