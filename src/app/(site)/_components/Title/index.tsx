import {ReactNode} from "react";
import styles from "./title.module.scss";

type TTitleProps = {
	children: ReactNode;
};

export default function Title({children}: TTitleProps) {
	return <h2 className={styles.title}>{children}</h2>;
}
