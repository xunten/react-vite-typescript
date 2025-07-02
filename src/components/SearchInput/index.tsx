import styles from './Search.module.css';

type TSearchInputProps = {
  leftIcon?: React.ReactNode;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  value?: string;
  rightIconBg?: string;
}

const SearchInput = ({leftIcon, placeholder, rightIcon, value} : TSearchInputProps) => {
  return (
    <div className={styles.searchContainer}>
        
      {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
      <input type="text" placeholder={placeholder} defaultValue={value} className={styles.searchInput} /> 
      {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
    </div>
  )
}

export default SearchInput