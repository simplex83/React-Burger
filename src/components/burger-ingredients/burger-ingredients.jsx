import React from "react";
import Tabs from "../tabs/tabs";
import styles from "./burger-ingredients.module.css";
import Ingredients from "../ingredients/ingredients.jsx";
import PropTypes from "prop-types";
import { typeIngredients } from "../../utils/types";
import { BurgerContext } from "../../services/burger-context";

function BurgerIngredients() {
  const { state } = React.useContext(BurgerContext);

  const buns = React.useMemo(
    () => state.ingredients.filter((item) => item.type === "bun"),
    [state]
  );
  const sauces = React.useMemo(
    () => state.ingredients.filter((item) => item.type === "sauce"),
    [state]
  );
  const fillings = React.useMemo(
    () => state.ingredients.filter((item) => item.type === "main"),
    [state]
  );

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

export default BurgerIngredients;
