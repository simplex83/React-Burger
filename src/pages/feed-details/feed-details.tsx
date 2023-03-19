import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "../../services/hooks/hooks";
import { useParams, useLocation } from "react-router-dom";
import styles from "./feed-details.module.css";
import { getCookie } from "../../utils/cookies";

import {
  WS_CONNECTION_START_AUTH,
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from "../../services/actions/wsActionTypes";
import { DetailsView } from "../../components/details-view/details-view";

export const FeedPageDetails: FC = () => {
  const checkUser = getCookie("accessToken");
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const token = getCookie("accessToken");
    location.pathname.startsWith("/profile") && checkUser
      ? dispatch({ type: WS_CONNECTION_START_AUTH, payload: `?token=${token}` })
      : dispatch({ type: WS_CONNECTION_START, payload: "/all" });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch, checkUser, location]);

  const { orders, ordersAuth } = useSelector((store) => store.ws);
  const data =
    (location.pathname.startsWith("/profile")
      ? ordersAuth.find((item) => item._id === id)
      : orders.find((item) => item._id === id)) || null;

  return (
    data && (
      <section className={styles.section}>
        <DetailsView data={data} />
      </section>
    )
  );
};
