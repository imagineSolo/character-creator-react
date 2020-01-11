import React from "react";
import styles from "./CharSheet.module.scss";

const charSheet = props => {
  return (
    <section className={styles.CharSheet}>
      <h3>Character Sheet</h3>
      <h5>{props.name}</h5>
      <span>Gender: {props.gender}</span>
      <span>Race: {props.race}</span>
      <span>Class: {props.class}</span>
      <span>Level: 1</span>
      <span>Background: {props.background}</span>
    </section>
  );
};

export default charSheet;
