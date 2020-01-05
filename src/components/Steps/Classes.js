import React from "react";
import ButtonUndo from "../Button/Undo";
import styles from "../../containers/Content.module.scss";

const classes = props => {
  return (
    <section className={styles.Content}>
      <div>
        <p>Select class:</p>
        <div>
          <span id="Warrior" onClick={props.select}>
            Warrior
          </span>
        </div>
        <div>
          <span id="Wizard" onClick={props.select}>
            Wizard
          </span>
        </div>
        <div>
          <span id="Rogue" onClick={props.select}>
            Rogue
          </span>
        </div>
        <div>
          <span id="Cleric" onClick={props.select}>
            Cleric
          </span>
        </div>
        <div>
          <span id="Ranger" onClick={props.select}>
            Ranger
          </span>
        </div>
        <ButtonUndo undo={props.undo} />
      </div>
    </section>
  );
};

export default classes;
