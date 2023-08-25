export const LOCATION: {[K in TLocationValue]: TLocationObject} = {
	"phu-quoc": {
		value: "phu-quoc",
		label: "Phú Quốc",
	},
	"nha-trang": {
		value: "nha-trang",
		label: "Nha Trang",
	},
	"da-nang": {
		value: "da-nang",
		label: "Đà Nẵng",
	},
	hcm: {
		value: "hcm",
		label: "TP.Hồ Chí Minh",
	},
};

export type TLocationValue = "phu-quoc" | "nha-trang" | "da-nang" | "hcm";
export type TLocationObject = {value: keyof typeof LOCATION; label: string};
