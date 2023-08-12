import {API_ENDPOINT, BASE_URL, storagePrefix} from "@/constants/api";
import {TTokenResponse} from "@/types/api.type";
import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	HttpStatusCode,
	InternalAxiosRequestConfig,
} from "axios";
import {refreshToken} from "./refreshToken";

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL ?? `${BASE_URL}`,
	headers: {
		"Content-Type": "application/json",
	},
});

export const configFormData = {
	headers: {
		"content-type": "multipart/form-data",
	},
};

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
	const tokenRes = JSON.parse(
		window.localStorage.getItem(`${storagePrefix}token`) as string
	) as TTokenResponse | null;

	if (tokenRes) {
		config.headers.Authorization = `Bearer ${tokenRes}`;
	}
	config.headers.Accept = "application/json";
	return config;
}

const onErrorResponse = async (error: AxiosError | Error) => {
	if (axios.isAxiosError(error)) {
		// 	const config = error.config as InternalAxiosRequestConfig;
		// 	const {headers} = config as AxiosRequestConfig;
		// 	console.log(error);
		// 	const {status} = error.response as AxiosResponse;
		// 	if (status === HttpStatusCode.Unauthorized) {
		// 		// remove starting slash of URL
		// 		// if (config.url?.substring(1) === API_ENDPOINT.REFRESH_TOKEN) {
		// 		// 	hardLogout();
		// 		return Promise.reject(error);
		// 		// }
		// 		// const token = await refreshToken();
		// 		// if (token?.accessToken && headers) {
		// 		// 	headers.Authorization = `Bearer ${token.accessToken}`;
		// 		// }
		// 		// return axiosInstance(config);
		// 		// window.localStorage.removeItem(`${storagePrefix}token`);
		// 		// window.location.reload();
		// 	}
		return Promise.reject(error);
	}
};

axiosInstance.interceptors.request.use(authRequestInterceptor);
axiosInstance.interceptors.response.use(
	(response) => response.data,
	onErrorResponse
);
