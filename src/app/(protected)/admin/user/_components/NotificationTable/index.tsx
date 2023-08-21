"use client";

import {useCallback, useMemo, useRef} from "react";
import {Image, Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {userList} from "@/mock/data";
import {TNotification} from "@/types/notification.type";
import {NOTIFICATION_TYPE_LABEL} from "@/constants/notification";
import {useGetNotifications} from "@/hooks/api/notification/query/useGetNotifications";
import {useAuthContext} from "@/providers/AuthProvider";
import {useDeleteNotification} from "@/hooks/api/notification";
import {useModalContext} from "@/providers/ModalProvider";
import {IconX} from "@tabler/icons-react";
import {API_ENDPOINT} from "@/constants/api";
import {concatHref} from "@/utils/concatHref";

type DataIndex = keyof TNotification;

export default function NotificationTable() {
	const searchInput = useRef<InputRef>(null);
	const {userInfo} = useAuthContext();
	const {data, isLoading} = useGetNotifications(userInfo);
	const {trigger} = useDeleteNotification();
	const {showMDeleteConfirmationModal} = useModalContext();

	const handleDelete = ({key, title}: {key: string; title: string}) => {
		showMDeleteConfirmationModal({
			trigger,
			id: key,
			name: title,
			keyRevalidate: API_ENDPOINT.NOTIFICATIONS,
		});
	};

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
					record.key.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.title.length - b.title.length,
				sortDirections: ["ascend", "descend"],
				render: (title, {key}) => (
					<Link href={concatHref(ROUTE.ADMIN_USER_NOTIFICATION, key)}>
						{title}
					</Link>
				),
			},
			{
				title: "Loại",
				dataIndex: "type",
				...getColumnSearchProps("type"),
				onFilter: (value: string | number | boolean, record) =>
					record.key.indexOf(value.toString()) === 0,
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
					record.key.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.content.length - b.content.length,
				sortDirections: ["ascend", "descend"],
			},
			{
				title: "Sản phẩm nhận thông báo",
				dataIndex: "productIds",
				...getColumnSearchProps("productIds"),
				onFilter: (value: string | number | boolean, record) =>
					record.productIds.indexOf(value.toString()) === 0,
				sortDirections: ["ascend", "descend"],
				render: (productIds) => {
					const newTarget = productIds as string[];
					return (
						<>
							{newTarget?.length === 0
								? "Tất cả mọi người"
								: newTarget?.map((userId, index) => (
										<span key={userId}>
											{userList.find((user) => user.id === userId)?.name}
											{index === productIds?.length - 1 ? "" : ", "}
										</span>
								  ))}
						</>
					);
				},
			},
			{
				title: "Xóa",
				dataIndex: "action",
				render: (_, {key, title}) => (
					<Button
						danger
						shape="circle"
						onClick={() => handleDelete({key, title})}
					>
						<IconX />
					</Button>
				),
			},
		],
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			dataSource={data}
			pagination={{current: 1, pageSize: 10}}
			loading={isLoading}
			scroll={{x: true}}
			onChange={onChange}
			bordered
		/>
	);
}
