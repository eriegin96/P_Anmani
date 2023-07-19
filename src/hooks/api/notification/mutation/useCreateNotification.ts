import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TNotification} from "@/types/notification.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TNotification}) =>
	axiosInstance
		.post<TNotification>(url, JSON.stringify(arg))
		.then((res) => res);

export const useCreateNotification = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.CREATE_NOTIFICATION,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
