export type TVoucher = {
	id: string;
	key: string;
	productId: string;
	condition: string;
	discountOption: "amount" | "percent";
	discount: {
		amount?: number;
		percent?: number;
	};
	expiredDate: string;
};

export type TVoucherForm = Omit<TVoucher, "id" | "key">;
