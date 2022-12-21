import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getData } from "../../utils/api";
import {BurgerContext, BurgerConstructorContext} from "../../services/burger-context";

function App() {
  const [state, setData] = React.useState({
    hasError: false,
    ingredients: [],
  });
  const [stateConstructor, setStateConstructor] = React.useState({
    bun: [],
    fillings: [],
    price: 0,
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
        <BurgerContext.Provider value={{ state }}>
        <BurgerConstructorContext.Provider
                value={{
                  stateConstructor,
                  setStateConstructor,
                }}
              >
        
            <BurgerIngredients />
            <BurgerConstructor />

          </BurgerConstructorContext.Provider>
          </BurgerContext.Provider>
        </div>
      </main>
    </div>
    
  );
  
}
export default App;
