import styles from "../Button.module.css";
function Button() {
    return (
        <button className={`${styles.btn} btn btn-warning`}>scopri di più</button>
    );
}

export default Button;