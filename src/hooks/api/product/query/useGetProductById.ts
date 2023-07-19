import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TProduct} from "@/types/product.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TProduct>(url).then((res) => res);

export const useGetProductById = (productId: string) => {
	return useSWR(`${API_ENDPOINT.MOCK}/${productId}`, fetcher);
};
