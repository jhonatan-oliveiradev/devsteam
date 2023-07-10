import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
	return (
		<div className={styles.logo}>
			<Image
				src="/logo.svg"
				alt="DevSteam: a sua loja online de games."
				width={60}
				height={60}
			/>
			<h1>DevSteam</h1>
		</div>
	);
}
