import * as actionTypes from "../actions/ui";
import blank from "../../images/blank_01.png";
import { activeWindowAction } from "../actions/active";

const initialState = {
  modal: {
    show: false,
    message: "Alert",
  },
};

const ui = (state = initialState, action) => {
  switch (action.type) {
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
