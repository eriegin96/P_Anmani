import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TNotification} from "@/types/notification.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TNotification}) =>
	axiosInstance
		.post<TNotification>(API_ENDPOINT.NOTIFICATIONS, JSON.stringify(arg))
		.then((res) => res);

export const useCreateNotification = () => {
	return useSWRMutation(API_KEY.CREATE_NOTIFICATION, fetcher);
};
