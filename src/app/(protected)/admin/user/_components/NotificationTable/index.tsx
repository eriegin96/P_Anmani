"use client";

import {useCallback, useMemo, useRef} from "react";
import {Image, Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {notificationList, userList} from "@/mock/data";
import {TNotification} from "@/types/notification.type";
import {NOTIFICATION_TYPE_LABEL} from "@/constants/notification";
import {useGetNotifications} from "@/hooks/api/notification/query/useGetNotifications";

type DataIndex = keyof TNotification;

export default function NotificationTable() {
	const searchInput = useRef<InputRef>(null);
	const {data, isLoading} = useGetNotifications();

	const handleSearch = (
		confirm: (param?: FilterConfirmProps) => void,
		close: () => void
	) => {
		confirm();
		close();
	};

	const handleReset = (clearFilters: () => void) => {
		clearFilters();
	};

	const getColumnSearchProps = useCallback(
		(dataIndex: DataIndex): ColumnType<TNotification> => ({
			filterDropdown: ({
				setSelectedKeys,
				selectedKeys,
				confirm,
				clearFilters,
				close,
			}) => (
				<div style={{padding: 8}} onKeyDown={(e) => e.stopPropagation()}>
					<Input
						ref={searchInput}
						placeholder={`Search ${dataIndex}`}
						value={selectedKeys[0]}
						onChange={(e) =>
							setSelectedKeys(e.target.value ? [e.target.value] : [])
						}
						onPressEnter={() => handleSearch(confirm, close)}
						style={{marginBottom: 8, display: "block"}}
					/>
					<Space>
						<Button
							onClick={() => clearFilters && handleReset(clearFilters)}
							size="small"
							style={{width: 90}}
						>
							Reset
						</Button>
						<Button
							type="primary"
							size="small"
							onClick={() => {
								confirm({closeDropdown: false});
								close();
							}}
						>
							Filter
						</Button>
					</Space>
				</div>
			),
			onFilter: (value, record) =>
				record[dataIndex]
					.toString()
					.toLowerCase()
					.includes((value as string).toLowerCase()),
			onFilterDropdownOpenChange: (visible) => {
				if (visible) {
					setTimeout(() => searchInput.current?.select(), 100);
				}
			},
		}),
		[]
	);

	const columns: ColumnsType<TNotification> = useMemo(
		() => [
			{
				title: "Avatar",
				dataIndex: "avatar",
				...getColumnSearchProps("avatar"),
				render: (avatar) => <Image src={avatar} alt="" />,
			},
			{
				title: "Tiêu đề",
				dataIndex: "title",
				...getColumnSearchProps("title"),
				onFilter: (value: string | number | boolean, record) =>
					record.id.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.title.length - b.title.length,
				sortDirections: ["ascend", "descend"],
				render: (title, {id}) => (
					<Link href={`${ROUTE.ADMIN_USER_NOTIFICATION}/${id}`}>{title}</Link>
				),
			},
			{
				title: "Loại",
				dataIndex: "type",
				...getColumnSearchProps("type"),
				onFilter: (value: string | number | boolean, record) =>
					record.id.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.type.length - b.type.length,
				sortDirections: ["ascend", "descend"],
				render: (type) => {
					const newType = type as "update" | "info";
					return <>{NOTIFICATION_TYPE_LABEL[newType]}</>;
				},
			},
			{
				title: "Nội dung",
				dataIndex: "content",
				...getColumnSearchProps("content"),
				onFilter: (value: string | number | boolean, record) =>
					record.id.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.content.length - b.content.length,
				sortDirections: ["ascend", "descend"],
			},
			{
				title: "Đối tượng nhận",
				dataIndex: "target",
				...getColumnSearchProps("target"),
				onFilter: (value: string | number | boolean, record) =>
					record.target.indexOf(value.toString()) === 0,
				sortDirections: ["ascend", "descend"],
				render: (target) => {
					const newTarget = target as string[];
					return (
						<>
							{newTarget.length === 0
								? "Tất cả mọi người"
								: newTarget.map((userId, index) => (
										<span key={userId}>
											{userList.find((user) => user.id === userId)?.name}
											{index === target.length - 1 ? "" : ", "}
										</span>
								  ))}
						</>
					);
				},
			},
		],
		[getColumnSearchProps]
	);

	const onChange: TableProps<TNotification>["onChange"] = (
		pagination,
		filters,
		sorter,
		extra
	) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return (
		<Table
			columns={columns}
			dataSource={data && notificationList}
			pagination={{current: 1, pageSize: 10}}
			loading={isLoading}
			scroll={{x: true}}
			onChange={onChange}
			bordered
		/>
	);
}
