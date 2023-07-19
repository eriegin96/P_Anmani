import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TProductForm} from "@/types/product.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TProductForm}) =>
	axiosInstance.post<TProductForm>(url, JSON.stringify(arg)).then((res) => res);

export const useCreateProduct = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.CREATE_PRODUCT,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
