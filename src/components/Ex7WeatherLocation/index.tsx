import styles from './Ex7WeatherLocation.module.css'

type Props = {
  image: string;
  title: string;
  subtitle: string;
  rightImage?: string[];   
  background?: string; 
  hasMenu?: boolean;  
};

const Ex7WeatherLocation = ({ image, title, subtitle, rightImage, background = '#fff', hasMenu }: Props) => {
  return (
    <div className={styles.card} style={{ background }}>
      <img src={image} alt="cover" className={styles.image} />
      <div className={styles.content}>
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>
      {rightImage && rightImage.length > 0 && (
        <img src={rightImage[0]} alt="icon" className={styles.rightImage} />
      )}
      {hasMenu && <span className={styles.menu}>⋯</span>}
    </div>
  )
}

export default Ex7WeatherLocation
