import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getData } from "../../utils/api";

function App() {
  const [state, setData] = React.useState({
    hasError: false,
    ingredients: [],
  });

  const getIngredients = () => {
    getData()
      .then((data) => {
        setData({ ...state, ingredients: data.data });
      })
      .catch((err) => {
        setData({ ...state, hasError: true });
        return console.log(`Ошибка ${err}, запрос не выполнен`);
      });
  };

  React.useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className={`${styles.container}`}>
      <AppHeader />
      <main className={`${styles.main}`}>
        <h1 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h1>
        <div className={`${styles.wrapper}`}>
          <BurgerIngredients data={state.ingredients} />
          <BurgerConstructor data={state.ingredients} />
        </div>
      </main>
    </div>
  );
}
export default App;
