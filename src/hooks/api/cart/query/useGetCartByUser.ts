import {axiosInstance} from "@/api/axios";
import {API_ENDPOINT} from "@/constants/api";
import {useAuthContext} from "@/providers/AuthProvider";
import {TCartResponse} from "@/types/user.type";
import {usePathname} from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) =>
	axiosInstance.get<TCartResponse[]>(url).then((res) => res);

export const useGetCartByUser = () => {
	const {userInfo} = useAuthContext();
	const path = usePathname();

	return useSWR(
		!path.includes("admin") && userInfo
			? `${API_ENDPOINT.CARTS}?userId=${userInfo.key}&status=pending`
			: null,
		fetcher
	);
};
