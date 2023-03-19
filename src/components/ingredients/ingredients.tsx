import { FC } from "react";
import styles from "./ingredients.module.css";
import Card from "../card/card";

import { useDispatch } from "react-redux";
import { openIngredients } from "../../services/actions/ingredient-details";
import { Link, useLocation } from "react-router-dom";
import { TCardItem } from "../../services/types/types";

interface IIngredientProps {
  title: string;
  card: Array<TCardItem>;
}

const Ingredients: FC<IIngredientProps> = ({ title, card }) => {
  const dispatch = useDispatch();
  const openPopup = (card: TCardItem) => {
    dispatch(openIngredients(card));
  };

  const location = useLocation();
  return (
    <section className={`${styles.ingredients__item}`}>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={`${styles.container} ml-4 mr-2 mb-10`}>
        {card.map((card) => (
          <li key={card._id} onClick={() => openPopup(card)}>
            <Link
              className={`${styles.link}`}
              to={`/ingredients/${card._id}`}
              state={{ ingredient: location }}
            >
              <Card card={card} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ingredients;
