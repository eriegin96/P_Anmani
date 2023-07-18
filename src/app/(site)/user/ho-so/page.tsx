"use client";

import Link from "next/link";
import styles from "./hoSo.module.scss";
import {Button} from "@/components";
import {profilePageList} from "./static";
import {IconChevronRight, IconLogout} from "@tabler/icons-react";
import {Avatar, Button as AntdButton, Modal} from "antd";
import {useState} from "react";
import {useAuthContext} from "@/providers/AuthProvider";

export default function Page() {
	const {userInfo} = useAuthContext();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<div className={styles.header}>
				<div>
					<p>{userInfo?.name}</p>
					<p>{userInfo?.email}</p>
				</div>
				<Avatar src="" size={48} />
			</div>

			<div className={styles.actionWrapper}>
				{profilePageList.map((link) => (
					<Link key={link.href} href={link.href} className={styles.linkItem}>
						{link.icon}
						<span>{link.title}</span>
						<IconChevronRight />
					</Link>
				))}
				<Button className={styles.linkItem} onClick={showModal}>
					<IconLogout />
					<span>Đăng xuất</span>
				</Button>
				<Modal
					title="Thông báo"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={[
						<AntdButton key="back" onClick={handleCancel}>
							Đóng
						</AntdButton>,
						<AntdButton key="submit" type="primary" onClick={handleOk}>
							Đăng xuất
						</AntdButton>,
					]}
				>
					<span>Bạn có muốn đăng xuất không?</span>
				</Modal>
			</div>
		</div>
	);
}
