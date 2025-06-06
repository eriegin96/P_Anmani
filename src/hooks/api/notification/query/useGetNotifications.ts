import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TNotificationResponse} from "@/types/notification.type";
import {TUser} from "@/types/user.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TNotificationResponse[]>(url).then((res) => res);

export const useGetNotifications = (userInfo?: TUser | null) => {
	return useSWR(userInfo ? API_ENDPOINT.NOTIFICATIONS : null, fetcher);
};
