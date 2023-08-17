import {API_KEY} from "./api";
import {ROUTE} from "./route";

export const HANDLER = {
	[API_KEY.SIGN_IN]: {MESSAGE: "Đăng nhập thành công"},
	[API_KEY.SIGN_UP]: {MESSAGE: "Đăng ký thành công", ROUTE: ROUTE.SIGN_IN},
	[API_KEY.CREATE_PRODUCT]: {
		MESSAGE: "Tạo sản phẩm thành công",
		ROUTE: ROUTE.ADMIN_PRODUCT,
	},
	[API_KEY.CREATE_VOUCHER]: {
		MESSAGE: "Tạo voucher thành công",
		ROUTE: ROUTE.ADMIN_VOUCHER,
	},
	[API_KEY.CREATE_EXPLORE]: {
		MESSAGE: "Tạo khám phá thành công",
		ROUTE: ROUTE.ADMIN_EXPLORE,
	},
	[API_KEY.CREATE_NOTIFICATION]: {
		MESSAGE: "Tạo thông báo thành công",
		ROUTE: ROUTE.ADMIN_USER_NOTIFICATION,
	},
	[API_KEY.CREATE_CART]: {
		MESSAGE: "Tạo tư vấn đơn hàng thành công",
		ROUTE: ROUTE.CART,
	},
	[API_KEY.DELETE_PRODUCT]: {
		MESSAGE: "Xóa sản phẩm thành công",
		ROUTE: ROUTE.ADMIN_PRODUCT,
	},
	[API_KEY.DELETE_VOUCHER]: {
		MESSAGE: "Xóa voucher thành công",
		ROUTE: ROUTE.ADMIN_VOUCHER,
	},
	[API_KEY.DELETE_EXPLORE]: {
		MESSAGE: "Xóa khám phá thành công",
		ROUTE: ROUTE.ADMIN_EXPLORE,
	},
	[API_KEY.DELETE_NOTIFICATION]: {
		MESSAGE: "Xóa thông báo thành công",
		ROUTE: ROUTE.ADMIN_USER_NOTIFICATION,
	},
} as const;
