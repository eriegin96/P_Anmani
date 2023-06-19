import {getCategories} from "@/sanity/sanity-api";
import styles from "./page.module.scss";
import {Footer, SearchBox} from "@/components";

export default async function Page() {
	// const categories = await getCategories();
	// console.log(categories[0]);

	return (
		<>
			<h1 className={styles.h1}>Hello, Next.js!</h1>
			<SearchBox />

			{/* {categories.map(({ _id, title }) => (
				<div key={_id}>{title}</div>
			))} */}
			<Footer />
		</>
	);
}
