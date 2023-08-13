import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TProduct} from "@/types/product.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TProduct>(url).then((res) => res);

export const useGetProductById = (productId: string) => {
	return useSWR(productId? concatHref(API_ENDPOINT.PRODUCTS, productId): null, fetcher);
};
