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
          <span id="Tiefling" onClick={props.select}>
            Tiefling
          </span>
        </div>
        <ButtonUndo undo={props.undo} />
        <br />
        <p>{}</p>
      </div>
    </section>
  );
};

export default race;
