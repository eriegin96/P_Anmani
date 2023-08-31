import {TProductBookmarkValue} from "@/constants/product";
import {TUser} from "./user.type";
import {TProduct} from "./product.type";

export type TBookmarkRequest = {
	userId: string;
	productId: string;
	type?: TProductBookmarkValue;
};

export type TBookmarkResponse = TBookmarkRequest & {
	key: string;
	userId: string;
	productId: string;
	user: TUser;
	product: TProduct;
};
