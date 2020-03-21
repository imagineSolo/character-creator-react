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
        for (let key in response.characters) {
          console.log(response, response.characters);
          data.push(response.characters[key]);
        }
        this.setState({ characters: data });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.characters);
    // const characters = this.state.characters;
    // characters.map(char => {
    //   console.log(char.name);
    //   return <div>{char.name}</div>;
    // });
    return (
      <section className={styles.Content}>
        <h2>Saved Characters</h2>
        {/* {characters} */}
      </section>
    );
  }
}

export default SavedChars;
