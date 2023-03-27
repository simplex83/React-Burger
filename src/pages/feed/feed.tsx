import styles from "./feed.module.css";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "../../services/hooks/hooks";
import { OrdersList } from "../../components/orders-list/orders-list";
import { OrdersInfo } from "../../components/orders-info/orders-info";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from "../../services/actions/wsActionTypes";
import { FC } from "react";

export const FeedPage: FC = () => {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector((store) => store.ws);

  interface IListOrders {
    listDone: Array<number>;
    listProgress: Array<number>;
  }
  const { listDone, listProgress } = useMemo(() => {
    if (!orders.length) {
      return { listDone: [], listProgress: [] };
    }
    return orders.reduce<IListOrders>(
      (count, item) => {
        switch (item.status) {
          case "done":
            count.listDone.push(item.number);
            break;
          case "pending":
            count.listProgress.push(item.number);
            break;
        }
        return count;
      },
      { listDone: [], listProgress: [] }
    );
  }, [orders]);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: "/all" });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.title} text text_type_main-large`}>
          {" "}
          Лента заказов{" "}
        </h2>
        <OrdersList orders={orders} />
      </div>
      <OrdersInfo
        listDone={listDone}
        listProgress={listProgress}
        total={total}
        totalToday={totalToday}
      />
    </section>
  );
};
