import { FC, ChangeEvent, FormEvent } from "react";
import styles from "./reset-password.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword } from "../../utils/api";

export const  ResetPage: FC = () =>  {
  const [user, setValue] = useState({ password: "", code: "" });
  const navigate = useNavigate();

  const onChangeReset = (evt:ChangeEvent<HTMLInputElement>) => {
    setValue({ ...user, [evt.target.name]: evt.target.value });
  };
  const handleSubmitReset = ( evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    resetPassword(user.password, user.code)
      .then((res) => {
        if (res.success) {
          navigate("/");
          localStorage.removeItem("forgot-password");
        }
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    if (!localStorage.getItem("forgot-password")) {
      navigate("/forgot-password");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h1>
      <form className={styles.form} onSubmit={handleSubmitReset}>
        <PasswordInput
          placeholder="Введите новый пароль"
          name="password"
          onChange={onChangeReset}
          value={user.password}
        />
        <Input
          placeholder="Введите код из письма"
          name="code"
          onChange={onChangeReset}
          value={user.code}
        />

        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <p
        className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}
      >
        Вспомнили пароль?
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
}
