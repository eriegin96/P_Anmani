"use client";

import {useParams} from "next/navigation";
import NotificationForm from "../../_components/NotificationForm";

export default function AdminUserNotificationPage() {
	const {id} = useParams();
	return (
		<div>
			<NotificationForm id={id} />
		</div>
	);
}
