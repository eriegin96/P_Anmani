"use client";

import {Link} from "react-scroll";
import styles from "./pageNav.module.scss";

type Props = {
	anchorList: {
		anchor: string;
		title: string;
		component: JSX.Element;
	}[];
};

export default function PageNav({anchorList}: Props) {
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
						offset={-70}
						duration={300}>
						{item.title}
					</Link>
				))}
			</nav>
		</div>
	);
}
