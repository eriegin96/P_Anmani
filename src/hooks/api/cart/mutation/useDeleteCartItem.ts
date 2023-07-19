import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TUserCartForm} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance.put<TUserCartForm>(url, arg).then((res) => res);

export const useDeleteCartItem = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.CARTS,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
