import { Backdrop, ModalWrap } from './Modal.styled';
import React from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children }) {
  return createPortal(
    <Backdrop>
      <ModalWrap>{children}</ModalWrap>
    </Backdrop>,
    document.getElementById('modal')
  );
}
