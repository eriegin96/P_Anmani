"use client";

import {useCallback, useMemo, useRef} from "react";
import {Image, Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {exploreVideoList, notificationList, userList} from "@/mock/data";
import {NOTIFICATION_TYPE_LABEL} from "@/constants/notification";
import {TExploreVideo} from "@/types/video.type";

type DataIndex = keyof TExploreVideo;

export default function ExploreTable() {
	const searchInput = useRef<InputRef>(null);
	const isLoading = false;

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
		(dataIndex: DataIndex): ColumnType<TExploreVideo> => ({
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

	const columns: ColumnsType<TExploreVideo> = useMemo(
		() => [
			{
				title: "Tiêu đề",
				dataIndex: "title",
				...getColumnSearchProps("title"),
				onFilter: (value: string | number | boolean, record) =>
					record.id.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.title.length - b.title.length,
				sortDirections: ["ascend", "descend"],
				render: (title, {id}) => (
					<Link href={`${ROUTE.ADMIN_EXPLORE}/${id}`}>{title}</Link>
				),
			},
			{
				title: "Link hình ảnh/video chính",
				dataIndex: "url",
				...getColumnSearchProps("url"),
				render: (url) => (
					<a href={url} target="_black" rel="noreferer">
						{url}
					</a>
				),
			},
		],
		[getColumnSearchProps]
	);

	const onChange: TableProps<TExploreVideo>["onChange"] = (
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
			dataSource={exploreVideoList}
			pagination={{current: 1, pageSize: 10}}
			loading={isLoading}
			scroll={{x: true}}
			onChange={onChange}
			bordered
		/>
	);
}
