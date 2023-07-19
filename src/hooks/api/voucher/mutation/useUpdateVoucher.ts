import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TVoucher}) =>
	axiosInstance.put<TVoucher>(url, JSON.stringify(arg)).then((res) => res);

export const useUpdateVoucher = (voucherId: string) => {
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
