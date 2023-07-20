import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TExploreVideo} from "@/types/video.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: string}) =>
	axiosInstance.delete<TExploreVideo>(`${url}/${arg}`).then((res) => res);

export const useDeleteExplore = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.DELETE_EXPLORE,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
