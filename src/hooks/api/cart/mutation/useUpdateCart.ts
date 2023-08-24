import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TRequestCart, TResponseCart} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TRequestCart}) =>
	axiosInstance
		.patch<TRequestCart, TResponseCart>(
			API_ENDPOINT.CARTS_MANY,
			JSON.stringify(arg)
		)
		.then((res) => res);

export const useUpdateCart = () => {
	return useSWRMutation(API_KEY.UPDATE_CART, fetcher);
};
