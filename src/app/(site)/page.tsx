"use client";

import styles from "./page.module.scss";
import {
	AdvancedSearch,
	Carousel,
	Category,
	Connection,
	Deposit,
	FlashSale,
	HowTo,
	Investor,
	NavLinks,
	PersonalInfo,
	Reports,
	TiktokReview,
	Vouchers,
} from "./_components";
import Image from "next/image";
import {carouselList, categoryList, investorList} from "./static";

export default async function Page() {
	return (
		<>
			<AdvancedSearch />
			<NavLinks />
			<Carousel>
				{carouselList.map((image) => (
					<div key={image.id} className={styles.imageContainer}>
						<Image src={image.src} alt="" fill />
					</div>
				))}
			</Carousel>
			<div className={styles.blockWrapper}>
				<Reports />
				<Vouchers />
				<FlashSale />
				{categoryList.map((category) => (
					<Category key={category.id} category={category} />
				))}
				{investorList.map((investor) => (
					<Investor key={investor.id} investor={investor} />
				))}
				<HowTo />
				<TiktokReview />
				<Deposit />
				<PersonalInfo />
				<Connection />
			</div>
		</>
	);
}
