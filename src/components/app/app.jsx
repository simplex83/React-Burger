import React from 'react';
import styles from './app.module.css'
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

function App() {
  return (
  <div className={`${styles.container}`}> 
    <AppHeader />
    <main className={`${styles.main}`}>
    <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
    <div className={`${styles.wrapper}`}>
    <BurgerIngredients />
    <BurgerConstructor /> 
    </div>
    </main>
    </div>    
  )
}
export default App;
