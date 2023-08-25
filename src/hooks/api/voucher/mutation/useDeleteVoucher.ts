import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance
		.delete<TVoucher>(concatHref(API_ENDPOINT.VOUCHERS, arg))
		.then((res) => res);

export const useDeleteVoucher = () => {
	return useSWRMutation(API_KEY.DELETE_VOUCHER, fetcher);
};
