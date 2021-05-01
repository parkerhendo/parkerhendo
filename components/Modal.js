import React from 'react'
import { createPortal } from 'react-dom';

import usePortal from '../hooks/usePortal';

const Modal = ({ id, children }) => {
  const target = usePortal(id)
  return target && createPortal(children, target);
};

export default Modal;