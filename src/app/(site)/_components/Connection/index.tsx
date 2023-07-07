import {Button} from "@/components";
import Title from "../Title";
import styles from "./connection.module.scss";
import {socialNetworks} from "../../_components/AdvancedSearch/static";
import Image from "next/image";

export default function Connection() {
	return (
		<div className={styles.wrapper}>
			<Title>Kết nối</Title>
			<div>
				<ul className={styles.networkList}>
					{socialNetworks.map((network) => (
						<li key={network.href}>
							<a href={network.href} target="_blank" rel="noreferrer">
								<Image src={network.icon} alt="" width={40} height={40} />
							</a>
						</li>
					))}
				</ul>
				<div className={styles.newsletter}>
					<span>Nhận bản tin</span>
					<div className={styles.inputBlock}>
						<input type="text" placeholder="Vui lòng nhập email của bạn" />
						<Button>Gửi</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
