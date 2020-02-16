import React from "react";
import ButtonUndo from "../../Button/Undo/Undo";
import styles from "./Background.module.scss";

const background = props => {
  return (
    <div className={styles.Content}>
      <h3 className={styles.Header}>Background:</h3>
      <p>
        Background is who your character was before becoming an adventurer. It's
        his past profession. Background choice adds points to the character's
        skills. If the skill duplicates the one you have gained during class
        selection, don't worry. You'll receive a free skill point. In the next
        few steps you will choose an additional skills to help you shape up the
        character.
      </p>
      <form
        className={styles.BackgroundForm}
        onChange={props.change}
        onSubmit={props.submit}
      >
        <label className={styles.BackgroundLabel}>Select background:</label>
        <select
          className={styles.BackgroundSelect}
          name="Background"
          defaultValue="select"
        >
          <option value="select" disabled>
            --Select--
          </option>
          <option value="Commoner">Commoner</option>
          <option value="Courtier">Courtier</option>
          <option value="Criminal">Criminal</option>
          <option value="Entertainer">Entertainer</option>
          <option value="Investigator">Investigator</option>
          <option value="Outlander">Outlander</option>
          <option value="Sage">Sage</option>
          <option value="Soldier">Soldier</option>
        </select>
        <div className={styles.Buttons}>
          <ButtonUndo undo={props.undo} />
          <input
            className={styles.BackgroundSubmit}
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <div className={styles.BackgroundDescription}>
        <h5>Background choice:</h5>
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
