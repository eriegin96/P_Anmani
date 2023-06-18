import {getCategories} from "@/sanity/sanity-api";
import Button from "@/components/button";
import styles from "./page.module.scss";

export default async function Page() {
	// const categories = await getCategories();
	// console.log(categories[0]);

	return (
		<>
			<h1 className={styles.h1}>Hello, Next.js!</h1>
			<Button>Click</Button>

			{/* {categories.map(({ _id, title }) => (
				<div key={_id}>{title}</div>
			))} */}
		</>
	);
}
