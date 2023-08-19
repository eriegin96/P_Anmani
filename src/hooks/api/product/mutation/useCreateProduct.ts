import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TProductForm} from "@/types/product.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TProductForm}) =>
	axiosInstance
		.post<TProductForm>(API_ENDPOINT.PRODUCTS, JSON.stringify(arg))
		.then((res) => res);

export const useCreateProduct = () => {
	return useSWRMutation(API_KEY.CREATE_PRODUCT, fetcher);
};
