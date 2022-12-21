import React from "react";
import Done from "../../images/done.svg";
import styles from "./order-details.module.css";
import PropTypes from 'prop-types';
function OrderDetails({num}) {
  return (
    <>
      <p className={`${styles.num} text text_type_digits-large mt-30`}>
        {num}
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
OrderDetails.propTypes = {
  num: PropTypes.number.isRequired,
}
export default OrderDetails;
