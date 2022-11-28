import React from 'react';
import { data } from '../../utils/data'
import { Tab  } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-ingredients.module.css";
import Ingredients from '../ingredients/ingredients.jsx';

class BurgerIngredients extends React.Component {
    render() {
        const buns = data.filter((item) => item.type === "bun");
        const sauces = data.filter((item) => item.type === "sauce");
        const fillings = data.filter((item) => item.type === "main");
        return (
    <section className={`${styles.container}`}>      
    <ul className={`${styles.menu} mb-10`}>
      <li><Tab>
        Булки
      </Tab>
      </li>
      <li><Tab>
        Соусы
      </Tab>
      </li>
      <li><Tab>
        Начинки
      </Tab>
      </li>
    </ul>
    <ul className={`${styles.ingredients}`}>
        <li className={`${styles.ingredients__item}`}>
          <Ingredients title='Булки' card={buns}/>
        </li>
        <li className={`${styles.ingredients__item}`}>
          <Ingredients title='Соусы' card={sauces}/>
        </li>
        <li className={`${styles.ingredients__item}`}>
          <Ingredients title='Начинки' card={fillings}/>
        </li>
    </ul>
    </section>
        )
    }
}

export default BurgerIngredients