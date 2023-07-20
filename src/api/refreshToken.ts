import {API_ENDPOINT, storagePrefix} from "@/constants/api";
import {TTokenResponse} from "@/types/api.type";
import {axiosInstance} from "./axios";

export const refreshToken = async () => {
	const tokenRes = JSON.parse(
		window.localStorage.getItem(`${storagePrefix}token`) as string
	) as TTokenResponse | null;
	try {
		const response =
			(await axiosInstance.post<TTokenResponse>(
				`${API_ENDPOINT.REFRESH_TOKEN}`,
				{
					refresh_token: tokenRes?.refreshToken,
				}
			)) ?? null;

		window.localStorage.setItem(
			`${storagePrefix}token`,
			JSON.stringify(response)
		);
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
