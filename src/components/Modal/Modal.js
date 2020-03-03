import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.scss";

const modal = props => (
  <>
    <Backdrop show={props.modal.show} clicked={props.clicked} />
    <div
      className={styles.Modal}
      style={{
        transform: props.modal.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.modal.show ? "1" : "0",
        zIndex: props.modal.show ? "500" : "-1"
      }}
    >
      {props.modal.message}
    </div>
  </>
);

export default modal;
