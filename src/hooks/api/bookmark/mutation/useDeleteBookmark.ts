import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TBookmarkRequest} from "@/types/bookmark.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance
		.delete<TBookmarkRequest>(concatHref(API_ENDPOINT.BOOKMARKS, arg))
		.then((res) => res);

export const useDeleteBookmark = () => {
	return useSWRMutation(API_KEY.DELETE_BOOKMARK, fetcher);
};
