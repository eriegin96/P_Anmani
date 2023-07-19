import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TUserCart} from "@/types/user.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TUserCart}) =>
	axiosInstance.post<TUserCart>(url, JSON.stringify(arg)).then((res) => res);

export const useCreateCart = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.CREATE_CART,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
