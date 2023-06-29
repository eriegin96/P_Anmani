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
} from "../assets";
import {PRODUCT_TYPE} from "@/constants/product";
import {TVoucher} from "@/types/voucher.type";

export const voucherList: TVoucher[] = [
	{
		id: "1",
		discount: {amount: 300_000_000},
		productId: "1",
		condition: "",
		expiredDate: "31/12/2023",
	},
	{
		id: "2",
		discount: {percent: 7.5},
		productId: "2",
		condition: "không vay",
		expiredDate: "31/12/2023",
	},
	{
		id: "3",
		discount: {percent: 1.5},
		productId: "3",
		condition: "ký HĐMB sớm",
		expiredDate: "31/12/2023",
	},
	{
		id: "4",
		discount: {percent: 15},
		productId: "4",
		condition: "thanh toán sớm 95% trong vòng 3 tháng",
		expiredDate: "31/12/2023",
	},
	{
		id: "5",
		discount: {percent: 1},
		productId: "5",
		condition: "mua 2 căn trở lên",
		expiredDate: "31/12/2023",
	},
	{
		id: "6",
		discount: {percent: 9},
		productId: "1",
		condition: "trên số tiền và số ngày thanh toán trước hạn của từng đợt",
		expiredDate: "31/12/2023",
	},
];

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

export const productInformation = {
	landArea: "Diện tích đất 150m2",
	floorArea: "Diện tích sàn 8x12m",
	floor: "5 tầng",
	bedroom: "4 phòng ngủ - 2 hồ bơi",
	bathroom: "4 phòng tắm",
	other: "Đơn giá",
};

export const productPolicy = {
	main: `  - Bàn Giao đầy đủ nội thất cao cấp
  - Nội thất tùy biến tôn vinh chủ nhân với các module đa dạng: thư phòng, nhà hát tại gia, home spa & gym, wine & cigar lounge
  - Chủ nhân được sử dụng 30 đêm nghỉ/năm trong vòng 10 năm khi tham gia CTCT
  - Chủ nhân có thể mua ở và không tham gia CTCT
  - Dinh thự được quản lý theo tiêu chuẩn	6 sao của Gran Meliá đầu tiên tại Châu Á
  - Tặng 2 thẻ Melia Platinum 
  - Miễn phí dịch vụ quản lý vận hành 10 năm đối với Khách hàng mua ở
  - 10 vé xem Show the Đó/năm
  - 10 vé lặn ngắm san hô/năm
  - 1 bữa tiệc tại gia cho 6 người/năm
  - Spa Thổ Nhĩ Kì 2 người/năm
  - 1 chuyến du thuyền cho 6-10 người/năm
  - Dịch vụ đưa đón bằng xe riêng cùng quản gia riêng`,
	loan: `  - Thanh toán giãn 30% đến khi nhận nhà Quý I/2024
  - Lãi suất 0% kể từ ngày giải ngân đầu tiên đến 31/12/2024 cho khoản vay 65%
  - Ân hạn nợ gốc lên tới 36 tháng
  - Thời hạn vay lên tới 30 năm 
  - Miễn phí trả nợ trước hạn trong thời gian hỗ trợ lãi suất`,
	equity: `  - Chia 10 lần thanh toán: mỗi lần là 10% cách nhau 3 tháng
  - Ký HĐMB: sau 2 tháng kể từ ngày đặt cọc
  - Thanh toán đủ 45% là nhận nhà 15/2/2024
  - Theo thông báo nhận sổ hồng thanh toán 5% 
	`,
};

export const productDescription = {
	pros: `  - Giá cho thuê cao nhất : 160 triệu/đêm
  - Lợi nhuận khách hàng nhận dự kiến 714 triệu/tháng - tỷ suất sinh lời 3,5%/năm
  - Được thiết kế riêng bởi nhà thiết kế Roberto Cavalli 82 tuổi và gần 50 năm kinh nghiệm từ giường ngủ, thảm, sofa, bàn ăn, giấy dán tường, các loại bát đĩa, lọ hoa, đèn bàn đều theo trường phái Avant Garde, ký phiên bản độc quyền 2 căn duy nhất trên toàn thế giới.
  - Đã có sổ đất riêng ra full diện tích đất
  - Đơn giá thấp bằng 1/3 giá đường Trần Phú Nha Trang
  - Vị trí mặt biển duy nhất còn lại của Vịnh Nha Trang, được sở du lich đánh giá là trung tâm hàng đầu của Nha Trang và khách du lịch quốc tế khi có 4 thương hiệu hàng đầu Gran Meliá, Melia, Newworld, Accor
	`,
	cons: ``,
};

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
		policy: productPolicy,
		description: productDescription,
		view: 110,
		information: productInformation,
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
		policy: productPolicy,
		description: productDescription,
		view: 12,
		information: productInformation,
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
		policy: productPolicy,
		description: productDescription,
		view: 45,
		information: productInformation,
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
		policy: productPolicy,
		description: productDescription,
		view: 110,
		information: productInformation,
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
		policy: productPolicy,
		description: productDescription,
		view: 110,
		information: productInformation,
		name: "Mã căn 2412",
		thumbnail:
			"https://ucf2d35e2ac9dbaf6d74c1455039.previews.dropboxusercontent.com/p/thumb/AB9pCsgIG7cyN2cvUhqzOeMb1pXJDlzTr3tTuDJC8nWo3oX-lh2n2IwS2Y78XyrwBKZiC5Yu0-6ZhZIMHquQBOoJW9pl9EM-xTPT8gHHZ5O3R8FhCL4n89uPuPLe_rjCqTg_Ybh1wjtfzAMSUOUkfY3f_L7fytXTUM8slEjIhyjuM3e27TmmKJ9D5O8BYkISo4ratRZDnA4ZjCv_7qwW0w24YRUpH6zMxN_HRARmE12BmLZ2VvBZfKLBYeVIuvUCD_01yhYk9oTvto6_RJD_ltzgo_fQdrcPiah2Hb8jWzKJYyUSB9O7_IrjeKm07-VbDwpEN3GPVGE_r613FtOjdZ2I0UwPseTzC5ODrQk2Ydax1qA9oKlApxeui1RYIOKla0raEne05aqy7do5JBWRtVj4rwXFlmm_QLPT4TOV8pGbFAYdMnSnot_n1Ifln2juqnYky24-GMeMUc20ZiR89NZ3GSVoEcyLtwWXK-NuKFTvqA/p.jpeg",
		logo: ImageLogoSG,
		price: "13.5 tỷ VNĐ",
		salePrice: "13 tỷ VNĐ",
		status: "Hàng đặt",
	},
];

export const imagePreviews = [
	{id: "1", src: "https://picsum.photos/id/25/1600/900"},
	{id: "2", src: "https://picsum.photos/id/26/1600/900"},
	{id: "3", src: "https://picsum.photos/id/27/1600/900"},
	{id: "4", src: "https://picsum.photos/id/29/1600/900"},
	{id: "5", src: "https://picsum.photos/id/30/1600/900"},
	{id: "6", src: "https://picsum.photos/id/31/1600/900"},
	{id: "7", src: "https://picsum.photos/id/32/1600/900"},
];
