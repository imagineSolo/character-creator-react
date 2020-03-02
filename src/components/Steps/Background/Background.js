import React from "react";
import ButtonUndo from "../../Button/Undo/Undo";
import styles from "./Background.module.scss";

const backgrounds = [
  { name: "Commoner", skills: "Athletics, Crafting" },
  { name: "Courtier", skills: "Deception, Persuasion" },
  { name: "Criminal", skills: "Intimidation, Trickery" },
  { name: "Entertainer", skills: "Athletics, Performance" },
  { name: "Investigator", skills: "Investigation. Perception" },
  { name: "Outlander", skills: "Nature, Survival" },
  { name: "Sage", skills: "Arcana, History" },
  { name: "Soldier", skills: "Athletics, Intimidation" }
];

const mappedOptions = backgrounds.map(bgd => (
  <option value={bgd.name} key={bgd.name}>
    {bgd.name}
  </option>
));

const mappedSummary = backgrounds.map(bgd => <p key={bgd.name}>{`${bgd.name}: ${bgd.skills}`}</p>);

const background = props => {
  return (
    <div className={styles.Content}>
      <h3 className={styles.Header}>Background:</h3>
      <p>
        Background is who your character was before becoming an adventurer. It's his past profession. Background choice
        adds points to the character's skills. If the skill duplicates the one you have gained during class selection,
        don't worry. You'll receive a free skill point. In the next few steps you will choose an additional skills to
        help you shape up the character.
      </p>
      <form className={styles.BackgroundForm} onChange={props.change} onSubmit={props.submit}>
        <label className={styles.BackgroundLabel}>Select background:</label>
        <select className={styles.BackgroundSelect} name="Background" defaultValue="select">
          <option value="select" disabled>
            --Select--
          </option>
          {mappedOptions}
        </select>
        <div className={styles.Buttons}>
          <ButtonUndo undo={props.undo} />
          <input className={styles.BackgroundSubmit} type="submit" value="Submit" />
        </div>
      </form>
      <div className={styles.BackgroundDescription}>
        <h5>Background choice:</h5>
        {mappedSummary}
      </div>
    </div>
  );
};

export default background;
