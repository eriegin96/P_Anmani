"use client";

import {useGetVoucherById} from "@/hooks/api/voucher/query/useGetVoucherById";
import VoucherForm from "../_components/VoucherForm";
import Loading from "@/app/(site)/loading";

type TAdminVoucherPageProps = {
	params: {id: string};
};

export default function AdminVoucherPage({
	params: {id},
}: TAdminVoucherPageProps) {
	const {data, isLoading} = useGetVoucherById(id);

	return (
		<>
			{isLoading && <Loading />}
			{data && <VoucherForm isEditing />}
		</>
	);
}
