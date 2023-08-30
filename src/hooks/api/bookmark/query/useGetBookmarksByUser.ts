import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TBookmarkResponse} from "@/types/bookmark.type";
import {TUser} from "@/types/user.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TBookmarkResponse[]>(url).then((res) => res);

export const useGetBookmarksByUser = (userInfo?: TUser | null) => {
	return useSWR(
		userInfo ? concatHref(API_ENDPOINT.BOOKMARKS_USER, userInfo.key) : null,
		fetcher
	);
};
