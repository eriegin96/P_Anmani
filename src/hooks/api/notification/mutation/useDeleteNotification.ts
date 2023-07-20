import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TNotification} from "@/types/notification.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance.delete<TNotification>(`${url}/${arg}`).then((res) => res);

export const useDeleteNotification = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.DELETE_NOTIFICATION,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
