import {REPORT} from "@/constants/report";
import {reportList} from "@/mock/data";

export default function Page() {
	return (
		<div>
			{reportList.map((report) => (
				<div key={report.key}>
					<a href={report.href} target="_blank" rel="noreferer" download>
						{REPORT[report.value].label}
					</a>
				</div>
			))}
		</div>
	);
}
