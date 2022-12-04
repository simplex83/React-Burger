import React from 'react';
import Tabs from '../tabs/tabs';
import styles from './burger-ingredients.module.css';
import Ingredients from '../ingredients/ingredients.jsx';
import PropTypes from 'prop-types';
import {typeIngredients} from '../../utils/types';

function BurgerIngredients({ data }) {

  const buns = data.filter((item) => item.type === "bun");
  const sauces = data.filter((item) => item.type === "sauce");
  const fillings = data.filter((item) => item.type === "main");

  return (
    <section className={`${styles.container}`}>
      <Tabs />
      <ul className={`${styles.ingredients}`}>
        <li id="breads">
          <Ingredients title="Булки" card={buns} />
        </li>
        <li id="sauces">
          <Ingredients title="Соусы" card={sauces} />
        </li>
        <li id="fillings">
          <Ingredients title="Начинки" card={fillings} />
        </li>
      </ul>
    </section>
  );
}
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(typeIngredients).isRequired,
}

export default BurgerIngredients;
