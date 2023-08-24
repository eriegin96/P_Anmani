import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TProduct} from "@/types/product.type";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string) =>
	axiosInstance.get<TProduct[]>(url).then((res) => res);

const fetcherSearch = (url: string, {arg}: {arg: string}) =>
	axiosInstance.get<TProduct[]>(`${url}?${arg}`).then((res) => res);

export const useGetProducts = () => {
	return useSWR(API_ENDPOINT.PRODUCTS, fetcher);
};

export const useGetSearchProducts = () => {
	return useSWRMutation(API_ENDPOINT.PRODUCTS, fetcherSearch);
};
