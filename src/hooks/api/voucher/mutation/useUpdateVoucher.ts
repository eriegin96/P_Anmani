import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TVoucher}) =>
	axiosInstance.patch<TVoucher>(url, JSON.stringify(arg)).then((res) => res);

export const useUpdateVoucher = (voucherId: string) => {
	return useSWRMutation(concatHref(API_ENDPOINT.VOUCHERS, voucherId), fetcher);
};
