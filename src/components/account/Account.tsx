import type { FC } from "react";
import reactLogo from '@/assets/react.svg'
import Logo from '/Logo.svg'

const Account: FC = () => {
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={Logo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};

export default Account;
