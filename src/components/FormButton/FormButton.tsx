import React from "react";
import styles from "./FormButton.module.scss";
import { ButtonType } from '../../types/types'

interface Props {
  text: string;
  clickHandler?: () => void;
  type?: ButtonType;
}

export default function FormButton({ text, clickHandler, type }: Props) {
  return (
    <button className={styles.formButton} onClick={clickHandler} type={type}>
      {text}
    </button>
  );
}
