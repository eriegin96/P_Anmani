import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TCartProduct, TResponseCart} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

type TCreateCart = TCartProduct & {userId?: string};

const fetcher = (url: string, {arg}: {arg: TCreateCart}) =>
	axiosInstance
		.post<TCreateCart, TResponseCart>(API_ENDPOINT.CARTS, JSON.stringify(arg))
		.then((res) => res);

export const useCreateCart = () => {
	return useSWRMutation(API_KEY.CREATE_CART, fetcher);
};
