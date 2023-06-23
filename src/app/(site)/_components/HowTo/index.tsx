import Title from "../Title";
import {stepList} from "./data";
import styles from "./howTo.module.scss";

export default function HowTo() {
	return (
		<div className={styles.wrapper}>
			<Title>Cách thức mua hàng</Title>
			<div className={styles.textWrapper}>
				{stepList.map((step) => (
					<div key={step.title} className={styles.stepBlock}>
						<span>{step.title}</span>
						<p>{step.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
