import React from "react";
import styles from "./Undo.module.scss";

const buttonUndo = props => (
  <button className={styles.Undo} onClick={props.undo}>
    <span>Undo</span>
  </button>
);

export default buttonUndo;
