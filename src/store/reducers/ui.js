import * as actionTypes from "../actions/ui";

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
    default:
      return state;
  }
};

export default ui;
