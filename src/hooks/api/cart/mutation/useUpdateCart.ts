import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TCartItemForm} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TCartItemForm}) =>
	axiosInstance
		.patch<TCartItemForm>(url, JSON.stringify(arg))
		.then((res) => res);

export const useUpdateCart = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.USER_CARTS,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
