import React, { Component } from "react";
import styles from "./SavedChars.module.scss";
import axios from "../axios-characters";
import Spinner from "../components/Spinner/Spinner";

class SavedChars extends Component {
  state = {
    characters: [],
    loading: true,
    charLength: 0,
    newLength: 0
  };

  handleLoadCharacters = () => {
    let data = [];
    axios
      .get("https://character-creator-react.firebaseio.com/characters.json")
      .then(response => {
        for (let key in response.data) {
          const char = {
            ...response.data[key],
            fbId: key
          };
          data.push(char);
        }
        this.setState({ characters: data, loading: false, charLength: data.length });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.handleLoadCharacters();
  }

  componentDidUpdate() {
    if (this.state.charLength > this.state.newLength) {
      console.log("update");

      this.handleLoadCharacters();

      this.setState(prevState => {
        return {
          ...this.state,
          newLength: this.state.charLength
        };
      });
    }
  }

  render() {
    let characters = <p>No characters</p>;
    if (this.state.characters.length) {
      characters = this.state.characters.map((char, i) => {
        return (
          <div
            className={styles.Character}
            key={i}
            title="Select"
            onClick={() => this.props.display(this.state.characters[i])}
          >
            <img src={char.avatar} alt="Portrait" />
            <span>{char.name}</span>
            <div className={styles.Delete} title="Delete" onClick={() => this.props.delete(char.fbId)}>
              x
            </div>
          </div>
        );
      });
    }
    return (
      <section className={styles.Content}>
        <h2>Saved Characters</h2>
        <div className={styles.CharList}>{this.state.loading ? <Spinner /> : characters}</div>
      </section>
    );
  }
}

export default SavedChars;
