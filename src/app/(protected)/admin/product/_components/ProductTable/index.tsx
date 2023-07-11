import {useCallback, useMemo, useRef} from "react";
import {Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import {data} from "../../static";

export interface DataType {
	key: React.Key;
	name: string;
	price: number;
	location: string;
}

type DataIndex = keyof DataType;

export default function ProductTable() {
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
		(dataIndex: DataIndex): ColumnType<DataType> => ({
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

	const columns: ColumnsType<DataType> = useMemo(
		() => [
			{
				title: "Tên BĐS",
				dataIndex: "name",
				...getColumnSearchProps("name"),
				onFilter: (value: string | number | boolean, record) =>
					record.name.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.name.length - b.name.length,
				sortDirections: ["ascend", "descend"],
			},
			{
				title: "Giá",
				dataIndex: "price",
				...getColumnSearchProps("price"),
				sorter: (a, b) => a.price - b.price,
				sortDirections: ["ascend", "descend"],
			},
			{
				title: "Địa điểm",
				dataIndex: "location",
				sorter: (a, b) => a.location.length - b.location.length,
				...getColumnSearchProps("location"),
			},
		],
		[getColumnSearchProps]
	);

	const onChange: TableProps<DataType>["onChange"] = (
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
			onChange={onChange}
			bordered
		/>
	);
}
