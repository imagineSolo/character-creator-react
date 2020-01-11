import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import CharSheet from "./CharSheet";
import Gender from "../components/Steps/Gender";
import Start from "./Start";
import Race from "../components/Steps/Race";
import Classes from "../components/Steps/Classes";
import Name from "../components/Steps/Name";
import Background from "../components/Steps/Background";
import styles from "../App.module.scss";

class Layout extends Component {
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
        active: "race",
        race: "",
        class: ""
      });
    }
    if (state === "name") {
      this.setState({
        ...this.state,
        active: "class",
        class: "",
        name: ""
      });
    }
    if (state === "background") {
      this.setState({
        ...this.state,
        active: "name",
        name: "",
        background: ""
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

  handleBackgroundChange = e => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      background: e.target.value
    });
  };

  handleBackgroundSubmit = e => {
    e.preventDefault();
    this.setState({
      ...this.state
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Menu}>
          <Header />
          <Nav />
        </div>

        {/* {this.state.active === "start" &&
          React.cloneElement(this.props.children, {
            onStartClick: this.passAppState
          })} */}

        {this.state.active === "start" && (
          <Start onStartClick={this.passAppState} />
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
        {this.state.active === "background" && (
          <Background
            change={this.handleBackgroundChange}
            submit={e => this.handleBackgroundSubmit(e)}
            undo={() => this.handleBack(this.state.active)}
          />
        )}
        <CharSheet
          gender={this.state.gender}
          race={this.state.race}
          class={this.state.class}
          name={this.state.nameSaved}
        />
      </div>
    );
  }
}

export default Layout;
