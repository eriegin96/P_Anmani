import {TInvestorValue} from "@/constants/investor";
import {TLocationValue} from "@/constants/location";
import {
	TProductStatusValue,
	TProductTagValue,
	TProductTypeValue,
} from "@/constants/product";
import {TProjectValue} from "@/constants/project";
import {TVoucher} from "./voucher.type";

export type TProductPlace = {
	name: string;
	distance: string;
};

export type TSlotId = "1" | "2" | "3";

export type TInvestor = {name: TInvestorValue; logo: string};

export type TImageMain = {
	exterior: string[];
	livingroom: string[];
	bedroom: string[];
	bathroom: string[];
	lobby: string[];
	restaurant: string[];
	pool: string[];
	meetingroom: string[];
	entertainment: string[];
	service: string[];
};

export type TImage = {
	thumbnail: string;
	main: TImageMain;
	reality: string[];
	area: string[];
	investor: string[];
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
	investor: TInvestor;
	projectName: TProjectValue;
	name: string;
	price: number;
	originalPrice: number;
	discountStartDate: string;
	discountEndDate: string;
	star: number;
	image: TImage;
	information: TInformation;
	utility: string[];
	policy: TPolicy;
	description: TDescription;
	location: TLocation;
	view: number;
	status: TProductStatusValue;
	vouchers: TVoucher[];
	suggestions: TProduct[];
};

export type TProductForm = Omit<TProduct, "key">;
export type TImageMainKey = keyof TImageMain;
