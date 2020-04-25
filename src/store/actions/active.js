export const ACTIVE_WINDOW = "ACTIVE_WINDOW";
export const START = "START";

export const activeWindowAction = (active) => {
  return {
    type: ACTIVE_WINDOW,
    active,
  };
};

export const start = () => {
  return {
    type: START,
  };
};

export const actions = { activeWindowAction, start };
