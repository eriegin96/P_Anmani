export type TVoucher = {
	id: string;
	createdAt?: Date;
	productId: string;
	condition: string;
	discount: {
		amount?: number;
		percent?: number;
	};
	expiredDate: string;
};
