export type TProduct = {
	href: string;
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
};
