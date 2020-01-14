import React from "react";
import styles from "./CharSheet.module.scss";

const charSheet = props => {
  return (
    <section className={styles.CharSheet}>
      <h3>Character Sheet</h3>
      <h4>{props.name}</h4>
      <span>Gender: {props.gender}</span>
      <span>Race: {props.race}</span>
      <span>Class: {props.class}</span>
      <span>Level: 1</span>
      <span>Background: {props.background}</span>
      <h5>Attributes:</h5>
      <div>
        Strength: <span></span>
      </div>
      <div>
        Dexterity: <span></span>
      </div>
      <div>
        Toughness: <span></span>
      </div>
      <div>
        Intelligence: <span></span>
      </div>
      <div>
        Willpower: <span></span>
      </div>
      <div>
        Charisma: <span></span>
      </div>
    </section>
  );
};

export default charSheet;
