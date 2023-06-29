import {
	IconHome2,
	IconReceiptTax,
	IconTopologyComplex,
} from "@tabler/icons-react";

export const navLinkList = [
	{
		icon: <IconReceiptTax />,
		title: "Tài chính",
		href: "/tu-van-tai-chinh",
		tag: "Hot",
	},
	{
		icon: <IconHome2 />,
		title: "BĐS Chuyển nhượng",
		href: "/tim-kiem?tag=chuyen-nhuong",
	},
	{
		icon: <IconTopologyComplex />,
		title: "Cho thuê",
		href: "/tim-kiem?tag=cho-thue",
	},
];
