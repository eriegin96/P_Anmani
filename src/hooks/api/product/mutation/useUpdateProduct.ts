import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TProduct} from "@/types/product.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TProduct}) =>
	axiosInstance.patch<TProduct>(url, JSON.stringify(arg)).then((res) => res);

export const useUpdateProduct = (productId: string) => {
	return useSWRMutation(concatHref(API_ENDPOINT.PRODUCTS, productId), fetcher);
};
