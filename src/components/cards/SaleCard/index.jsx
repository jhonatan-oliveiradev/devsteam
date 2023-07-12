import Image from "next/image";
import styles from "./saleCard.module.css";
import Button from "@/components/forms/Button";

export default function SaleCard() {
	return (
		<div className={styles.salecard}>
			<Image src="/products/league-of-legends.jpg" width={250} height={300} />
			<div className={styles.info}>
				<h3 className={styles.title}>Oferta Exclusiva</h3>
				<div className={styles["price-card"]}>
					<div className={styles.percent}>&minus;20%</div>
					<div className={styles.price}>
						<p className={styles["full-price"]}>R$99,90</p>
						<h4 className={styles["discount-price"]}>R$89,90</h4>
					</div>
				</div>
				<Button>Adicionar ao carrinho</Button>
			</div>
		</div>
	);
}
