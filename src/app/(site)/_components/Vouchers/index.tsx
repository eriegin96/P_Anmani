import dynamic from "next/dynamic";
import Carousel from "../Carousel";
import {setting} from "@/constants/carouselSetting";
import {ItemsSkeleton, Voucher} from "@/components";
import Link from "next/link";
import styles from "./vouchers.module.scss";
import {ROUTE} from "@/constants/route";
import {useGetVouchers} from "@/hooks/api/voucher/query/useGetVouchers";
import {concatHref} from "@/utils/concatHref";

const Title = dynamic(() => import("../Title"));

export default function Vouchers() {
	const {data: voucherList, isLoading} = useGetVouchers();

	return (
		<>
			{voucherList?.length !== 0 && (
				<>
					<Title>Trung tâm voucher</Title>
					{isLoading && <ItemsSkeleton />}

					<Carousel setting={setting}>
						{voucherList?.map((voucher) => (
							<Link
								key={voucher.key}
								href={concatHref(ROUTE.PRODUCT, voucher.productId)}
								className={styles.link}
							>
								<Voucher voucher={voucher} shouldShowBtn />
							</Link>
						))}
					</Carousel>
				</>
			)}
		</>
	);
}
