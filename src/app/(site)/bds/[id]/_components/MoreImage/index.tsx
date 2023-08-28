import {TProduct} from "@/types/product.type";
import styles from "./moreImage.module.scss";
import {Carousel} from "@/app/(site)/_components";
import Image from "next/image";

type TMoreImageProps = {
	product: TProduct;
};

export default function MoreImage({product}: TMoreImageProps) {
	const {
		image: {reality, area, investor},
	} = product;
	const carouselSetting = {
		slidesToShow: 2,
		dots: false,
		draggable: true,
		autoplay: false,
	};

	return (
		<div className={styles.wrapper}>
			{investor && (
				<>
					<div className={styles.title}>Hình ảnh chủ đầu tư</div>
					<Carousel setting={carouselSetting}>
						{investor.map((link) => (
							<div key={link} className={styles.imageWrapper}>
								<Image alt="Image" src={link} fill />
							</div>
						))}
					</Carousel>
				</>
			)}
			{reality && (
				<>
					<div className={styles.title}>Hình ảnh chủ thực tế</div>
					<Carousel setting={carouselSetting}>
						{reality.map((link) => (
							<div key={link} className={styles.imageWrapper}>
								<Image alt="Image" src={link} fill />
							</div>
						))}
					</Carousel>
				</>
			)}
			{area && (
				<>
					<div className={styles.title}>Mặt bằng và nội thất bàn giao</div>
					<Carousel setting={carouselSetting}>
						{area.map((link) => (
							<div key={link} className={styles.imageWrapper}>
								<Image alt="Image" src={link} fill />
							</div>
						))}
					</Carousel>
				</>
			)}
		</div>
	);
}
