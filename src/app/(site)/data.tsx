import {TProduct} from "@/types/product.type";
import {
	IconCanHo,
	IconDonLap,
	IconFacebook,
	IconGmail,
	IconShopHouse,
	IconSongLap,
	IconTiktok,
	IconTrendingUp,
	IconYoutube,
	ImageLogoSG,
} from "../../assets";
import {PRODUCT_TYPE} from "@/constants/product";

export const categoryList = [
	{
		id: "1",
		value: 1,
		title: "Dinh thự & Biệt thự đơn lập",
		location: ["Hồ Chí Minh", "Nha Trang", "Phú Quốc", "Đà Nẵng"],
		href: "/",
		icon: IconDonLap,
	},
	{
		id: "2",
		value: 2,
		title: "Dinh thự & Biệt thự song lập",
		location: ["Hồ Chí Minh", "Nha Trang", "Phú Quốc", "Đà Nẵng"],
		href: "/",
		icon: IconSongLap,
	},
	{
		id: "3",
		value: 3,
		title: "Shophouse nhà phố thương mại",
		location: ["Hồ Chí Minh", "Nha Trang", "Phú Quốc", "Đà Nẵng"],
		href: "/",
		icon: IconCanHo,
	},
	{
		id: "4",
		value: 4,
		title: "Căn hộ",
		location: ["Hồ Chí Minh", "Nha Trang", "Phú Quốc", "Đà Nẵng"],
		href: "/",
		icon: IconShopHouse,
	},
	{
		id: "5",
		value: 5,
		title: "BĐS chuyển nhượng giá tốt",
		location: ["Hồ Chí Minh", "Nha Trang", "Phú Quốc", "Đà Nẵng"],
		href: "/",
		icon: IconTrendingUp,
	},
];

export const locationList = [
	{value: "nha-trang", title: "Nha Trang"},
	{value: "phu-quoc", title: "Phú Quốc"},
	{value: "hcm", title: "Hồ Chí Minh"},
	{value: "da-nang", title: "Đà Nẵng"},
];

export const investorList = [
	{
		id: "1",
		value: "KDI Holding",
		title: "KDI Holding",
		src: "https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
	},
	{
		id: "2",
		value: "Sun Property",
		title: "Sun Property",
		src: "https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
	},
];

export const socialNetworks = [
	{icon: IconGmail, href: "mailto:tahualucnhu@gmail.com"},
	{icon: IconTiktok, href: "https://www.tiktok.com/@tahualucnhu"},
	{icon: IconFacebook, href: "https://www.facebook.com/luca.nhu"},
	{icon: IconYoutube, href: "https://bit.ly/3A2k5gQ"},
];

export const carouselList = [
	{
		id: "1",
		src: "https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
	},
	{
		id: "2",
		src: "https://uc0d8c518c736a6b4692a3a53f7c.previews.dropboxusercontent.com/p/thumb/AB-zjgtHkWqpUgT0WfDIAV06kvGnIiqfgFJ8LEO2_2PvsMUCqneWExQg9ui-P_VyAJeKOR52UnQCd8UpSA7jev67F88obUCs4vyeb9n-8zJx0KHUsLBJcY4raWZWALDTQcdKFy4L-4ABCrXdyEGnII1A6f5srhMuX8h0q9S9r058gBTR2id3Hhw4ihT5gwaOJvt3HcE41X7FxpCdNYlLa7s1Hu_JmwH3L066BQ0E7yz2o8i94Rhb-F1XgMFZ7bUK1ibj11C0bt-PkVx_WJPmsXGKtXLDvgZJq29KRAMsMKVwAScPRrIn4EY9hDiKaA9JnangqX1alu10oeZlDk6qZAqgJSXMuSTe2Z1Lrym8Q0tUBmJEbBWU1hGK1wZpar0SPUVDgfRopEpWW1v4F4ADPA5t_WTsIbjQwEQUaaMHl1t4COX_lCG_qFysFMr5kj_g0s5qL6DY1LRngqGPePn9sjEnkZqGF9xhfkDXC2lqDnGr3KJ6VW-k0ttDgZOkd940VSqfyDeCQo5OfRngc52loMA0mBZJfYr_GlVh66wvIqXjixMr9v-0nzv0yIdRGoD6xWQBLt0BHpXnJ4U3KQ5Af6bJD0zwtKZ0rkS61EmysopYUg/p.jpeg",
	},
];

