import {useCallback, useMemo, useRef} from "react";
import {Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {TProduct} from "@/types/product.type";
import {IconX} from "@tabler/icons-react";
import {useGetProducts} from "@/hooks/api/product/query/useGetProducts";
import {useDeleteProduct} from "@/hooks/api/product";
import {useModalContext} from "@/providers/ModalProvider";

type DataIndex = keyof TProduct;

export default function ProductTable() {
	const searchInput = useRef<InputRef>(null);
	const {data, isLoading} = useGetProducts();
	const {trigger} = useDeleteProduct();
	const {showMDeleteConfirmationModal} = useModalContext();

	const handleDelete = (productId: string) => {
		showMDeleteConfirmationModal({trigger, id: productId});
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
		(dataIndex: DataIndex): ColumnType<TProduct> => ({
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

	const columns: ColumnsType<TProduct> = useMemo(
		() => [
			{
				title: "Tên BĐS",
				dataIndex: "name",
				...getColumnSearchProps("name"),
				onFilter: (value: string | number | boolean, record) =>
					record.name.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.name.length - b.name.length,
				sortDirections: ["ascend", "descend"],
				render: (name, {key}) => (
					<Link href={`${ROUTE.ADMIN_PRODUCT}/${key}`}>{name}</Link>
				),
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
				...getColumnSearchProps("location"),
				sorter: (a, b) => a.location.main.length - b.location.main.length,
				render: (location) => <>{location.main}</>,
			},
			{
				title: "Xóa",
				dataIndex: "action",
				render: (_, {id}) => (
					<Button danger shape="circle" onClick={() => handleDelete(id)}>
						<IconX />
					</Button>
				),
			},
		],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[getColumnSearchProps]
	);

	const onChange: TableProps<TProduct>["onChange"] = (
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
