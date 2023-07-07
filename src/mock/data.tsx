import {TProduct} from "@/types/product.type";
import {ImageLogoSG} from "../assets";
import {
	PRODUCT_SAVE_VALUE,
	PRODUCT_STATUS,
	PRODUCT_TYPE,
} from "@/constants/product";
import {TVoucher} from "@/types/voucher.type";
import {NOTIFICATION_TYPE} from "@/constants/notification";

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

export const productList: TProduct[] = [
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
		thumbnail: "https://picsum.photos/id/200/1600/900",
		logo: ImageLogoSG,
		price: 13_500_000_000,
		salePrice: 13_000_000_000,
		status: PRODUCT_STATUS.SOLD,
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
		thumbnail: "https://picsum.photos/id/201/1600/900",
		logo: ImageLogoSG,
		price: 13_500_000_000,
		salePrice: 13_000_000_000,
		status: PRODUCT_STATUS.SAVED,
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
		thumbnail: "https://picsum.photos/id/202/1600/900",
		logo: ImageLogoSG,
		price: 13_500_000_000,
		salePrice: 13_000_000_000,
		status: PRODUCT_STATUS.SAVED,
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
		name: "Mã căn ND2",
		thumbnail: "https://picsum.photos/id/203/1600/900",
		logo: ImageLogoSG,
		price: 13_500_000_000,
		salePrice: 13_000_000_000,
		status: PRODUCT_STATUS.SOLD,
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
		thumbnail: "https://picsum.photos/id/204/1600/900",
		logo: ImageLogoSG,
		price: 13_500_000_000,
		salePrice: 13_000_000_000,
		status: PRODUCT_STATUS.SAVED,
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

export const notificationList = [
	{
		id: "1",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/40/300/300",
		title: "Title 1",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		id: "2",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/41/300/300",
		title: "Title 2",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		id: "3",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/42/300/300",
		title: "Title 3",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		id: "4",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/43/300/300",
		title: "Title 4",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		id: "5",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/44/300/300",
		title: "Title 5",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		id: "6",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/45/300/300",
		title: "Title 6",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		id: "7",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/46/300/300",
		title: "Title 7",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		id: "8",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/47/300/300",
		title: "Title 8",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
];

export const saveList = [
	{...productList[0], type: PRODUCT_SAVE_VALUE.LATER},
	{...productList[1], type: PRODUCT_SAVE_VALUE.BUY},
	{...productList[2], type: PRODUCT_SAVE_VALUE.BUY},
	{...productList[3], type: PRODUCT_SAVE_VALUE.LATER},
	{...productList[4], type: PRODUCT_SAVE_VALUE.LATER},
];

export const documentList = [
	{
		id: "1",
		title: "Title 1",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		id: "2",
		title: "Title 2",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		id: "3",
		title: "Title 3",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		id: "4",
		title: "Title 4",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		id: "5",
		title: "Title 5",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
];

export const exploreVideoList = [
	{
		id: "1",
		title: "Title 1",
		href: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
	},
	{
		id: "2",
		title: "Title 2",
		href: "https://assets.mixkit.co/videos/preview/mixkit-boyfriends-taking-selfies-3200-large.mp4",
	},
	{
		id: "3",
		title: "Title 3",
		href: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
	},
	{
		id: "4",
		title: "Title 4",
		href: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4",
	},
	{
		id: "5",
		title: "Title 5",
		href: "https://assets.mixkit.co/videos/preview/mixkit-girl-looking-proudly-at-a-homemade-valentines-day-card-47441-large.mp4",
	},
	{
		id: "6",
		title: "Title 6",
		href: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-cold-and-pale-appearance-39877-large.mp4",
	},
	{
		id: "7",
		title: "Title 7",
		href: "https://assets.mixkit.co/videos/preview/mixkit-girl-with-roller-skates-standing-in-the-middle-of-a-34545-large.mp4",
	},
	{
		id: "8",
		title: "Title 8",
		href: "https://assets.mixkit.co/videos/preview/mixkit-two-avenues-with-many-cars-traveling-at-night-34562-large.mp4",
	},
	{
		id: "9",
		title: "Title 9",
		href: "https://assets.mixkit.co/videos/preview/mixkit-avenue-with-trees-buildings-and-fast-cars-at-dusk-34563-large.mp4",
	},
	{
		id: "10",
		title: "Title 10",
		href: "https://assets.mixkit.co/videos/preview/mixkit-decorated-christmas-tree-in-close-up-shot-39750-large.mp4",
	},
	{
		id: "11",
		title: "Title 11",
		href: "https://assets.mixkit.co/videos/preview/mixkit-friends-chatting-while-sitting-at-a-party-48119-large.mp4",
	},
	{
		id: "12",
		title: "Title 12",
		href: "https://assets.mixkit.co/videos/preview/mixkit-man-runs-past-ground-level-shot-32809-large.mp4",
	},
];
