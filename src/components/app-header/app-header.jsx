import React from 'react';
import { HeaderButton } from '../header-button/header-button';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <ul className={styles.header__list}>
            <li className={`${styles.header__item} mr-2`}>
              <HeaderButton type={BurgerIcon} text='Конструктор' isActive={true} />
            </li>
            <li className={`${styles.header__item} mr-28`}>
              <HeaderButton type={ListIcon} text='Лента заказов' isActive={false} />
            </li>
          </ul>
          <Logo />
          <div className={`${styles.header__item} ml-2`}>
            <HeaderButton type={ProfileIcon} text='Личный кабинет' isActive={false} />
          </div>
        </div>
      </header>)
  }
}
export default AppHeader;