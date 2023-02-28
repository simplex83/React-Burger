import React from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { createOrder, closeOrder } from "../../services/actions/order-details";
import {
  addIngredient,
  clearConstructor,
  sortIngredient,
} from "../../services/actions/burger-constructor";
import { Reorder } from "framer-motion";
import { ConstructorItem } from "../constructor-item/constructor-item";
import { useNavigate } from "react-router-dom";

function BurgerConstructor() {
  const { selectedItems, selectedBun } = useSelector(
    (store) => store.burgerConstructor
  );
  const { orderNumber, orderRequest} = useSelector(store => ({
    orderNumber: store.orderDetails.orderNumber,
    orderRequest: store.orderDetails.orderRequest
  }));
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(closeOrder());
    dispatch(clearConstructor());
  };

  const amount = React.useMemo(() => {
    return (
      selectedItems.reduce((sum, ingredient) => (sum += ingredient.price), 0) +
      2 * selectedBun.reduce((sum, ingredient) => (sum += ingredient.price), 0)
    );
  }, [selectedBun, selectedItems]);

  function handleClick() {
    if (!user) {
      navigate("/login");
      return;
    }
    const ingredientsId = [];
    selectedBun.map((el) => {
      ingredientsId.push(el._id);
    });
    selectedItems.map((el) => {
      ingredientsId.push(el._id);
    });
    selectedBun.map((el) => {
      ingredientsId.push(el._id);
    });
    dispatch(createOrder(ingredientsId));
   
  }

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch(addIngredient(ingredient));
    },
  });

  const borderColor = isHover ? "green" : "transparent";

  return (
    <section className="mb-13">
      <ul
        className={`${styles.container} mb-10 pr-4 pl-4`}
        ref={dropTarget}
        style={{ borderColor }}
      >
        {selectedItems.length === 0 && selectedBun.length === 0 && (
          <p className={`${styles.newbun}`}>
            Сначала выберете булку и перетащите ee сюда
          </p>
        )}
        <li className={`${styles.ingredient} ml-6 mb-4 pr-4 `}>
          {selectedBun.map((el) => (
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
        {selectedItems.length === 0 && selectedBun.length !== 0 && (
          <p className={`${styles.newmain}`}>
            Теперь выберете начинки и соусы и перетащите их сюда
          </p>
        )}
        <li className={`${styles.ingredient} mb-4`}>
          <Reorder.Group
            axis="y"
            values={selectedItems}
            className={styles.fillings}
            onReorder={(ingredient) => dispatch(sortIngredient(ingredient))}
          >
            {selectedItems.map((el) => {
              return <ConstructorItem key={el.id} item={el} />;
            })}
          </Reorder.Group>
        </li>
        <li className={`${styles.ingredient} ml-6 mb-4 pr-4`}>
          {selectedBun.map((el) => (
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
          disabled={!selectedItems.length || !selectedBun.length}
        >
          Оформить заказ
        </Button>
      </section>
      {(orderNumber || orderRequest) && (
        <Modal closePopup={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}
export default BurgerConstructor;
