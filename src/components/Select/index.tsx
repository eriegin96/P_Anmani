"use client";

import * as RadixSelect from "@radix-ui/react-select";

import {IconCheck, IconChevronDown, IconChevronUp} from "@tabler/icons-react";
import styles from "./select.module.scss";

type TSelectProps = {
	placeholder: string;
	items: any[];
};

export default function Select({placeholder, items}: TSelectProps) {
	return (
		<RadixSelect.Root>
			<RadixSelect.Trigger className={styles.selectTrigger}>
				<RadixSelect.Value placeholder={placeholder} />
				<RadixSelect.Icon className={styles.selectIcon}>
					<IconChevronDown size={20} />
				</RadixSelect.Icon>
			</RadixSelect.Trigger>

			<RadixSelect.Portal className={styles.selectPortal}>
				<RadixSelect.Content className={styles.selectContent}>
					<RadixSelect.Viewport className={styles.selectViewPort}>
						<RadixSelect.Item value="" className={styles.selectItem}>
							<RadixSelect.ItemText>{placeholder}</RadixSelect.ItemText>
							<RadixSelect.ItemIndicator className={styles.selectItemIndicator}>
								<IconCheck size={20} />
							</RadixSelect.ItemIndicator>
						</RadixSelect.Item>
						{items.map((item) => (
							<RadixSelect.Item
								key={item.value}
								value={item.value}
								className={styles.selectItem}>
								<RadixSelect.ItemText>{item.title}</RadixSelect.ItemText>
								<RadixSelect.ItemIndicator
									className={styles.selectItemIndicator}>
									<IconCheck size={20} />
								</RadixSelect.ItemIndicator>
							</RadixSelect.Item>
						))}
					</RadixSelect.Viewport>
					<RadixSelect.Arrow />
				</RadixSelect.Content>
			</RadixSelect.Portal>
		</RadixSelect.Root>
	);
}
