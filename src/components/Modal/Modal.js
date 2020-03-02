import React from "react";
import styles from "./Modal.module.scss";

const modal = props => (
  <div className={styles.Modal} style={props.modal.show ? { display: "inline-block" } : null}>
    {props.modal.message}
  </div>
);

export default modal;
