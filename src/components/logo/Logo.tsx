import type { FC } from 'react';
import LogoSvg from '@/assets/images/svg/Logo.svg';

const Logo: FC = () => {
  return (
    <h1>
      <a href="/">
        <img src={LogoSvg} className="logo" alt="Match Day" width={70} height={65} title="Match Day" />
      </a>
    </h1>
  );
};

export default Logo;

