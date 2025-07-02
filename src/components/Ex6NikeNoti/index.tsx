import styles from './Ex6NikeNoti.module.css';

type Props =
  {
      logo?: string;
      title?: string;
      subtitle?: string;
      amount?: string;
      time?: string;
    };
const Ex6NikeNoti = ({ logo, title, subtitle, amount, time }: Props) => {
  return (
    <div className={styles.card}>
      <img src={logo} className={styles.logo} alt="logo" />
      
      <div className={styles.text}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{title}</span>
          <span className={styles.amount}>{amount}</span>
        </div>
        <div className={styles.subRow}>
          <span className={styles.subtitle}>{subtitle}</span>
          <span className={styles.time}>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default Ex6NikeNoti;
