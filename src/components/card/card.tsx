import { FC, useMemo } from "react";
import styles from "./card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector } from "../../services/hooks/hooks";
import { TCardItem } from "../../services/types/types";

interface ICard {
  card: TCardItem;
}
const Card: FC<ICard> = ({ card }) => {
  const { selectedItems, selectedBun } = useSelector(
    (store) => store.burgerConstructor
  );
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredients",
    item: { ...card },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  const count = useMemo<number>(() => {
    if (card.type !== "bun") {
      const sameItems = selectedItems.filter((el) => el._id === card._id);
      return sameItems.length;
    } else if (card.type === "bun") {
      const sameBun = selectedBun.filter((el) => el._id === card._id);
      return 2 * sameBun.length;
    } else return 0;
  }, [selectedItems, selectedBun]);
  return (
    <article className={`${styles.card}`} ref={dragRef} style={{ opacity }}>
      <Counter count={count} size="default" extraClass="m-1" />
      <img
        src={card.image}
        className={`${styles.image} pl-4`}
        alt={card.name}
      />
      <div className={`${styles.wrapper} mt-1 mb-1`}>
        <p className="text text_type_digits-default mr-1">{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h2 className="text text_type_main-default">{card.name}</h2>
    </article>
  );
};

export default Card;
