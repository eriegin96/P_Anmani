import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TNotification} from "@/types/notification.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TNotification}) =>
	axiosInstance
		.patch<TNotification>(url, JSON.stringify(arg))
		.then((res) => res);

export const useUpdateNotification = (notificationId: string) => {
	return useSWRMutation(
		concatHref(API_ENDPOINT.NOTIFICATIONS, notificationId),
		fetcher
	);
};
