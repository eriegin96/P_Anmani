import styles from "./auth.module.scss";

export default function layout({children}: {children: React.ReactNode}) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.backgroundWrapper}>
				<div className={styles.loginWrapper}>{children}</div>
			</div>
		</div>
	);
}
