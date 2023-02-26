import styles from './orders-info.module.css'
import PropTypes from 'prop-types';

export function OrdersInfo({listDone, listProgress, total, totalToday }) {
  
    return (
        <section className={styles.section}>
          <div className={styles.wrapper_status}>
            <div className={styles.container_status}>
              <h2
                className={`${styles.title} text text_type_main-medium`}
              >
                Готовы:
              </h2>
              <ul className={styles.list_status}>
                {listDone.slice(0, 10).map((item,index) => {
                  return (
                    <li
                       key={index}
                      className={`${styles.item_status_done} text text_type_digits-default`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              </div>
            <div className={styles.container_status}>
              <h2
                className={`${styles.title} text text_type_main-medium`}
              >
                В работе:
              </h2>
              <ul className={styles.list_status}>
                {listProgress.slice(0, 10).map((item,index) => {
                  return (
                    <li
                      key={index}
                      className={`${styles.item_status_progress} text text_type_digits-default`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            
          </div>
          <div className={styles.container_numb}>
            <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
    
            <p
              className={`${styles.ordersNumb} text text_type_digits-large`}
            >
              {total}
            </p>
          </div>
          <div className={styles.container_numb}>
            <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
    
            <p
              className={`${styles.ordersNumb} text text_type_digits-large`}
            >
              {totalToday}
            </p>
          </div>
        </section>
      );
    }

    OrdersInfo.propTypes = {
      listDone: PropTypes.array.isRequired,
      listDone: PropTypes.array.isRequired,
      total: PropTypes.number.isRequired,
      totalToday: PropTypes.number.isRequired
    }
