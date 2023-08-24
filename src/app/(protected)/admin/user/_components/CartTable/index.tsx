"use client";

import {useCallback, useMemo, useRef} from "react";
import {Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {TResponseCart} from "@/types/user.type";
import {useGetCarts} from "@/hooks/api/cart/query/useGetCarts";
import {concatHref} from "@/utils/concatHref";
import {useGetUsers} from "@/hooks/api/user";
import {IconX} from "@tabler/icons-react";
import {useModalContext} from "@/providers/ModalProvider";
import {useDeleteCart} from "@/hooks/api/cart";
import {API_ENDPOINT} from "@/constants/api";

type DataIndex = keyof TResponseCart;

export default function CartTable() {
	const searchInput = useRef<InputRef>(null);
	const {data: cartList, isLoading} = useGetCarts();
	const {data: userList} = useGetUsers();
	const {trigger} = useDeleteCart();
	const {showMDeleteConfirmationModal} = useModalContext();

	const handleDelete = ({key}: {key: string}) => {
		showMDeleteConfirmationModal({
			trigger,
			id: key,
			name: key,
			keyRevalidate: API_ENDPOINT.CARTS,
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
		(dataIndex: DataIndex): ColumnType<TResponseCart> => ({
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

	const columns: ColumnsType<TResponseCart> = useMemo(
		() => [
			{
				title: "User cart Id",
				dataIndex: "key",
				...getColumnSearchProps("key"),
				onFilter: (value: string | number | boolean, record) =>
					record.key.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.key.length - b.key.length,
				sortDirections: ["ascend", "descend"],
				render: (userCartId) => (
					<Link href={concatHref(ROUTE.ADMIN_USER_CART, userCartId)}>
						{userCartId}
					</Link>
				),
			},
			{
				title: "Tên khách hàng",
				dataIndex: "user",
				...getColumnSearchProps("user"),
				onFilter: (value: string | number | boolean, record) =>
					record.userId.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.userId.length - b.userId.length,
				sortDirections: ["ascend", "descend"],
				render: ({name, key}) => {
					return <Link href={concatHref(ROUTE.ADMIN_USER, key)}>{name}</Link>;
				},
			},
			{
				title: "Số điện thoại",
				dataIndex: "phoneNumber",
				...getColumnSearchProps("phoneNumber"),
				onFilter: (value: string | number | boolean, record) =>
					record.phoneNumber.indexOf(value.toString()) === 0,
			},
			{
				title: "Địa điểm",
				dataIndex: "meetingLocation",
				...getColumnSearchProps("meetingLocation"),
				onFilter: (value: string | number | boolean, record) =>
					record.meetingLocation.indexOf(value.toString()) === 0,
			},
			{
				title: "Thời gian",
				dataIndex: "date",
				...getColumnSearchProps("date"),
				onFilter: (value: string | number | boolean, record) =>
					record.date.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.date.length - b.date.length,
				sortDirections: ["ascend", "descend"],
			},
			{
				title: "Xóa",
				dataIndex: "action",
				render: (_, {key}) => (
					<Button danger shape="circle" onClick={() => handleDelete({key})}>
						<IconX />
					</Button>
				),
			},
		],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[getColumnSearchProps]
	);

	const onChange: TableProps<TResponseCart>["onChange"] = (
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
			dataSource={cartList}
			pagination={{current: 1, pageSize: 10}}
			loading={isLoading}
			scroll={{x: true}}
			onChange={onChange}
			bordered
		/>
	);
}
