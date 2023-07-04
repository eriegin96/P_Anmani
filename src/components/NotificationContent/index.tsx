"use client";

import * as Tabs from "@radix-ui/react-tabs";
import styles from "./notificationContent.module.scss";
import {notificationTab} from "./static";
import {notificationList} from "@/mock/data";
import {Avatar} from "antd";

export default function NotificationContent() {
	return (
		<div>
			<Tabs.Root
				defaultValue={notificationTab[0].value}
				className={styles.tabsRoot}
			>
				<Tabs.List aria-label="Category" className={styles.tabsList}>
					{notificationTab.map((tab) => (
						<Tabs.Trigger
							key={tab.value}
							value={tab.value}
							className={styles.tabsTrigger}
						>
							{tab.title}
							<span className={styles.notiAmount}>
								{
									notificationList.filter((noti) => noti.type === tab.value)
										.length
								}
							</span>
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{notificationTab.map((tab) => (
					<Tabs.Content
						key={tab.value}
						value={tab.value}
						className={styles.tabsContent}
					>
						{notificationList.map((noti) => {
							return noti.type === tab.value ? (
								<div key={noti.id} className={styles.notiWrapper}>
									<div>
										<Avatar size={36} src={noti.avatar} alt="" />
									</div>
									<div className={styles.notiText}>
										<h5>{noti.title}</h5>
										<p>{noti.content}</p>
									</div>
								</div>
							) : (
								<></>
							);
						})}
					</Tabs.Content>
				))}
			</Tabs.Root>
		</div>
	);
}
