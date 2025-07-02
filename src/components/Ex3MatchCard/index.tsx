import styles from './Ex3MatchCard.module.css';
import { IoIosMore } from "react-icons/io";

const Ex3MatchCard = () => {
  return (
    <div className={styles.card}>
      <span className={styles.time}>7'</span>
      <div className={styles.teamInfo}>
        <span className={styles.country}>
            Spain
            <img className={styles.img} src="/images/spain.png" alt="Spain" />
        </span>
        <span className={styles.score}>0 : 0</span>
        <span className={styles.country}>
            <img className={styles.img} src="/images/france.png" alt="France" />
            France
        </span>
      </div>
    <IoIosMore size={20} className={styles.moreIcon} />
    </div>
  )
}

export default Ex3MatchCard;
