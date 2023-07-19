import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TNotification} from "@/types/notification.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TNotification[]>(url).then((res) => res);

export const useGetNotifications = () => {
	return useSWR(API_ENDPOINT.MOCK, fetcher);
};
