import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, API_KEY} from "@/constants/api";
import {TExploreVideo} from "@/types/video.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TExploreVideo}) =>
	axiosInstance
		.post<TExploreVideo>(API_ENDPOINT.EXPLORES, JSON.stringify(arg))
		.then((res) => res);

export const useCreateExplore = () => {
	return useSWRMutation(API_KEY.CREATE_EXPLORE, fetcher);
};
