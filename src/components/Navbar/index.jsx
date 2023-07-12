import Logo from "../Logo";
import styles from "./Navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<div className={styles.search}>
				<input type="text" placeholder="Buscar" />
				<FaSearch size={18} />
			</div>
			<BsCart4 size={40} />
		</nav>
	);
}
