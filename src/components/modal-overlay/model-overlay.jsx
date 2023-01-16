import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({ closeByOverlay }) {
  return <div className={`${styles.container}`} onClick={closeByOverlay} />;
}
ModalOverlay.propTypes = {
  closeByOverlay: PropTypes.func.isRequired,
};
export default ModalOverlay;
