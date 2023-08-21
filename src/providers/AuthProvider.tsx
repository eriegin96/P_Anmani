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
	isChecked: boolean;
	setIsChecked: Dispatch<SetStateAction<boolean>>;
};

type TAuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext<TAuthContextDefault>({
	userInfo: null,
	setUserInfo: () => {},
	isChecked: false,
	setIsChecked: () => {},
});

export default function AuthProvider({children}: TAuthProviderProps) {
	const [userInfo, setUserInfo] = useState<TUser | null>(null);
	const [isChecked, setIsChecked] = useState(false);

	const value = {
		userInfo,
		setUserInfo,
		isChecked,
		setIsChecked,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
