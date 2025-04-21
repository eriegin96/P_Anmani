"use client";

import {ROUTE} from "@/constants/route";
import {useParams, usePathname} from "next/navigation";
import {ReactNode, createContext, useContext, useEffect, useState} from "react";

type TLayoutContextDefault = {
	isAtExplorePage: boolean;
	isAtGiaVangPage: boolean;
};

type TLayoutProviderProps = {
	children: ReactNode;
};

export const LayoutContext = createContext<TLayoutContextDefault>({
	isAtExplorePage: false,
	isAtGiaVangPage: false,
});

export default function LayoutProvider({children}: TLayoutProviderProps) {
	const pathname = usePathname();
	const {id} = useParams();
	const isAtExplorePage = Boolean(pathname.includes(ROUTE.EXPLORE) && id);
	const isAtGiaVangPage = pathname.includes(ROUTE.GOLD);

	const value = {
		isAtExplorePage,
		isAtGiaVangPage,
	};

	return (
		<LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
	);
}

export const useLayoutContext = () => useContext(LayoutContext);
