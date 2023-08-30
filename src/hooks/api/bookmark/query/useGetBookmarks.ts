import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TBookmarkResponse} from "@/types/bookmark.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TBookmarkResponse[]>(url).then((res) => res);

export const useGetBookmarks = () => {
	return useSWR(API_ENDPOINT.BOOKMARKS, fetcher);
};
