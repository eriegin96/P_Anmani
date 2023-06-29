"use client";

import {Link} from "react-scroll";
import styles from "./pageNav.module.scss";
import size from "@/styles/size.module.scss";
import {useEffect, useState} from "react";

type Props = {
	anchorList: {
		anchor: string;
		title: string;
		component: JSX.Element;
	}[];
};

const MARGIN_BOTTOM = 20;
const SHOW_HEADER_POSITION = 250;

export default function PageNav({anchorList}: Props) {
	const offset =
		Number(size.heightHeader.substring(0, size.heightHeader.length - 2)) +
		Number(
			size.heightProductNavbar.substring(0, size.heightProductNavbar.length - 2)
		) +
		MARGIN_BOTTOM;
	const [scrollY, setScrollY] = useState(0);
	const scrollRate = scrollY / SHOW_HEADER_POSITION;

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={styles.navBar}
			style={{
				opacity: scrollRate,
				pointerEvents: scrollRate > 0 ? "auto" : "none",
			}}>
			{anchorList.map((item) => (
				<Link
					key={item.anchor}
					activeClass={styles.linkActive}
					className={styles.link}
					to={item.anchor}
					spy={true}
					hashSpy={true}
					smooth={true}
					offset={-offset}
					duration={300}>
					{item.title}
				</Link>
			))}
		</nav>
	);
}
