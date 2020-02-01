import React from "react";
import styles from "./Undo.module.scss";

const buttonUndo = props => {
  return (
    <button className={styles.Undo} onClick={props.undo}>
      {/* <i className="fas fa-arrow-left"></i>  */}
      <span>Undo</span>
    </button>
  );
};

export default buttonUndo;
