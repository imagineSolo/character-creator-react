import React from "react";
import ButtonUndo from "../Button/Undo";
import styles from "../../containers/Content.module.scss";

const race = props => {
  return (
    <section className={styles.Content}>
      <div>
        <p>Select race:</p>
        <div>
          <span id="Human" onClick={props.select}>
            Human
          </span>
        </div>
        <div>
          <span id="Elf" onClick={props.select}>
            Elf
          </span>
        </div>
        <div>
          <span id="Dwarf" onClick={props.select}>
            Dwarf
          </span>
        </div>
        <div>
          <span id="Halfling" onClick={props.select}>
            Halfling
          </span>
        </div>
        <div>
          <span id="Half-Elf" onClick={props.select}>
            Half-elf
          </span>
        </div>
        <div>
          <span id="Half-Orc" onClick={props.select}>
            Half-orc
          </span>
        </div>
        <ButtonUndo undo={props.undo} />
      </div>
    </section>
  );
};

export default race;
