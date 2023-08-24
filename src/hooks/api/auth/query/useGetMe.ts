import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {ROUTE} from "@/constants/route";
import {useAuthContext} from "@/providers/AuthProvider";
import {TUserResponse} from "@/types/api.type";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TUserResponse>(url).then((res) => res);

export const useGetMe = () => {
	const router = useRouter();
	const {setUserInfo, isChecked, setIsChecked} = useAuthContext();

	const {data, isLoading, error} = useSWR(
		isChecked ? null : API_ENDPOINT.GET_ME,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);

	useEffect(() => {
		if (isChecked) return;
		if (error) {
			setIsChecked(true);
			return router.push(ROUTE.HOME);
		}
		if (!data) return;

		setIsChecked(true);
		setUserInfo(data);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, error, isChecked]);

	return {data, isLoading, error};
};
