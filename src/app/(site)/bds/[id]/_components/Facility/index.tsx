import {TProduct} from "@/types/product.type";
import styles from "./facilities.module.scss";
import {facilityList} from "./static";

type TFacilityProps = {
	product: TProduct;
};

export default function Facility({product}: TFacilityProps) {
	return (
		<>
			<ul className={styles.wrapper}>
				{facilityList.map((facility) => (
					<li key={facility.value} className={styles.item}>
						<div className={styles.topSection}>{facility.icon}</div>
						<span className={styles.info}>
							{product.information[facility.value]}
						</span>
					</li>
				))}
			</ul>
		</>
	);
}
