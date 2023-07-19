import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TExploreVideo} from "@/types/video.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TExploreVideo[]>(url).then((res) => res);

export const useGetExplores = () => {
	return useSWR(API_ENDPOINT.MOCK, fetcher);
};
