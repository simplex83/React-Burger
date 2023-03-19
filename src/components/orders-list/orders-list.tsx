import styles from "./orders-list.module.css";
import { Link, useLocation } from "react-router-dom";
import { OrderCard } from "../order-card/order-card";
import { FC } from "react";
import { TOrder } from "../../services/types/types";

interface IOrders {
  orders: TOrder[];
}

export const OrdersList: FC<IOrders> = ({ orders }) => {
  const location = useLocation();
  const isPersonal = location.pathname.startsWith("/profile");
  return (
    <section className={styles.section}>
      {!isPersonal ? (
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {orders.map((order) => {
              return (
                <li key={order.number}>
                  <Link
                    to={`/feed/${order._id}`}
                    state={{ feed: location }}
                    className={styles.link}
                  >
                    <OrderCard order={order} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className={styles.wrapper_big}>
          <ul className={styles.list}>
            {orders.map((order) => {
              return (
                <li key={order.number}>
                  <Link
                    to={`/profile/orders/${order._id}`}
                    state={{ profile: location }}
                    className={styles.link}
                  >
                    <OrderCard order={order} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};
