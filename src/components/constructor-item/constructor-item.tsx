import { useDispatch } from "react-redux";
import { FC } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";
import { Reorder } from "framer-motion";
import { DEL_INGREDIENT } from "../../services/actions/burger-constructor";
import { TCardItem } from "../../services/types/types";

type TConstructor = {
  item: TCardItem;
};

export const ConstructorItem: FC<TConstructor> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Reorder.Item
      whileDrag={{
        scale: 1.1,
      }}
      value={item}
      className={`${styles.item} mb-4 pr-2`}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={() => dispatch({ type: DEL_INGREDIENT, data: item })}
      />
    </Reorder.Item>
  );
};
