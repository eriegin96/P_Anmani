import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TVoucher} from "@/types/voucher.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TVoucher[]>(url).then((res) => res);

export const useGetVouchersByProductId = (productId?: string) => {
	return useSWR(
		productId ? concatHref(API_ENDPOINT.VOUCHERS_PRODUCT, productId) : null,
		fetcher
	);
};
