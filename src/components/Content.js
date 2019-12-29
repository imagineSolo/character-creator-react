import React, { Component } from "react";

class Content extends Component {
  state = {
    selection: ""
  };
  render() {
    return (
      <section className="Content">
        <h2>Welcome to Fantasy Character Creator!</h2>
        <p>
          Create your own fantasy character by making step-by-step decisions.
          Once we start, each choice will be summarized in your character sheet
          on the right. Enjoy & have fun!
        </p>
        <button>Start</button>
      </section>
    );
  }
}

export default Content;
