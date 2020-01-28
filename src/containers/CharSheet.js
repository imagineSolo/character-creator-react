import React, { Component } from "react";
import styles from "./CharSheet.module.scss";

class CharSheet extends Component {
  state = {
    draw: false
  };

  drawOut = () => {
    switch (this.state.draw) {
      case false:
        this.setState({
          draw: true
        });
        break;
      case true:
        this.setState({
          draw: false
        });
        break;
      default:
        console.log("default");
    }
  };

  render() {
    return (
      <section
        className={[
          styles.CharSheet,
          this.state.draw ? styles.DrawOut : ""
        ].join(" ")}
      >
        <button
          onClick={this.drawOut}
          className={styles.Draw}
          title="Show more"
        >
          <i className={"fas fa-scroll"}></i>
        </button>
        <div className={styles.CharHeader}>
          <h3 className={styles.CharTitle}>Character Sheet</h3>
          <h4 className={styles.Name}>
            Name: <span className={styles.FontWhite}>{this.props.name}</span>
          </h4>
        </div>
        <div className={styles.CharInfo}>
          <div>
            <p>Gender:</p>
            <span className={styles.FontWhite}>{this.props.gender}</span>
          </div>
          <div>
            <p>Race:</p>
            <span className={styles.FontWhite}>{this.props.race}</span>
          </div>
          <div>
            <p>Class: </p>
            <span className={styles.FontWhite}>{this.props.class}</span>
          </div>
          <div>
            <p>Background:</p>
            <span className={styles.FontWhite}>{this.props.background}</span>
          </div>
        </div>
        <div className={styles.CharAttributes}>
          <div>
            Strength:
            <span className={styles.FontWhite}>
              {this.props.attributes.strength}
            </span>
          </div>
          <div>
            Dexterity:
            <span className={styles.FontWhite}>
              {this.props.attributes.dexterity}
            </span>
          </div>
          <div>
            Toughness:
            <span className={styles.FontWhite}>
              {this.props.attributes.toughness}
            </span>
          </div>
          <div>
            Intelligence:
            <span className={styles.FontWhite}>
              {this.props.attributes.intelligence}
            </span>
          </div>
          <div>
            Willpower:
            <span className={styles.FontWhite}>
              {this.props.attributes.willpower}
            </span>
          </div>
          <div>
            Charisma:
            <span className={styles.FontWhite}>
              {this.props.attributes.charisma}
            </span>
          </div>
        </div>
        <img
          src={this.props.avatar}
          alt="Portrait"
          className={styles.Portrait}
        />
        <div className={styles.CharSkills}>
          <form>
            <label htmlFor="01">
              <input
                readOnly
                type="checkbox"
                value="Arcana"
                id="01"
                name="skill"
                checked={this.props.skills.arcana}
              />
              Arcana
            </label>
            <label htmlFor="02">
              <input
                readOnly
                type="checkbox"
                value="Athletics"
                id="02"
                name="skill"
                disabled
                checked={this.props.skills.athletics}
              />
              Athletics
            </label>
            <label htmlFor="03">
              <input
                readOnly
                type="checkbox"
                value="Crafting"
                id="03"
                name="skill"
                disabled
                checked={this.props.skills.crafting}
              />
              Crafting
            </label>
            <label htmlFor="04">
              <input
                readOnly
                type="checkbox"
                value="Deception"
                id="04"
                name="skill"
                disabled
                checked={this.props.skills.deception}
              />
              Deception
            </label>
            <label htmlFor="05">
              <input
                readOnly
                type="checkbox"
                value="History"
                id="05"
                name="skill"
                disabled
                checked={this.props.skills.history}
              />
              History
            </label>
            <label htmlFor="06">
              <input
                readOnly
                type="checkbox"
                value="Intimidation"
                id="06"
                name="skill"
                disabled
                checked={this.props.skills.intimidation}
              />
              Intimidation
            </label>
            <label htmlFor="07">
              <input
                readOnly
                type="checkbox"
                value="Investigation"
                id="07"
                name="skill"
                disabled
                checked={this.props.skills.investigation}
              />
              Investigation
            </label>
            <label htmlFor="08">
              <input
                readOnly
                type="checkbox"
                value="Medicine"
                id="08"
                name="skill"
                disabled
                checked={this.props.skills.medicine}
              />
              Medicine
            </label>
            <label htmlFor="09">
              <input
                readOnly
                type="checkbox"
                value="Nature"
                id="09"
                name="skill"
                disabled
                checked={this.props.skills.nature}
              />
              Nature
            </label>
            <label htmlFor="10">
              <input
                readOnly
                type="checkbox"
                value="Perception"
                id="10"
                name="skill"
                disabled
                checked={this.props.skills.perception}
              />
              Perception
            </label>
            <label htmlFor="11">
              <input
                readOnly
                type="checkbox"
                value="Performance"
                id="11"
                name="skill"
                disabled
                checked={this.props.skills.performance}
              />
              Performance
            </label>
            <label htmlFor="12">
              <input
                readOnly
                type="checkbox"
                value="Persuasion"
                id="12"
                name="skill"
                disabled
                checked={this.props.skills.persuasion}
              />
              Persuasion
            </label>
            <label htmlFor="13">
              <input
                readOnly
                type="checkbox"
                value="Religion"
                id="13"
                name="skill"
                disabled
                checked={this.props.skills.religion}
              />
              Religion
            </label>
            <label htmlFor="14">
              <input
                readOnly
                type="checkbox"
                value="Stealth"
                id="14"
                name="skill"
                disabled
                checked={this.props.skills.stealth}
              />
              Stealth
            </label>
            <label htmlFor="15">
              <input
                readOnly
                type="checkbox"
                value="Survival"
                id="15"
                name="skill"
                disabled
                checked={this.props.skills.survival}
              />
              Survival
            </label>
            <label htmlFor="16">
              <input
                readOnly
                type="checkbox"
                value="Trickery"
                id="16"
                name="skill"
                disabled
                checked={this.props.skills.trickery}
              />
              Trickery
            </label>
          </form>
        </div>
        <div className={styles.CharTraits}>
          <h5>Personality Traits:</h5>
        </div>
        <div className={styles.CharStory}>
          <h5>Backstory:</h5>
        </div>
      </section>
    );
  }
}

export default CharSheet;
