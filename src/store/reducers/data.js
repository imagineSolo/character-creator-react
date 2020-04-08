import * as actionTypes from "./actions/actions";
import blank from "../images/blank_01.png";
import axios from "../axios-characters";

const initialState = {
  active: "start",
  gender: "",
  race: "",
  class: "",
  name: "",
  background: "",
  avatar: blank,
  attributes: {
    strength: 10,
    dexterity: 10,
    toughness: 10,
    intelligence: 10,
    willpower: 10,
    charisma: 10,
  },
  attributesPool: 5,
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
    trickery: false,
  },
  skillsPool: 3,
  traits: [],
  story: "",
  modal: {
    show: false,
    message: "Alert",
  },
  loading: false,
  saving: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_CHARACTER:
      return {
        ...state,
        active: "start",
        gender: "",
        race: "",
        class: "",
        name: "",
        background: "",
        avatar: blank,
        attributes: {
          strength: 10,
          dexterity: 10,
          toughness: 10,
          intelligence: 10,
          willpower: 10,
          charisma: 10,
        },
        attributesPool: 5,
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
          trickery: false,
        },
        skillsPool: 3,
        traits: [],
        story: "",
      };
    case actionTypes.SAVE_CHARACTER:
      const character = {
        gender: state.gender,
        race: state.race,
        class: state.class,
        name: state.name,
        background: state.background,
        avatar: state.avatar,
        attributes: state.attributes,
        skills: state.skills,
        traits: state.traits,
        story: state.story,
      };
      axios
        .post("/characters.json", character)
        .then(() => ({ ...state, loading: true }))
        .then(() => this.props.history.pathname.push("/saved"))
        .catch((error) => console.log(error));
      return {
        ...state,
        active: "saved",
        loading: false,
        saving: true,
      };
    case actionTypes.DISPLAY_CHARACTER:
      return {
        ...state,
        active: "start",
        gender: action.info.gender,
        race: action.info.race,
        class: action.info.class,
        name: action.info.name,
        background: action.info.background,
        avatar: action.info.avatar,
        attributes: action.info.attributes,
        skills: action.info.skills,
        traits: action.info.traits,
        story: action.info.story,
      };
    case actionTypes.DELETE_CHARACTER:
      axios
        .delete(`/characters/${action.char}.json`)
        .then(() => ({ ...state, loading: true }))
        .then()
        .catch((error) => console.log(error));
      return {
        ...state,
        gender: "",
        race: "",
        class: "",
        name: "",
        background: "",
        avatar: blank,
        attributes: {
          strength: 10,
          dexterity: 10,
          toughness: 10,
          intelligence: 10,
          willpower: 10,
          charisma: 10,
        },
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
          trickery: false,
        },
        traits: [],
        story: "",
        loading: false,
      };
    default:
      return state;
  }
};

export default data;
