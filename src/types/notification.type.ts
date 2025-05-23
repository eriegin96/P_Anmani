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
	expire: string;
	content: string;
	productIds?: string[];
	products?: TProduct[];
	users?: TUser[];
};

export type TNotificationRequest = TNotification & {
	productIds: string[];
};

export type TNotificationResponse = Omit<
	TNotification & {
		products: TProduct[];
		users: TUser[];
	},
	"productIds"
>;

export type TNotificationForm = Omit<TNotificationRequest, "key">;
