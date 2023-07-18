import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {TSignUpFormData} from "@/types/api.type";
import useSWRMutation from "swr/mutation";

export const useSignUp = () => {
	const {trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.SIGN_IN,
		(url, {arg}: {arg: TSignUpFormData}) =>
			axiosInstance.post(url, JSON.stringify(arg)).then((res) => res)
	);

	return {
		trigger,
		isMutating,
		error,
	};
};
