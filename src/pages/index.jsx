import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Subtitle from "@/components/typography/Subtitle";
import Head from "next/head";
import SaleCard from "@/components/cards/SaleCard";

import styles from "@/styles/index.module.css";
import GameCard from "@/components/cards/GameCard";

export default function Home() {
	return (
		<>
			<Head>
				<title>DevSteam: A sua loja online de games</title>
				<meta
					name="description"
					content="DevSteam: A sua loja online de games"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Navbar />
				<Container>
					<div className={styles.session}>
						<Subtitle children="Promoções" />
						<div className={styles["sale-container"]}>
							<SaleCard />
							<SaleCard />
							<SaleCard />
						</div>
					</div>
					<div className={styles.session}>
						<Subtitle children="Outros jogos" />
						<div className={styles["game-container"]}>
							<GameCard />
							<GameCard />
							<GameCard />
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}
