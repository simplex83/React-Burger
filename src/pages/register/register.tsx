import { FC, ChangeEvent, FormEvent } from "react";
import styles from "./register.module.css";
import { useDispatch } from "../../services/hooks/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Input,
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { register } from "../../services/actions/authorization";

export const  RegisterPage: FC = () => {
  const [user, setValue] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeRegister = (evt:ChangeEvent<HTMLInputElement>) => {
    setValue({ ...user, [evt.target.name]: evt.target.value });
  };
  const handleSubmitRegister = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(register(user));
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-6`}>
        Регистрация
      </h1>
      <form className={styles.form} onSubmit={handleSubmitRegister}>
        <Input
          placeholder="Имя"
          name="name"
          onChange={onChangeRegister}
          value={user.name}
        />
        <EmailInput
          name="email"
          onChange={onChangeRegister}
          value={user.email}
        />
        <PasswordInput
          name="password"
          onChange={onChangeRegister}
          value={user.password}
        />
        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p
        className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}
      >
        Уже зарегистрированы?
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
}
