"use client";

import * as Tabs from "@radix-ui/react-tabs";
import styles from "./luuTru.module.scss";
import {saveTabs} from "./static";
import Image from "next/image";
import {IconBookmark} from "@/assets";
import {formatCurrency} from "@/utils/formatCurrency";
import {Button, Popover} from "antd";
import {IconBookmarkOff, IconDots, IconShare} from "@tabler/icons-react";
import {useDeleteBookmark, useGetBookmarksByUser} from "@/hooks/api/bookmark";
import {useAuthContext} from "@/providers/AuthProvider";
import {useSWRConfig} from "swr";
import {concatHref} from "@/utils/concatHref";
import {API_ENDPOINT} from "@/constants/api";
import {useEffect} from "react";

export default function Page() {
	const {userInfo} = useAuthContext();
	const {data} = useGetBookmarksByUser(userInfo);
	const {trigger, data: deleteSuccess} = useDeleteBookmark();
	const {mutate} = useSWRConfig();

	const handleUnBookmark = (key: string) => {
		if (!userInfo?.key) return;

		trigger(key);
	};

	useEffect(() => {
		if (deleteSuccess && userInfo)
			mutate(concatHref(API_ENDPOINT.BOOKMARKS_USER, userInfo.key));
	}, [deleteSuccess, userInfo, mutate]);

	return (
		<>
			<Tabs.Root defaultValue={saveTabs[0].value} className={styles.tabsRoot}>
				<Tabs.List aria-label="Category" className={styles.tabsList}>
					{saveTabs.map((tab) => (
						<Tabs.Trigger
							key={tab.value}
							value={tab.value}
							className={styles.tabsTrigger}
						>
							{tab.title}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{saveTabs.map((tab) => (
					<Tabs.Content
						key={tab.value}
						value={tab.value}
						className={styles.tabsContent}
					>
						{data?.filter((item) => item.type === tab.value).length === 0 && (
							<div className={styles.noSave}>
								<Image src={IconBookmark} alt="bookmark" />
								Bạn chưa lưu bất động sản nào
							</div>
						)}

						{data
							?.filter((item) => item.type === tab.value)
							.map(({key, product}) => (
								<div key={key} className={styles.itemWrapper}>
									<div className={styles.itemInfo}>
										<div className={styles.imageWrapper}>
											<Image
												src={product.image.thumbnail}
												alt={product.name}
												fill
											/>
										</div>
										<div className={styles.descriptionWrapper}>
											<h5>{product.name}</h5>
											<p className={styles.price}>
												{formatCurrency(product.price)}
											</p>
											<p className={styles.description}>
												{product.description.pros}
											</p>
										</div>
									</div>
									<Popover
										placement="bottom"
										content={
											<div className={styles.popoverContent}>
												<Button onClick={() => handleUnBookmark(key)}>
													<IconBookmarkOff size={24} />
													Bỏ lưu
												</Button>
												<Button>
													<IconShare size={24} />
													Sao chép liên kết
												</Button>
											</div>
										}
										trigger="click"
									>
										<Button className={styles.popoverTrigger}>
											<IconDots size={30} />
										</Button>
									</Popover>
								</div>
							))}
					</Tabs.Content>
				))}
			</Tabs.Root>
		</>
	);
}
