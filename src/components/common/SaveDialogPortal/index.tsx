"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type {RadioChangeEvent} from "antd";
import {Radio} from "antd";
import styles from "./saveDialogPortal.module.scss";
import clsx from "clsx";
import {PRODUCT_BOOKMARK, TProductBookmarkValue} from "@/constants/product";

type TSaveDialogPortalProps = {
	value?: TProductBookmarkValue;
	onChange: ((e: RadioChangeEvent) => void) | undefined;
};

export default function SaveDialogPortal({
	value,
	onChange,
}: TSaveDialogPortalProps) {
	return (
		<Dialog.Portal className={styles.portal}>
			<Dialog.Overlay className={clsx(styles.overlay, styles.animation)} />
			<Dialog.Content className={clsx(styles.sidebar, styles.animation)}>
				<Radio.Group
					onChange={onChange}
					value={value}
					className={styles.buttons}
				>
					<Radio value={PRODUCT_BOOKMARK.later} className={styles.button}>
						Để xem sau
					</Radio>
					<Radio value={PRODUCT_BOOKMARK.buy} className={styles.button}>
						Cần mua
					</Radio>
					<Radio value={PRODUCT_BOOKMARK.rent} className={styles.button}>
						Cần thuê
					</Radio>
				</Radio.Group>
			</Dialog.Content>
		</Dialog.Portal>
	);
}
