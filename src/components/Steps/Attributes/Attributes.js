import React from "react";
import Undo from "../../Button/Undo/Undo";
import Apply from "../../Button/Apply/Apply";
import styles from "./Attributes.module.scss";

const attributes = props => {
  const attributes = [
    "Strength",
    "Dexterity",
    "Toughness",
    "Intelligence",
    "Willpower",
    "Charisma"
  ];

  const mappedAttributes = attributes.map(attr => {
    return (
      <div key={attr}>
        <p>{attr}</p>
        <button className={styles.Button} onClick={() => props.increment(attr)}>
          <span>+</span>
        </button>
        <span>{props.attributes[attr.toLowerCase()]}</span>
        <button className={styles.Button} onClick={() => props.decrement(attr)}>
          <span>-</span>
        </button>
      </div>
    );
  });

  return (
    <div className={styles.Attributes}>
      <h3>Select attributes:</h3>
      <p>
        Shape your character by spending your free points on the attributes. You
        can also lower an attribute value to gain some extra points. The highest
        value is 20, and the lowest value is 3 (although the race and class
        selection will affect this value).
      </p>
      <div className={styles.Points}>{mappedAttributes}</div>
      <p>
        Points left: <span>{props.pool}</span>
      </p>
      <div className={styles.Buttons}>
        <Undo undo={props.undo} />
        <Apply apply={props.submit} />
      </div>
    </div>
  );
};

export default attributes;
