import {
	PRODUCT_ANCHOR,
	PRODUCT_SAVE_VALUE,
	PRODUCT_STATUS,
	PRODUCT_TYPE,
} from "@/constants/product";

export type TProductStatusKey = keyof typeof PRODUCT_STATUS;
export type TProductStatusValue = (typeof PRODUCT_STATUS)[TProductStatusKey];
export type TProductSaveKey = keyof typeof PRODUCT_SAVE_VALUE;
export type TProductSaveValue = (typeof PRODUCT_SAVE_VALUE)[TProductSaveKey];
export type TProductTypeKey = keyof typeof PRODUCT_TYPE;
export type TProductTypeValue = (typeof PRODUCT_TYPE)[TProductTypeKey];
export type TProductAnchorKey = keyof typeof PRODUCT_ANCHOR;
export type TProductAnchorValue = (typeof PRODUCT_ANCHOR)[TProductAnchorKey];

export type TProductPlace = {
	name: string;
	distance: string;
};

export type TProduct = {
	id: string;
	type: TProductTypeValue;
	name: string;
	price?: string;
	salePrice?: string;
	information: {
		landArea: string;
		floor: string;
		bedroom: string;
		bathroom: string;
		floorArea: string;
		other: string;
	};
	policy: {
		main: string;
		loan: string;
		equity: string;
	};
	description: {
		pros: string;
		cons: string;
	};
	location: {
		main: string;
		sub: string;
		nearby: TProductPlace[];
		popular: TProductPlace[];
	};
	view: number;
	thumbnail: string;
	logo: any;
	status: TProductStatusValue;
};
