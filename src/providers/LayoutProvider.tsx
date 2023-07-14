"use client";

import {ROUTE} from "@/constants/route";
import {useParams, usePathname} from "next/navigation";
import {ReactNode, createContext, useContext, useEffect, useState} from "react";

type TLayoutContextDefault = {
	isAtExplorePage: boolean;
};

type TLayoutProviderProps = {
	children: ReactNode;
};

export const LayoutContext = createContext<TLayoutContextDefault>({
	isAtExplorePage: false,
});

export default function LayoutProvider({children}: TLayoutProviderProps) {
	const pathname = usePathname();
	const {id} = useParams();
	const [isAtExplorePage, setIsExplorePage] = useState(false);

	useEffect(() => {
		setIsExplorePage(Boolean(pathname.includes(ROUTE.EXPLORE) && id));
	}, [pathname, id]);

	const value = {
		isAtExplorePage,
	};

	return (
		<LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
	);
}

export const useLayoutContext = () => useContext(LayoutContext);
