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
import {carouselList, categories, investors, socialNetworks} from "./data";
import Image from "next/image";

export default async function Page() {
	// const categories = await getCategories();
	// console.log(categories[0]);

	return (
		<>
			<Carousel>
				{carouselList.map((image) => (
					<div key={image.id} className={styles.imageContainer}>
						<Image src={image.src} alt="" fill />
					</div>
				))}
			</Carousel>
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

			{categories.map((category) => (
				<div key={category.id} className={styles.blockWrapper}>
					<Category category={category} />
				</div>
			))}
			{investors.map(({id, title}) => (
				<Investor key={id} title={title} />
			))}
			<Footer />
		</>
	);
}
