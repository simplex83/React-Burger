import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import PropTypes from "prop-types";

function Tabs({ currentTab, onClick }) {
  return (
    <div className={`${styles.container} mb-10`}>
      <a className={`${styles.item}`} href="#breads">
        <Tab
          value="breads"
          active={currentTab === "buns"}
          onClick={(value) => onClick(value)}
        >
          Булки
        </Tab>
      </a>
      <a className={`${styles.item}`} href="#sauces">
        {" "}
        <Tab
          value="sauces"
          active={currentTab === "sauces"}
          onClick={(value) => onClick(value)}
        >
          Соусы
        </Tab>
      </a>
      <a className={`${styles.item}`} href="#fillings">
        <Tab
          value="fillings"
          active={currentTab === "fillings"}
          onClick={(value) => onClick(value)}
        >
          Начинки
        </Tab>
      </a>
    </div>
  );
}
  Tabs.propTypes = {
    currentTab: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

export default Tabs;
