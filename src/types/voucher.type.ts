export type TVoucher = {
	id: string;
	productId: string;
	condition: string;
	discountOption: "amount" | "percent";
	discount: {
		amount?: number;
		percent?: number;
	};
	expiredDate: string;
};
