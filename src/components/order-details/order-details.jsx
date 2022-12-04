import React from "react";
import Done from "../../images/done.svg";
import styles from "./order-details.module.css";

function OrderDetails() {
  return (
    <>
      <p className={`${styles.num} text text_type_digits-large mt-30`}>
        034536
      </p>
      <p className={`$ text text_type_main-medium mt-8 mb-15`}>
        идентификатор заказа
      </p>
      <img src={Done} alt="Выполнено" />
      <p className={`$ mt-15 text text_type_main-default`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`$ mt-2 mb-30 text text_type_main-default text_color_inactive`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}
export default OrderDetails;
