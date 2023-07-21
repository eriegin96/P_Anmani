export type TUser = {
	id: string;
	name: string;
	gender: "male" | "female";
	phoneNumber: string;
	role: string;
	dob: string;
	email: string;
};

export type TUserBooking = {
	userId: string;
	date: string;
	place: string;
	phoneNumber: string;
};

export type TUserCart = {
	id: string;
	key: string;
	bookingInfo: TUserBooking;
	cartList: TCartItem[];
};

export type TCartItem = {
	id: string;
	productId: string;
	quantity: number;
	voucherAdded: string[];
	value: string;
};

export type TUserCartForm = Omit<TUserCart, "id" | "key">;
export type TCartItemForm = Omit<TCartItem, "id" | "key">;
