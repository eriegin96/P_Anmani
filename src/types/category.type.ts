import {StaticImageData} from "next/image";
import {TProductTypeValue} from "./product.type";
import {QUERY_PARAMS} from "@/constants/route";

export type TCategory = {
	id: string;
	type: TProductTypeValue | typeof QUERY_PARAMS.TAG.TRANSFER;
	title: string;
	location: {name: string; value: string}[];
	href: string;
	icon: StaticImageData;
};
