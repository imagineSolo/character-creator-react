import React, { Component } from "react";
import Undo from "../../Button/Undo/Undo";
import styles from "./Story.module.scss";

class Story extends Component {
  state = {
    input: "",
    story: "",
    letters: 300
  };

  handleChange = e => {
    const baseLetters = 300;
    this.setState({
      ...this.state,
      input: e.target.value,
      letters: baseLetters - e.target.value.length
    });
  };

  render() {
    const red = { color: "red" };

    return (
      <div className={styles.Content}>
        <h3 className={styles.Header}>Backstory</h3>
        <form>
          <textarea
            className={styles.TextInput}
            value={this.state.input}
            maxLength="300"
            autoFocus
            onChange={this.handleChange}
          />
          <div className={styles.Remaining}>
            <span style={this.state.letters <= 30 ? red : null}>
              Characters remaining: {this.state.letters}
            </span>
          </div>
          <input
            className={styles.Submit}
            type="submit"
            value="Submit & Finish!"
          ></input>
        </form>
        <Undo undo={this.props.undo} />
      </div>
    );
  }
}

export default Story;
