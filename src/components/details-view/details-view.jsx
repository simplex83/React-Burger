import {  useMemo } from "react";
import PropTypes from "prop-types";
import {  useSelector } from "react-redux";
import styles from "./details-view.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function DetailsView({data}) {
    const { ingredients } = useSelector((store) => ({ 
        ingredients: store.ingredients.ingredients
      })
      );
      const cardData = useMemo(() => {
        const cardData = [];
        ingredients.filter((el) => {
          return data.ingredients.map((orderItem) => {
            if (orderItem === el._id) {
              return cardData.push(el);
            }
          });
        });
        return cardData;
      }, [ingredients, data.ingredients]);

      const imgData = [...new Set(cardData)];
  const orderPrice = cardData.reduce((acc, elem) => acc + elem.price, 0);

  const curOffset = new Date().getTimezoneOffset() / 60;
  const GMT = "i-GTM" + (curOffset > 0 ? "-" + curOffset : "+" + -curOffset);

    return (
        <>
        <h2 className={`${styles.orderNum} text text_type_digits-default`}>
            #{data.number} </h2>
            <p className={`${styles.orderName} text text_type_main-medium`}>
                {data.name}</p>
       
       {data.status === "done" && (
          <p className={styles.orderStatus}>Выполнен</p>
        )}
        {data.status === "pending" && (
          <p className={styles.orderStatus}>Выполняется</p>
        )}
        {data.status === "created" && (
          <p className={styles.orderStatus}>Создан</p>
        )}

        <p className={`${styles.compound} text text_type_main-medium`}>
        Состав:</p>
        <div className={styles.wrapper}>
            <ul className={styles.ingredients}>
                {imgData.map((el) => {
                    const count = cardData.filter((ing) => ing._id === el._id);
                    return (
                        <li key={el._id} className={styles.ingredient}>
                            <div className={styles.ing_image}>
                                <img
                                    src={el.image}
                                    alt={el.name}
                                    className={styles.image} />
                            </div>

                            <p className={styles.ing_name}>{el.name}</p>
                            <div className={`${styles.ing_price}`}>
                                <p className="text text_type_digits-default">
                                    {count.length} x {el.price}
                                </p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.wrapper_total}>
                <p className="text text_type_main-default text_color_inactive">
                    <FormattedDate date={new Date(data.createdAt)} /> {`${GMT}`}
                </p>
                <div className={styles.ing_price}>
                    <p className="text text_type_digits-default">{orderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
        </>

        
    )
}
DetailsView.propTypes = {
  data: PropTypes.object.isRequired,
};