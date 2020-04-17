export const ACTIVE_WINDOW = "ACTIVE_WINDOW";

export const activeWindowAction = (active) => {
  return {
    type: ACTIVE_WINDOW,
    active,
  };
};

export const actions = { activeWindowAction };
