import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TNotification} from "@/types/notification.type";
import {TUser} from "@/types/user.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TNotification[]>(url).then((res) => res);

export const useGetNotificationsByUser = (userInfo?: TUser | null) => {
	return useSWR(
		userInfo ? concatHref(API_ENDPOINT.NOTIFICATIONS_USER, userInfo.id) : null,
		fetcher
	);
};
