import React, { Component } from "react";
import Backdrop from "../components/Backdrop/Backdrop";
import styles from "./CharSheet.module.scss";

const info = ["Gender", "Race", "Class", "Background"];
const attributes = ["Strength", "Dexterity", "Toughness", "Intelligence", "Willpower", "Charisma"];
const skills = [
  "Arcana",
  "Athletics",
  "Crafting",
  "Deception",
  "History",
  "Intimidation",
  "Investigation",
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

class CharSheet extends Component {
  state = {
    draw: false
  };

  drawOut = () => {
    this.setState({
      draw: !this.state.draw
    });
  };

  render() {
    const summary = {
      left: "10vw",
      transition: "ease-in-out 1.5s"
    };

    const draw = {
      display: "none"
    };

    const mappedInfo = info.map((info, index) => (
      <div key={index}>
        <p>{info}:</p>
        <span className={styles.Choice}>{this.props[info.toLowerCase()]}</span>
      </div>
    ));

    const mappedAttributes = attributes.map((attr, index) => (
      <div key={index}>
        {attr}:<span className={styles.Choice}>{this.props.attributes[attr.toLowerCase()]}</span>
      </div>
    ));

    const mappedSkills = skills.map((skill, index) => (
      <label key={index}>
        <input readOnly type="checkbox" value={skill} name="skill" checked={this.props.skills[skill.toLowerCase()]} />
        {skill}
      </label>
    ));

    const traits = this.props.traits;
    const traitList = traits.map((trait, index) => <li key={index}>{trait}</li>);

    return (
      <>
        <Backdrop show={this.state.draw} />
        <section
          className={[styles.CharSheet, this.state.draw ? styles.DrawOut : ""].join(" ")}
          style={this.props.active === "summary" ? summary : null}
        >
          <button
            onClick={this.drawOut}
            className={styles.Draw}
            title="Show more"
            style={this.props.active === "summary" ? draw : null}
          >
            <i className={"fas fa-scroll"} />
          </button>
          <div className={styles.CharHeader}>
            <h3 className={styles.CharTitle}>Character Sheet</h3>
            <h4 className={styles.Name}>
              Name: <span className={styles.Choice}>{this.props.name}</span>
            </h4>
          </div>
          <div className={styles.CharInfo}>{mappedInfo}</div>
          <div className={styles.CharAttributes}>
            <h4>Attributes:</h4>
            {mappedAttributes}
          </div>
          <img src={this.props.avatar} alt="Portrait" className={styles.Portrait} />
          <div className={styles.CharSkills}>
            <h4>Skills:</h4>
            <form>{mappedSkills}</form>
          </div>
          <div className={styles.CharTraits}>
            <h4>Personality Traits:</h4>
            <ul>{traitList}</ul>
          </div>
          <div className={styles.CharStory}>
            <h4>Backstory:</h4>
            <p>{this.props.story}</p>
          </div>
        </section>
      </>
    );
  }
}

export default CharSheet;
