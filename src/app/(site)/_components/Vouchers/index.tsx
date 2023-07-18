import dynamic from "next/dynamic";
import Carousel from "../Carousel";
import {setting} from "@/constants/carouselSetting";
import {ItemsSkeleton, Voucher} from "@/components";
import Link from "next/link";
import styles from "./vouchers.module.scss";
import {ROUTE} from "@/constants/route";
import {voucherList} from "@/mock/data";
import {useVouchers} from "@/hooks/api/query/useVouchers";

const Title = dynamic(() => import("../Title"));

export default function Vouchers() {
	const {data, isLoading} = useVouchers();

	return (
		<>
			<Title>Trung tâm voucher</Title>
			{isLoading && <ItemsSkeleton />}

			{data && (
				<Carousel setting={setting}>
					{voucherList.map((voucher) => (
						<Link
							key={voucher.id}
							href={`${ROUTE.PRODUCT}/${voucher.productId}`}
							className={styles.link}
						>
							<Voucher voucher={voucher} shouldShowBtn />
						</Link>
					))}
				</Carousel>
			)}
		</>
	);
}
