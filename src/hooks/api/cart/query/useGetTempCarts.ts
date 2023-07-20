import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TUser, TUserCart} from "@/types/user.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TUserCart[]>(url).then((res) => res);

export const useGetTempCarts = (userInfo: TUser | null) => {
	return useSWR(userInfo ? API_ENDPOINT.TEMP_CARTS : null, fetcher);
};
