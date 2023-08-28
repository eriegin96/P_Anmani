import {TProductTypeValue} from "@/constants/product";

export type TVoucher = {
	key: string;
	productId: string;
	productType: TProductTypeValue;
	condition: string;
	option: "amount" | "percentage";
	amount: number;
	percentage: number;
	expire: string;
};

export type TVoucherForm = Omit<TVoucher, "key">;
