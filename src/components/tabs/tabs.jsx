import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';

function Tabs() {
    const [current, setCurrent] = React.useState('breads');
   
    function toggleIngredints(current) {
        setCurrent(current)
    };
    
    return (
      <div className={`${styles.container} mb-10`}>
        <a className={`${styles.item}`} href='#breads'><Tab value='breads' active={current === 'breads'}  onClick={() => toggleIngredints("breads")}>
          Булки
        </Tab></a>
        <a className={`${styles.item}`} href='#sauces'> <Tab value='sauces' active={current === 'sauces'}  onClick={() => toggleIngredints("sauces")}>
          Соусы
        </Tab></a>
        <a className={`${styles.item}`} href='#fillings'><Tab href='#fillings' value='fillings' active={current === 'fillings'}  onClick={() => toggleIngredints("fillings")}>
          Начинки
        </Tab></a>
      </div>
    )
  }
export default Tabs