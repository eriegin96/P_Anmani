import {API_ENDPOINT, BASE_URL} from "@/constants/api";
import {ROUTE} from "@/constants/route";
import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	HttpStatusCode,
	InternalAxiosRequestConfig,
} from "axios";

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
		// const {status} = error.response as AxiosResponse;
		// if (status === HttpStatusCode.Unauthorized) {
		// await axiosInstance.get(API_ENDPOINT.LOGOUT);
		// 	return Promise.reject(error);
		// }

		return Promise.reject(error);
	}
};

axiosInstance.interceptors.request.use(authRequestInterceptor);
axiosInstance.interceptors.response.use(
	(response) => response.data,
	onErrorResponse
);
