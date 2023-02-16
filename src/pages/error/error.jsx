import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.css";

export function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} text text_type_main-large mb-6`}>
        Ooops...
      </h1>
      <h2 className={`${styles.subheading} text text_type_main-medium mb-10`}>
        Кажется,такой страницы не существует
      </h2>
      <p
        className={`${styles.text} text text_type_main-default text_color_inactive`}
      >
        Хотите вернуться на главную?
        <Link to="/" className={styles.link}>
          Тогда жмите сюда
        </Link>
      </p>
    </div>
  );
}
