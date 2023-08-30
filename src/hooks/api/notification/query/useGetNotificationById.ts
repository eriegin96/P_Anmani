import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TNotificationResponse} from "@/types/notification.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TNotificationResponse>(url).then((res) => res);

export const useGetNotificationById = (notificationId: string) => {
	return useSWR(
		concatHref(API_ENDPOINT.NOTIFICATIONS, notificationId),
		fetcher
	);
};
