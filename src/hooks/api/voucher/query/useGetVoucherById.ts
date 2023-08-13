import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TVoucher>(url).then((res) => res);

export const useGetVoucherById = (voucherId: string) => {
	return useSWR(concatHref(API_ENDPOINT.VOUCHERS, voucherId), fetcher);
};
