import clsx from "clsx";
import styles from "./comparisonTable.module.scss";
import {annotationList} from "./static";

type TComparisonTableProps = {
	data: Array<{
		key: string;
		name: string;
		sup?: string;
		buy: string;
		rent: string;
	}>;
};

export default function ComparisonTable({data}: TComparisonTableProps) {
	return (
		<div className={styles.wrapper}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th></th>
						<th>Mua nhà</th>
						<th>Thuê nhà</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr key={row.key}>
							<td>
								{row.name}
								{row?.sup && <sup>{row.sup}</sup>}
							</td>
							<td>{row.buy}</td>
							<td>{row.rent}</td>
						</tr>
					))}
				</tbody>
			</table>

			{annotationList.map(({id, key, content}) => (
				<p
					key={id}
					className={clsx(
						styles.note,
						(id === "out" || id === "in") && styles.inline
					)}
				>
					<span className={styles.noteKey}>{key}</span>
					{`: `}
					{content}
				</p>
			))}
		</div>
	);
}
