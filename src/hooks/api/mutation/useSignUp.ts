import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {ROUTE} from "@/constants/route";
import {TSignUpFormData} from "@/types/api.type";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TSignUpFormData}) =>
	axiosInstance
		.post<TSignUpFormData>(url, JSON.stringify(arg))
		.then((res) => res);

export const useSignUp = () => {
	const router = useRouter();
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.SIGN_UP,
		fetcher
	);

	useEffect(() => {
		if (!data) return;

		router.push(ROUTE.SIGN_IN);
	}, [data, router]);

	return {
		trigger,
		isMutating,
		error,
	};
};
