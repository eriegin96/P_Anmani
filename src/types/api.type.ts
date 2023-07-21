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
	accessToken: string;
	refreshToken: string;
};

export type TUserResponse = Omit<TUser, "role"> & {
	token: string;
	firstName: string;
};

export type TUserInfoFormData = Omit<TUserResponse, "id" | "token">;
