import React from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { makeOrder } from "../../utils/api";
import { BurgerContext } from "../../services/burger-context";

function BurgerConstructor() {
  const { state } = React.useContext(BurgerContext);
  // const [stateConstructor, setStateConstructor] = React.useState({
  //   bun: [],
  //   fillings: [],
  //   price: 0,
  // });

  const [orderNum, setOrderNum] = React.useState();
  const bread = React.useMemo(
    () => state.ingredients.filter((item) => item.type === "bun").slice(0, 1),
    [state.ingredients]
  );
  const main = React.useMemo(
    () =>
      state.ingredients
        .filter((item) => item.type === "sauce" || item.type === "main")
        .slice(0, 6),
    [state.ingredients]
  );

  const amount = React.useMemo(() => {
    return (
      main.reduce((sum, ingredient) => (sum += ingredient.price), 0) +
      2 * bread.reduce((sum, ingredient) => (sum += ingredient.price), 0)
    );
  }, [bread, main]);

  function handleClick() {
    const ingredientsId = [];
    bread.map((el) => {
      ingredientsId.push(el._id);
    });
    main.map((el) => {
      ingredientsId.push(el._id);
    });
    makeOrder(ingredientsId)
      .then((res) => setOrderNum(res.order.number))
      .catch((e) => console.log(e));
  }

  return (
    <section className="mb-13">
      <ul className={`${styles.container} mb-10 pr-4 pl-4`}>
        <li className={`${styles.ingredient} ml-6 mb-4 pr-4 `}>
          {bread.map((el) => (
            <ConstructorElement
              key={el._id}
              type="top"
              isLocked={true}
              text={`${el.name} (верх)`}
              price={el.price}
              thumbnail={el.image_mobile}
            />
          ))}
        </li>
        <li className={`${styles.ingredient} mb-4`}>
          <ul className={styles.fillings}>
            {main.map((el) => (
              <li key={el._id} className={`${styles.item} mb-4 pr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image_mobile}
                />
              </li>
            ))}
          </ul>
        </li>
        <li className={`${styles.ingredient} ml-6 mb-4 pr-4`}>
          {bread.map((el) => (
            <ConstructorElement
              key={el._id}
              type="bottom"
              isLocked={true}
              text={`${el.name} (низ)`}
              price={el.price}
              thumbnail={el.image_mobile}
            />
          ))}
        </li>
      </ul>
      <section className={`${styles.wrapper} mb-13 mt-10 pr-4`}>
        <div className={`${styles.wrapper} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{amount}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleClick}
        >
          Оформить заказ
        </Button>
      </section>

      {orderNum && (
        <Modal setOrderNum={setOrderNum}>
          <OrderDetails num={orderNum} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
