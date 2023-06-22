import Image from "next/image";
import Title from "../Title";
import styles from "./personalInfo.module.scss";
import {personalInfo, soldProjects} from "./data";

export default function PersonalInfo() {
	return (
		<div>
			<Title>Thông tin cá nhân</Title>
			<div className={styles.wrapper}>
				<Image
					src="https://picsum.photos/id/15/200/300"
					alt=""
					width={200}
					height={300}
				/>

				<ul className={styles.infoList}>
					{personalInfo.map((info) => (
						<li key={info.id} className={styles.info}>
							<span>{info.name}</span>
							<span>{info.value}</span>
						</li>
					))}
					<br />
					{soldProjects.map((info) => (
						<li key={info.id} className={styles.info}>
							<span>{info.name}</span>
							<span>{info.value}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
