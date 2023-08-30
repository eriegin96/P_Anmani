import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TVoucher[]>(url).then((res) => res);

export const useGetVouchersByProduct = (params?: string) => {
	return useSWR(params ? API_ENDPOINT.VOUCHERS + "?" + params : null, fetcher);
};
