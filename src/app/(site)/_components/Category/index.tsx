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
import {useGetProducts} from "@/hooks/api/product/query/useGetProducts";
import {ItemsSkeleton} from "@/components";
import {QUERY_PARAMS} from "@/constants/route";

type TCategoryProps = {
	category: TCategory;
};

export default function Category({category}: TCategoryProps) {
	const {title, location, href, icon, tag, type} = category;
	const {data, isLoading} = useGetProducts();
	const categoryList = data?.filter((product) => {
		if (tag !== QUERY_PARAMS.TAG.TRANSFER)
			return product.tag === tag && product.type === type;
		return product.tag === QUERY_PARAMS.TAG.TRANSFER;
	});

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

			{categoryList && (
				<Tabs.Root defaultValue={location[0].value} className={styles.tabsRoot}>
					<Tabs.List aria-label="Category" className={styles.tabsList}>
						{location.map(({value, name}) => (
							<Tabs.Trigger
								key={value}
								value={value}
								className={styles.tabsTrigger}
							>
								{name}
							</Tabs.Trigger>
						))}
					</Tabs.List>

					{location.map(({value, name}) => (
						<Tabs.Content
							key={value}
							value={value}
							className={styles.tabsContent}
						>
							<Carousel setting={setting}>
								{categoryList
									.filter((product) => product.location.main === value)
									.map((saleItem) => (
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
