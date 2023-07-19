import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TExploreVideo} from "@/types/video.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TExploreVideo}) =>
	axiosInstance
		.post<TExploreVideo>(url, JSON.stringify(arg))
		.then((res) => res);

export const useCreateExplore = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.CREATE_EXPLORE,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
