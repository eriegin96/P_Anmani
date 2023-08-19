import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TProduct} from "@/types/product.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance
		.delete<TProduct>(concatHref(API_ENDPOINT.PRODUCTS, arg))
		.then((res) => res);

export const useDeleteProduct = () => {
	return useSWRMutation(API_KEY.DELETE_PRODUCT, fetcher);
};
