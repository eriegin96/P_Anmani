import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {ROUTE} from "@/constants/route";
import {useAuthContext} from "@/providers/AuthProvider";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {useSWRConfig} from "swr";

import useSWRMutation from "swr/mutation";

const fetcher = (url: string) => axiosInstance.post(url).then((res) => res);

export const useLogout = () => {
	const router = useRouter();
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.LOGOUT,
		fetcher
	);
	const {setUserInfo} = useAuthContext();

	useEffect(() => {
		if (!data) return;

		setUserInfo(null);
		router.push(ROUTE.HOME);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, router]);

	return {
		trigger,
		isMutating,
		error,
	};
};
