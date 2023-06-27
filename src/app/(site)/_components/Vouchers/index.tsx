import dynamic from "next/dynamic";
import {voucherList} from "./data";
import Carousel from "../Carousel";
import {setting} from "@/constants/carouselSetting";
import {Voucher} from "@/components";

const Title = dynamic(() => import("../Title"));

export default function Vouchers() {
	return (
		<>
			<Title>Trung tâm voucher</Title>
			<Carousel setting={setting}>
				{voucherList.map((voucher) => (
					<div key={voucher.id}>
						<Voucher voucher={voucher} />
					</div>
				))}
			</Carousel>
		</>
	);
}
