import React from "react";
import styles from "./Apply.module.scss";

const buttonApply = props => {
  return (
    <button className={styles.Apply} onClick={props.apply}>
      <span>Apply</span>
    </button>
  );
};

export default buttonApply;
