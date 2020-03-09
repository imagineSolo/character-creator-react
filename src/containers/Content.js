import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

import Modal from "../components/Modal/Modal";
import Header from "./Header";
import Nav from "./Nav";
import CharSheet from "./CharSheet";
import Steps from "./Steps";
import SavedChars from "./SavedChars";
import blank from "../images/blank_01.png";
import styles from "../App.module.scss";

class Content extends Component {
  state = {
    active: "start",
    gender: "",
    race: "",
    class: "",
    nameSaved: "",
    background: "",
    avatar: blank,
    skills: {
      arcana: false,
      athletics: false,
      crafting: false,
      deception: false,
      history: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: false,
      performance: false,
      persuasion: false,
      religion: false,
      stealth: false,
      survival: false,
      trickery: false
    },
    skillsPool: 3,
    traits: [],
    story: "",
    modal: {
      show: false,
      message: "Alert"
    }
  };

  handleBack = state => {
    let updatedState = { ...this.state };

    if (state === "gender") {
      updatedState.active = "start";
      updatedState.gender = "";
    }
    if (state === "race") {
      updatedState.active = "gender";
      updatedState.gender = "";
      updatedState.race = "";
    }
    if (state === "class") {
      updatedState.active = "race";
      updatedState.race = "";
      updatedState.class = "";
    }
    if (state === "name") {
      updatedState.active = "class";
      updatedState.class = "";
      updatedState.nameSaved = "";
    }
    if (state === "background") {
      updatedState.active = "name";
      updatedState.nameSaved = "";
      updatedState.background = "";
    }
    if (state === "avatar") {
      updatedState.active = "background";
      updatedState.background = "";
      updatedState.avatar = blank;
    }
    if (state === "attributes") {
      updatedState.active = "avatar";
      updatedState.avatar = blank;
    }
    if (state === "skills") {
      updatedState.active = "attributes";
    }
    if (state === "traits") {
      updatedState.active = "skills";
      updatedState.traits = [];
    }
    if (state === "story") {
      updatedState.active = "traits";
      updatedState.story = "";
    }
    this.setState({
      ...this.state,
      active: updatedState.active,
      updatedState
    });
  };

  modalClose = () => {
    this.setState({
      modal: { show: false }
    });
  };

  applyChangesAttributes = () => {
    if (this.props.attrPool <= 0) {
      this.setState({
        ...this.state,
        active: "skills"
      });
    } else {
      this.setState({
        modal: {
          ...this.state.modal,
          show: true,
          message: "You still have points left to spend!"
        }
      });
    }
  };

  applyChangesSkills = (skill, pool) => {
    const addedSkills = this.handleAddSkills(skill);
    if (pool <= 0) {
      this.setState({
        ...this.state,
        active: "traits",
        skills: {
          ...this.state.skills,
          ...addedSkills
        }
      });
    } else {
      this.setState({
        modal: {
          ...this.state.modal,
          show: true,
          message: "You have skill points left to spend!"
        }
      });
    }
  };

  handleAddSkills = skills => {
    let newSkills = {};
    for (let key in skills) {
      if (skills[key]) {
        newSkills[key] = true;
      }
    }
    return newSkills;
  };

  applyChangesTraits = traits => {
    this.setState({
      active: "story",
      traits
    });
  };

  applyChangesStory = (e, story) => {
    e.preventDefault();
    this.setState({
      active: "summary",
      story
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Menu}>
          <Header />
          <Nav />
        </div>
        <Switch>
          <Route path="/saved" exact>
            <SavedChars />
          </Route>
          <Route path="/" exact>
            <Modal modal={this.state.modal} clicked={this.modalClose} />
            <Steps
              active={this.props.active}
              undo={this.handleBack}
              passAppState={this.props.onPassState}
              selectGender={this.props.onGenderSelect}
              selectRace={this.props.onRaceSelect}
              selectClass={this.props.onClassSelect}
              submitName={this.props.onNameSubmit}
              submitBackground={this.props.onBackgroundSelect}
              gender={this.props.gender}
              race={this.props.race}
              selectPortrait={this.props.onAvatarSelect}
              attributes={this.props.attr}
              pool={this.props.attrPool}
              increment={this.props.onAttributeIncrease}
              decrement={this.props.onAttributeDecrease}
              skills={this.state.skills}
              skillsPool={this.state.skillsPool}
              submitSkills={this.handleSkillsSubmit}
              applyAttributes={this.applyChangesAttributes}
              applySkills={this.applyChangesSkills}
              applyTraits={this.applyChangesTraits}
              applyStory={this.applyChangesStory}
            />
          </Route>
        </Switch>

        <CharSheet
          active={this.props.active}
          gender={this.props.gender}
          race={this.props.race}
          class={this.props.class}
          name={this.props.name}
          avatar={this.props.avatar}
          background={this.props.background}
          attributes={this.props.attr}
          skills={this.state.skills}
          traits={this.state.traits}
          story={this.state.story}
        />
        <div className={[styles.RibbonNew, this.props.active === "summary" ? styles.drawRibbonsNew : null].join(" ")}>
          New Character
        </div>
        <div className={[styles.RibbonSave, this.props.active === "summary" ? styles.drawRibbonsSave : null].join(" ")}>
          Save Character
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.active,
    gender: state.gender,
    race: state.race,
    class: state.class,
    name: state.name,
    background: state.background,
    avatar: state.avatar,
    attr: state.attributes,
    attrPool: state.attributesPool
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPassState: active => {
      dispatch({
        type: actionTypes.PASS_STATE,
        active: active
      });
    },
    onGenderSelect: gender => {
      dispatch({
        type: actionTypes.SELECT_GENDER,
        gender: gender
      });
    },
    onRaceSelect: races =>
      dispatch({
        type: actionTypes.SELECT_RACE,
        race: races
      }),
    onClassSelect: classes =>
      dispatch({
        type: actionTypes.SELECT_CLASS,
        class: classes
      }),
    onNameSubmit: name =>
      dispatch({
        type: actionTypes.SUBMIT_NAME,
        name: name
      }),
    onBackgroundSelect: bgd =>
      dispatch({
        type: actionTypes.SELECT_BACKGROUND,
        background: bgd
      }),
    onAvatarSelect: avatar =>
      dispatch({
        type: actionTypes.SELECT_AVATAR,
        avatar: avatar
      }),
    onAttributeIncrease: attrName =>
      dispatch({
        type: actionTypes.INCREASE_ATTRIBUTE,
        attributeName: attrName
      }),
    onAttributeDecrease: attrName =>
      dispatch({
        type: actionTypes.DECREASE_ATTRIBUTE,
        attributeName: attrName
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
