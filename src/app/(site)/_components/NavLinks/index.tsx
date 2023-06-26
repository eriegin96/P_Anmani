import Link from "next/link";
import {navLinkList} from "./data";
import styles from "./navLinks.module.scss";
import Image from "next/image";
import {IconCollision} from "@/assets";

export default function NavLinks() {
	return (
		<ul className={styles.list}>
			{navLinkList.map((link) => (
				<li key={link.title} className={styles.listItem}>
					<Link href={link.href} className={styles.link}>
						{link.icon}
						{link.title}
					</Link>
					{link.tag && (
						<span className={styles.tag}>
							<Image src={IconCollision} alt="" width={36} height={36} />
							<span>{link.tag}</span>
						</span>
					)}
				</li>
			))}
		</ul>
	);
}
