import styles from "./CardTemp.module.css";

function CardTemp({ label, value }) {
  return (
    <div className={styles.cardTemp}>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
}
export default CardTemp;
