import type { FC } from "react";
import style from './header.module.css';
import Navigation from "../navigation/Navigation";
import Account from "../account/Account";
import Logo from '/Logo.svg';

const Header: FC = () => {
  return (
    <section className={style.container}>
      <header className={style.header}>
        <h1>
          <a href="/">
            <img src={Logo} className="logo" alt="Match Day" width={70} height={65} title="Match Day" />
          </a>
        </h1>
        <Navigation />
        <Account />
      </header>
    </section>
  );
};
export default Header;