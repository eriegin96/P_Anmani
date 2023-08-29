"use client";

import styles from "./[id].module.scss";
import {IconHeart, IconShare, IconShoppingCart} from "@tabler/icons-react";
import {Badge, Button, Drawer} from "antd";
import {useState} from "react";
import {ProductCard} from "../../_components";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import Stories from "react-insta-stories";
import {useGetExploreById} from "@/hooks/api/explore/query/useGetExploreById";
import Loading from "../../loading";
import {useCartContext} from "@/providers/CartProvider";

type TKhamPhaPageProps = {params: {id: string}};

export default function KhamPhaPage({params}: TKhamPhaPageProps) {
	const {data: video, isLoading, error} = useGetExploreById(params.id);
	const {cart} = useCartContext();
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	if (error) throw new Error("");

	return (
		<>
			{isLoading && <Loading />}

			{video && (
				<div>
					<Stories
						stories={video?.stories}
						width="100%"
						height="100vh"
						loop={true}
						storyStyles={{width: "100vw"}}
					/>
					<div className={styles.actionWrapper}>
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
									<Badge size="small" count={cart.length}>
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
						{video?.products.slice(0, 2).map((product) => (
							<ProductCard key={product.key} info={product} />
						))}
					</Drawer>
				</div>
			)}
		</>
	);
}
