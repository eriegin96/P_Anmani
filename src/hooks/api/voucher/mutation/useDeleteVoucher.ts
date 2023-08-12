import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance
		.delete<TVoucher>(`${API_ENDPOINT.VOUCHERS}/${arg}`)
		.then((res) => res);

export const useDeleteVoucher = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_KEY.DELETE_VOUCHER,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
