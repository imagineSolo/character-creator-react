import React, { Component } from "react";
import Undo from "../../Button/Undo/Undo";
import styles from "./Traits.module.scss";

// const physical = [
//   "Has a nervous twitch",
//   "Smells funny",
//   "Gesticules vividly",
//   "Has an interesting eye color",
//   "Dresses well"
// ];

// const mental = [
//   "Is ambitious",
//   "Is shy",
//   "Is very religious",
//   "Courageous",
//   "Sceptical",
//   "Has a positive attitude"
// ];

// const social = [
//   "Laughs loud",
//   "Likes to gossip",
//   "Likes to meet new people",
//   "Trusts only his companions",
//   "Drinks a lot",
//   "Loves baked potatoes"
// ];

// console.log(physical);
// console.log(mental);
// console.log(social);

class Traits extends Component {
  state = {
    input: "",
    traits: []
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
      traits: arr
    });
  };

  render() {
    const traitList = Array.from(this.state.traits);
    traitList.map((trait, index) => {
      return (
        <li key={index} className={styles.Item}>
          <span>{trait}</span>
        </li>
      );
    });
    console.log(traitList);

    return (
      <div className={styles.Content}>
        <h3 className={styles.Header}>Personality Traits</h3>
        <ul>{traitList}</ul>
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
          <input type="button" value="Random traits" />
        </form>
        <Undo undo={this.props.undo} />
      </div>
    );
  }
}

export default Traits;
