import style3 from './GoogleBtn.module.css';

const GoogleBtn = () => {
  return (
    <button className={style3.button}>
      {/* <Apple size={20} /> */}
      <span className={style3.label}>Continue with Apple</span>
    </button>
  );
};

export default GoogleBtn;
