import {API_ENDPOINT} from "./api";
import {ROUTE} from "./route";

export const HANDLER = {
	[API_ENDPOINT.SIGN_IN]: {MESSAGE: "Đăng nhập thành công", ROUTE: ROUTE.HOME},
	[API_ENDPOINT.SIGN_UP]: {MESSAGE: "Đăng ký thành công", ROUTE: ROUTE.SIGN_IN},
	[API_ENDPOINT.CREATE_PRODUCT]: {
		MESSAGE: "Tạo sản phẩm thành công",
		ROUTE: ROUTE.ADMIN_PRODUCT,
	},
	[API_ENDPOINT.CREATE_VOUCHER]: {
		MESAGE: "Tạo voucher thành công",
		ROUTE: ROUTE.ADMIN_VOUCHER,
	},
	[API_ENDPOINT.CREATE_EXPLORE]: {
		MESSAGE: "Tạo khám phá thành công",
		ROUTE: ROUTE.ADMIN_EXPLORE,
	},
	[API_ENDPOINT.CREATE_NOTIFICATION]: {
		MESSAGE: "Tạo thông báo thành công",
		ROUTE: ROUTE.ADMIN_USER_NOTIFICATION,
	},
	[API_ENDPOINT.CREATE_CART]: {
		MESSAGE: "Tạo tư vấn đơn hàng thành công",
		ROUTE: ROUTE.CART,
	},
} as const;
