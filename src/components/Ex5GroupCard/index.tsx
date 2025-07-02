import styles from "./Ex5GroupCard.module.css";

type TeamCardProps = {
  backgroundColor: string;
  avatars: string[];
  title: string;
  subtitle?: string;
  textColor?: string;
};

const Ex5GroupCard = ({ backgroundColor, avatars, title, subtitle, textColor = '#fff' }: TeamCardProps) => {
  return (
   <div className={styles.card} style={{ backgroundColor }}>
      <div className={styles.avatars}>
        {avatars.map((src, idx) => (
          <img
            key={idx}
            src={src}
            className={styles.avatar}
            style={{ zIndex: avatars.length - idx }}
          />
        ))}
      </div>
      <div className={styles.text} style={{ color: textColor }}>
        <strong>{title}</strong>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default Ex5GroupCard;
