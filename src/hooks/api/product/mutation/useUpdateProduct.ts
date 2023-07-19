import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TProduct} from "@/types/product.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TProduct}) =>
	axiosInstance.put<TProduct>(url, JSON.stringify(arg)).then((res) => res);

export const useUpdateProduct = (productId: string) => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		`${API_ENDPOINT.PRODUCTS}/${productId}`,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
