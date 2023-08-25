import {StaticImageData} from "next/image";
import {TProductTagValue, TProductTypeValue} from "@/constants/product";
import {TLocationObject} from "@/constants/location";

export type TCategory = {
	id: string;
	tag: TProductTagValue;
	type?: TProductTypeValue;
	title: string;
	location: TLocationObject[];
	href: string;
	icon: StaticImageData;
};
