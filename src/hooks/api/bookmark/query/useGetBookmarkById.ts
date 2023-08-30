import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TBookmarkResponse} from "@/types/bookmark.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TBookmarkResponse>(url).then((res) => res);

export const useGetBookmarkById = (bookmark: string) => {
	return useSWR(concatHref(API_ENDPOINT.BOOKMARKS, bookmark), fetcher);
};
