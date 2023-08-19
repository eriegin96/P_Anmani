import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TExploreVideo} from "@/types/video.type";
import {concatHref} from "@/utils/concatHref";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TExploreVideo}) =>
	axiosInstance
		.patch<TExploreVideo>(url, JSON.stringify(arg))
		.then((res) => res);

export const useUpdateExplore = (exploreId: string) => {
	return useSWRMutation(concatHref(API_ENDPOINT.EXPLORES, exploreId), fetcher);
};
