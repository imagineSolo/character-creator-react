import React, { Component } from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./containers/Header";
import Nav from "./containers/Nav";
import Start from "./containers/Start";
import CharSheet from "./containers/CharSheet";
import Gender from "./components/Steps/Gender";
import Race from "./components/Steps/Race";
import Classes from "./components/Steps/Classes";
import Name from "./components/Steps/Name";

class App extends Component {
  state = {
    startClicked: false,
    active: "start",
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

  handleStart = () => {
    this.setState({
      ...this.state,
      startClicked: true,
      active: "gender"
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

  handleNameSubmit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  render() {
    return (
      <Router>
        <div className={styles.App}>
          <div className={styles.Menu}>
            <Header />
            <Nav />
          </div>
          {!this.state.startClicked && <Start start={this.handleStart} />}
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
              submit={this.handleNameSubmit}
              undo={() => this.handleBack(this.state.active)}
            />
          )}
          <CharSheet
            gender={this.state.gender}
            race={this.state.race}
            class={this.state.class}
            name={this.state.name}
          />
        </div>
      </Router>
    );
  }
}

export default App;
