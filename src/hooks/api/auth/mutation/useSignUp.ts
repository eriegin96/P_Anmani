import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TSignUpFormData} from "@/types/api.type";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TSignUpFormData}) =>
	axiosInstance
		.post<TSignUpFormData>(url, JSON.stringify(arg))
		.then((res) => res);

export const useSignUp = () => {
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.SIGN_UP,
		fetcher
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
