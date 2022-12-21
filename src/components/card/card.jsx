import React from "react";
import styles from "./card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { typeIngredients } from "../../utils/types";

function Card({ card }) {
  return (
    <article className={`${styles.card}`}>
      <Counter count={1} size="default" extraClass="m-1" />
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

Card.prototype = {
  card: typeIngredients.isRequired,
};

export default Card;
