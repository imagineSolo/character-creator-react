import React, { Component } from "react";
import styles from "./Content.module.scss";

class Start extends Component {
  state = {
    data: "start"
  };

  handleStart = () => {
    this.setState({
      data: "gender"
    });
    this.props.start(this.state.data);
  };

  render() {
    return (
      <section className={styles.Content}>
        <h2>Welcome to Fantasy Character Creator!</h2>
        <p>
          Create your own fantasy character by making step-by-step decisions.
          Once you start, each choice will be summarized in your character sheet
          on the right. You can save your finished characters and view them in
          Saved Characters panel. Enjoy & have fun!
        </p>
        <button onClick={this.handleStart}>Start</button>
      </section>
    );
  }
}

export default Start;
