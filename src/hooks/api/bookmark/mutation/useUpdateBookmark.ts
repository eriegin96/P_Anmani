import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TBookmarkRequest, TBookmarkResponse} from "@/types/bookmark.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TBookmarkRequest}) =>
	axiosInstance
		.patch<TBookmarkResponse>(url, JSON.stringify(arg))
		.then((res) => res);

export const useUpdateBookmark = (bookmarkId: string) => {
	return useSWRMutation(
		concatHref(API_ENDPOINT.BOOKMARKS, bookmarkId),
		fetcher
	);
};
