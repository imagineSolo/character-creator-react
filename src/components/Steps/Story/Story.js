import React, { Component } from "react";
import Undo from "../../Button/Undo/Undo";
import styles from "./Story.module.scss";

class Story extends Component {
  state = {
    input: "",
    letters: 800
  };

  handleChange = e => {
    const baseLetters = this.state.letters;
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
        <p>
          This is the final step. Write a short backstory for your character.
          Where was he born? Who were his parents? What was his childhood and
          adulthood? Why he chose to become an adventurer?
          <br />
          After you're done, click Submit and end the character creation.
        </p>
        <form
          className={styles.StoryForm}
          onSubmit={e => this.props.submit(e, this.state.input)}
        >
          <textarea
            className={styles.TextInput}
            value={this.state.input}
            maxLength="800"
            autoFocus
            onChange={this.handleChange}
          />
          <div className={styles.Remaining}>
            <span style={this.state.letters <= 50 ? red : null}>
              Characters remaining: {this.state.letters}
            </span>
          </div>
          <input
            className={styles.Submit}
            type="submit"
            value="Submit & Finish!"
          />
        </form>
        <Undo undo={this.props.undo} />
      </div>
    );
  }
}

export default Story;
