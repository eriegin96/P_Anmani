import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, storagePrefix} from "@/constants/api";
import {ROUTE} from "@/constants/route";
import {TSignInFormData, TUserResponse} from "@/types/api.type";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TSignInFormData}) =>
	axiosInstance
		.post<TUserResponse & {gender: "male" | "female"}>(url, JSON.stringify(arg))
		.then((res) => res);

export const useSignIn = () => {
	const router = useRouter();
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.SIGN_IN,
		fetcher
	);

	useEffect(() => {
		if (!data) return;

		router.push(ROUTE.HOME);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, router]);

	return {
		trigger,
		isMutating,
		error,
	};
};
