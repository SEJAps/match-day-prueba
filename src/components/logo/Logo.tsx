import type { FC } from 'react';
import LogoSvg from '@/assets/images/svg/Logo.svg';
import style from './logo.module.css';
const Logo: FC = () => {
  return (
    <h1 className={style.logo}>
      <a href="/">
        <img src={LogoSvg} alt="Match Day" width={70} height={65} title="Match Day" />
      </a>
    </h1>
  );
};

export default Logo;

