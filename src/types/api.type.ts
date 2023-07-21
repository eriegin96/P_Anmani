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

export type TUserResponse = {
	id: string;
	firstName: string;
	gender: "male" | "female";
	email: string;
	token: string;
};
