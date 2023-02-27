import {
    WS_CONNECTION_START_AUTH,
    WS_CONNECTION_CLOSED,
} from '../../services/actions/wsActionTypes';
import { OrdersList } from '../../components/orders-list/orders-list.jsx';

import styles from './orders.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function OrderPage() { 
  const dispatch = useDispatch();
  
  const {orders}  = useSelector((store) => store.ws);
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_AUTH })
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED })
    }
  }, [dispatch]);

  return (
    
        <div className={styles.container}>
          <OrdersList orders={orders}  />
        </div>
      
  )
}

