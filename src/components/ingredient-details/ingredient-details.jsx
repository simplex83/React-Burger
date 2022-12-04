import React from "react";
import styles from "./ingredient-details.module.css";
import PropTypes from 'prop-types';
import {typeIngredients} from '../../utils/types';

function IngredientDetails({ data }) {
  return (
    <>
      <p
        className={`${styles.title} text text_type_main-large mt-10 mr-10 mb-0 ml-10`}
      >
        Детали ингредиента
      </p>
      <img
        className={`${styles.image}`}
        src={data.image_large}
        alt={data.name}
      />
      <p className={`${styles.name} text text_type_main-medium mt-4`}>
        {data.name}
      </p>
      <ul className={`${styles.compound} mt-8 mb-15`}>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.calories}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.proteins}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.fat}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
}

IngredientDetails.propTypes = {
  data: PropTypes.arrayOf(typeIngredients).isRequired,
}

export default IngredientDetails;
