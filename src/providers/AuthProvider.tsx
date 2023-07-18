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
	userInfo: TUser | null;
	setUserInfo: Dispatch<SetStateAction<TUser | null>>;
};

type TAuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext<TAuthContextDefault>({
	userInfo: null,
	setUserInfo: () => {},
});

export default function AuthProvider({children}: TAuthProviderProps) {
	const [userInfo, setUserInfo] = useState<TUser | null>(null);

	const value = {
		userInfo,
		setUserInfo,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
