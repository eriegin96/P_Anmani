"use client";

import {useGetExploreById} from "@/hooks/api/explore/query/useGetExploreById";
import ExploreForm from "../_components/ExploreForm";
import Loading from "@/app/(site)/loading";

type TAdminExplorePageProps = {
	params: {id: string};
};

export default function AdminExplorePage({
	params: {id},
}: TAdminExplorePageProps) {
	const {data, isLoading} = useGetExploreById(id);

	return (
		<>
			{isLoading && <Loading />}
			{data && <ExploreForm isEditing />}
		</>
	);
}
