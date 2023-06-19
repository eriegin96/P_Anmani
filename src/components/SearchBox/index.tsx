import styles from "./searchBox.module.scss";
import {IconSearch} from "@tabler/icons-react";

export default function SearchBox() {
	return (
		<div className={styles.wrapper}>
			<IconSearch size={20} className={styles.icon} />
			<input type="text" className={styles.input} />
		</div>
	);
}
