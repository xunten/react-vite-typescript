import styles from './Ex3DashboardCard.module.css';
import { IoIosMore } from "react-icons/io";

const Ex3DashboardCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.tags}>
        <span className={styles.highlight}>Highlight</span>
        <span className={styles.feeds}>Feeds</span>
        <IoIosMore size={20} className={styles.moreIcon} />
      </div>
      <div>
        <strong>Dashboard</strong>
        <p className={styles.sub}>Business management service</p>
      </div>
      <div className={styles.progressWrapper}>
        <div className={styles.progressBar}></div>
        <span className={styles.percent}>80%</span>
      </div>
    </div>
  )
}

export default Ex3DashboardCard
