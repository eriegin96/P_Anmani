import {TProduct} from "@/types/product.type";
import styles from "./utility.module.scss";
import {Collapse} from "antd";

type TUtilityProps = {
	product: TProduct;
};

export default function Utility({product}: TUtilityProps) {
	const items = [
		{
			key: "all",
			label: "Xem tất cả tiện ích",
			children: (
				<ul className={styles.list}>
					{product?.utility?.map((util) => (
						<li key={util}>{util}</li>
					))}
				</ul>
			),
			showArrow: false,
		},
	];

	return <Collapse items={items} ghost className={styles.collapse} />;
}
