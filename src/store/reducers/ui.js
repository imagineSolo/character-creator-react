import * as actionTypes from "./actions/actions";
import blank from "../images/blank_01.png";

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

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PASS_STATE:
      return {
        ...state,
        active: action.active,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          show: false,
        },
      };
    case actionTypes.MOVE_BACK:
      if (state.active === "gender") {
        return {
          ...state,
          active: "start",
          gender: "",
        };
      }
      if (state.active === "race") {
        return {
          ...state,
          active: "gender",
          gender: "",
          race: "",
        };
      }
      if (state.active === "class") {
        return {
          ...state,
          active: "race",
          race: "",
          class: "",
        };
      }
      if (state.active === "name") {
        return {
          ...state,
          active: "class",
          name: "",
          class: "",
        };
      }
      if (state.active === "background") {
        return {
          ...state,
          active: "name",
          name: "",
          background: "",
        };
      }
      if (state.active === "avatar") {
        return {
          ...state,
          active: "background",
          background: "",
          avatar: blank,
        };
      }
      if (state.active === "attributes") {
        return {
          ...state,
          active: "avatar",
          avatar: blank,
        };
      }
      if (state.active === "skills") {
        return {
          ...state,
          active: "attributes",
        };
      }
      if (state.active === "traits") {
        return {
          ...state,
          active: "skills",
          traits: [],
        };
      }
      if (state.active === "story") {
        return {
          ...state,
          active: "traits",
          story: [],
        };
      }
      break;
    default:
      return state;
  }
};

export default ui;
