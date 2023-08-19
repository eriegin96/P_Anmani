export type TVoucher = {
	key: string;
	productId: string;
	condition: string;
	option: "amount" | "percentage";
	amount: number;
	percentage: number;
	expiredDate: string;
};

export type TVoucherForm = Omit<TVoucher, "id" | "key">;
