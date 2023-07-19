"use client";

import {useGetNotificationById} from "@/hooks/api/notification/query/useGetNotificationById";
import NotificationForm from "../../_components/NotificationForm";
import Loading from "@/app/(site)/loading";

type TAdminUserNotificationPageProps = {
	params: {id: string};
};

export default function AdminUserNotificationPage({
	params: {id},
}: TAdminUserNotificationPageProps) {
	const {data, isLoading} = useGetNotificationById(id);

	return (
		<>
			{isLoading && <Loading />}
			{data && <NotificationForm isEditing />}
		</>
	);
}
