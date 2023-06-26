import {PRODUCT_SAVE_VALUE, PRODUCT_STATUS} from "@/constants/value";

export type TProductStatusKey = keyof typeof PRODUCT_STATUS;
export type TProductStatusValue = (typeof PRODUCT_STATUS)[TProductStatusKey];
export type TProductSaveKey = keyof typeof PRODUCT_SAVE_VALUE;
export type TProductSaveValue = (typeof PRODUCT_SAVE_VALUE)[TProductSaveKey];

export type TProduct = {
	id: string;
	name?: string;
	price?: string;
	salePrice?: string;
	information: {
		landArea: string;
		floor: string;
		bedroom?: string;
		bathroom?: string;
		floorArea: string;
	};
	location: {
		main: string;
		sub: string;
	};
	view: number;
	thumbnail: string;
	logo: any;
	status: TProductStatusValue;
};
