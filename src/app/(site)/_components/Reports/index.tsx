import Title from "../Title";
import {reportList} from "./data";
import styles from "./reports.module.scss";

export default function Reports() {
	// TODO call api and put link in href

	return (
		<>
			<Title>Báo cáo thị trường cập nhật thường xuyên</Title>
			<ul className={styles.reportList}>
				{reportList.map((report) => (
					<li key={report.title} className={styles.reportItem}>
						<a href="/" target="_blank" rel="noreferrer">
							{report.icon}
							{report.title}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
