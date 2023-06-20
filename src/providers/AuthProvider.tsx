"use client";

import {IUser} from "@/types/user.type";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

type TAuthContextDefault = {
	userInfo?: IUser | undefined;
	setUserInfo?: Dispatch<SetStateAction<IUser | undefined>>;
};

type TAuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext<TAuthContextDefault>({});

export default function AuthProvider({children}: TAuthProviderProps) {
	const [userInfo, setUserInfo] = useState<IUser | undefined>(undefined);

	const value = {
		userInfo,
		setUserInfo,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
