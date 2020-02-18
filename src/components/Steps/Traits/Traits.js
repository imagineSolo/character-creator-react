import React, { Component } from "react";
import Undo from "../../Button/Undo/Undo";
import styles from "./Traits.module.scss";

class Traits extends Component {
  state = {
    input: "",
    active: "",
    traits: [],
    random: {
      physical: [
        "Has a nervous twitch",
        "Smells funny",
        "Gesticules vividly",
        "Has an interesting eye color",
        "Dresses well"
      ],
      mental: [
        "Is ambitious",
        "Is shy",
        "Is very religious",
        "Courageous",
        "Sceptical",
        "Has a positive attitude"
      ],
      social: [
        "Laughs loud",
        "Likes to gossip",
        "Likes to meet new people",
        "Trusts only his companions",
        "Drinks a lot",
        "Loves baked potatoes"
      ],
      traits: []
    }
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const arr = this.state.traits;
    arr.push(this.state.input);
    this.setState({
      active: "custom",
      traits: arr
    });
  };

  handleRandomTrait = () => {
    const physical = this.state.random.physical;
    const rndmPhysical = Math.floor(
      Math.random() * this.state.random.physical.length
    );
    const mental = this.state.random.mental;
    const rndmMental = Math.floor(
      Math.random() * this.state.random.mental.length
    );
    const social = this.state.random.social;
    const rndmSocial = Math.floor(
      Math.random() * this.state.random.social.length
    );
    const rndmTraits = this.state.random.traits;
    rndmTraits.push(physical[rndmPhysical]);
    rndmTraits.push(mental[rndmMental]);
    rndmTraits.push(social[rndmSocial]);

    this.setState({
      ...this.state,
      active: "random",
      random: {
        ...this.state.random,
        traits: rndmTraits
      }
    });
  };

  render() {
    const customTraits = this.state.traits.map((trait, index) => {
      return (
        <li key={index} className={styles.Item}>
          <span>{trait}</span>
        </li>
      );
    });

    const randomTraits = this.state.random.traits.map((trait, index) => {
      return (
        <li key={index} className={styles.Item}>
          <span>{trait}</span>
        </li>
      );
    });

    return (
      <div className={styles.Content}>
        <h3 className={styles.Header}>Personality Traits</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Add personality trait:</label>
          <input
            type="text"
            required
            minLength="3"
            maxLength="40"
            autoFocus
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
          <input
            type="button"
            value="Random traits"
            onClick={this.handleRandomTrait}
          />
        </form>
        <ul>{this.state.active === "custom" ? customTraits : randomTraits}</ul>
        <Undo undo={this.props.undo} />
      </div>
    );
  }
}

export default Traits;
