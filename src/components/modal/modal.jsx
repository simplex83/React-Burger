import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/model-overlay";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

export function Modal({ closePopup, children }) {
  const modalNode = document.getElementById("modal");
  React.useEffect(() => {
    function closelByEscape(evt) {
      if (evt.key === "Escape") {
        closePopup();
      }
    }
    window.addEventListener("keydown", closelByEscape);
    return () => window.removeEventListener("keydown", closelByEscape);
  }, []);
  const modal = (
    <>
      <ModalOverlay closeByOverlay={closePopup} />
      <div className={`${styles.container}`}>
        <button className={`${styles.btn}`} onClick={closePopup}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>
  );

  return ReactDOM.createPortal(modal, modalNode);
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closePopup: PropTypes.func.isRequired,
};
export default Modal;
