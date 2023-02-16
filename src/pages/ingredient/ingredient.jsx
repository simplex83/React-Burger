import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIngredients } from "../../services/actions/ingredients";

import styles from "./ingredient.module.css";

export function IngredientPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { id } = useParams();

  const { ingredients } = useSelector((store) => ({
    ingredients: store.ingredients.ingredients,
  }));

  const data = ingredients.find((item) => item._id === id);
  if (ingredients.length > 0) {
    return (
      <div className={`${styles.card} pt-10 pl-10 pb-15`}>
        <h2 className={`${styles.title} text text_type_main-large`}>
          Детали ингредиента
        </h2>
        <img
          className={`${styles.image} mb-4`}
          src={data.image_large}
          alt={`Картинка ${data.name}`}
        />
        <p className="text text_type_main-medium mb-8">{data.name}</p>
        <ul className={`${styles.compounds} mb-15`}>
          <li className={`${styles.compound}`}>
            <p className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </p>
            <p
              className={`${styles.num} text text_type_digits-default text_color_inactive`}
            >
              {data.calories}
            </p>
          </li>
          <li className={`${styles.compound} ml-5`}>
            <p className="text text_type_main-default text_color_inactive">
              Белки,г
            </p>
            <p
              className={`${styles.num} text text_type_digits-default text_color_inactive`}
            >
              {data.proteins}
            </p>
          </li>
          <li className={`${styles.compound} ml-5`}>
            <p className="text text_type_main-default text_color_inactive">
              Жири,г
            </p>
            <p
              className={`${styles.num} text text_type_digits-default text_color_inactive`}
            >
              {data.fat}
            </p>
          </li>
          <li className={`${styles.compound} ml-5`}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы,г
            </p>
            <p
              className={`${styles.num} text text_type_digits-default text_color_inactive`}
            >
              {data.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
