"use client";

import {useParams} from "next/navigation";
import ExploreForm from "../_components/ExploreForm";

export default function AdminExplorePage() {
	const {id} = useParams();

	return (
		<div>
			<ExploreForm id={id} />
		</div>
	);
}
