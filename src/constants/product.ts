export const PRODUCT_STATUS = {
	sold: {value: "sold", label: "Đã bán"},
	saved: {value: "saved", label: "Đang quan tâm"},
	"in-stock": {value: "in-stock", label: "Còn hàng"},
	booked: {value: "booked", label: "Hàng đặt"},
} as const;

export const PRODUCT_SAVE_VALUE = {
	LATER: "later",
	BUY: "buy",
	RENT: "rent",
} as const;

export const PRODUCT_TYPE = {
	single: {value: "single", label: "Dinh thự & Biệt thự đơn lập"},
	double: {value: "double", label: "Dinh thự & Biệt thự song lập"},
	shophouse: {value: "shophouse", label: "Shophouse nhà phố thương mại"},
	apartment: {value: "apartment", label: "Căn hộ"},
} as const;

export const PRODUCT_TAG = {
	investor: {value: "investor", label: "BĐS Giá Chủ đầu tư"},
	transfer: {value: "transfer", label: "BĐS Giá Chuyển nhượng"},
	rent: {value: "rent", label: "Cho thuê"},
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

export const PRODUCT_DETAIL_TITLE = {
	tag: "Hình thức",
	type: "Loại hình",
	investor: "Chủ đầu tư",
	information: {
		landArea: "Diện tích đất",
		floor: "Số tầng",
		bedroom: "Số phòng ngủ",
		bathroom: "Số phòng tắm",
		floorArea: "Diện tích sàn",
		other: "Tiện ích khác",
	},
	policy: {
		main: "Chính sách chung",
		loan: "Chính sách vay",
		equity: "Chính sách vốn",
	},
	description: {
		pros: "Ưu điểm",
		cons: "Nhược điểm",
	},
	location: {
		detail: "Địa chỉ",
		main: "Khu vực",
		nearby: "Địa điểm lân cận",
		popular: "Địa điểm phổ biến",
	},
} as const;

export type TProductTypeValue = keyof typeof PRODUCT_TYPE;
export type TProductTagValue = keyof typeof PRODUCT_TAG;
export type TProductStatusValue = keyof typeof PRODUCT_STATUS;

export type TProductSaveKey = keyof typeof PRODUCT_SAVE_VALUE;
export type TProductSaveValue = (typeof PRODUCT_SAVE_VALUE)[TProductSaveKey];
export type TProductAnchorKey = keyof typeof PRODUCT_ANCHOR;
export type TProductAnchorValue = (typeof PRODUCT_ANCHOR)[TProductAnchorKey];
