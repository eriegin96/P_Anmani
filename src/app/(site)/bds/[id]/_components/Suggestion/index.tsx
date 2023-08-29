import {ProductCard} from "@/app/(site)/_components";
import {TProduct} from "@/types/product.type";
import {Col, Row} from "antd";
import styles from "./suggestion.module.scss";

type TSuggestionProps = {
	product: TProduct;
};

export default function Suggestion({product: {suggestions}}: TSuggestionProps) {
	return (
		<Row className={styles.row}>
			{suggestions.slice(0, 4).map((product) => (
				<Col key={product.key} span={12}>
					<ProductCard info={product} isShowView />
				</Col>
			))}
		</Row>
	);
}
