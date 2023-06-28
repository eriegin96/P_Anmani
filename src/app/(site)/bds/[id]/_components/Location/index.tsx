"use client";

import {
	GoogleMap,
	Marker,
	useGoogleMap,
	useJsApiLoader,
} from "@react-google-maps/api";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./location.module.scss";
import {TProduct} from "@/types/product.type";
import {PRODUCT_LOCATION} from "@/constants/product";
import {locationTabList} from "./data";
import {useCallback, useEffect, useState} from "react";

type TLocationProps = {
	product: TProduct;
};

const CENTER = {
	lat: 10.729886,
	lng: 106.724992,
};
const ZOOM = 11;

export default function Location({product}: TLocationProps) {
	const {isLoaded} = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
	});
	const [map, setMap] = useState<google.maps.Map | null>(null);

	const onLoad = useCallback(function callback(map: google.maps.Map) {
		console.log(map);
		map.setCenter(CENTER);
		map.setZoom(ZOOM);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map: google.maps.Map) {
		setMap(null);
	}, []);

	return (
		<div>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "400px",
						margin: "20px 0",
						borderRadius: "10px",
					}}
					center={CENTER}
					zoom={ZOOM}
					onLoad={onLoad}
					onUnmount={onUnmount}>
					<Marker position={CENTER} />
				</GoogleMap>
			) : (
				<></>
			)}
			<span className={styles.location}>
				{product.location.sub}, {product.location.main}
			</span>
			<div>
				<Tabs.Root
					defaultValue={PRODUCT_LOCATION.NEARBY}
					className={styles.tabsRoot}>
					<Tabs.List aria-label="Location" className={styles.tabsList}>
						{locationTabList.map((tab) => (
							<Tabs.Trigger
								key={tab.value}
								value={tab.value}
								className={styles.tabsTrigger}>
								{tab.icon}
								<span>{tab.title}</span>
							</Tabs.Trigger>
						))}
					</Tabs.List>

					{locationTabList.map((tab) => {
						const tabsContent =
							tab.value === PRODUCT_LOCATION.NEARBY
								? product.location.nearby
								: product.location.popular;
						return (
							<Tabs.Content
								key={tab.value}
								value={tab.value}
								className={styles.tabsContent}>
								<ul className={styles.tabContentList}>
									{tabsContent.map((item) => (
										<li key={item.name} className={styles.tabContentLi}>
											<span>{item.name}</span>
											<span>{item.distance}</span>
										</li>
									))}
								</ul>
							</Tabs.Content>
						);
					})}
				</Tabs.Root>
			</div>
		</div>
	);
}
