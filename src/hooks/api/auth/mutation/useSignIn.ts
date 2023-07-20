import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT, storagePrefix} from "@/constants/api";
import {ROUTE} from "@/constants/route";
import {useAuthContext} from "@/providers/AuthProvider";
import {TSignInFormData, TUserResponse} from "@/types/api.type";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, {arg}: {arg: TSignInFormData}) =>
	axiosInstance
		.post<TUserResponse>(url, JSON.stringify(arg))
		.then((res) => res);

export const useSignIn = () => {
	const router = useRouter();
	const {setUserInfo} = useAuthContext();
	const {data, trigger, isMutating, error} = useSWRMutation(
		API_ENDPOINT.SIGN_IN,
		fetcher
	);

	useEffect(() => {
		if (!data) return;

		setUserInfo({
			email: data.email,
			name: data.firstName,
			role: "user",
			id: data.id,
		});

		data.token &&
			window.localStorage.setItem(
				`${storagePrefix}token`,
				JSON.stringify(data.token)
			);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, router]);

	return {
		trigger,
		isMutating,
		error,
	};
};
