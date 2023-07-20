import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance.delete<TVoucher>(`${url}/${arg}`).then((res) => res);

export const useDeleteVoucher = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.DELETE_VOUCHER,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
