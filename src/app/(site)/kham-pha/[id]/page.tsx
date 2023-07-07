"use client";

import {exploreVideoList, productList} from "@/mock/data";
import styles from "./[id].module.scss";
import {IconHeart, IconShare, IconShoppingCart} from "@tabler/icons-react";
import clsx from "clsx";
import {Badge, Button, Drawer} from "antd";
import {useState} from "react";
import {ProductCard} from "../../_components";
import Link from "next/link";
import {ROUTE} from "@/constants/route";

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
				title={
					<>
						<h4>Liên kết</h4>
						<Link href={ROUTE.CART} className={styles.cartBtn}>
							<Badge size="small" count={5}>
								<IconShoppingCart size={20} />
							</Badge>
						</Link>
					</>
				}
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
