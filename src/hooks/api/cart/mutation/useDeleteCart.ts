import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance
		.delete<string>(concatHref(API_ENDPOINT.CARTS, arg))
		.then((res) => res);

export const useDeleteCart = () => {
	return useSWRMutation(API_KEY.DELETE_CART, fetcher);
};
