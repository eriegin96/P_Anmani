"use client";

import {useCallback, useMemo, useRef} from "react";
import {Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {userCartList, userList} from "@/mock/data";
import {TUserCart} from "@/types/user.type";
import {useGetCarts} from "@/hooks/api/cart/query/useGetCarts";

type DataIndex = keyof TUserCart;

export default function CartTable() {
	const searchInput = useRef<InputRef>(null);
	const {data, isLoading} = useGetCarts();

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
		(dataIndex: DataIndex): ColumnType<TUserCart> => ({
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

	const columns: ColumnsType<TUserCart> = useMemo(
		() => [
			{
				title: "User cart Id",
				dataIndex: "id",
				...getColumnSearchProps("id"),
				onFilter: (value: string | number | boolean, record) =>
					record.id.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.id.length - b.id.length,
				sortDirections: ["ascend", "descend"],
				render: (userCartId) => (
					<Link href={`${ROUTE.ADMIN_USER_CART}/${userCartId}`}>
						{userCartId}
					</Link>
				),
			},
			{
				title: "Tên khách hàng",
				dataIndex: "bookingInfo",
				...getColumnSearchProps("bookingInfo"),
				onFilter: (value: string | number | boolean, record) =>
					record.bookingInfo.userId.indexOf(value.toString()) === 0,
				sorter: (a, b) =>
					a.bookingInfo.userId.length - b.bookingInfo.userId.length,
				sortDirections: ["ascend", "descend"],
				render: ({userId}) => {
					const userName = userList.find((user) => user.id === userId)?.name;
					return <Link href={`${ROUTE.ADMIN_USER}/${userId}`}>{userName}</Link>;
				},
			},
			{
				title: "Số điện thoại",
				dataIndex: ["bookingInfo", "phoneNumber"],
				...getColumnSearchProps("bookingInfo"),
				onFilter: (value: string | number | boolean, record) =>
					record.bookingInfo.phoneNumber.indexOf(value.toString()) === 0,
			},
			{
				title: "Địa điểm",
				dataIndex: ["bookingInfo", "place"],
				...getColumnSearchProps("bookingInfo"),
				onFilter: (value: string | number | boolean, record) =>
					record.bookingInfo.place.indexOf(value.toString()) === 0,
			},
			{
				title: "Thời gian",
				dataIndex: ["bookingInfo", "date"],
				...getColumnSearchProps("bookingInfo"),
				onFilter: (value: string | number | boolean, record) =>
					record.bookingInfo.userId.indexOf(value.toString()) === 0,
				sorter: (a, b) =>
					a.bookingInfo.userId.length - b.bookingInfo.userId.length,
				sortDirections: ["ascend", "descend"],
			},
		],
		[getColumnSearchProps]
	);

	const onChange: TableProps<TUserCart>["onChange"] = (
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
			dataSource={data && userCartList}
			pagination={{current: 1, pageSize: 10}}
			loading={isLoading}
			scroll={{x: true}}
			onChange={onChange}
			bordered
		/>
	);
}
