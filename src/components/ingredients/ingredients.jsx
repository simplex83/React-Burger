import React from "react";
import styles from "./ingredients.module.css";
import Card from "../card/card";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import { typeIngredients } from "../../utils/types";
import { useSelector, useDispatch } from "react-redux";
import {
  openIngredients,
  closeIngredients,
} from "../../services/actions/ingredient-details";

function Ingredients({ title, card }) {
  const { openIngredient } = useSelector((store) => store.ingredientDetails);
  const dispatch = useDispatch();
  const openPopup = (card) => {
    dispatch(openIngredients(card));
  };
  const closePopup = () => {
    dispatch(closeIngredients());
  };

  return (
    <section className={`${styles.ingredients__item}`}>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={`${styles.container} ml-4 mr-2 mb-10`}>
        {card.map((card) => (
          <li key={card._id} onClick={() => openPopup(card)}>
            <Card card={card} />
          </li>
        ))}
      </ul>
      {openIngredient && (
        <Modal closePopup={closePopup}>
          <IngredientDetails data={openIngredient} />
        </Modal>
      )}
    </section>
  );
}
Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  card: PropTypes.arrayOf(typeIngredients.isRequired).isRequired
};
export default Ingredients;
