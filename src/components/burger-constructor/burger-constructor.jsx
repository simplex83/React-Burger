import React from 'react';
import { data } from '../../utils/data'
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-constructor.module.css";

class BurgerConstructor extends React.Component {
    render() {
        const buns = data.filter((item) => item.type === "bun");
        const bread = buns[Math.floor(Math.random() * (buns.length))];
        const fillings = data.filter((item) => item.type === "sauce" || item.type === "main");
        const main = fillings.slice(0,6);

        const amount = bread.price * 2 + main.reduce((acc, crntValue) => acc + crntValue.price, 0);

        return (
            <section className="mb-13">
                <ul className={`${styles.container} mb-10 pr-4 pl-4`}>
                    <li className={`${styles.ingredient} ml-6 mb-4 pr-4 `}>
                    <ConstructorElement
                           type="top"
                           isLocked={true}
                           text={`${bread.name} (верх)`}
                           price={bread.price}
                           thumbnail={bread.image_mobile}
                    />
                    </li>
                    <li className={`${styles.ingredient} mb-4`}>
                    <ul className={styles.fillings}>
                        {main.map((el) => (
                    <li className={`${styles.item} mb-4 pr-2`}>
                    <DragIcon type="primary" />   
                    <ConstructorElement
                           text={el.name}
                           price={el.price}
                           thumbnail={el.image_mobile}
                    /></li>
                     ))
                     }
                    </ul>
                    </li>
                    <li className={`${styles.ingredient} ml-6 mb-4 pr-4`}>
                    <ConstructorElement
                           type="bottom"
                           isLocked={true}
                           text={`${bread.name} (низ)`}
                           price={bread.price}
                           thumbnail={bread.image_mobile}
                    /></li>
                    </ul>
        <section className={`${styles.wrapper} mb-13 mt-10 pr-4`}>
        <div className={`${styles.wrapper} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{amount}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </section>
    </section>

        )
    }
}
export default BurgerConstructor