export const TProductStatus = {
	SOLD: "Đã bán",
	SAVED: "Đang quan tâm",
	IN_STOCK: "Còn hàng",
	BOOKED: "Hàng đặt",
} as const;

export type TProductStatusKey = keyof typeof TProductStatus;
export type TProductStatusValue = (typeof TProductStatus)[TProductStatusKey];

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
	status: TProductStatusValue;
};
