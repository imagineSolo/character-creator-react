import * as actionTypes from "../actions/active";

const initialState = {
  active: "start",
};

const active = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTIVE_WINDOW:
      return {
        ...state,
        active: action.active,
      };
    case actionTypes.START:
      return {
        active: "start",
      };
    default:
      return state;
  }
};

export default active;
