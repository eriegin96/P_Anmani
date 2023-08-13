import {TUser} from "./user.type";

export type TSignUpFormData = {
	email?: string;
	name?: string;
	username?: string;
	password: string;
};

export type TSignInFormData = {
	email?: string;
	username?: string;
	password: string;
};

export type TTokenResponse = {
	access_token: string;
};

export type TUserResponse = Omit<TUser, "id"> & {key: string};

export type TUserInfoFormData = Omit<TUserResponse, "id">;
