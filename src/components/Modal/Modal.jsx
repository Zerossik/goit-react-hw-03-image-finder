import { Backdrop, ModalWrap } from './Modal.styled';
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export function Modal({ children, handleBackdropClick }) {
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWrap>{children}</ModalWrap>
    </Backdrop>,
    document.getElementById('modal')
  );
}
Modal.propTypes = {
  handleBackdropClick: PropTypes.func.isRequired,
};
