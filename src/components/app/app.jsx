import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={`${styles.container}`}>
      <AppHeader />
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
export default App;
