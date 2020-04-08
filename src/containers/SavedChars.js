import React, { Component } from "react";
import styles from "./SavedChars.module.scss";
import axios from "../axios-characters";
import Spinner from "../components/Spinner/Spinner";

class SavedChars extends Component {
  state = {
    characters: [],
    loading: true,
    // newLength: 0,
  };

  handleLoadCharacters = () => {
    // return new Promise(function (resolve, reject) {
    console.log("load from database");
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
        // return data;
        this.setState({ characters: data, loading: false });
      })
      .catch((error) => console.log(error));
    //   if (data) {
    //     resolve();
    //   } else {
    //     reject("Error: Something went wrong");
    //   }
    // });
  };

  handleDeleteCharacter = (id) => {
    return new Promise((resolve, reject) => {
      this.props.delete(id).then(console.log("xxxxx"));
    });
  };

  // handleSetCharacters = (data) => {
  //   console.log("set state");
  //   this.setState({ characters: data, loading: false, newLength: this.state.characters.length });
  // };

  componentDidMount() {
    this.handleLoadCharacters();
    // .then((data) => this.handleSetCharacters(data))
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("current state: " + this.state.characters.length);
    console.log("previous state: " + prevState.characters.length);

    if (this.state.characters.length !== prevState.characters.length) {
      console.log("update: " + this.state.characters.length);
      console.log("update: " + prevState.characters.length);

      this.handleLoadCharacters();
    }
  }

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
