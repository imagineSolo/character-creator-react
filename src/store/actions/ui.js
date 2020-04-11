export const CLOSE_MODAL = "CLOSE_MODAL";
export const MOVE_BACK = "MOVE_BACK";

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
