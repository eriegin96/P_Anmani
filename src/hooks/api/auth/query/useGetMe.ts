import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {useAuthContext} from "@/providers/AuthProvider";
import {TUserResponse} from "@/types/api.type";
import {useEffect} from "react";
import useSWRImmutable from "swr/immutable";

const fetcher = (url: string) =>
	axiosInstance.get<TUserResponse>(url).then((res) => res);

export const useGetMe = () => {
	const {data, isLoading, error} = useSWRImmutable(
		API_ENDPOINT.GET_ME,
		fetcher
	);
	const {setUserInfo} = useAuthContext();

	useEffect(() => {
		if (!data) return;

		const {email, name, gender, role, key, phoneNumber, dateOfBirth} = data;
		setUserInfo({email, name, gender, role, id: key, phoneNumber, dateOfBirth});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return {data, isLoading, error};
};
