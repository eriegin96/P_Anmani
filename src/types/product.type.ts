import {PRODUCT_ANCHOR, PRODUCT_SAVE_VALUE} from "@/constants/product";
import {QUERY_PARAMS} from "@/constants/route";

export type TProductStatusKey = keyof typeof QUERY_PARAMS.STATUS;
export type TProductStatusValue =
	(typeof QUERY_PARAMS.STATUS)[TProductStatusKey];
export type TProductSaveKey = keyof typeof PRODUCT_SAVE_VALUE;
export type TProductSaveValue = (typeof PRODUCT_SAVE_VALUE)[TProductSaveKey];
export type TProductTypeKey = keyof typeof QUERY_PARAMS.TYPE;
export type TProductTypeValue = (typeof QUERY_PARAMS.TYPE)[TProductTypeKey];
export type TProductAnchorKey = keyof typeof PRODUCT_ANCHOR;
export type TProductAnchorValue = (typeof PRODUCT_ANCHOR)[TProductAnchorKey];
export type TProductTagKey = keyof typeof QUERY_PARAMS.TAG;
export type TProductTagValue = (typeof QUERY_PARAMS.TAG)[TProductTagKey];

export type TProductPlace = {
	name: string;
	distance: string;
};

export type TSlotId = "1" | "2" | "3";

export type TProduct = {
	id: string;
	key: string;
	type: TProductTypeValue;
	tag: TProductTagValue;
	investor: {name: string; logo: string};
	name: string;
	price: number;
	originalPrice: number;
	image: {
		thumbnail: string;
		main: string[];
		reality: string[];
		area: string[];
	};
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
		detail: string;
		main: string;
		sub: string;
		nearby: TProductPlace[];
		popular: TProductPlace[];
		lat: number;
		lng: number;
	};
	view: number;
	thumbnail: string;
	logo: any;
	status: TProductStatusValue;
};

export type TProductForm = Omit<TProduct, "id" | "key">;
