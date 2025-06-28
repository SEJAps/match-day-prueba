import type { FC } from "react";
import style from './header.module.css';
import Navigation from "../navigation/Navigation";
import Account from "../account/Account";
import Logo from "@/components/logo/Logo";


const Header: FC = () => {
  return (
    <section className={style.container}>
      <header className={style.header}>
        <Logo />
        <Navigation />
        <Account />
      </header>
    </section>
  );
};
export default Header;