import {Input, TableProps} from "antd";
import styles from "./giaVang.module.scss";
import clsx from "clsx";

export type TGoldTable = {
	key: string;
	name: string;
	buyPrice?: number;
	sellPrice?: number;
};

export const goldColumns: TableProps<TGoldTable>["columns"] = [
	{
		title: "LOẠI VÀNG",
		dataIndex: "name",
		key: "name",
		render: () => <input className={clsx(styles.input, styles.firstCol)} />,
	},
	{
		title: "GIÁ MUA",
		dataIndex: "buyPrice",
		key: "buyPrice",
		render: () => <input className={styles.input} />,
	},
	{
		title: "GIÁ BÁN",
		dataIndex: "sellPrice",
		key: "sellPrice",
		render: () => <input className={styles.input} />,
	},
];

export const goldData: TGoldTable[] = [
	{
		key: "1",
		name: "VÀNG 24K",
	},
	{
		key: "2",
		name: "VÀNG 23K",
	},
	{
		key: "3",
		name: "VÀNG 610",
	},
	{
		key: "4",
		name: "VÀNG 10K",
	},
	{
		key: "5",
		name: "BẠC  ",
	},
	{
		key: "6",
		name: "BẠC  ",
	},
	{
		key: "7",
		name: "BẠC  ",
	},
];
