import {StaticImageData} from "next/image";

export type TCategory = {
	id: string;
	title: string;
	location: string[];
	href: string;
	icon: StaticImageData;
};
