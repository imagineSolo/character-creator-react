import React from "react";
import Undo from "../../Button/Undo/Undo";
import Apply from "../../Button/Apply/Apply";
import styles from "./Attributes.module.scss";

const attributes = (props) => {
  const attributes = ["Strength", "Dexterity", "Toughness", "Intelligence", "Willpower", "Charisma"];

  const mappedAttributes = attributes.map((attr) => (
    <div key={attr} className={styles.AttributeControl}>
      <p>{attr}</p>
      <div className={styles.Button}>
        {props.attributes[attr.toLowerCase()] >= 20 ? null : (
          <button onClick={() => props.increment(attr.toLowerCase())}>
            <span>+</span>
          </button>
        )}
      </div>
      <span>{props.attributes[attr.toLowerCase()]}</span>
      <div className={styles.Button}>
        {props.attributes[attr] >= 3 ? null : (
          <button onClick={() => props.decrement(attr.toLowerCase())}>
            <span>-</span>
          </button>
        )}
      </div>
    </div>
  ));

  return (
    <div className={styles.Attributes}>
      <h3>Select attributes:</h3>
      <p>
        Shape your character by spending your free points on the attributes. You can also lower an attribute value to
        gain some extra points. The highest value is 20, and the lowest value is 3.
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
