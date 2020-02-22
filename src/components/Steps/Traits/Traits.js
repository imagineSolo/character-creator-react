import React, { Component } from "react";
import Apply from "../../Button/Apply/Apply";
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
        "Dresses well",
        "Often changes outfits",
        "Strong voice",
        "Thick voice",
        "Can only hear on one ear",
        "Talks very fast",
        "Is older than it looks"
      ],
      mental: [
        "Is ambitious",
        "Is shy",
        "Is very religious",
        "Courageous",
        "Sceptical",
        "Has a positive attitude",
        "Is always pesimistic",
        "Always gives the best ideas",
        "Forgets names"
      ],
      social: [
        "Laughs loud",
        "Likes to gossip",
        "Likes to meet new people",
        "Trusts only his companions",
        "Drinks a lot",
        "Likes baked potatoes",
        "Sleeps long",
        "Loves sweet rolls",
        "Has an outlandish dialect",
        "Tells bad jokes"
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
    this.setState({
      active: "custom",
      traits: arr
    });
    if (this.state.traits.length <= 2) {
      arr.push(this.state.input);
    } else {
      console.log("Enough");
    }
  };

  handleRandomTraits = () => {
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

    const physicalTrait = physical[rndmPhysical];
    const mentalTrait = mental[rndmMental];
    const socialTrait = social[rndmSocial];
    const mergedTraits = [].concat(physicalTrait, mentalTrait, socialTrait);

    this.setState({
      ...this.state,
      active: "random",
      random: {
        ...this.state.random,
        traits: mergedTraits
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
        <form className={styles.TraitsForm} onSubmit={this.handleSubmit}>
          <label>Add personality trait:</label>
          <input
            type="text"
            required
            minLength="3"
            maxLength="40"
            autoFocus
            onChange={this.handleChange}
          />
          <div className={styles.Buttons}>
            <input className={styles.Submit} type="submit" value="Add" />
            <button className={styles.Random} onClick={this.handleRandomTraits}>
              <i className="fas fa-dice"></i>
            </button>
          </div>
        </form>
        <ul>{this.state.active === "custom" ? customTraits : randomTraits}</ul>
        <div className={styles.Buttons}>
          <Undo undo={this.props.undo} />
          <Apply apply={() => this.props.submit(this.state.traits)} />
        </div>
      </div>
    );
  }
}

export default Traits;
