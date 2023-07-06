"use client";

import {exploreVideoList, productList} from "@/mock/data";
import styles from "./[id].module.scss";
import {IconHeart, IconShare} from "@tabler/icons-react";
import clsx from "clsx";
import {Button, Drawer} from "antd";
import {useState} from "react";
import {ProductCard} from "../../_components";

type TKhamPhaPageProps = {params: {id: string}};

export default function KhamPhaPage({params}: TKhamPhaPageProps) {
	const video = exploreVideoList.find((item) => item.id === params.id);
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.videoWrapper}>
				<video src={video?.href} autoPlay muted loop />
				<div className={styles.leftSection}>
					<Button className={styles.productBtn} onClick={showDrawer}>
						Xem sản phẩm
					</Button>
					<h4>{video?.title}</h4>
				</div>
				<div className={styles.rightSection}>
					<Button shape="circle" className={styles.actionBtn}>
						<IconHeart />
					</Button>
					<Button shape="circle" className={styles.actionBtn}>
						<IconShare />
					</Button>
				</div>
			</div>
			<Drawer
				title="Liên kết"
				placement="bottom"
				onClose={onClose}
				open={open}
				rootClassName={styles.drawer}
			>
				{productList.slice(0, 2).map((product) => (
					<ProductCard key={product.id} info={product} />
				))}
			</Drawer>
		</div>
	);
}
