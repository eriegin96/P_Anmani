import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string) =>
	axiosInstance.delete<TVoucher>(url).then((res) => res);

export const useDeleteVoucher = (voucherId: string) => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		`${API_ENDPOINT.VOUCHERS}/${voucherId}`,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
