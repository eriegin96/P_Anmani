export const BASE_URL = "https://anmani-server.onrender.com";
export const storagePrefix = "anmani_";

// TODO: change endpoint
export const API_ENDPOINT = {
	MOCK: "",
	GET_ME: "auth/me",
	CARTS: "carts",
	CARTS_MANY: "carts/many",
	EXPLORES: "videos",
	NOTIFICATIONS: "notifications",
	NOTIFICATIONS_USER: "notifications/user",
	PRODUCTS: "products",
	USERS: "users",
	VOUCHERS: "vouchers",
	VOUCHERS_PRODUCT: "vouchers/product",
	BOOKMARKS: "bookmarks",
	BOOKMARKS_USER: "bookmarks/user",
	SIGN_UP: "auth/register",
	SIGN_IN: "auth/login",
	LOGOUT: "auth/logout",
	REFRESH_TOKEN: "auth/refresh",
};

export const API_KEY = {
	GET_ME: "auth/me",
	CREATE_CART: "create-carts",
	CREATE_EXPLORE: "create-videos",
	CREATE_NOTIFICATION: "create-notifications",
	CREATE_PRODUCT: "create-products",
	CREATE_VOUCHER: "create-vouchers",
	CREATE_BOOKMARK: "create-bookmarks",
	DELETE_CART: "delete-carts",
	DELETE_EXPLORE: "delete-videos",
	DELETE_NOTIFICATION: "delete-notifications",
	DELETE_PRODUCT: "delete-products",
	DELETE_VOUCHER: "delete-vouchers",
	DELETE_BOOKMARK: "delete-bookmarks",
	UPDATE_CART: "update-carts",
	SIGN_UP: "auth/register",
	SIGN_IN: "auth/login",
	LOGOUT: "auth/logout",
	REFRESH_TOKEN: "auth/refresh",
};
