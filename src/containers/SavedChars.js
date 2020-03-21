import React, { Component } from "react";
import styles from "./Steps.module.scss";
import axios from "../axios-characters";

class SavedChars extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    let data = [];
    axios
      .get("https://character-creator-react.firebaseio.com/.json")
      .then(response => data.push(response.data), console.log(data))
      .then(response => this.setState({ characters: data }), console.log(data))
      .catch(error => console.log(error));
  }

  render() {
    const characters = this.state.characters;
    characters.map(char => {
      console.log(char);
      return <div>{char.name}</div>;
    });
    return (
      <section className={styles.Content}>
        <h2>Saved Characters</h2>
        {/* {characters} */}
      </section>
    );
  }
}

export default SavedChars;
