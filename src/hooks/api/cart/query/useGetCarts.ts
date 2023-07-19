import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TUserCart} from "@/types/user.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TUserCart[]>(url).then((res) => res);

export const useGetCarts = () => {
	return useSWR(API_ENDPOINT.MOCK, fetcher);
};
