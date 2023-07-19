"use client";

import Loading from "@/app/(site)/loading";
import ProductForm from "../_components/ProductForm";
import {useGetProductById} from "@/hooks/api/product/query/useGetProductById";

type TAdminProductPageProps = {
	params: {id: string};
};

export default function AdminProductPage({
	params: {id},
}: TAdminProductPageProps) {
	const {data, isLoading} = useGetProductById(id);

	return (
		<>
			{isLoading && <Loading />}
			{data && <ProductForm isEditing />}
		</>
	);
}
