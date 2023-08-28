import {TProduct} from "@/types/product.type";
import styles from "./information.module.scss";
import {informationList} from "./static";

type TInformationProps = {
	product: TProduct;
};

export default function Information({product}: TInformationProps) {
	return (
		<>
			<ul className={styles.wrapper}>
				{informationList.map(({value, icon}) => (
					<li key={value} className={styles.item}>
						<div className={styles.topSection}>{icon}</div>
						<span className={styles.info}>{product.information[value]}</span>
					</li>
				))}
			</ul>
		</>
	);
}
