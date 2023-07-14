import {TProduct} from "@/types/product.type";
import {ImageLogoSG} from "../assets";
import {PRODUCT_SAVE_VALUE} from "@/constants/product";
import {TVoucher} from "@/types/voucher.type";
import {NOTIFICATION_TYPE} from "@/constants/notification";
import {QUERY_PARAMS} from "@/constants/route";
import {TUser, TUserCart} from "@/types/user.type";
import {TNotification} from "@/types/notification.type";
import {TExploreVideo, TExploreVideoStory} from "@/types/video.type";
import {EXPLORE_TYPE} from "@/constants/explore";

export const voucherList: TVoucher[] = [
	{
		id: "voucher-1",
		key: "voucher-1",
		discountOption: "amount",
		discount: {amount: 300_000_000},
		productId: "product-1",
		condition: "Alibaba",
		expiredDate: "31/12/2023",
	},
	{
		id: "voucher-2",
		key: "voucher-2",
		discountOption: "percent",
		discount: {percent: 7.5},
		productId: "product-2",
		condition: "không vay",
		expiredDate: "31/12/2023",
	},
	{
		id: "voucher-3",
		key: "voucher-3",
		discountOption: "percent",
		discount: {percent: 1.5},
		productId: "product-3",
		condition: "ký HĐMB sớm",
		expiredDate: "31/12/2023",
	},
	{
		id: "voucher-4",
		key: "voucher-4",
		discountOption: "percent",
		discount: {percent: 15},
		productId: "product-4",
		condition: "thanh toán sớm 95% trong vòng 3 tháng",
		expiredDate: "31/12/2023",
	},
	{
		id: "voucher-5",
		key: "voucher-5",
		discountOption: "percent",
		discount: {percent: 1},
		productId: "product-5",
		condition: "mua 2 căn trở lên",
		expiredDate: "31/12/2023",
	},
	{
		id: "voucher-6",
		key: "voucher-6",
		discountOption: "percent",
		discount: {percent: 9},
		productId: "product-1",
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
	juridice: "Sở hữu lâu dài",
	delivery: {
		date: "Dự kiến quí IV/2025",
		info: "Bàn giao thô hoàn thiện ngoài",
	},
};

export const productList: TProduct[] = [
	{
		id: "product-1",
		type: QUERY_PARAMS.TYPE.SINGLE,
		tag: QUERY_PARAMS.TAG.INVESTOR,
		investor: "1",
		location: {
			detail: "6 Tân Trào, P.Tân Phú, Q.7",
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
		originalPrice: 13_500_000_000,
		price: 13_000_000_000,
		status: QUERY_PARAMS.STATUS.SOLD,
	},
	{
		id: "product-2",
		type: QUERY_PARAMS.TYPE.DOUBLE,
		tag: QUERY_PARAMS.TAG.INVESTOR,
		investor: "1",
		location: {
			detail: "6 Tân Trào, P.Tân Phú, Q.7",
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
		originalPrice: 13_500_000_000,
		price: 13_000_000_000,
		status: QUERY_PARAMS.STATUS.IN_STOCK,
	},
	{
		id: "product-3",
		type: QUERY_PARAMS.TYPE.SHOPHOUSE,
		tag: QUERY_PARAMS.TAG.INVESTOR,
		investor: "1",
		location: {
			detail: "6 Tân Trào, P.Tân Phú, Q.7",
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
		originalPrice: 13_500_000_000,
		price: 13_000_000_000,
		status: QUERY_PARAMS.STATUS.IN_STOCK,
	},
	{
		id: "product-4",
		type: QUERY_PARAMS.TYPE.APARTMENT,
		tag: QUERY_PARAMS.TAG.INVESTOR,
		investor: "1",
		location: {
			detail: "6 Tân Trào, P.Tân Phú, Q.7",
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
		originalPrice: 13_500_000_000,
		price: 13_000_000_000,
		status: QUERY_PARAMS.STATUS.SOLD,
	},
	{
		id: "product-5",
		type: QUERY_PARAMS.TYPE.SINGLE,
		tag: QUERY_PARAMS.TAG.INVESTOR,
		investor: "1",
		location: {
			detail: "6 Tân Trào, P.Tân Phú, Q.7",
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
		originalPrice: 13_500_000_000,
		price: 13_000_000_000,
		status: QUERY_PARAMS.STATUS.IN_STOCK,
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

export const notificationList: TNotification[] = [
	{
		id: "noti-1",
		key: "noti-1",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/40/300/300",
		title: "Title 1",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
		target: ["user-1", "user-2"],
	},
	{
		id: "noti-2",
		key: "noti-2",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/41/300/300",
		title: "Title 2",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
		target: ["user-1"],
	},
	{
		id: "noti-3",
		key: "noti-3",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/42/300/300",
		title: "Title 3",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
		target: [],
	},
	{
		id: "noti-4",
		key: "noti-4",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/43/300/300",
		title: "Title 4",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
		target: [],
	},
	{
		id: "noti-5",
		key: "noti-5",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/44/300/300",
		title: "Title 5",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
		target: [],
	},
	{
		id: "noti-6",
		key: "noti-6",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/45/300/300",
		title: "Title 6",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
		target: [],
	},
	{
		id: "noti-7",
		key: "noti-7",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/46/300/300",
		title: "Title 7",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
		target: [],
	},
	{
		id: "noti-8",
		key: "noti-8",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/47/300/300",
		title: "Title 8",
		date: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
		target: [],
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
		id: "document-1",
		title: "Title 1",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		id: "document-2",
		title: "Title 2",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		id: "document-3",
		title: "Title 3",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		id: "document-4",
		title: "Title 4",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		id: "document-5",
		title: "Title 5",
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
];

export const exploreVideoStories: TExploreVideoStory[] = [
	{
		id: "story-1",
		title: "Title 1",
		url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
		type: EXPLORE_TYPE.VIDEO,
	},
	{
		id: "story-2",
		title: "Title 2",
		url: "https://picsum.photos/id/100/900/1600",
		type: EXPLORE_TYPE.IMAGE,
	},
	{
		id: "story-3",
		title: "Title 3",
		url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
		type: EXPLORE_TYPE.VIDEO,
	},
	{
		id: "story-4",
		title: "Title 4",
		url: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4",
		type: EXPLORE_TYPE.VIDEO,
	},
];

export const exploreVideoList: TExploreVideo[] = [
	{
		id: "video-1",
		key: "video-1",
		title: "Title 1",
		url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-2",
		key: "video-2",
		title: "Title 2",
		url: "https://assets.mixkit.co/videos/preview/mixkit-boyfriends-taking-selfies-3200-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-3",
		key: "video-3",
		title: "Title 3",
		url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-4",
		key: "video-4",
		title: "Title 4",
		url: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-5",
		key: "video-5",
		title: "Title 5",
		url: "https://assets.mixkit.co/videos/preview/mixkit-girl-looking-proudly-at-a-homemade-valentines-day-card-47441-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-6",
		key: "video-6",
		title: "Title 6",
		url: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-cold-and-pale-appearance-39877-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-7",
		key: "video-7",
		title: "Title 7",
		url: "https://assets.mixkit.co/videos/preview/mixkit-girl-with-roller-skates-standing-in-the-middle-of-a-34545-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-8",
		key: "video-8",
		title: "Title 8",
		url: "https://assets.mixkit.co/videos/preview/mixkit-two-avenues-with-many-cars-traveling-at-night-34562-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-9",
		key: "video-9",
		title: "Title 9",
		url: "https://assets.mixkit.co/videos/preview/mixkit-avenue-with-trees-buildings-and-fast-cars-at-dusk-34563-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-10",
		key: "video-10",
		title: "Title 10",
		url: "https://assets.mixkit.co/videos/preview/mixkit-decorated-christmas-tree-in-close-up-shot-39750-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-11",
		key: "video-11",
		title: "Title 11",
		url: "https://assets.mixkit.co/videos/preview/mixkit-friends-chatting-while-sitting-at-a-party-48119-large.mp4",
		stories: exploreVideoStories,
	},
	{
		id: "video-12",
		key: "video-12",
		title: "Title 12",
		url: "https://assets.mixkit.co/videos/preview/mixkit-man-runs-past-ground-level-shot-32809-large.mp4",
		stories: exploreVideoStories,
	},
];

export const userList: TUser[] = [
	{email: "user1@email.com", name: "User 1", role: "user", id: "user-1"},
	{email: "user2@email.com", name: "User 2", role: "user", id: "user-2"},
	{
		email: "admin1@email.com",
		name: "Admin 1",
		role: "admin",
		id: "admin-1",
	},
];

export const userCartList: TUserCart[] = [
	{
		id: "userCart-1",
		key: "userCart-1",
		bookingInfo: {
			userId: "user-1",
			date: "31/07/2023",
			place: "6 Tan Trao, P.Tan Phu",
			phoneNumber: "0123456789",
		},
		cartList: [
			{
				id: "cart-1",
				productId: "product-1",
				quantity: 1,
				voucherAdded: ["voucher-1", "voucher-2"],
				value: "product-1",
			},
			{
				id: "cart-2",
				productId: "product-2",
				quantity: 2,
				voucherAdded: ["voucher-3"],
				value: "product-2",
			},
		],
	},
];
