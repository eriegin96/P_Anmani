"use client";

import {Link} from "react-scroll";
import styles from "./pageNav.module.scss";
import size from "@/styles/size.module.scss";

type Props = {
	anchorList: {
		anchor: string;
		title: string;
		component: JSX.Element;
	}[];
};

export default function PageNav({anchorList}: Props) {
	const MARGIN_BOTTOM = 20;
	const offset =
		Number(size.heightHeader.substring(0, size.heightHeader.length - 2)) +
		Number(
			size.heightProductNavbar.substring(0, size.heightProductNavbar.length - 2)
		) +
		MARGIN_BOTTOM;

	return (
		<div>
			<nav className={styles.navBar}>
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
		</div>
	);
}
