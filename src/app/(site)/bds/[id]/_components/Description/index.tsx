import {TProduct} from "@/types/product.type";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./description.module.scss";
import {PRODUCT_DESCRIPTION} from "@/constants/product";
import {descriptionTabList} from "./data";

type TDescriptionProps = {
	product: TProduct;
};

export default function Description({product}: TDescriptionProps) {
	return (
		<div>
			<Tabs.Root
				defaultValue={PRODUCT_DESCRIPTION.PROS}
				className={styles.tabsRoot}>
				<Tabs.List aria-label="Description" className={styles.tabsList}>
					{descriptionTabList.map((tab) => (
						<Tabs.Trigger
							key={tab.value}
							value={tab.value}
							className={styles.tabsTrigger}>
							<span>{tab.title}</span>
						</Tabs.Trigger>
					))}
				</Tabs.List>

				{descriptionTabList.map((tab) => {
					const tabsContent =
						tab.value === PRODUCT_DESCRIPTION.PROS
							? product.description.pros
							: product.description.cons;
					return (
						<Tabs.Content
							key={tab.value}
							value={tab.value}
							className={styles.tabsContent}>
							<p className={styles.tabContentList}>{tabsContent}</p>
						</Tabs.Content>
					);
				})}
			</Tabs.Root>
		</div>
	);
}
