import React, { Component } from "react";
import Gender from "../components/Steps/Gender/Gender";
import Races from "../components/Steps/Races/Races";
import Classes from "../components/Steps/Classes/Classes";
import Name from "../components/Steps/Name/Name";
import Background from "../components/Steps/Background/Background";
import Avatar from "../components/Steps/Avatar/Avatar";
import Attributes from "../components/Steps/Attributes/Attributes";
import styles from "./Content.module.scss";

class Content extends Component {
  state = {
    name: "",
    background: ""
  };

  handleNameChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  handleBackgroundChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      background: e.target.value
    });
  };

  render() {
    return (
      <>
        {this.props.active === "start" && (
          <section className={styles.Content}>
            <h2 className={styles.Header}>
              Welcome to Fantasy Character Creator!
            </h2>
            <p>
              Create your own fantasy character by making step-by-step
              decisions. Once you start, each choice will be summarized in your
              character sheet on the right. You can save your finished
              characters and view them in Saved Characters panel. Enjoy & have
              fun!
            </p>
            <button
              className={styles.Start}
              onClick={() => this.props.passAppState("gender")}
            >
              Start
            </button>
          </section>
        )}
        {this.props.active === "gender" && (
          <Gender
            female={this.props.female}
            male={this.props.male}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "race" && (
          <Races
            select={this.props.selectRace}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "class" && (
          <Classes
            select={this.props.selectClass}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "name" && (
          <Name
            value={this.state.name}
            change={this.handleNameChange}
            submit={() => this.props.submitName(this.state.name)}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "backgroundSaved" && (
          <Background
            change={this.handleBackgroundChange}
            submit={e => this.props.submitBackground(this.state.background, e)}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "avatar" && (
          <Avatar
            gender={this.props.gender}
            race={this.props.race}
            selectPortrait={this.props.selectPortrait}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "attributes" && (
          <Attributes
            strength={this.props.strength}
            dexterity={this.props.dexterity}
            toughness={this.props.toughness}
            intelligence={this.props.intelligence}
            willpower={this.props.willpower}
            charisma={this.props.charisma}
            pool={this.props.pool}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
      </>
    );
  }
}

export default Content;
