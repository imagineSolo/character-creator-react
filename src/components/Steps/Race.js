import React from "react";
import ButtonUndo from "../Button/Undo";
import styles from "../../containers/Content.module.scss";

const gender = props => {
  return (
    <section className={styles.Content}>
      <div>
        <p>Select race:</p>
        <div>
          <span>Human</span>
        </div>
        <div>
          <span>Elf</span>
        </div>
        <div>
          <span>Dwarf</span>
        </div>
        <div>
          <span>Halfling</span>
        </div>
        <div>
          <span>Half-elf</span>
        </div>
        <div>
          <span>Half-orc</span>
        </div>
        <ButtonUndo undo={props.undo} />
      </div>
    </section>
  );
};

export default gender;
