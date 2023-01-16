import { useDispatch } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";
import { Reorder } from "framer-motion";
import { delIngredient } from "../../services/actions/burger-constructor";
import { typeIngredientsConstructor} from "../../utils/types";

export const ConstructorItem = ({ item }) => {
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
        handleClose={() => dispatch(delIngredient(item))}
      />
    </Reorder.Item>
  );
};
ConstructorItem.propTypes = {
  item: typeIngredientsConstructor.isRequired,
};

