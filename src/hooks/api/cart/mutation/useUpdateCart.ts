import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TCartProduct, TCartResponse} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

export type TUpdateCart = {userId?: string; products: TCartProduct[]};

const fetcher = (url: string, {arg}: {arg: TUpdateCart}) =>
	axiosInstance
		.patch<TUpdateCart, TCartResponse>(
			API_ENDPOINT.CARTS_MANY,
			JSON.stringify(arg)
		)
		.then((res) => res);

export const useUpdateCart = () => {
	return useSWRMutation(API_KEY.UPDATE_CART, fetcher);
};
