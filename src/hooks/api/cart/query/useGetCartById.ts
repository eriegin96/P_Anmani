import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TUserCart} from "@/types/user.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TUserCart>(url).then((res) => res);

export const useGetCartById = (userCartId: string) => {
	return useSWR(concatHref(API_ENDPOINT.CARTS, userCartId), fetcher);
};
