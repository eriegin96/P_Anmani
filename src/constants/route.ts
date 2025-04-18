export const ROUTE_PREFIX_USER = "user";
export const ROUTE_PREFIX_ADMIN = "admin";

export const ROUTE = {
	HOME: "/",
	SIGN_UP: "/dang-ky",
	SIGN_IN: "/dang-nhap",
	EXPLORE: "/kham-pha",
	CHANGE_PASSWORD: `/doi-mat-khau`,
	PRODUCT: "/bds",
	ADVANCED_SEARCH: "/tim-kiem",
	CONSULT: "/tu-van-tai-chinh",
	COMPARISON: "/so-sanh",
	GOLD: "/gia-vang",

	CART: `/${ROUTE_PREFIX_USER}/gio-hang`,
	CART_SUMMARY: `/${ROUTE_PREFIX_USER}/gio-hang/tom-tat`,

	PROFILE: `/${ROUTE_PREFIX_USER}/ho-so`,
	INFO: `/${ROUTE_PREFIX_USER}/ho-so/thong-tin`,
	DOCUMENT: `/${ROUTE_PREFIX_USER}/ho-so/du-an`,
	FEEDBACK: `/${ROUTE_PREFIX_USER}/ho-so/gop-y`,

	SAVE: `/${ROUTE_PREFIX_USER}/luu-tru`,
	MESSAGE: `/${ROUTE_PREFIX_USER}/tin-nhan`,

	ADMIN: "/admin",
	ADMIN_DASHBOARD: `/${ROUTE_PREFIX_ADMIN}/dashboard`,
	ADMIN_PRODUCT: `/${ROUTE_PREFIX_ADMIN}/product`,
	ADMIN_PRODUCT_CREATE: `/${ROUTE_PREFIX_ADMIN}/product/create`,
	ADMIN_VOUCHER: `/${ROUTE_PREFIX_ADMIN}/voucher`,
	ADMIN_VOUCHER_CREATE: `/${ROUTE_PREFIX_ADMIN}/voucher/create`,
	ADMIN_EXPLORE: `/${ROUTE_PREFIX_ADMIN}/explore`,
	ADMIN_EXPLORE_CREATE: `/${ROUTE_PREFIX_ADMIN}/explore/create`,
	ADMIN_MESSAGE: `/${ROUTE_PREFIX_ADMIN}/message`,
	ADMIN_USER: `/${ROUTE_PREFIX_ADMIN}/user`,
	ADMIN_USER_NOTIFICATION: `/${ROUTE_PREFIX_ADMIN}/user/notification`,
	ADMIN_USER_NOTIFICATION_CREATE: `/${ROUTE_PREFIX_ADMIN}/user/notification/create`,
	ADMIN_USER_DEPOSIT: `/${ROUTE_PREFIX_ADMIN}/user/deposit`,
	ADMIN_USER_CART: `/${ROUTE_PREFIX_ADMIN}/user/cart`,
} as const;

export const QUERY_PARAMS = {
	SORT: {
		PRICE_ASCENDING: "asc",
		PRICE_DESCENDING: "desc",
	},
} as const;
