import React from "react";
import Apply from "../../Button/Apply/Apply";
import Undo from "../../Button/Undo/Undo";
import styles from "./Skills.module.scss";

const skills = props => {
  // const keysSkills = Object.keys(props.skills);
  // const valuesSkills = Object.values(props.skills);
  // console.log(keysSkills);
  // console.log(valuesSkills);

  // const trueSkills = Array.from(props.skills);
  // console.log(trueSkills);
  // let filteredSkills = trueSkills.filter(Boolean);
  // console.log(filteredSkills);

  const skills = [
    "Arcana",
    "Athletics",
    "Crafting",
    "Deception",
    "History",
    "Intimidation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Stealth",
    "Survival",
    "Trickery"
  ];

  const mappedSkills = skills.map(skill => {
    return (
      <label key={skill} className={styles.SkillsLabel}>
        <input
          type="checkbox"
          value={skill}
          name="skill"
          onChange={() => props.submit(skill.toLowerCase())}
        />
        {skill}
      </label>
    );
  });
  return (
    <div className={styles.Content}>
      <h3>Add additional skills:</h3>
      <p>
        Select three additional skills of your choice to shape up your
        character.
      </p>
      <form className={styles.SkillsForm}>{mappedSkills}</form>
      <div className={styles.Buttons}>
        <Undo undo={props.undo} />
        <Apply apply={props.submit} />
      </div>
    </div>
  );
};

export default skills;
