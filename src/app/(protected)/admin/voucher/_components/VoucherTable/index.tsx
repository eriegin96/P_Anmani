import {useCallback, useMemo, useRef} from "react";
import {Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {TVoucher} from "@/types/voucher.type";
import {formatCurrency} from "@/utils/formatCurrency";
import {IconX} from "@tabler/icons-react";
import {useGetVouchers} from "@/hooks/api/voucher/query/useGetVouchers";
import {useDeleteVoucher} from "@/hooks/api/voucher";
import {useModalContext} from "@/providers/ModalProvider";
import {useGetProducts} from "@/hooks/api/product";
import {API_ENDPOINT} from "@/constants/api";
import {concatHref} from "@/utils/concatHref";
import {PRODUCT_TYPE, TProductTypeValue} from "@/constants/product";
import {formatDate} from "@/utils/formatDate";

type DataIndex = keyof TVoucher;

export default function VoucherTable() {
	const searchInput = useRef<InputRef>(null);
	const {data: voucherList, isLoading} = useGetVouchers();
	const {data: productList} = useGetProducts();
	const {trigger} = useDeleteVoucher();
	const {showMDeleteConfirmationModal} = useModalContext();

	const handleDelete = ({key}: {key: string}) => {
		showMDeleteConfirmationModal({
			trigger,
			id: key,
			name: key,
			keyRevalidate: API_ENDPOINT.VOUCHERS,
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
		(dataIndex: DataIndex): ColumnType<TVoucher> => ({
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

	const columns: ColumnsType<TVoucher> = useMemo(
		() => [
			{
				title: "Voucher ID",
				dataIndex: "key",
				...getColumnSearchProps("key"),
				onFilter: (value: string | number | boolean, record) =>
					record.key.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.key.length - b.key.length,
				sortDirections: ["ascend", "descend"],
				render: (id) => (
					<Link href={concatHref(ROUTE.ADMIN_VOUCHER, id)}>{id}</Link>
				),
			},
			{
				title: "Loại BĐS áp dụng",
				dataIndex: "productType",
				...getColumnSearchProps("productType"),
				onFilter: (value: string | number | boolean, record) =>
					record.productType.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.productType.length - b.productType.length,
				sortDirections: ["ascend", "descend"],
				render: (productType: TProductTypeValue) => (
					<>{PRODUCT_TYPE[productType]?.label}</>
				),
			},
			{
				title: "Giảm giá",
				dataIndex: "discount",
				...getColumnSearchProps("option"),
				sortDirections: ["ascend", "descend"],
				render: (_, {amount, percentage}) => (
					<>{amount ? formatCurrency(amount) : `${percentage}%`}</>
				),
			},
			{
				title: "Điều kiện",
				dataIndex: "condition",
				...getColumnSearchProps("condition"),
				sortDirections: ["ascend", "descend"],
			},
			{
				title: "Hết hạn lúc",
				dataIndex: "expire",
				...getColumnSearchProps("expire"),
				sorter: (a, b) => a.expire.length - b.expire.length,
				render: (value) => <>{formatDate(value)}</>,
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

	const onChange: TableProps<TVoucher>["onChange"] = (
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
			dataSource={voucherList}
			pagination={{current: 1, pageSize: 10}}
			loading={isLoading}
			scroll={{x: true}}
			onChange={onChange}
			bordered
		/>
	);
}
