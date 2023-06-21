"use client";

import {TUser} from "@/types/user.type";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

type TAuthContextDefault = {
	userInfo?: TUser | undefined;
	setUserInfo?: Dispatch<SetStateAction<TUser | undefined>>;
};

type TAuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext<TAuthContextDefault>({});

export default function AuthProvider({children}: TAuthProviderProps) {
	const [userInfo, setUserInfo] = useState<TUser | undefined>(undefined);

	const value = {
		userInfo,
		setUserInfo,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
