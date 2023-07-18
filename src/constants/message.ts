import {API_ENDPOINT} from "./api";

export const MESSAGE = {
	[API_ENDPOINT.SIGN_IN]: "Đăng nhập thành công",
	[API_ENDPOINT.SIGN_UP]: "Đăng ký thành công",
} as const;
