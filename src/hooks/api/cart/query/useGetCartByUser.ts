import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TUser, TCartItem} from "@/types/user.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TCartItem[]>(url).then((res) => res);

export const useGetCartByUser = (userInfo: TUser | null) => {
	return useSWR(
		userInfo ? concatHref(API_ENDPOINT.USER_CARTS, userInfo.id) : null,
		fetcher
	);
};
