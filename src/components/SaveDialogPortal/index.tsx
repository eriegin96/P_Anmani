"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type {RadioChangeEvent} from "antd";
import {Radio} from "antd";
import styles from "./saveDialogPortal.module.scss";
import clsx from "clsx";
import {PRODUCT_SAVE_VALUE} from "@/constants/value";

type TSaveDialogPortalProps = {
	value: string;
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
					className={styles.buttons}>
					<Radio value={PRODUCT_SAVE_VALUE.LATER} className={styles.button}>
						Để xem sau
					</Radio>
					<Radio value={PRODUCT_SAVE_VALUE.BUY} className={styles.button}>
						Cần mua
					</Radio>
					<Radio value={PRODUCT_SAVE_VALUE.RENT} className={styles.button}>
						Cần thuê
					</Radio>
				</Radio.Group>
			</Dialog.Content>
		</Dialog.Portal>
	);
}
