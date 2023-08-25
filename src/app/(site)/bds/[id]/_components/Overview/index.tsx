import ImagePreviewGroup from "../ImagePreviewGroup";
import {TProduct} from "@/types/product.type";
import styles from "./overview.module.scss";
import {IconMapPin} from "@tabler/icons-react";
import {PRODUCT_TYPE} from "@/constants/product";
import {LOCATION} from "@/constants/location";

type TOverViewProps = {
	product: TProduct;
};

export default function OverView({product}: TOverViewProps) {
	return (
		<>
			<ImagePreviewGroup image={product.image} />
			<div className={styles.wrapper}>
				<h3 className={styles.title}>{product?.name}</h3>
				<div className={styles.typeWrapper}>
					<span className={styles.type}>
						{PRODUCT_TYPE[product?.type].label}
					</span>
				</div>
				<span className={styles.location}>
					<IconMapPin size={20} />
					<p>
						{product?.location.sub}, {LOCATION[product?.location.main].label}
					</p>
				</span>
			</div>
		</>
	);
}
