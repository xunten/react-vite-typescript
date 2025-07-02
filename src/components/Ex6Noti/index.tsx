import styles from "./Ex6Noti.module.css";
import { FaRegBell } from "react-icons/fa";

type Props = {
  message: string;
  unreadCount: number;
};
const Ex6Noti = ({ message, unreadCount }: Props) => {
  return (
    <div className={styles.card}>
      <p className={styles.message}>{message}</p>
      <div className={styles.rightSection}>
        <div className={styles.divider}></div>
        <FaRegBell size={20} />
        <span className={styles.badge}>{unreadCount}</span>
      </div>
    </div>
  );
};

export default Ex6Noti;
