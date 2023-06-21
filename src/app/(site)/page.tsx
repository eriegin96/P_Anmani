import {getCategories} from "@/sanity/sanity-api";
import styles from "./page.module.scss";
import {Footer, SearchBox} from "@/components";
import {
	Carousel,
	Category,
	FlashSale,
	Investor,
	Reports,
	Vouchers,
} from "./_components";
import {categories, investors, socialNetworks} from "./data";
import Image from "next/image";

export default async function Page() {
	// const categories = await getCategories();
	// console.log(categories[0]);

	return (
		<>
			<Carousel />
			<div className={styles.searchWrapper}>
				<SearchBox />
				<ul className={styles.networkList}>
					{socialNetworks.map((network) => (
						<li key={network.href}>
							<a href={network.href} target="_blank" rel="noreferrer">
								<Image src={network.icon} alt="" width={30} height={30} />
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.blockWrapper}>
				<Reports />
			</div>
			<div className={styles.blockWrapper}>
				<Vouchers />
			</div>
			<div className={styles.blockWrapper}>
				<FlashSale />
			</div>

			{categories.map(({_id, title}) => (
				<Category key={_id} title={title} />
			))}
			{investors.map(({_id, title}) => (
				<Investor key={_id} title={title} />
			))}
			<Footer />
		</>
	);
}
