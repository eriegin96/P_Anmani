import {getCategories} from "@/sanity/sanity-api";
import styles from "./page.module.scss";
import {Footer, SearchBox} from "@/components";
import {
	Carousel,
	Category,
	Connection,
	Deposit,
	FlashSale,
	HowTo,
	Investor,
	PersonalInfo,
	Reports,
	TiktokReview,
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
				<Vouchers />
				<FlashSale />
				{categories.map((category) => (
					<Category key={category.id} category={category} />
				))}
				{investors.map((investor) => (
					<Investor key={investor.id} investor={investor} />
				))}
				<HowTo />
				<TiktokReview />
				<Deposit />
				<PersonalInfo />
				<Connection />
			</div>

			<Footer />
		</>
	);
}
