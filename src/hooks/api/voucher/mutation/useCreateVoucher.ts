import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TVoucher}) =>
	axiosInstance.post<TVoucher>(url, JSON.stringify(arg)).then((res) => res);

export const useCreateVoucher = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.CREATE_VOUCHER,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
