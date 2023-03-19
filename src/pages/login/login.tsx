import { FC, ChangeEvent, FormEvent } from "react";
import styles from "./login.module.css";
import { useDispatch } from "../../services/hooks/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { login } from "../../services/actions/authorization";

export const LoginPage: FC = () => {
  const [user, setValue] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...user, [evt.target.name]: evt.target.value });
  };
  const handleSubmitLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(login(user));
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-6`}>
        Вход
      </h1>
      <form className={styles.form} onSubmit={handleSubmitLogin}>
        <EmailInput name="email" onChange={onChangeLogin} value={user.email} />
        <PasswordInput
          name="password"
          onChange={onChangeLogin}
          value={user.password}
        />
        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      </form>
      <p
        className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}
      >
        Вы — новый пользователь?
        <Link to="/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </p>
      <p
        className={`${styles.text} text text_type_main-default text_color_inactive mt-4`}
      >
        Забыли пароль?
        <Link to="/forgot-password" className={styles.link}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};
