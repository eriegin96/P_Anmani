import {investorOptions} from "@/constants/selectOptions";

const INVESTOR_LOGO_LIST = [
	{
		value: "1",
		logo: "https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunProperty/_default_upload_bucket/2438/image-thumb__2438__1000/SG_1665540218.png?fbclid=IwAR2BunuTIV5ipV6glGcQfeTdTwLTndBLcDL16MaCTaouhkGGeGzK3PNMrYY",
	},
	{
		value: "2",
		logo: "https://saigonrealestate.vn/wp-content/uploads/2021/09/logo-KDI-Holdings-feature.png?fbclid=IwAR2WWaL6Djq88kML5ogEoFXZnj_7GgJ5uJO9TS2q8h5y8qFFf2Dp9hW1Gck",
	},
	{
		value: "3",
		logo: "https://www.annhome.vn/wp-content/uploads/2020/06/masteris-home-logo.png?fbclid=IwAR0eayazQ_gJUGJ-1sIs42iXqLXG9-Qn4iPRApRqZR3iqNWzGWJE-uBGqMo",
	},
];

export const getInvestorLogo = (value: string) => {
	return (
		INVESTOR_LOGO_LIST.find((item) => item.value === value)?.logo ??
		"https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunProperty/_default_upload_bucket/2438/image-thumb__2438__1000/SG_1665540218.png?fbclid=IwAR2BunuTIV5ipV6glGcQfeTdTwLTndBLcDL16MaCTaouhkGGeGzK3PNMrYY"
	);
};

export const getInvestorName = (value: string) => {
	return (
		investorOptions.find((item) => item.value === value)?.label ??
		"Sun Property - Sun Group"
	);
};
