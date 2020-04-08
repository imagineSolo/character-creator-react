export const PASS_STATE = "PASS_STATE";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const MOVE_BACK = "MOVE_BACK";

export const passState = (active) => {
  return {
    type: PASS_STATE,
    active: active,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const moveBack = () => {
  return {
    type: MOVE_BACK,
  };
};
