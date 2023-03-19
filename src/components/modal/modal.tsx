import React from "react";
import { FC } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/model-overlay";
import styles from "./modal.module.css";

type TModal = {
  closePopup: () => void;
  children: JSX.Element;
};

export const Modal: FC<TModal> = ({ closePopup, children }) => {
  const modalNode: HTMLDivElement = document.getElementById(
    "modal"
  ) as HTMLDivElement;
  React.useEffect(() => {
    function closelByEscape(evt: { key: string }) {
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
};

export default Modal;
