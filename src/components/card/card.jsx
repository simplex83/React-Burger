import React from "react";
import styles from "./card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { typeIngredients } from "../../utils/types";
import { useSelector } from 'react-redux';

function Card({ card }) {
  const {selectedItems, selectedBun}= useSelector(store => store.burgerConstructor);
  const [{opacity}, dragRef] = useDrag({
    type: "ingredients",
    item: { ...card },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });
  const count = React.useMemo(()=>{
    if (card.type !== 'bun') {
      const sameItems = selectedItems.filter(
        (el) => el._id === card._id
      );
      return sameItems.length;
    } 
    if (card.type === 'bun') {
      const sameBun = selectedBun.filter(
        (el) => el._id === card._id);
        return 2*sameBun.length;
  }
},
    [selectedItems, selectedBun]
    )
  return (
    <article className={`${styles.card}`}ref={dragRef} style={{opacity}}>
      <Counter count={count} size="default" extraClass="m-1" />
      <img
        src={card.image}
        className={`${styles.image} pl-4`}
        alt={card.name}
      />
      <div className={`${styles.wrapper} mt-1 mb-1`}>
        <p className="text text_type_digits-default mr-1">{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h2 className="text text_type_main-default">{card.name}</h2>
    </article>
  );
}
Card.propTypes = {
  card: typeIngredients.isRequired,
};
export default Card;
