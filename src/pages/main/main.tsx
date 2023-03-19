import styles from "./main.module.css";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function Main() {
  return (
    <div className={`${styles.container}`}>
      <DndProvider backend={HTML5Backend}>
        <main className={`${styles.main}`}>
          <h1 className="text text_type_main-large mt-10 mb-5">
            Соберите бургер
          </h1>
          <div className={`${styles.wrapper}`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      </DndProvider>
    </div>
  );
}
