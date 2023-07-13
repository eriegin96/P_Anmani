"use client";

import {useParams} from "next/navigation";
import VoucherForm from "../_components/VoucherForm";

export default function AdminVoucherPage() {
	const {id} = useParams();

	return (
		<div>
			<VoucherForm id={id} />
		</div>
	);
}
