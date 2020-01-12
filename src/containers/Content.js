import React, { Component } from "react";
import styles from "./Content.module.scss";
import Gender from "../components/Steps/Gender";
import Race from "../components/Steps/Race";
import Classes from "../components/Steps/Classes";
import Name from "../components/Steps/Name";

class Content extends Component {
  state = {
    active: "start",
    gender: "",
    race: "",
    class: "",
    name: "",
    nameSaved: "",
    background: "",
    avatar: "",
    attributes: {},
    skills: {},
    traits: [],
    story: ""
  };

  passAppState = clicked => {
    this.setState({
      active: clicked
    });
  };

  handleBack = state => {
    if (state === "gender") {
      this.setState({
        ...this.state,
        startClicked: false,
        active: "start",
        gender: ""
      });
    }
    if (state === "race") {
      this.setState({
        ...this.state,
        startClicked: true,
        active: "gender",
        gender: "",
        race: ""
      });
    }
    if (state === "class") {
      this.setState({
        ...this.state,
        startClicked: true,
        active: "race",
        race: "",
        class: ""
      });
    }
    if (state === "name") {
      this.setState({
        ...this.state,
        startClicked: true,
        active: "class",
        class: "",
        name: ""
      });
    }
  };

  handleGenderFemale = () => {
    this.setState({
      ...this.state,
      active: "race",
      gender: "Female"
    });
  };

  handleGenderMale = () => {
    this.setState({
      ...this.state,
      active: "race",
      gender: "Male"
    });
  };

  handleRaceSelect = e => {
    this.setState({
      ...this.state,
      active: "class",
      race: e.target.id
    });
  };

  handleClassSelect = e => {
    this.setState({
      ...this.state,
      active: "name",
      class: e.target.id
    });
  };

  handleNameChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  handleNameSubmit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      active: "background",
      nameSaved: this.state.name
    });
  };

  render() {
    return (
      <>
        {this.state.active === "start" && (
          <section
            className={styles.Content}
            style={{ border: "3px solid red" }}
          >
            <h2>Welcome to Fantasy Character Creator!</h2>
            <p>
              Create your own fantasy character by making step-by-step
              decisions. Once you start, each choice will be summarized in your
              character sheet on the right. You can save your finished
              characters and view them in Saved Characters panel. Enjoy & have
              fun!
            </p>
            <button onClick={() => this.passAppState("gender")}>Start</button>
          </section>
        )}
        {this.state.active === "gender" && (
          <Gender
            female={this.handleGenderFemale}
            male={this.handleGenderMale}
            undo={() => this.handleBack(this.state.active)}
          />
        )}
        {this.state.active === "race" && (
          <Race
            select={this.handleRaceSelect}
            undo={() => this.handleBack(this.state.active)}
          />
        )}
        {this.state.active === "class" && (
          <Classes
            select={this.handleClassSelect}
            undo={() => this.handleBack(this.state.active)}
          />
        )}
        {this.state.active === "name" && (
          <Name
            value={this.state.name}
            change={this.handleNameChange}
            submit={e => this.handleNameSubmit(e)}
            undo={() => this.handleBack(this.state.active)}
          />
        )}
      </>
    );
  }
}

export default Content;
