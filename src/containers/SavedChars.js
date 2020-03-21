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
      .get("https://character-creator-react.firebaseio.com/characters.json")
      .then(response => {
        for (let key in response.data) {
          console.log(response.data);
          data.push(response.data[key]);
        }
        this.setState({ characters: data });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.characters);

    const characters = this.state.characters.map(char => {
      return <div>{char.name}</div>;
    });
    return (
      <section className={styles.Content}>
        <h2>Saved Characters</h2>
        {characters}
      </section>
    );
  }
}

export default SavedChars;
