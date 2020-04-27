import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { activeWindowAction, start } from "../store/actions/active";
import { closeModal } from "../store/actions/ui";
import * as actionCreators from "../store/actions/steps";

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
  "saved",
];

class Content extends Component {
  state = {
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
    if (this.props.active !== "start") {
      const index = steps.indexOf(this.props.active);
      const prevStep = steps[index - 1];

      this.props.onActiveWindow(prevStep);
      this.props.onMoveBack(prevStep);
    }
  };

  render() {
    let redirect = null;
    if (this.props.saving) {
      redirect = <Redirect to="/saved" />;
    }

    return (
      <div className={styles.App}>
        <div className={styles.Menu}>
          <Header />
          <Nav start={this.props.onStart} new={this.props.onCharacterClear} />
        </div>
        {this.props.loading ? <Spinner /> : null}
        <Modal modal={this.state.modal} clicked={this.props.onModalClose} />
        <Switch>
          {redirect}
          <Route
            path={process.env.PUBLIC_URL + "/"}
            exact
            render={() => (
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
            )}
          />
          <Route
            path="/saved"
            exact
            render={() => (
              <SavedChars
                display={this.props.onCharacterDisplay}
                delete={this.props.onCharacterDelete}
                clear={this.props.onCharacterClear}
              />
            )}
          />
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
          saving={this.props.saving}
        />
        <Link
          to="/"
          className={[styles.RibbonNew, this.props.active === "summary" ? styles.drawRibbonsNew : null].join(" ")}
          onClick={this.props.onCharacterClear}
        >
          <span>New Character</span>
        </Link>
        <Link
          to="/saved"
          className={[styles.RibbonSave, this.props.active === "summary" ? styles.drawRibbonsSave : null].join(" ")}
          onClick={() => {
            this.handleActiveWindow();
            this.props.onSaveCharacter(this.props.character);
          }}
        >
          <span>Save Character</span>
        </Link>
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
    character: {
      gender: state.steps.gender,
      race: state.steps.race,
      class: state.steps.class,
      name: state.steps.name,
      background: state.steps.background,
      avatar: state.steps.avatar,
      attributes: state.steps.attributes,
      skills: state.steps.skills,
      traits: state.steps.traits,
      story: state.steps.story,
    },
    loading: state.steps.loading,
    saving: state.steps.saving,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onActiveWindow: (step) => dispatch(activeWindowAction(step)),
    onStart: () => dispatch(start()),
    onModalClose: () => dispatch(closeModal()),
    onMoveBack: (step) => dispatch(actionCreators.moveBack(step)),
    onGenderSelect: (gender) => dispatch(actionCreators.selectGender(gender)),
    onRaceSelect: (races) => dispatch(actionCreators.selectRace(races)),
    onClassSelect: (classes) => dispatch(actionCreators.selectClass(classes)),
    onNameSubmit: (name) => dispatch(actionCreators.submitName(name)),
    onBackgroundSelect: (bgd, e) => dispatch(actionCreators.selectBackground(bgd, e)),
    onAvatarSelect: (avatar) => dispatch(actionCreators.selectAvatar(avatar)),
    onAttributeIncrease: (attrName) => dispatch(actionCreators.increaseAttribute(attrName)),
    onAttributeDecrease: (attrName) => dispatch(actionCreators.decreaseAttribute(attrName)),
    onApplyAttributes: () => dispatch(actionCreators.applyAttributes()),
    onApplySkills: (skills, pool) => dispatch(actionCreators.applySkills(skills, pool)),
    onApplyTraits: (traits) => dispatch(actionCreators.applyTraits(traits)),
    onApplyStory: (story, e) => dispatch(actionCreators.applyStory(e, story)),
    onSaveCharacter: (char) => dispatch(actionCreators.saveCharacter(char)),
    onCharacterDisplay: (char) => dispatch(actionCreators.displayCharacter(char)),
    onCharacterDelete: (char) => dispatch(actionCreators.deleteCharacter(char)),
    onCharacterClear: () => dispatch(actionCreators.clearCharacter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
