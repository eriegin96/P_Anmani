import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TResponseCart} from "@/types/user.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TResponseCart[]>(url).then((res) => res);

export const useGetCarts = () => {
	return useSWR(API_ENDPOINT.CARTS, fetcher);
};
