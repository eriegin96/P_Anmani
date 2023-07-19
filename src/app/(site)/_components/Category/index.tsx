"use client";

import {TCategory} from "@/types/category.type";
import styles from "./category.module.scss";
import {IconChevronRight} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import {setting} from "@/constants/carouselSetting";
import {productList} from "../../../../mock/data";
import {useGetProducts} from "@/hooks/api/product/query/useGetProducts";
import {ItemsSkeleton} from "@/components";

type TCategoryProps = {
	category: TCategory;
};

export default function Category({category}: TCategoryProps) {
	const {title, location, href, icon} = category;
	const {data, isLoading} = useGetProducts();

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.title}>
					<Image src={icon} alt="" width={36} height={36} />
					{title}
				</h2>
				<Link href={href} className={styles.more}>
					Xem thêm <IconChevronRight size={18} />
				</Link>
			</div>

			{isLoading && <ItemsSkeleton />}

			{data && (
				<Tabs.Root defaultValue={location[0]} className={styles.tabsRoot}>
					<Tabs.List aria-label="Category" className={styles.tabsList}>
						{location.map((locationItem) => (
							<Tabs.Trigger
								key={locationItem}
								value={locationItem}
								className={styles.tabsTrigger}
							>
								{locationItem}
							</Tabs.Trigger>
						))}
					</Tabs.List>

					{location.map((locationItem) => (
						<Tabs.Content
							key={locationItem}
							value={locationItem}
							className={styles.tabsContent}
						>
							<Carousel setting={setting}>
								{productList.map((saleItem) => (
									<div key={saleItem.name} className={styles.productWrapper}>
										<ProductCard info={saleItem} />
									</div>
								))}
							</Carousel>
						</Tabs.Content>
					))}
				</Tabs.Root>
			)}
		</div>
	);
}
