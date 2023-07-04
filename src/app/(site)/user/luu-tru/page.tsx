"use client";

import * as Tabs from "@radix-ui/react-tabs";
import styles from "./luuTru.module.scss";
import {saveTabs} from "./static";
import {saveList} from "@/mock/data";
import Image from "next/image";
import {IconBookmark} from "@/assets";
import {formatCurrency} from "@/utils/formatCurrency";
import {Popover} from "antd";
import {Button} from "@/components";
import {IconBookmarkOff, IconDots, IconShare} from "@tabler/icons-react";

export default function Page() {
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
						{saveList.filter((item) => item.type === tab.value).length ===
							0 && (
							<div className={styles.noSave}>
								<Image src={IconBookmark} alt="" />
								Bạn chưa lưu bất động sản nào
							</div>
						)}

						{saveList
							.filter((item) => item.type === tab.value)
							.map((item) => (
								<div key={item.id} className={styles.itemWrapper}>
									<div className={styles.itemInfo}>
										<div className={styles.imageWrapper}>
											<Image src={item.thumbnail} alt="" fill />
										</div>
										<div className={styles.descriptionWrapper}>
											<h5>{item.name}</h5>
											<p className={styles.price}>
												{formatCurrency(item.salePrice)}
											</p>
											<p className={styles.description}>
												{item.description.pros}
											</p>
										</div>
									</div>
									<Popover
										placement="bottom"
										content={
											<div className={styles.popoverContent}>
												<Button>
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
