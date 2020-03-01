import React from "react";
import styles from "./Apply.module.scss";

const buttonApply = props => (
  <button className={styles.Apply} onClick={props.apply}>
    <span>Apply</span>
  </button>
);

export default buttonApply;
