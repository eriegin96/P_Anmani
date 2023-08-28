import {TDescription} from "@/types/product.type";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./description.module.scss";
import {PRODUCT_DESCRIPTION} from "@/constants/product";
import {descriptionTabList} from "./static";

type TDescriptionProps = {
	description: TDescription;
};

export default function Description({
	description: {pros, cons, juridice, delivery},
}: TDescriptionProps) {
	return (
		<div>
			<Tabs.Root
				defaultValue={PRODUCT_DESCRIPTION.PROS}
				className={styles.tabsRoot}
			>
				<Tabs.List aria-label="Description" className={styles.tabsList}>
					{descriptionTabList.map((tab) => (
						<Tabs.Trigger
							key={tab.value}
							value={tab.value}
							className={styles.tabsTrigger}
						>
							<span>{tab.title}</span>
						</Tabs.Trigger>
					))}
				</Tabs.List>

				{descriptionTabList.map((tab) => {
					const tabsContent =
						tab.value === PRODUCT_DESCRIPTION.PROS ? pros : cons;
					return (
						<Tabs.Content
							key={tab.value}
							value={tab.value}
							className={styles.tabsContent}
						>
							<p className={styles.tabContentList}>{tabsContent}</p>
						</Tabs.Content>
					);
				})}
			</Tabs.Root>

			<div>
				<div className={styles.titleWrapper}>
					<span className={styles.title}>Pháp lý: </span>
					<span>{juridice}</span>
				</div>
				<div className={styles.titleWrapper}>
					<span className={styles.title}>Ngày bàn giao: </span>
					<span>{delivery?.date}</span>
				</div>
				<div className={styles.titleWrapper}>
					<span className={styles.title}>Bàn giao: </span>
					<span>{delivery?.info}</span>
				</div>
			</div>
		</div>
	);
}
