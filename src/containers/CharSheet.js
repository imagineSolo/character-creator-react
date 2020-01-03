import React from "react";
import styles from "./CharSheet.module.scss";

const charSheet = props => {
  return (
    <section className={styles.CharSheet}>
      <h3>Character Sheet</h3>
      <h5>Name: </h5>
      <span>Gender: {props.gender}</span>
      <span>Race: </span>
      <span>Class: </span>
      <span>Level: 1</span>
      <span>Background: </span>
    </section>
  );
};

export default charSheet;
