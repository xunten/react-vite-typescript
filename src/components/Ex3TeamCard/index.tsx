import styles from './Ex3TeamCard.module.css';
import { IoIosMore } from "react-icons/io";

const Ex3TeamCard = () => {
  return (
    <div className={styles.card}>
      <img
        src="/images/mu.png"
        alt="Manchester United"
        className={styles.logo}
      />
      <span className={styles.name}>Manchester United</span>
      <IoIosMore size={20} className={styles.moreIcon} />
    </div>
  )
}

export default Ex3TeamCard;
