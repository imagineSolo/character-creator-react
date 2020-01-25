import React from "react";
import ButtonUndo from "../../Button/Undo";
import styles from "./Background.module.scss";

const background = props => {
  return (
    <div>
      <form
        className={styles.BackgroundForm}
        onChange={props.change}
        onSubmit={props.submit}
      >
        <label className={styles.BackgroundLabel}>Select background:</label>
        <select className={styles.BackgroundSelect} name="Background">
          <option value="select" disabled>
            --Select--
          </option>
          <option value="Commoner">Commoner</option>
          <option value="Courtier">Courtier</option>
          <option value="Criminal">Criminal</option>
          <option value="Entertainer">Entertainer</option>
          <option value="Investigator">Investigator</option>
          <option value="Outlander">Outlander</option>
          <option value="Noble">Noble</option>
          <option value="Sage">Sage</option>
          <option value="Soldier">Soldier</option>
        </select>
        <input
          className={styles.BackgroundSubmit}
          type="submit"
          value="Submit"
        />
        <ButtonUndo undo={props.undo} />
      </form>
      <div className={styles.BackgroundDescription}>
        <h5>Background choice adds points to the character's Skills:</h5>
        <p>Commoner: Athletics, Crafting</p>
        <p>Courtier: Deception, Persuasion</p>
        <p>Criminal: Intimidation, Trickery</p>
        <p>Entertainer: Athletics, Performance</p>
        <p>Investigator: Investigation. Perception</p>
        <p>Outlander: Nature, Survival</p>
        <p>Sage: Arcana, History</p>
        <p>Soldier: Athletics, Intimidation</p>
      </div>
    </div>
  );
};

export default background;
