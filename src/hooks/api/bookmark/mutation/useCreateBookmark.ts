import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TBookmarkRequest, TBookmarkResponse} from "@/types/bookmark.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TBookmarkRequest}) =>
	axiosInstance
		.post<TBookmarkResponse>(API_ENDPOINT.BOOKMARKS, JSON.stringify(arg))
		.then((res) => res);

export const useCreateBookmark = () => {
	return useSWRMutation(API_KEY.CREATE_BOOKMARK, fetcher);
};
