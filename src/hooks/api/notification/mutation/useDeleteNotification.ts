import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TNotification} from "@/types/notification.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance
		.delete<TNotification>(concatHref(API_ENDPOINT.NOTIFICATIONS, arg))
		.then((res) => res);

export const useDeleteNotification = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_KEY.DELETE_NOTIFICATION,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
