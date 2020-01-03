import React, { Component } from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./containers/Header";
import Nav from "./containers/Nav";
import Start from "./containers/Start";
import CharSheet from "./containers/CharSheet";
import Gender from "./components/Steps/Gender";
import Race from "./components/Steps/Race";

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

  handleBack = () => {
    this.setState({
      ...this.state,
      startClicked: false,
      active: "start"
    });
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
              undo={this.handleBack}
            />
          )}
          {this.state.active === "race" && <Race />}
          <CharSheet gender={this.state.gender} />
        </div>
      </Router>
    );
  }
}

export default App;
