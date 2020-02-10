import React, { Component } from "react";
import Apply from "../../Button/Apply/Apply";
import Undo from "../../Button/Undo/Undo";
import styles from "./Skills.module.scss";

class Skills extends Component {
  state = {
    skills: {
      arcana: false,
      athletics: false,
      crafting: false,
      deception: false,
      history: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: false,
      performance: false,
      persuasion: false,
      religion: false,
      stealth: false,
      survival: false,
      trickery: false
    }
  };

  render() {
    const skills = Object.entries(this.state.skills);

    const mappedSkills = skills.map(([key, value]) => {
      const skillsSheet = Object.entries(this.props.skills);
      console.log(skillsSheet);

      return value === false ? (
        <label key={key} className={styles.SkillsLabel}>
          <input
            type="checkbox"
            value={key}
            name="skill"
            // disabled={value === true ? true : false}
            readOnly={value === true ? true : false}
            onChange={() => this.props.submit(key)}
          />
          {key}
        </label>
      ) : null;
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
          <Undo undo={this.props.undo} />
          <Apply apply={this.props.submit} />
        </div>
      </div>
    );
  }
}

export default Skills;
