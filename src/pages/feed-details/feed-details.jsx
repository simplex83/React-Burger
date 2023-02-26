import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import styles from "./feed-details.module.css";
import { getCookie } from "../../utils/cookies";

import {
  WS_CONNECTION_START_AUTH,
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from "../../services/actions/wsActionTypes";
import { DetailsView } from "../../components/details-view/details-view";

export function FeedPageDetails() {
  const checkUser = getCookie('accessToken');
  const dispatch = useDispatch();
  const location = useLocation();

  const { id } = useParams();
  
  useEffect(() => {
    (location.pathname.startsWith("/profile") && checkUser)
      ? dispatch({ type: WS_CONNECTION_START_AUTH})
      : dispatch({ type: WS_CONNECTION_START, payload: '/all' });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch, checkUser, location]);
  
  const { orders } = useSelector((store) => store.ws);
  const data = orders.find((item) => item._id === id);

  return (
    data && (
      <section className={styles.section}>
        <DetailsView data={data}/>
      </section>
    )
    )
        
}
