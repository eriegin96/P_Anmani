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

export const PRODUCT_TAG = {
	INVESTOR: "BĐS Giá Chủ đầu tư",
	TRANSFER: "BĐS Giá Chuyển nhượng",
	RENT: "Cho thuê",
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
