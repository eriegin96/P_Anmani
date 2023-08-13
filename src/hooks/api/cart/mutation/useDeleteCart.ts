import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TUserCartForm} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance
		.patch<TUserCartForm>(API_ENDPOINT.CARTS, arg)
		.then((res) => res);

export const useDeleteCart = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_KEY.DELETE_CART,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
