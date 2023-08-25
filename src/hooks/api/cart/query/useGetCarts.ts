import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TCartResponse} from "@/types/user.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TCartResponse[]>(url).then((res) => res);

export const useGetCarts = () => {
	return useSWR(`${API_ENDPOINT.CARTS}?status=processing`, fetcher);
};
