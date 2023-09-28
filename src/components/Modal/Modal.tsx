import React, { ReactElement } from "react";
import "./Modal.css";
import classNames from "classnames";


interface Props {
  children: ReactElement,
  isOpen: boolean
}

export default function Modal({children, isOpen}: Props) {

  const modalClass = classNames({
    modal: true,
    modal_opened: isOpen
  })
  
  return (
    <div className={modalClass}>
      <div className='container'>
        {children}
      </div>
    </div>
  );
}
