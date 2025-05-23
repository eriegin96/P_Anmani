import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TExploreVideo} from "@/types/video.type";
import {concatHref} from "@/utils/concatHref";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TExploreVideo>(url).then((res) => res);

export const useGetExploreById = (exploreId: string) => {
	return useSWR(concatHref(API_ENDPOINT.EXPLORES, exploreId), fetcher);
};
