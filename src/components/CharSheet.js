import React, { Component } from "react";

class CharSheet extends Component {
  state = {
    gender: "",
    race: "",
    class: "",
    name: "",
    background: "",
    avatar: "",
    attributes: {},
    skills: {},
    traits: [],
    story: ""
  };
  render() {
    return <section className="CharSheet">CharSheet</section>;
  }
}

export default CharSheet;
