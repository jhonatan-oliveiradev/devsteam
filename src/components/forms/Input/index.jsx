import styles from "./input.module.css";
import { FaSearch } from "react-icons/fa";

export default function Input({ fullWidth, ...props }) {
	return (
		<div className={`${styles.search} ${fullWidth && styles["full-width"]}`}>
			<input {...props} type="text" />
			<FaSearch size={18} />
		</div>
	);
}
