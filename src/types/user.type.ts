import {TCartStatusValue} from "@/constants/cart";
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

export type TCartProduct = {
	productId: string;
	voucherIds?: string[];
	status: TCartStatusValue;
	date?: string;
	meetingLocation?: string;
	phoneNumber?: string;
	price: number;
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
