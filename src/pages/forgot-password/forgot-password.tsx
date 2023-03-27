import { useState, ChangeEvent, FormEvent, FC } from "react";
import styles from "./forgot-password.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forgotPassword } from "../../utils/api";

export const ForgotPage: FC = () => {
  const [user, setValue] = useState({ email: "" });
  const navigate = useNavigate();

  const onChangeForgot = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...user, [evt.target.name]: evt.target.value });
  };
  const handleSubmitForgot = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    forgotPassword(user.email)
      .then((res) => {
        if (res.success) {
          navigate("/reset-password");
          localStorage.setItem("forgot-password", "true");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h1>
      <form className={styles.form} onSubmit={handleSubmitForgot}>
        <EmailInput
          name="email"
          placeholder="Укажите e-mail"
          onChange={onChangeForgot}
          value={user.email}
        />
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
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
};
