import {useCallback, useMemo, useRef} from "react";
import {Table} from "antd";
import {Button, Input, Space, InputRef} from "antd";
import type {ColumnType, ColumnsType, TableProps} from "antd/es/table";
import type {FilterConfirmProps} from "antd/es/table/interface";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import {productList, voucherList} from "@/mock/data";
import {TVoucher} from "@/types/voucher.type";
import {formatCurrency} from "@/utils/formatCurrency";
import {IconX} from "@tabler/icons-react";
import {useGetVouchers} from "@/hooks/api/voucher/query/useGetVouchers";
import {useDeleteVoucher} from "@/hooks/api/voucher";
import {useModalContext} from "@/providers/ModalProvider";

type DataIndex = keyof TVoucher;

export default function VoucherTable() {
	const searchInput = useRef<InputRef>(null);
	const {data, isLoading} = useGetVouchers();
	const {trigger} = useDeleteVoucher();
	const {showMDeleteConfirmationModal} = useModalContext();

	const handleDelete = (voucherId: string) => {
		showMDeleteConfirmationModal({trigger, id: voucherId});
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
				dataIndex: "id",
				...getColumnSearchProps("id"),
				onFilter: (value: string | number | boolean, record) =>
					record.id.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.id.length - b.id.length,
				sortDirections: ["ascend", "descend"],
				render: (id) => <Link href={`${ROUTE.ADMIN_VOUCHER}/${id}`}>{id}</Link>,
			},
			{
				title: "Tên BĐS",
				dataIndex: "productId",
				...getColumnSearchProps("productId"),
				onFilter: (value: string | number | boolean, record) =>
					record.productId.indexOf(value.toString()) === 0,
				sorter: (a, b) => a.productId.length - b.productId.length,
				sortDirections: ["ascend", "descend"],
				render: (productId) => {
					const name = productList.find(
						(product) => product.id === productId
					)?.name;
					return (
						<Link href={`${ROUTE.ADMIN_PRODUCT}/${productId}`}>{name}</Link>
					);
				},
			},
			{
				title: "Giá BĐS",
				dataIndex: "productId",
				...getColumnSearchProps("productId"),
				onFilter: (value: string | number | boolean, record) =>
					record.productId.indexOf(value.toString()) === 0,
				sorter: (a, b) => {
					const aPrice = productList.find(
						(product) => product.id === a.productId
					)?.price as number;
					const bPrice = productList.find(
						(product) => product.id === b.productId
					)?.price as number;
					return aPrice - bPrice;
				},
				sortDirections: ["ascend", "descend"],
				render: (productId) => {
					const price = productList.find(
						(product) => product.id === productId
					)?.price;
					return <>{formatCurrency(price, true, true)}</>;
				},
			},

			{
				title: "Giảm giá",
				dataIndex: "discount",
				...getColumnSearchProps("discount"),
				sortDirections: ["ascend", "descend"],
				render: (discount) => (
					<>
						{discount?.amount
							? formatCurrency(discount?.amount)
							: `${discount?.percent}%`}
					</>
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
				dataIndex: "expiredDate",
				...getColumnSearchProps("expiredDate"),
				sorter: (a, b) => a.expiredDate.length - b.expiredDate.length,
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
			dataSource={data && voucherList}
			pagination={{current: 1, pageSize: 10}}
			loading={isLoading}
			scroll={{x: true}}
			onChange={onChange}
			bordered
		/>
	);
}
