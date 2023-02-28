import {
  WS_CONNECTION_START_AUTH,
  WS_CONNECTION_CLOSED,
} from "../../services/actions/wsActionTypes";
import { OrdersList } from "../../components/orders-list/orders-list.jsx";

import styles from "./orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCookie } from "../../utils/cookies";

export function OrderPage() {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const { ordersAuth } = useSelector((store) => store.ws);
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_AUTH, payload: `?token=${token}`});
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <OrdersList orders={ordersAuth} />
    </div>
  );
}
