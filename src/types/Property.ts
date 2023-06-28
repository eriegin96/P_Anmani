import {Voucher} from "./Voucher";

type PropertyImageLinks = {
	main: string[];
	owner: string[];
	reality: string[];
};

type PropertyInformation = {
	landArea: string;
	propertyArea: string;
	floor: string;
	bedroom: string;
	bathroom: string;
	other: string;
};

type PropertyPlace = {
	name: string;
	distance: string;
	time: string;
};

type PropertyPolicy = {};

export type Property = {
	_id: string;
	_createdAt: Date;
	name: string;
	slug: string;
	address: string;
	price: number;
	mainImage: string;
	imageLinks: PropertyImageLinks;
	information: PropertyInformation;
	facility: string[];
	position: {
		nearby: PropertyPlace;
		popular: PropertyPlace;
	};
	policy: PropertyPolicy;
	vouchers: Voucher[];
};
