import styles from "./Ex4ProfileCard.module.css";
import { IoCameraOutline } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { Phone } from 'lucide-react';

type Props = {
  name: string;
  role?: string;
  avatar: string;
  imageMode?: boolean; // true nếu là kiểu hình thứ 2
  rightIcon?: "camera" | "phone";
};

const Ex4ProfileCard = ({
  name,
  role,
  avatar,
  imageMode,
  rightIcon,
}: Props) => {
  return (
    <div className={`${styles.card} ${imageMode ? styles.cardImageMode : ""}`}>
      <div className={styles.avatarWrapper}>
        <img
          src={avatar}
          className={`${styles.avatar} ${imageMode ? styles.fullImg : ""}`}
        />
      </div>
      <div className={styles.info}>
        <strong>{name}</strong>
        {role && <p>{role}</p>}
      </div>
      {rightIcon === "camera" && <IoCameraOutline size={20} className={styles.icon} />}
      {rightIcon === "phone" && <Phone style={{ padding: 16}} size={20} className={styles.icon} />}
    </div>
  );
};

export default Ex4ProfileCard;
