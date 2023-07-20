import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TProduct} from "@/types/product.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance.delete<TProduct>(`${url}/${arg}`).then((res) => res);

export const useDeleteProduct = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.DELETE_PRODUCT,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
