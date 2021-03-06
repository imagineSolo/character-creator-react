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
      trickery: false,
    },
    skillsPool: this.props.skillsPool,
    checked: 0,
  };

  handleSkillsSubmit = (key) => {
    if (this.state.skills[key]) {
      this.setState({
        ...this.state,
        skills: {
          ...this.state.skills,
          [key]: false,
        },
        skillsPool: this.state.skillsPool + 1,
      });
    } else if (!this.state.skills[key] && this.state.skillsPool > 0) {
      this.setState({
        ...this.state,
        skills: {
          ...this.state.skills,
          [key]: true,
        },
        skillsPool: this.state.skillsPool - 1,
        checked: this.state.checked + 1,
      });
    }
  };

  render() {
    const skills = Object.entries(this.props.skills);

    const mappedSkills = skills.map(([key, value]) => {
      return !value ? (
        <label key={key} className={styles.SkillsLabel}>
          <input
            type="checkbox"
            value={key}
            name="skill"
            disabled={this.state.checked >= this.props.skillsPool}
            onChange={() => this.handleSkillsSubmit(key)}
          />
          {key}
        </label>
      ) : null;
    });

    return (
      <div className={styles.Content}>
        <h3>Add additional skills:</h3>
        <p>Select three additional skills of your choice to shape up your character.</p>
        <form className={styles.SkillsForm}>{mappedSkills}</form>
        <p className={styles.PointsLeft}>
          Points left: <span>{this.state.skillsPool}</span>
        </p>
        <div className={styles.Buttons}>
          <Undo undo={this.props.undo} />
          <Apply apply={() => this.props.submit(this.state.skills, this.state.skillsPool)} />
        </div>
      </div>
    );
  }
}

export default Skills;
