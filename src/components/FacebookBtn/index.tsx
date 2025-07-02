import style4 from './FacebookBtn.module.css';
import { Facebook } from 'lucide-react';
const FacebookBtn = () => {
    return (
        <button className={style4.button}>
            <Facebook size={20} />
            <span className={style4.label}>Continue with Facebook</span>
        </button>
    );
}

export default FacebookBtn;