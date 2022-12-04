import React from 'react';
import styles from './ingredients.module.css'
import Card from '../card/card';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from 'prop-types';
import {typeIngredients} from '../../utils/types';

function Ingredients({ title, card }) {
  const [openModal, setModal] = React.useState(false);
  const [ingredients, setData] = React.useState();

  function handleClick(evt) {
    setModal(true);
    setData(evt);
  }

  return (
    <section className={`${styles.ingredients__item}`}>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={`${styles.container} ml-4 mr-2 mb-10`}>
        {card.map((card) => (
          <li key={card._id} onClick={(evt) => handleClick(card)}>
            <Card card={card} />
          </li>
        ))}
      </ul>

      {openModal && ingredients && (
        <Modal setModal={setModal}>
          <IngredientDetails data={ingredients} />
        </Modal>
      )}
    </section>
  );
}

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  card: PropTypes.arrayOf(typeIngredients).isRequired,
}

export default Ingredients; 
