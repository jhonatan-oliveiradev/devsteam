import Logo from "../Logo";
import Input from "../forms/Input";
import styles from "./Navbar.module.css";
import { BsCart4 } from "react-icons/bs";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<Input fullWidth placeholder="Buscar" />
			<BsCart4 size={40} />
		</nav>
	);
}
