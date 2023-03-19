import React from "react";
import { useState, useRef, FC } from "react";
import { useSelector } from "../../services/hooks/hooks";
import Tabs from "../tabs/tabs";
import styles from "./burger-ingredients.module.css";
import Ingredients from "../ingredients/ingredients";

const BurgerIngredients: FC = () => {
  const data = useSelector((store) => store.ingredients);
  const [currentTab, setCurrentTab] = useState("buns");
  const refTab = useRef<HTMLUListElement>(null);
  const refBuns = useRef<HTMLLIElement>(null);
  const refSauces = useRef<HTMLLIElement>(null);
  const refFillings = useRef<HTMLLIElement>(null);

  const handleScroll = () => {
    const containerPosition = refTab.current!.getBoundingClientRect().top;
    const bunsPosition = refBuns.current!.getBoundingClientRect().top;
    const saucePosition = refSauces.current!.getBoundingClientRect().top;
    const fillingsPosition = refFillings.current!.getBoundingClientRect().top;

    const bunsDiff = Math.abs(containerPosition - bunsPosition);
    const sauceDiff = Math.abs(containerPosition - saucePosition);
    const fillingsDiff = Math.abs(containerPosition - fillingsPosition);

    if (bunsDiff < sauceDiff && bunsDiff < fillingsDiff) {
      setCurrentTab("buns");
    } else if (sauceDiff < bunsDiff && sauceDiff < fillingsDiff) {
      setCurrentTab("sauces");
    } else {
      setCurrentTab("fillings");
    }
  };
  function toggleIngredints(str: string) {
    setCurrentTab(str);
  }
  const buns = React.useMemo(
    () => data.ingredients.filter((item) => item.type === "bun"),
    [data]
  );
  const sauces = React.useMemo(
    () => data.ingredients.filter((item) => item.type === "sauce"),
    [data]
  );
  const fillings = React.useMemo(
    () => data.ingredients.filter((item) => item.type === "main"),
    [data]
  );
  return (
    <section className={`${styles.container}`}>
      <Tabs currentTab={currentTab} onClick={toggleIngredints} />
      <ul
        className={`${styles.ingredients}`}
        ref={refTab}
        onScroll={handleScroll}
      >
        <li id="breads" ref={refBuns}>
          <Ingredients title="Булки" card={buns} />
        </li>
        <li id="sauces" ref={refSauces}>
          <Ingredients title="Соусы" card={sauces} />
        </li>
        <li id="fillings" ref={refFillings}>
          <Ingredients title="Начинки" card={fillings} />
        </li>
      </ul>
    </section>
  );
};
export default BurgerIngredients;
