import { ACTIVE_WINDOW } from "../actions/active";

const initialState = {
  active: "start",
};

const active = (state = initialState, action) => {
  if (action.type === ACTIVE_WINDOW) {
    return {
      ...state,
      active: action.active,
    };
  } else {
    return state;
  }
};

export default active;
