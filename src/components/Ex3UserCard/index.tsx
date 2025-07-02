import styles from './Ex3UserCard.module.css';
import { FaEyeSlash } from "react-icons/fa";

const Ex3UserCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src="/images/avatar.png" alt="User" />
      <div className={styles.info}>
        <strong>Wade Warren</strong>
        <div>
          <span className={styles.visa}>VISA</span> 4293 3242 ••••
        </div>
      </div>
      <FaEyeSlash size={20} />
    </div>
  )
}

export default Ex3UserCard;
