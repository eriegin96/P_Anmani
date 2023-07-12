"use client";

import {useParams} from "next/navigation";
import ProductForm from "../_components/ProductForm";

export default function AdminProductPage() {
	const {id} = useParams();

	return (
		<div>
			<ProductForm id={id} />
		</div>
	);
}
