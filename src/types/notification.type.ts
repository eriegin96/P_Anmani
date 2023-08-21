import {NOTIFICATION_TYPE} from "@/constants/notification";

export type TNotificationTypeKey = keyof typeof NOTIFICATION_TYPE;
export type TNotificationTypeValue =
	(typeof NOTIFICATION_TYPE)[TNotificationTypeKey];

export type TNotification = {
	key: string;
	type: TNotificationTypeValue;
	avatar: string;
	title: string;
	date: string;
	content: string;
	productIds: string[];
};

export type TNotificationForm = Omit<TNotification, "key">;
