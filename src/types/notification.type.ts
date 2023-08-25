import {NOTIFICATION_TYPE} from "@/constants/notification";
import {TProduct} from "./product.type";
import {TUser} from "./user.type";

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
};

export type TNotificationRequest = TNotification & {
	productIds: string[];
};

export type TNotificationResponse = TNotification & {
	products: TProduct[];
	users: TUser[];
};

export type TNotificationForm = Omit<TNotificationRequest, "key">;
