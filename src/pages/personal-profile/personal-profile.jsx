import React from "react";
import styles from "./personal-profile.module.css";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { update } from "../../services/actions/authorization";

export function PersonalPage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    isChange: false,
  });

  useEffect(() => {
    setUserData({ name: user.name, email: user.email, password: '' });
  }, [user]);

  const onChangeRersonal = (evt) => {
    setUserData({
      ...userData,
      isChange: true,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmitRersonal = (evt) => {
    evt.preventDefault();
    dispatch(update(userData));
  };

  const handleSubmitReset = (evt) => {
    evt.preventDefault();
    setUserData({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmitRersonal}>
        <Input
          placeholder="Имя"
          icon="EditIcon"
          value={userData.name}
          onChange={onChangeRersonal}
          name="name"
        />
        <EmailInput
          placeholder="Логин"
          icon="EditIcon"
          value={userData.email}
          onChange={onChangeRersonal}
          name="email"
        />
        <PasswordInput
          value={userData.password || ""}
          onChange={onChangeRersonal}
          name="password"
        />
        {userData.isChange && (
          <div className={styles.buttons}>
            <button
              type="button"
              className={`${styles.button} text text_type_main-small`}
              onClick={handleSubmitReset}
            >
              Отмена
            </button>
            <Button type="primary" size="medium" htmlType="submit">
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
