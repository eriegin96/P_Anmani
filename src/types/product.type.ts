import {TInvestorValue} from "@/constants/investor";
import {TLocationValue} from "@/constants/location";
import {
	TProductStatusValue,
	TProductTagValue,
	TProductTypeValue,
} from "@/constants/product";

export type TProductPlace = {
	name: string;
	distance: string;
};

export type TSlotId = "1" | "2" | "3";

export type TImage = {
	thumbnail: string;
	main: string[];
	reality: string[];
	area: string[];
};

export type TInformation = {
	landArea: string;
	floor: string;
	bedroom: string;
	bathroom: string;
	floorArea: string;
	other: string;
};

export type TPolicy = {
	main: string;
	loan: string;
	equity: string;
};

export type TDescription = {
	pros: string;
	cons: string;
	juridice: string;
	delivery: {
		date: string;
		info: string;
	};
};

export type TLocation = {
	detail: string;
	main: TLocationValue;
	sub: string;
	nearby: TProductPlace[];
	popular: TProductPlace[];
	lat: number;
	lng: number;
};

export type TProduct = {
	key: string;
	type: TProductTypeValue;
	tag: TProductTagValue;
	investor: {name: TInvestorValue; logo: string};
	name: string;
	price: number;
	originalPrice: number;
	image: TImage;
	information: TInformation;
	policy: TPolicy;
	description: TDescription;
	location: TLocation;
	view: number;
	status: TProductStatusValue;
};

export type TProductForm = Omit<TProduct, "key">;
