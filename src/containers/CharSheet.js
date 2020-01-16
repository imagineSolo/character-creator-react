import React, { Component } from "react";
import styles from "./CharSheet.module.scss";
import blank from "../images/blank.png";

class CharSheet extends Component {
  state = {
    draw: false
  };

  drawOut = () => {
    switch (this.state.draw) {
      case false:
        console.log("false");
        this.setState({
          draw: true
        });
        break;
      case true:
        console.log("true");
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
        <button onClick={this.drawOut} className={styles.Draw}>
          <i className={"fas fa-scroll"}></i>
        </button>
        <div className={styles.CharHeader}>
          <h3 className={styles.CharTitle}>Character Sheet</h3>
          <h4 className={styles.Name}>Name: {this.props.name}</h4>
          <img src={blank} alt="Portrait" className={styles.Portrait} />
        </div>
        <div className={styles.CharInfo}>
          <span>Gender: {this.props.gender}</span>
          <span>Race: {this.props.race}</span>
          <span>Class: {this.props.class}</span>
          <span>Level: 1</span>
          <span>Background: {this.props.background}</span>
        </div>
        <div className={styles.CharAttributes}>
          <h5>Attributes:</h5>
          <div>
            Strength: <span></span>
          </div>
          <div>
            Dexterity: <span></span>
          </div>
          <div>
            Toughness: <span></span>
          </div>
          <div>
            Intelligence: <span></span>
          </div>
          <div>
            Willpower: <span></span>
          </div>
          <div>
            Charisma: <span></span>
          </div>
        </div>
        <div className={styles.CharSkills}>
          <h5>Skills:</h5>
          <form>
            <input type="radio" name="Animal Handling" id="01" /> Animal
            Handling
            <input type="radio" name="Arcana" id="02" /> Arcana
            <input type="radio" name="Athletics" id="03" /> Athletics
            <input type="radio" name="Deception" id="04" /> Deception
            <input type="radio" name="History" id="05" /> History
            <input type="radio" name="Intimidation" id="06" /> Intimidation
            <input type="radio" name="Investigation" id="07" /> Investigation
            <input type="radio" name="Medicine" id="08" /> Medicine
            <input type="radio" name="Nature" id="09" /> Nature
            <input type="radio" name="Perception" id="10" /> Perception
            <input type="radio" name="Performance" id="11" /> Performance
            <input type="radio" name="Persuasion" id="12" /> Persuasion
            <input type="radio" name="Religion" id="13" /> Religion
            <input type="radio" name="Stealth" id="14" /> Stealth
            <input type="radio" name="Survival" id="15" /> Survival
            <input type="radio" name="Trickery" id="16" /> Trickery
          </form>
        </div>
        <div className={styles.CharTraits}>
          <h5>Personality Traits:</h5>
        </div>
      </section>
    );
  }
}

export default CharSheet;
