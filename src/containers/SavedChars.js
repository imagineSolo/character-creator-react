import React, { Component } from "react";
import styles from "./SavedChars.module.scss";
import axios from "../axios-characters";
import Spinner from "../components/Spinner/Spinner";

class SavedChars extends Component {
  state = {
    characters: [],
    loading: true,
  };

  componentDidMount() {
    this.handleLoadCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.characters.length !== prevState.characters.length) {
      this.handleLoadCharacters();
    }
  }

  componentWillUnmount() {
    this.props.clear();
  }

  handleLoadCharacters = () => {
    let data = [];
    axios
      .get("https://character-creator-react.firebaseio.com/characters.json")
      .then((response) => {
        for (let key in response.data) {
          const char = {
            ...response.data[key],
            fbId: key,
          };
          if (char.name !== "") {
            data.push(char);
          }
        }
        this.setState({ characters: data, loading: false });
      })
      .catch((error) => console.log(error));
  };

  handleDeleteCharacter = (id) => {
    this.props.delete(id).then(() => this.handleLoadCharacters());
  };

  render() {
    let characters = <p>No characters</p>;
    if (this.state.characters.length) {
      characters = this.state.characters.map((char, i) => {
        return (
          <div className={styles.Character} key={i} title="Select">
            <img src={char.avatar} alt="Portrait" onClick={() => this.props.display(this.state.characters[i])} />
            <span>{char.name}</span>
            <div className={styles.Delete} title="Delete" onClick={() => this.handleDeleteCharacter(char.fbId)}>
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
