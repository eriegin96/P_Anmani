export type TUser = {
	email: string;
	name: string;
	role: string;
	id: string;
};

export type TUserBooking = {
	userId: string;
	date: string;
	place: string;
	phoneNumber: string;
};

export type TUserCart = {
	id: string;
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