export const saleList: TProduct[] = [
	{
		id: "1",
		type: PRODUCT_TYPE.SINGLE_VILLA,
		location: {
			main: "Nha Trang",
			sub: "Phường Bến Nghé",
			nearby: [
				{name: "Vịnh Nha Trang", distance: "0m"},
				{name: "San hô", distance: "60m"},
				{name: "Núi cô Tiên", distance: "100m"},
				{name: "Bến du thuyền", distance: "500m"},
				{name: "Bãi tắm vega", distance: "500m"},
			],
			popular: [
				{name: "Chợ đêm Trần Phú Nha Trang", distance: "10 phút"},
				{name: "Tháp PoNagar", distance: "8 phút"},
				{name: "Ga Nha Trang", distance: "15 phút"},
				{name: "Cảng Nha Trang", distance: "20 phút"},
			],
		},
		view: 110,
		information: {
			landArea: "Diện tích đất 150m2",
			floorArea: "Diện tích sàn 8x12m",
			floor: "5 tầng",
		},
		name: "Mã căn M110",
		thumbnail:
			"https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
		logo: ImageLogoSG,
		price: "13.5 tỷ VNĐ",
		salePrice: "13 tỷ VNĐ",
		status: "Đã bán",
	},
	{
		id: "2",
		type: PRODUCT_TYPE.DOUBLE_VILLA,
		location: {
			main: "Nha Trang",
			sub: "Phường Bến Nghé",
			nearby: [
				{name: "Vịnh Nha Trang", distance: "0m"},
				{name: "San hô", distance: "60m"},
				{name: "Núi cô Tiên", distance: "100m"},
				{name: "Bến du thuyền", distance: "500m"},
				{name: "Bãi tắm vega", distance: "500m"},
			],
			popular: [
				{name: "Chợ đêm Trần Phú Nha Trang", distance: "10 phút"},
				{name: "Tháp PoNagar", distance: "8 phút"},
				{name: "Ga Nha Trang", distance: "15 phút"},
				{name: "Cảng Nha Trang", distance: "20 phút"},
			],
		},
		view: 12,
		information: {
			landArea: "Diện tích đất 150m2",
			floorArea: "Diện tích sàn 8x12m",
			floor: "5 tầng",
		},
		name: "Mã căn W616",
		thumbnail:
			"https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
		logo: ImageLogoSG,
		price: "13.5 tỷ VNĐ",
		salePrice: "13 tỷ VNĐ",
		status: "Còn hàng",
	},
	{
		id: "3",
		type: PRODUCT_TYPE.SHOPHOUSE,
		location: {
			main: "Nha Trang",
			sub: "Phường Bến Nghé",
			nearby: [
				{name: "Vịnh Nha Trang", distance: "0m"},
				{name: "San hô", distance: "60m"},
				{name: "Núi cô Tiên", distance: "100m"},
				{name: "Bến du thuyền", distance: "500m"},
				{name: "Bãi tắm vega", distance: "500m"},
			],
			popular: [
				{name: "Chợ đêm Trần Phú Nha Trang", distance: "10 phút"},
				{name: "Tháp PoNagar", distance: "8 phút"},
				{name: "Ga Nha Trang", distance: "15 phút"},
				{name: "Cảng Nha Trang", distance: "20 phút"},
			],
		},
		view: 45,
		information: {
			landArea: "Diện tích đất 150m2",
			floorArea: "Diện tích sàn 8x12m",
			floor: "5 tầng",
		},
		name: "Mã căn Sf30",
		thumbnail:
			"https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
		logo: ImageLogoSG,
		price: "13.5 tỷ VNĐ",
		salePrice: "13 tỷ VNĐ",
		status: "Đang quan tâm",
	},
	{
		id: "4",
		type: PRODUCT_TYPE.APARTMENT,
		location: {
			main: "Nha Trang",
			sub: "Phường Bến Nghé",
			nearby: [
				{name: "Vịnh Nha Trang", distance: "0m"},
				{name: "San hô", distance: "60m"},
				{name: "Núi cô Tiên", distance: "100m"},
				{name: "Bến du thuyền", distance: "500m"},
				{name: "Bãi tắm vega", distance: "500m"},
			],
			popular: [
				{name: "Chợ đêm Trần Phú Nha Trang", distance: "10 phút"},
				{name: "Tháp PoNagar", distance: "8 phút"},
				{name: "Ga Nha Trang", distance: "15 phút"},
				{name: "Cảng Nha Trang", distance: "20 phút"},
			],
		},
		view: 110,
		information: {
			landArea: "Diện tích đất 150m2",
			floorArea: "Diện tích sàn 8x12m",
			floor: "5 tầng",
		},
		name: "Mã căn M110",
		thumbnail:
			"https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
		logo: ImageLogoSG,
		price: "13.5 tỷ VNĐ",
		salePrice: "13 tỷ VNĐ",
		status: "Còn hàng",
	},
	{
		id: "5",
		type: PRODUCT_TYPE.SINGLE_VILLA,
		location: {
			main: "Nha Trang",
			sub: "Phường Bến Nghé",
			nearby: [
				{name: "Vịnh Nha Trang", distance: "0m"},
				{name: "San hô", distance: "60m"},
				{name: "Núi cô Tiên", distance: "100m"},
				{name: "Bến du thuyền", distance: "500m"},
				{name: "Bãi tắm vega", distance: "500m"},
			],
			popular: [
				{name: "Chợ đêm Trần Phú Nha Trang", distance: "10 phút"},
				{name: "Tháp PoNagar", distance: "8 phút"},
				{name: "Ga Nha Trang", distance: "15 phút"},
				{name: "Cảng Nha Trang", distance: "20 phút"},
			],
		},
		view: 110,
		information: {
			landArea: "Diện tích đất 150m2",
			floorArea: "Diện tích sàn 8x12m",
			floor: "5 tầng",
		},
		name: "Mã căn 2412",
		thumbnail:
			"https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
		logo: ImageLogoSG,
		price: "13.5 tỷ VNĐ",
		salePrice: "13 tỷ VNĐ",
		status: "Hàng đặt",
	},
];
