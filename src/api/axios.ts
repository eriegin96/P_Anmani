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
	withCredentials: true,
});

export const configFormData = {
	headers: {
		"content-type": "multipart/form-data",
	},
};

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
	return config;
}

const onErrorResponse = async (error: AxiosError | Error) => {
	if (axios.isAxiosError(error)) {
		return Promise.reject(error);
	}
};

axiosInstance.interceptors.request.use(authRequestInterceptor);
axiosInstance.interceptors.response.use(
	(response) => response.data,
	onErrorResponse
);
