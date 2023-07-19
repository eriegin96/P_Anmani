import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TExploreVideo} from "@/types/video.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string) =>
	axiosInstance.delete<TExploreVideo>(url).then((res) => res);

export const useDeleteExplore = (exploreId: string) => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		`${API_ENDPOINT.EXPLORES}/${exploreId}`,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
