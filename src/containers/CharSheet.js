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
          <h3>Character Sheet</h3>
          <h4>{this.props.name}</h4>
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
      </section>
    );
  }
}

export default CharSheet;
