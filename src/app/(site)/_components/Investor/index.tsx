import Image from "next/image";
import styles from "./investor.module.scss";

type TCategoryProps = {
	investor: {title: string; src: string};
};

export default function Investor({investor}: TCategoryProps) {
	const {title, src} = investor;

	return (
		<div>
			<h3 className={styles.title}>Đối tác chủ đầu tư {title}</h3>
			<div className={styles.wrapper}>
				<Image src={src} alt="" fill />
			</div>
		</div>
	);
}
