import { FC } from "react";
import Done from "../../images/done.svg";
import styles from "./order-details.module.css";
import { useSelector } from "../../services/hooks/hooks";
import { useMemo } from "react";

const OrderDetails: FC = () => {
  const { orderNumber, orderRequest } = useSelector((store) => ({
    orderNumber: store.orderDetails.orderNumber,
    orderRequest: store.orderDetails.orderRequest,
  }));

  const info = useMemo(() => {
    return orderRequest ? (
      <h2 className={`text ${styles.num} mt-30`}>минуточку...</h2>
    ) : (
      <h2 className={`text text_type_digits-large ${styles.num} mt-30`}>
        {orderNumber}
      </h2>
    );
  }, [orderNumber, orderRequest]);

  return (
    <div className={styles.container}>
      {info}
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
    </div>
  );
};

export default OrderDetails;
