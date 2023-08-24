import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TUser} from "@/types/user.type";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TUser[]>(url).then((res) => res);

export const useGetUsers = () => {
	return useSWR(API_ENDPOINT.USERS, fetcher);
};
