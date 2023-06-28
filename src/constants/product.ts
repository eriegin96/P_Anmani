export const PRODUCT_STATUS = {
	SOLD: "Đã bán",
	SAVED: "Đang quan tâm",
	IN_STOCK: "Còn hàng",
	BOOKED: "Hàng đặt",
} as const;

export const PRODUCT_SAVE_VALUE = {
	LATER: "later",
	BUY: "buy",
	RENT: "rent",
} as const;

export const PRODUCT_TYPE = {
	SINGLE_VILLA: "Dinh thự & Biệt thự đơn lập",
	DOUBLE_VILLA: "Dinh thự & Biệt thự song lập",
	SHOPHOUSE: "Shophouse nhà phố thương mại",
	APARTMENT: "Căn hộ",
} as const;

export const PRODUCT_ANCHOR = {
	MAIN: "main",
	VOUCHER: "voucher",
	FACILITIES: "facilities",
	LOCATION: "location",
	POLICY: "policy",
	DESCRIPTION: "description",
} as const;

export const PRODUCT_FACILITY = {
	LAND_AREA: "landArea",
	FLOOR_AREA: "floorArea",
	FLOOR: "floor",
	BEDROOM: "bedroom",
	BATHROOM: "bathroom",
	OTHER: "other",
} as const;

export const PRODUCT_LOCATION = {
	NEARBY: "nearby",
	POPULAR: "popular",
} as const;

export const PRODUCT_DESCRIPTION = {
	PROS: "pros",
	CONS: "cons",
} as const;
