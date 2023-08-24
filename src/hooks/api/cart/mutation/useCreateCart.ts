import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TRequestCart} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TRequestCart}) =>
	axiosInstance
		.post<TRequestCart>(API_ENDPOINT.CARTS, JSON.stringify(arg))
		.then((res) => res);

export const useCreateCart = () => {
	return useSWRMutation(API_KEY.CREATE_CART, fetcher);
};
