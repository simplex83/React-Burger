import React from 'react';
import styles from './profile.module.css';
import { NavLink, useLocation,Outlet } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../services/actions/authorization';

export function ProfilePage() {
    const {pathname} =useLocation()
    const dispatch = useDispatch();
    const signout = () => {dispatch(logout())}
    const user = useSelector(store => store.auth.user);

return (
  user ? (
    <div className= {styles.wrapper}>
    <nav>
        <ul className={styles.list}>
            <li className={styles.item}>
            <NavLink
                to="/profile"
                className={pathname === "/profile"
                    ? `${styles.activelink} text text_type_main-medium`
                    : `${styles.link} text text_type_main-medium text_color_inactive`
                }
              >
                Профиль
              </NavLink>
            </li>
            <li className={styles.item}>
            <NavLink
                to="/orders"
                className={pathname === "/orders"
                    ? `${styles.activelink} text text_type_main-medium`
                    : `${styles.link} text text_type_main-medium text_color_inactive`
                }
              >
                История заказов
              </NavLink>
            </li>
            <li className={styles.item}>
            <NavLink
                onClick={signout}
                to="/login"
                className={`${styles.link} text text_type_main-medium text_color_inactive`}
                
              >
                Выход
              </NavLink>
              </li>
              <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
    В этом разделе вы можете изменить свои персональные данные
        </p>
        </ul>
    </nav>
        <Outlet />
    </div>
) : <></>
)
}
