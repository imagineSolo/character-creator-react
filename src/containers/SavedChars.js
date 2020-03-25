import React, { Component } from "react";
import styles from "./SavedChars.module.scss";
import axios from "../axios-characters";
import Spinner from "../components/Spinner/Spinner";

class SavedChars extends Component {
  state = {
    characters: [],
    loading: true
  };

  componentDidMount() {
    let data = [];
    axios
      .get("https://character-creator-react.firebaseio.com/characters.json")
      .then(response => {
        for (let key in response.data) {
          data.push(response.data[key]);
        }
        this.setState({ characters: data, loading: false });
      })
      .catch(error => console.log(error));
  }

  render() {
    const characters = this.state.characters.map((char, i) => {
      return (
        <div className={styles.Character} key={char.name} onClick={() => this.props.display(this.state.characters[i])}>
          <img src={char.avatar} alt="Portrait" />
          <span>{char.name}</span>
        </div>
      );
    });
    return (
      <section className={styles.Content}>
        <h2>Saved Characters</h2>
        <div className={styles.CharList}>{this.state.loading ? <Spinner /> : characters}</div>
      </section>
    );
  }
}

export default SavedChars;
