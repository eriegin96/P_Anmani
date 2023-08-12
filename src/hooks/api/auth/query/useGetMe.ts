import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {useAuthContext} from "@/providers/AuthProvider";
import {TUserResponse} from "@/types/api.type";
import {useEffect} from "react";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TUserResponse>(url).then((res) => res);

export const useGetMe = () => {
	const {data, isLoading, error} = useSWR(API_ENDPOINT.GET_ME, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});
	const {setUserInfo} = useAuthContext();

	useEffect(() => {
		if (!data) return;

		setUserInfo({
			email: data.email,
			name: data.firstName,
			gender: data.gender,
			role: data.gender === "male" ? "user" : "admin",
			id: data.id,
			phoneNumber: data.phoneNumber,
			dob: data.dob,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return {data, isLoading, error};
};
