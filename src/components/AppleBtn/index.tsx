import { Apple } from 'lucide-react';
import style2 from './AppleBtn.module.css';

const AppleBtn = () => {
  return (
    <button className={style2.button}>
      <Apple size={20} />
      <span className={style2.label}>Continue with Apple</span>
      
    </button>
  );
};

export default AppleBtn;
