import { ArrowRight } from 'lucide-react';
import style1 from './GetStartedButton.module.css';
const GetStartedButton = () => {
  return (
    <button className={style1.button}>
      <span className={style1.label}>Get started</span>
      <ArrowRight size={20} />
    </button>
  );
}

export default GetStartedButton;