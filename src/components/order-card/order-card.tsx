import { FC } from "react";
import styles from "./order-card.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks/hooks";
import { TOrder, TCardItem } from "../../services/types/types";

interface IOrderCard {
  order: TOrder;
}
export const OrderCard: FC<IOrderCard> = ({ order }) => {
  const curOffset = new Date().getTimezoneOffset() / 60;
  const GMT = "i-GTM" + (curOffset > 0 ? "-" + curOffset : "+" + -curOffset);
  const { ingredients } = useSelector((store) => store.ingredients);
  const cardData = useMemo(() => {
    const cardData: TCardItem[] = [];
    ingredients.filter((el) => {
      return order.ingredients.map((orderItem) => {
        if (orderItem === el._id) {
          return cardData.push(el);
        }
      });
    });
    return cardData;
  }, [ingredients, order.ingredients]);
  const imgData = [...new Set(cardData)];

  const orderPrice = cardData.reduce((acc, elem) => acc + elem.price, 0);
  const { pathname } = useLocation();

  return (
    <div className={styles.card}>
      <div className={styles.numb}>
        <p className="text text_type_digits-default">#{order.number}</p>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} /> {`${GMT}`}
        </p>
      </div>
      <h3 className={`${styles.title} text text_type_main-medium`}>
        {" "}
        {order.name}
      </h3>

      {pathname === "/profile/orders" && order.status === "created" ? (
        <p className={styles.status}>Создан</p>
      ) : null}
      {pathname === "/profile/orders" && order.status === "pending" ? (
        <p className={styles.status}>Выполняется</p>
      ) : null}
      {pathname === "/profile/orders" && order.status === "done" ? (
        <p className={styles.status}>Выполнен</p>
      ) : null}

      <div className={styles.wrapper}>
        <ul className={styles.ingredients}>
          {imgData.slice(0, 5).map((item) => {
            return (
              <li key={item._id} className={styles.ingredient}>
                <img
                  className={styles.image}
                  src={item.image}
                  alt={item.name}
                />
              </li>
            );
          })}
          {imgData.length >= 6 && (
            <li key={cardData[5]._id} className={styles.ingredient}>
              <div className={styles.counter}>
                <p className="text text_type_main-default">
                  {`+${cardData.length - 5}`}
                </p>
              </div>
              <img
                className={styles.image}
                src={cardData[5].image}
                alt={cardData[5].name}
              />
            </li>
          )}
        </ul>

        <div className={`${styles.price}`}>
          <p className="text text_type_digits-default">{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
