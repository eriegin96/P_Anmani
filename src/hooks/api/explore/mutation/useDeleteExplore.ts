import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TExploreVideo} from "@/types/video.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance
		.delete<TExploreVideo>(concatHref(API_ENDPOINT.EXPLORES, arg))
		.then((res) => res);

export const useDeleteExplore = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_KEY.DELETE_EXPLORE,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
