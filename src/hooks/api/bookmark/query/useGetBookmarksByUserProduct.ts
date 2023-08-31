import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TBookmarkResponse} from "@/types/bookmark.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TBookmarkResponse[]>(url).then((res) => res);

export const useGetBookmarksByUserProduct = (params: string) => {
	return useSWR(params ? API_ENDPOINT.BOOKMARKS + "?" + params : null, fetcher);
};
