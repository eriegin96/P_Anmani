import {getCategories} from "@/sanity/sanity-api";
import styles from "./page.module.scss";
import {Footer, SearchBox} from "@/components";
import {Carousel, Reports} from "./_components";
import Vouchers from "./_components/Vouchers";
import Category from "./_components/Category";
import Investor from "./_components/Investor";

const categories = [
	{_id: "1", title: "Dinh thự & Biệt thự đơn lập"},
	{_id: "2", title: "Biệt thự song lập"},
	{_id: "3", title: "Shophouse nhà phố thương mại"},
	{_id: "4", title: "Căn hộ"},
	{_id: "5", title: "BĐS chuyển nhượng giá tốt"},
];
const investors = [
	{_id: "1", title: "KDI Holding"},
	{_id: "2", title: "Sun Property"},
];

export default async function Page() {
	// const categories = await getCategories();
	// console.log(categories[0]);

	return (
		<>
			<Carousel />
			<SearchBox />
			<Reports />
			<Vouchers />

			{categories.map(({_id, title}) => (
				<Category key={_id} title={title} />
			))}
			{investors.map(({_id, title}) => (
				<Investor key={_id} title={title} />
			))}
			<Footer />
		</>
	);
}
