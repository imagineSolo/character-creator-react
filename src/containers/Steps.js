import React, { Component } from "react";
import Gender from "../components/Steps/Gender/Gender";
import Races from "../components/Steps/Races/Races";
import Classes from "../components/Steps/Classes/Classes";
import Name from "../components/Steps/Name/Name";
import Background from "../components/Steps/Background/Background";
import Avatar from "../components/Steps/Avatar/Avatar";
import Attributes from "../components/Steps/Attributes/Attributes";
import Skills from "../components/Steps/Skills/Skills";
import Traits from "../components/Steps/Traits/Traits";
import Story from "../components/Steps/Story/Story";
import styles from "./Steps.module.scss";

class Steps extends Component {
  state = {
    name: "",
    background: "",
    traits: [],
  };

  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  handleBackgroundChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      background: e.target.value,
    });
  };

  render() {
    return (
      <>
        {this.props.active === "start" && (
          <section className={styles.Content}>
            <h2 className={styles.Header}>Welcome to Fantasy Character Creator!</h2>
            <p className={styles.Description}>
              Create your own fantasy character by making step-by-step decisions. Once you start, each choice will be
              summarized in your character sheet on the right. You can save your finished characters and view them in
              Saved Characters panel.
              <br />
              Enjoy & have fun!
            </p>
            <button className={styles.Start} onClick={() => this.props.passActiveWindow()}>
              Start
            </button>
          </section>
        )}
        {this.props.active === "gender" && (
          <Gender select={this.props.selectGender} undo={() => this.props.undo(this.props.active)} />
        )}
        {this.props.active === "race" && (
          <Races select={this.props.selectRace} undo={() => this.props.undo(this.props.active)} />
        )}
        {this.props.active === "class" && (
          <Classes select={this.props.selectClass} undo={() => this.props.undo(this.props.active)} />
        )}
        {this.props.active === "name" && (
          <Name
            value={this.state.name}
            change={this.handleNameChange}
            submit={() => this.props.submitName(this.state.name)}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "background" && (
          <Background
            change={this.handleBackgroundChange}
            submit={(e) => this.props.submitBackground(this.state.background, e)}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "avatar" && (
          <Avatar
            gender={this.props.gender}
            race={this.props.race}
            selectPortrait={(el) => this.props.selectPortrait(el)}
            undo={() => this.props.undo(this.props.active)}
          />
        )}
        {this.props.active === "attributes" && (
          <Attributes
            attributes={this.props.attributes}
            pool={this.props.pool}
            increment={this.props.increment}
            decrement={this.props.decrement}
            undo={() => this.props.undo(this.props.active)}
            submit={this.props.applyAttributes}
          />
        )}
        {this.props.active === "skills" && (
          <Skills
            addSkill={this.props.submitSkills}
            skills={this.props.skills}
            skillsPool={this.props.skillsPool}
            undo={() => this.props.undo(this.props.active)}
            submit={this.props.applySkills}
          />
        )}
        {this.props.active === "traits" && (
          <Traits submit={this.props.applyTraits} undo={() => this.props.undo(this.props.active)} />
        )}
        {this.props.active === "story" && (
          <Story submit={this.props.applyStory} undo={() => this.props.undo(this.props.active)} />
        )}
      </>
    );
  }
}

export default Steps;
