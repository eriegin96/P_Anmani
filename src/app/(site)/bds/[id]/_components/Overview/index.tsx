import ImagePreviewGroup from "../ImagePreviewGroup";
import {TProduct} from "@/types/product.type";
import styles from "./overview.module.scss";
import {IconMapPin} from "@tabler/icons-react";

type TOverViewProps = {
	product: TProduct;
};

export default function OverView({product}: TOverViewProps) {
	return (
		<>
			<ImagePreviewGroup />
			<div className={styles.wrapper}>
				<h3 className={styles.title}>{product?.name}</h3>
				<div className={styles.typeWrapper}>
					<span className={styles.type}>{product?.type}</span>
				</div>
				<span className={styles.location}>
					<IconMapPin size={20} />
					<p>
						{product?.location.sub}, {product?.location.main}
					</p>
				</span>
			</div>
		</>
	);
}
