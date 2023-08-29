import {TProduct} from "@/types/product.type";
import {NOTIFICATION_TYPE} from "@/constants/notification";
import {TUser} from "@/types/user.type";
import {TNotification} from "@/types/notification.type";
import {PRODUCT_STATUS, PRODUCT_TAG, PRODUCT_TYPE} from "@/constants/product";
import {TReport} from "@/types/report.type";
import {REPORT} from "@/constants/report";

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
  - Theo thông báo nhận sổ hồng thanh toán 5%`,
};

export const productDescription = {
	pros: `  - Giá cho thuê cao nhất : 160 triệu/đêm
  - Lợi nhuận khách hàng nhận dự kiến 714 triệu/tháng - tỷ suất sinh lời 3,5%/năm
  - Được thiết kế riêng bởi nhà thiết kế Roberto Cavalli 82 tuổi và gần 50 năm kinh nghiệm từ giường ngủ, thảm, sofa, bàn ăn, giấy dán tường, các loại bát đĩa, lọ hoa, đèn bàn đều theo trường phái Avant Garde, ký phiên bản độc quyền 2 căn duy nhất trên toàn thế giới.
  - Đã có sổ đất riêng ra full diện tích đất
  - Đơn giá thấp bằng 1/3 giá đường Trần Phú Nha Trang
  - Vị trí mặt biển duy nhất còn lại của Vịnh Nha Trang, được sở du lich đánh giá là trung tâm hàng đầu của Nha Trang và khách du lịch quốc tế khi có 4 thương hiệu hàng đầu Gran Meliá, Melia, Newworld, Accor`,
	cons: ``,
	juridice: "Sở hữu lâu dài",
	delivery: {
		date: "Dự kiến quí IV/2025",
		info: "Bàn giao thô hoàn thiện ngoài",
	},
};

export const product: TProduct = {
	key: "product-1",
	type: PRODUCT_TYPE.single.value,
	tag: PRODUCT_TAG.investor.value,
	investor: {name: "1", logo: "https://picsum.photos/id/200/1600/900"},
	projectName: "1",
	star: 4,
	utility: [
		"Tiện nghi riêng tại gia",
		"Dịch vụ Quản gia riêng 24/7",
		"Dịch vụ Đầu bếp cá nhân Home Chef",
		"Nghi thức mùi hương Home Spa Ritual với BST Intuitive Gran Meliá Scent",
		"Dịch vụ kết nối giám tuyến nghệ thuật",
		"Tiện ích Gran Meliá Nha Trang",
		"Pacific Lagoon Hồ khoáng nóng 4000m2",
		"Bãi tắm San hô 370m",
		"Các hoạt động giải trí",
		"Quảng trường trung tâm, ẩm thực đêm",
		"Shopping Plaza",
		"Bãi tắm Vega 370m",
	],
	location: {
		detail: "6 Tân Trào, P.Tân Phú, Q.7",
		main: "nha-trang",
		sub: "Phường Bến Nghé",
		lng: 106,
		lat: 10,
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
	image: {
		main: {
			exterior: ["https://picsum.photos/id/200/1600/900"],
			livingroom: ["https://picsum.photos/id/200/1600/900"],
			bedroom: ["https://picsum.photos/id/200/1600/900"],
			bathroom: ["https://picsum.photos/id/200/1600/900"],
			lobby: ["https://picsum.photos/id/200/1600/900"],
			restaurant: ["https://picsum.photos/id/200/1600/900"],
			pool: ["https://picsum.photos/id/200/1600/900"],
			meetingroom: ["https://picsum.photos/id/200/1600/900"],
			entertainment: ["https://picsum.photos/id/200/1600/900"],
			service: ["https://picsum.photos/id/200/1600/900"],
		},
		reality: ["https://picsum.photos/id/200/1600/900"],
		area: ["https://picsum.photos/id/200/1600/900"],
		investor: ["https://picsum.photos/id/200/1600/900"],
		thumbnail: "https://picsum.photos/id/200/1600/900",
	},
	originalPrice: 13_500_000_000,
	price: 13_000_000_000,
	discountStartDate: "26/08/2023",
	discountEndDate: "26/08/2023",
	status: PRODUCT_STATUS.sold.value,
	suggestions: [],
	vouchers: [],
};

export const productList: TProduct[] = [
	product,
	{...product, key: "product-2"},
	{...product, key: "product-3"},
	{...product, key: "product-4"},
	{...product, key: "product-5"},
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
		key: "noti-1",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/40/300/300",
		title: "Title 1",
		expire: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		key: "noti-2",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/41/300/300",
		title: "Title 2",
		expire: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		key: "noti-3",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/42/300/300",
		title: "Title 3",
		expire: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		key: "noti-4",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/43/300/300",
		title: "Title 4",
		expire: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		key: "noti-5",
		type: NOTIFICATION_TYPE.UPDATE,
		avatar: "https://picsum.photos/id/44/300/300",
		title: "Title 5",
		expire: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		key: "noti-6",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/45/300/300",
		title: "Title 6",
		expire: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		key: "noti-7",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/46/300/300",
		title: "Title 7",
		expire: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
	{
		key: "noti-8",
		type: NOTIFICATION_TYPE.INFO,
		avatar: "https://picsum.photos/id/47/300/300",
		title: "Title 8",
		expire: "01/07/2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum id massa vitae blandit. Donec interdum efficitur ex non venenatis. Maecenas mi purus, imperdiet at risus in, ultricies faucibus urna. Aliquam mollis sed enim at pharetra. Pellentesque dui massa, cursus in ullamcorper vel, euismod et odio. Nullam luctus, sem at placerat faucibus, ante lacus aliquet tellus, in porta nisi nulla in eros. Sed rutrum at ante vel malesuada. In vitae libero tristique, commodo turpis vel, pellentesque ante. Etiam suscipit, ex id ornare rhoncus, orci arcu euismod magna, et tincidunt quam nisi fringilla lectus.",
	},
];

export const saveList = [
	{...productList[0], type: ""},
	// {...productList[0], type: PRODUCT_SAVE_VALUE.LATER},
	// {...productList[1], type: PRODUCT_SAVE_VALUE.BUY},
	// {...productList[2], type: PRODUCT_SAVE_VALUE.BUY},
	// {...productList[3], type: PRODUCT_SAVE_VALUE.LATER},
	// {...productList[4], type: PRODUCT_SAVE_VALUE.LATER},
];

export const reportList: TReport[] = [
	{
		key: "document-1",
		value: REPORT["market-hcm"].value,
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		key: "document-2",
		value: REPORT["market-nhatrang"].value,
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		key: "document-3",
		value: REPORT["market-phuquoc"].value,
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
	{
		key: "document-4",
		value: REPORT["market-danang"].value,
		href: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf",
	},
];

export const userList: TUser[] = [
	{
		email: "user1@email.com",
		name: "User 1",
		role: {key: "user-1", name: "user"},
		key: "user-1",
		gender: "male",
		dateOfBirth: "",
		phoneNumber: "",
	},
	{
		email: "user2@email.com",
		name: "User 2",
		role: {key: "user-2", name: "user"},
		key: "user-2",
		gender: "female",
		dateOfBirth: "",
		phoneNumber: "",
	},
	{
		email: "admin1@email.com",
		name: "Admin 1",
		role: {key: "admin-1", name: "admin"},
		key: "admin-1",
		gender: "male",
		dateOfBirth: "",
		phoneNumber: "",
	},
];
