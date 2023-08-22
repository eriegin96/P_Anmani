import {StaticImageData} from "next/image";
import {TProductTagValue, TProductTypeValue} from "./product.type";

export type TCategory = {
	id: string;
	tag: TProductTagValue;
	type?: TProductTypeValue;
	title: string;
	location: {name: string; value: string}[];
	href: string;
	icon: StaticImageData;
};
