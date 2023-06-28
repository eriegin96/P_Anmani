import {TVoucher} from "@/types/voucher.type";

export const voucherList: TVoucher[] = [
	{
		id: "1",
		discount: {amount: 300_000_000},
		productId: "1",
		condition: "",
		expiredDate: "31/12/2023",
	},
	{
		id: "2",
		discount: {percent: 7.5},
		productId: "2",
		condition: "không vay",
		expiredDate: "31/12/2023",
	},
	{
		id: "3",
		discount: {percent: 1.5},
		productId: "3",
		condition: "ký HĐMB sớm",
		expiredDate: "31/12/2023",
	},
	{
		id: "4",
		discount: {percent: 15},
		productId: "4",
		condition: "thanh toán sớm 95% trong vòng 3 tháng",
		expiredDate: "31/12/2023",
	},
	{
		id: "5",
		discount: {percent: 1},
		productId: "5",
		condition: "mua 2 căn trở lên",
		expiredDate: "31/12/2023",
	},
	{
		id: "6",
		discount: {percent: 9},
		productId: "1",
		condition: "trên số tiền và số ngày thanh toán trước hạn của từng đợt",
		expiredDate: "31/12/2023",
	},
];
