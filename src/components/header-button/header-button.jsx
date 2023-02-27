import React from "react";
import styles from "./header-button.module.css";
import PropTypes from "prop-types";
import { typeIngredients } from "../../utils/types";

export function HeaderButton(props) {
  return (
    <a className={`${styles.button} pl-5 pr-5`}>
      <props.type type={`${props.isActive ? "primary" : "secondary"}`} />
      <p
        className={`text text_type_main-default ${
          props.isActive ? "" : `${styles.text_noActive}`
        } pl-2`}
      >
        {props.text}
      </p>
    </a>
  );
}
HeaderButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
