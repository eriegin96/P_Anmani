import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TUserCartForm} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TUserCartForm}) =>
	axiosInstance
		.post<TUserCartForm>(API_ENDPOINT.CARTS, JSON.stringify(arg))
		.then((res) => res);

export const useCreateCart = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_KEY.CREATE_CART,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
