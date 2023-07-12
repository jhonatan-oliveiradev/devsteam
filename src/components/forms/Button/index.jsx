import styles from "./button.module.css";

export default function Button({ children, fullWidth }) {
	return (
		<button className={`${styles.button} ${fullWidth && styles["full-width"]}`}>
			{children}
		</button>
	);
}
