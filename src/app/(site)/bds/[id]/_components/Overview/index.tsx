import ImagePreviewGroup from "../ImagePreviewGroup";
import {TProduct} from "@/types/product.type";
import styles from "./overview.module.scss";
import {IconMapPin, IconStarFilled} from "@tabler/icons-react";
import {PRODUCT_TYPE} from "@/constants/product";
import {LOCATION} from "@/constants/location";

import {useProductComparisonContext} from "@/providers/ProductComparisonProvider";
import {Button} from "@/components";

type TOverViewProps = {
	product: TProduct;
};

export default function OverView({product}: TOverViewProps) {
	const {setComparisonProduct, showDrawer} = useProductComparisonContext();
	const stars = Array.from(Array(product.star ?? 5).keys());

	const handleAddComparison = () => {
		setComparisonProduct(product.key);
		showDrawer();
	};

	return (
		<>
			<ImagePreviewGroup image={product.image} />
			<div className={styles.wrapper}>
				<h3 className={styles.title}>{product?.name}</h3>
				<div className={styles.typeWrapper}>
					<span className={styles.type}>
						{PRODUCT_TYPE[product?.type].label}
					</span>
					<span className={styles.star}>
						{stars.map((star) => (
							<IconStarFilled key={star} />
						))}
					</span>
				</div>
				<span className={styles.location}>
					<IconMapPin size={20} />
					<p>
						{product?.location.sub}, {LOCATION[product?.location.main].label}
					</p>
				</span>
				<div className={styles.subTypeWrapper}>
					<span>{product.view} người dùng đã xem</span>
					<Button className={styles.btn} onClick={handleAddComparison}>
						So sánh
					</Button>
				</div>
			</div>
		</>
	);
}
