import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { activeWindowAction } from "../store/actions/active";
import { closeModal, moveBack } from "../store/actions/ui";
import {
  selectGender,
  selectRace,
  selectClass,
  submitName,
  selectBackground,
  selectAvatar,
  increaseAttribute,
  decreaseAttribute,
  applyAttributes,
  applySkills,
  applyTraits,
  applyStory,
} from "../store/actions/steps";
import { newCharacter, saveCharacter, displayCharacter, deleteCharacter } from "../store/actions/data";

import Modal from "../components/Modal/Modal";
import Header from "./Header";
import Nav from "./Nav";
import CharSheet from "./CharSheet";
import Steps from "./Steps";
import SavedChars from "./SavedChars";
import Spinner from "../components/Spinner/Spinner";
// import ErrorHandler from "../containers/ErrorHandler";
import styles from "../App.module.scss";

const steps = [
  "start",
  "gender",
  "race",
  "class",
  "name",
  "background",
  "avatar",
  "attributes",
  "skills",
  "traits",
  "story",
  "summary",
];

class Content extends Component {
  state = {
    active: this.props.active,
    modal: {
      show: this.props.modal.show,
      message: "Alert",
    },
  };

  handleActiveWindow = () => {
    const index = steps.indexOf(this.props.active);
    const nextStep = steps[index + 1];

    this.props.onActiveWindow(nextStep);
  };

  handleUndo = () => {
    console.log(this.props.active);
    if (this.props.active !== "start") {
      const index = steps.indexOf(this.props.active);
      const prevStep = steps[index - 1];

      this.props.onActiveWindow(prevStep);
      // this.props.onMoveBack();
    }
  };

  render() {
    if (this.props.saving === true) {
      return <Redirect to="/saved" />;
    }

    return (
      <div className={styles.App}>
        <div className={styles.Menu}>
          <Header />
          <Nav />
        </div>
        {this.props.loading ? <Spinner /> : null}
        <Switch>
          <Route path="/saved" exact>
            <SavedChars display={this.props.onCharacterDisplay} delete={this.props.onCharacterDelete} />
          </Route>
          <Route path="/" exact>
            <Modal modal={this.state.modal} clicked={this.props.onModalClose} />
            <Steps
              active={this.props.active}
              undo={() => this.handleUndo()}
              passActiveWindow={() => this.handleActiveWindow()}
              gender={this.props.gender}
              race={this.props.race}
              attributes={this.props.attr}
              pool={this.props.attrPool}
              increment={this.props.onAttributeIncrease}
              decrement={this.props.onAttributeDecrease}
              skills={this.props.skills}
              skillsPool={this.props.skillsPool}
              selectGender={(gender) => {
                this.handleActiveWindow();
                this.props.onGenderSelect(gender);
              }}
              selectRace={(races) => {
                this.handleActiveWindow();
                this.props.onRaceSelect(races);
              }}
              selectClass={(classes) => {
                this.handleActiveWindow();
                this.props.onClassSelect(classes);
              }}
              submitName={(name) => {
                this.handleActiveWindow();
                this.props.onNameSubmit(name);
              }}
              submitBackground={(bgd, e) => {
                this.handleActiveWindow();
                this.props.onBackgroundSelect(bgd, e);
              }}
              selectPortrait={(av) => {
                this.handleActiveWindow();
                this.props.onAvatarSelect(av);
              }}
              applyAttributes={(attr) => {
                this.handleActiveWindow();
                this.props.onApplyAttributes(attr);
              }}
              applySkills={(skills, pool) => {
                this.handleActiveWindow();
                this.props.onApplySkills(skills, pool);
              }}
              applyTraits={(traits) => {
                this.handleActiveWindow();
                this.props.onApplyTraits(traits);
              }}
              applyStory={(story, e) => {
                this.handleActiveWindow();
                this.props.onApplyStory(story, e);
              }}
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
          skills={this.props.skills}
          traits={this.props.traits}
          story={this.props.story}
        />
        <div
          className={[styles.RibbonNew, this.props.active === "summary" ? styles.drawRibbonsNew : null].join(" ")}
          onClick={this.props.onNewCharacter}
        >
          <a href="/">New Character</a>
        </div>
        <div
          className={[styles.RibbonSave, this.props.active === "summary" ? styles.drawRibbonsSave : null].join(" ")}
          onClick={this.props.onSaveCharacter}
        >
          Save Character
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.active.active,
    modal: state.ui.modal,
    gender: state.steps.gender,
    race: state.steps.race,
    class: state.steps.class,
    name: state.steps.name,
    background: state.steps.background,
    avatar: state.steps.avatar,
    attr: state.steps.attributes,
    attrPool: state.steps.attributesPool,
    skills: state.steps.skills,
    skillsPool: state.steps.skillsPool,
    traits: state.steps.traits,
    story: state.steps.story,
    loading: state.data.loading,
    saving: state.data.saving,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onActiveWindow: (nextStep) => dispatch(activeWindowAction(nextStep)),
    onModalClose: () => dispatch(closeModal()),
    onMoveBack: () => dispatch(moveBack()),

    onGenderSelect: (gender) => dispatch(selectGender(gender)),
    onRaceSelect: (races) => dispatch(selectRace(races)),
    onClassSelect: (classes) => dispatch(selectClass(classes)),
    onNameSubmit: (name) => dispatch(submitName(name)),
    onBackgroundSelect: (bgd, e) => dispatch(selectBackground(bgd, e)),
    onAvatarSelect: (avatar) => dispatch(selectAvatar(avatar)),
    onAttributeIncrease: (attrName) => dispatch(increaseAttribute(attrName)),
    onAttributeDecrease: (attrName) => dispatch(decreaseAttribute(attrName)),
    onApplyAttributes: () => dispatch(applyAttributes()),
    onApplySkills: (skills, pool) => dispatch(applySkills(skills, pool)),
    onApplyTraits: (traits) => dispatch(applyTraits(traits)),
    onApplyStory: (story, e) => dispatch(applyStory(e, story)),

    onNewCharacter: () => dispatch(newCharacter()),
    onSaveCharacter: () => dispatch(saveCharacter()),
    onCharacterDisplay: (char) => dispatch(displayCharacter(char)),
    onCharacterDelete: (char) => dispatch(deleteCharacter(char)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
