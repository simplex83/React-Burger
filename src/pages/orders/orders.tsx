import {
  WS_CONNECTION_START_AUTH,
  WS_CONNECTION_CLOSED,
} from "../../services/actions/wsActionTypes";
import { OrdersList } from "../../components/orders-list/orders-list";

import styles from "./orders.module.css";
import { useDispatch, useSelector } from "../../services/hooks/hooks";
import { useEffect } from "react";
import { getCookie } from "../../utils/cookies";
import { FC } from "react";

export const OrderPage: FC = () => {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const { ordersAuth } = useSelector((store) => store.ws);
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_AUTH, payload: `?token=${token}` });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <OrdersList orders={ordersAuth} />
    </div>
  );
};
