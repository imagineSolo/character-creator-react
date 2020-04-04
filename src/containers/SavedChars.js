import React, { Component } from "react";
import styles from "./SavedChars.module.scss";
import axios from "../axios-characters";
import Spinner from "../components/Spinner/Spinner";

class SavedChars extends Component {
  state = {
    characters: [],
    loading: true,
    newLength: 0,
  };

  handleLoadCharacters = () => {
    return new Promise(function (resolve, reject) {
      console.log("load");
      let data = [];
      axios
        .get("https://character-creator-react.firebaseio.com/characters.json")
        .then((response) => {
          for (let key in response.data) {
            const char = {
              ...response.data[key],
              fbId: key,
            };
            data.push(char);
          }
          return data;
        })
        .catch((error) => console.log(error));
      if (data) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    });
  };

  handleSetCharacters = (data) => {
    console.log("set state");
    this.setState({ characters: data, loading: false, newLength: this.state.characters.length });
  };

  componentDidMount() {
    this.handleLoadCharacters()
      .then((data) => this.handleSetCharacters(data))
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    console.log(this.state.characters.length, this.state.newLength);
    if (this.state.characters.length < this.state.newLength) {
      console.log("update:" + this.state.characters.length);

      this.handleLoadCharacters();

      this.setState({
        ...this.state,
        newLength: this.state.characters.length + 1,
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
