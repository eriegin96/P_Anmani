export type TUser = {
	email: string;
	name: string;
	role: string;
};

export type TCartItem = {
	id: string;
	productId: string;
	quantity: number;
	voucherAdded: string[];
};
