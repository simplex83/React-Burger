import { FC } from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./app-header.module.css";

export const AppHeader: FC = () => {
  const { pathname }: { pathname: string } = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.header__list}>
          <li className={`${styles.header__item} mr-2`}>
            <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
            <NavLink
              to="/"
              className={
                pathname === "/" ? `${styles.activelink} ` : `${styles.link} `
              }
            >
              Конструктор
            </NavLink>
          </li>
          <li className={`${styles.header__item} mr-28`}>
            <ListIcon type={pathname === "/feed" ? "primary" : "secondary"} />
            <NavLink
              to="/feed"
              className={
                pathname === "/feed"
                  ? `${styles.activelink} `
                  : `${styles.link} `
              }
            >
              Лента заказов
            </NavLink>
          </li>
        </ul>
        <Logo />
        <div className={`${styles.header__item} ml-2`}>
          <ProfileIcon
            type={pathname.startsWith("/profile") ? "primary" : "secondary"}
          />
          <NavLink
            to="/profile"
            className={
              pathname.startsWith("/profile")
                ? `${styles.activelink} `
                : `${styles.link} `
            }
          >
            Личный кабинет
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
