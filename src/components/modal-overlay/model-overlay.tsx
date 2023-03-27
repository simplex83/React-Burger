import { FC } from "react";
import styles from "./modal-overlay.module.css";

type TModalOverlay = {
  closeByOverlay: () => void;
};

const ModalOverlay: FC<TModalOverlay> = ({ closeByOverlay }) => {
  return <div className={`${styles.container}`} onClick={closeByOverlay} />;
};

export default ModalOverlay;
