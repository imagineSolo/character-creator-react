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
      // ***
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
        "Is older than it looks",
        "Has an ear ring",
        "Always wears a mysterious signet ring",
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
        "Forgets names",
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
        "Tells bad jokes",
        "Likes smoking",
        "Always wakes up at sunrise",
        "Loves trinkets",
      ],
      traits: [],
    },
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleAddTrait = (e) => {
    e.preventDefault();
    const traits = [...this.state.traits];
    if (this.state.traits.length <= 2) {
      traits.push(this.state.input);
    }
    this.setState({
      active: "custom",
      input: "",
      traits,
    });
  };

  handleRandomTraits = () => {
    const physical = this.state.random.physical;
    const rndmPhysical = Math.floor(Math.random() * this.state.random.physical.length);
    const mental = this.state.random.mental;
    const rndmMental = Math.floor(Math.random() * this.state.random.mental.length);
    const social = this.state.random.social;
    const rndmSocial = Math.floor(Math.random() * this.state.random.social.length);

    const physicalTrait = physical[rndmPhysical];
    const mentalTrait = mental[rndmMental];
    const socialTrait = social[rndmSocial];
    const mergedTraits = [].concat(physicalTrait, mentalTrait, socialTrait);

    this.setState({
      ...this.state,
      active: "random",
      random: {
        ...this.state.random,
        traits: mergedTraits,
      },
    });
  };

  deleteTrait = (i) => {
    const traits = [...this.state.traits];
    const index = traits.findIndex((trait) => trait.index === i);
    traits.splice(index, 1);
    this.setState({
      traits,
    });
  };

  render() {
    const customTraits = this.state.traits.map((trait, index) => (
      <li key={index} className={styles.Item}>
        <span>{trait}</span>
        <button className={styles.Delete} onClick={() => this.deleteTrait(trait.index)}>
          [x]
        </button>
      </li>
    ));

    const randomTraits = this.state.random.traits.map((trait, index) => (
      <li key={index} className={styles.Item}>
        <span>{trait}</span>
      </li>
    ));

    return (
      <div className={styles.Content}>
        <h3 className={styles.Header}>Personality Traits</h3>
        <p>Add up to three personality traits that will characterize your hero. You can also select them randomly.</p>
        <div className={styles.Form}>
          <form className={styles.TraitsForm} onSubmit={this.handleAddTrait}>
            <label>Add personality trait:</label>
            <input
              className={styles.TextInput}
              type="text"
              value={this.state.input}
              minLength="3"
              maxLength="40"
              autoFocus
              onChange={this.handleChange}
            />
            <input className={styles.Submit} type="submit" value="Add trait" title="Add trait" />
          </form>
          <button className={styles.Random} title="Random 3 traits" onClick={this.handleRandomTraits}>
            <i className="fas fa-dice"></i>
          </button>
        </div>
        <ul>{this.state.active === "custom" ? customTraits : randomTraits}</ul>
        <div className={styles.Buttons}>
          <Undo undo={this.props.undo} />
          <Apply
            apply={() =>
              this.props.submit(this.state.active === "custom" ? this.state.traits : this.state.random.traits)
            }
          />
        </div>
      </div>
    );
  }
}

export default Traits;
