export const REPORT = {
	"market-hcm": {
		value: "market-hcm",
		label: "Thị trường BĐS Hồ Chí Minh",
	},
	"market-nhatrang": {
		value: "market-nhatrang",
		label: "Thị trường BĐS Nha Trang",
	},
	"market-phuquoc": {
		value: "market-phuquoc",
		label: "Thị trường BĐS Phú Quốc",
	},
	"market-danang": {
		value: "market-danang",
		label: "Thị trường BĐS Đà Nẵng",
	},
	"price-hcm": {
		value: "price-hcm",
		label: "Giá BĐS Hồ Chí Minh",
	},
	"price-nhatrang": {
		value: "price-nhatrang",
		label: "Giá BĐS Nha Trang",
	},
	"price-phuquoc": {
		value: "price-phuquoc",
		label: "Giá BĐS Phú Quốc",
	},
	"price-danang": {
		value: "price-danang",
		label: "Giá BĐS Đà Nẵng",
	},
} as const;

export type TReportValue = keyof typeof REPORT;
