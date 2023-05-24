import { Backdrop, ModalWrap } from './Modal.styled';
import React from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children, handleBackdropClick }) {
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWrap>{children}</ModalWrap>
    </Backdrop>,
    document.getElementById('modal')
  );
}
