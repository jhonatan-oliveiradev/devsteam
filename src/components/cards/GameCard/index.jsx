import Image from "next/image";
import styles from "./gameCard.module.css";
import Button from "@/components/forms/Button";

export default function GameCard() {
	return (
		<div className={styles["game-card"]}>
			<Image
				src="/products/counter-strike.jpg"
				alt=""
				width={305}
				height={145}
			/>
			<div className={styles.info}>
				<h3>Counter-Strike: Global Offensive</h3>
				<p>Ação, estratégia, multijogador.</p>
				<div>
					<div className={styles["info-inner"]}>
						<h2>R$99,90</h2>
						<Button children="Adicionar ao carrinho" />
					</div>
				</div>
			</div>
		</div>
	);
}
